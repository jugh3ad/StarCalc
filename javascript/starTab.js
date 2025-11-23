let holdTimer;
let currentDelay;
let deltaValue;
let activeInput;
// Global object to hold inputs
window.starInputs = {};


function startChange(button, delta) {
  // find the input next to the button
  activeInput = button.parentElement.querySelector("input");
  deltaValue = delta;
  currentDelay = 400; // initial delay

  // Apply immediately
  changeValue();

  // Begin loop
  holdTimer = setTimeout(repeatChange, currentDelay);
}

function repeatChange() {
  changeValue();

  // Accelerate: reduce delay each cycle
  currentDelay = Math.max(50, currentDelay * 0.85);

  holdTimer = setTimeout(repeatChange, currentDelay);
}

function stopChange() {
  clearTimeout(holdTimer);
}

function changeValue() {
  let value = parseInt(activeInput.value) || 0;
  value += deltaValue;

  // enforce min if present
  if (activeInput.hasAttribute("min")) {
    const min = parseInt(activeInput.getAttribute("min"));
    if (value < min) value = min;
  }

  // enforce max if present
  if (activeInput.hasAttribute("max")) {
    const max = parseInt(activeInput.getAttribute("max"));
    if (value > max) value = max;
  }

  activeInput.value = value;

  // fire the change event so listeners run
  activeInput.dispatchEvent(new Event("change", { bubbles: true }));
}

// === Helper function to sync all star inputs from currentInput ===
function setAllStars() {
  const currentInput = document.getElementById("currentInput");
  const newValue = currentInput.value;

  const starInputs = document.querySelectorAll("input[id^='inpStar']");
  starInputs.forEach(inp => {
    inp.value = newValue;
    inp.dispatchEvent(new Event("change", { bubbles: true }));
  });
}

// === Helper function to sync all targetStar inputs from targetInput ===
function setAllTargets() {
  const targetInput = document.getElementById("targetInput");
  const newValue = targetInput.value;

  const targetStars = document.querySelectorAll("input[id^='targetStar']");
  targetStars.forEach(inp => {
    inp.value = newValue;
    inp.dispatchEvent(new Event("change", { bubbles: true }));
  });
}


// === Attach listeners ===
document.addEventListener("DOMContentLoaded", () => {
  const currentInput = document.getElementById("currentInput");
  const targetInput = document.getElementById("targetInput");

  if (currentInput) {
    currentInput.addEventListener("change", setAllStars);
  }
  if (targetInput) {
    targetInput.addEventListener("change", setAllTargets);
  }
});


// Function to rebuild the object
function refreshInputs() {
  window.starInputs = {}; // reset
  document.querySelectorAll("input[type='number']").forEach(inp => {
    starInputs[inp.id] = inp.value;
  });
  //console.log("Updated inputMap:", window.starInputs);
}

// Attach listeners to all inputs
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[type='number']");

  inputs.forEach(inp => {
    // Listen for both typing and programmatic changes (via dispatchEvent)
    inp.addEventListener("change", refreshInputs);
    inp.addEventListener("input", refreshInputs);
    inp.addEventListener("change", runCalculations);
    inp.addEventListener("input", runCalculations);
  });

  // Build initial map
  refreshInputs();
  runCalculations();
});

document.addEventListener("DOMContentLoaded", () => {
  // Find all star inputs
  const starInputs = document.querySelectorAll("input[id^='inpStar']");
  const targetInputs = document.querySelectorAll("input[id^='targetStar']");

  // Build a map of starId -> targetId
  // Assumes IDs are like "inpStar5" and "targetStar5"
  const starMap = {};
  starInputs.forEach(star => {
    const num = star.id.replace("inpStar", "");
    const target = document.getElementById("targetStar" + num);
    if (target) {
      starMap[star.id] = target;
    }
  });

  // Function to sync one pair
  function syncPair(star, target) {
    target.min = star.value;
    if (parseInt(target.value) < parseInt(target.min)) {
      target.value = target.min;
      target.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  // Attach listeners to each star input
  Object.entries(starMap).forEach(([starId, target]) => {
    const star = document.getElementById(starId);

    // Initial sync
    syncPair(star, target);

    // Update whenever star changes
    star.addEventListener("change", () => syncPair(star, target));
    star.addEventListener("input", () => syncPair(star, target));
  });
});


