var inputs = ["inpStar1","inpStar2","inpStar3","inpStar4","inpStar5","inpStar6","inpStar7","inpStar8","inpStar9","inpStar10","v2","target"];

function setAll() {
  inputs.forEach(input => {
    if (input.includes("inpStar")) {
      document.getElementById(input).value = document.getElementById("setAll").value;
    }
    
  });

    }

function calculate() {
  var isValid = true;
  inputs.every(input => {
    if (document.getElementById(input).value <= 0) {
      document.getElementById(input).select();
      document.getElementById(input).classList.add("red");
      isValid = false;
      return;
    }
    isValid = true;
    return true;
  });
  if (!isValid) { return; }

  var stars = [
      document.getElementById("inpStar1").value,
      document.getElementById("inpStar2").value,
      document.getElementById("inpStar3").value,
      document.getElementById("inpStar4").value,
      document.getElementById("inpStar5").value,
      document.getElementById("inpStar6").value,
      document.getElementById("inpStar7").value,
      document.getElementById("inpStar8").value,
      document.getElementById("inpStar9").value,
      document.getElementById("inpStar10").value,
  ];


  var desired = document.getElementById("target").value;

  var gsAmount = 0;
  var magAmount = 0;
  var fragmentAmount = 0;
  var scrapyardMul = scrapyardModifier();

  stars.forEach((star) => {
      for (let index = Number(star); index < Number(desired); index++) {
          gsAmount += gsCost(index, scrapyardMul);
          magAmount += magnetCost(index, scrapyardMul);
          fragmentAmount += fragmentCost(index, scrapyardMul);
      }
  });

  document.getElementById("gs").innerHTML = gsAmount.toLocaleString();
  document.getElementById("mag").innerHTML = magAmount.toLocaleString();
  document.getElementById("fragment").innerHTML = fragmentAmount.toLocaleString();
}

function isNumber(event) {
  if (!String.fromCharCode(event.which).match(/[0-9]/)) {
      event.preventDefault();
  }
}

function gsCost(starLevel, scrapyardMul) {
  var cost = 100000 * (starLevel - 10) + 250000; //adjust for first 10 stars
  if (starLevel >= 20) cost *= 1.3;
  if (starLevel >= 30) cost *= 1.3;
  if (starLevel >= 60) cost *= 1.3;
  if (starLevel >= 80) cost *= 1.3;
  if (starLevel >= 90) cost *= 1.3;
  if (starLevel >= 100) cost *= 1.3;
  if (starLevel >= 150) cost *= 1.1;
  if (starLevel >= 160) cost *= 1.1;
  if (starLevel >= 170) cost *= 1.1;
  if (starLevel >= 180) cost *= 1.1;
  if (starLevel >= 190) cost *= 1.1;
  if (starLevel >= 200) cost *= 1.1;
  if (starLevel >= 210) cost *= 1.1;
  if (starLevel >= 220) cost *= 1.1;
  if (starLevel >= 230) cost *= 1.1;
  if (starLevel >= 250) cost *= 1.1;
  if (starLevel >= 300) cost *= 1.1;
  if (starLevel >= 350) cost *= 1.1;
  if (starLevel >= 400) cost *= 1.1;
  if (starLevel >= 450) cost *= 1.1;
  if (starLevel >= 500) cost *= 1.1;
  if (starLevel >= 550) cost *= 1.1;
  return Math.floor((cost * 100) / (scrapyardMul + 100));
}

function scrapyardModifier()
  {
    var modifier;
    var level = document.getElementById("v2").value;
    if (level > 200)
    {
        modifier = (level - 200) * 4 + 300;
    }
    else
    {
        modifier = level;
        if (level > 100)
            modifier = (level - 100) * 2 + 100;
    }
    return modifier - 1;
}

function magnetCost(starLevel, scrapyardMul) {
  var cost = 250 * (starLevel - 10) + 1000; //adjust for first 10 stars
  if (starLevel >= 12) cost *= 0.98;
  if (starLevel >= 13) cost *= 0.98;
  if (starLevel >= 14) cost *= 0.98;
  if (starLevel >= 15) cost *= 0.98;
  if (starLevel >= 16) cost *= 0.98;
  if (starLevel >= 17) cost *= 0.98;
  if (starLevel >= 18) cost *= 0.98;
  if (starLevel >= 19) cost *= 0.98;
  if (starLevel >= 20) cost *= 0.98;
  if (starLevel >= 21) cost *= 0.98;
  if (starLevel >= 22) cost *= 0.98;
  if (starLevel >= 23) cost *= 0.99;
  if (starLevel >= 70) cost *= 1.04;
  if (starLevel >= 75) cost *= 1.04;
  if (starLevel >= 80) cost *= 1.06;
  if (starLevel >= 85) cost *= 1.06;
  if (starLevel >= 90) cost *= 1.06;
  if (starLevel >= 94) cost *= 1.06;
  if (starLevel >= 96) cost *= 1.06;
  if (starLevel >= 98) cost *= 1.05;
  if (starLevel >= 100) cost *= 1.05;
  if (starLevel >= 105) cost *= 1.05;
  if (starLevel >= 110) cost *= 1.05;
  if (starLevel >= 115) cost *= 1.03;
  if (starLevel >= 120) cost *= 1.05;
  if (starLevel >= 125) cost *= 1.05;
  if (starLevel >= 130) cost *= 1.05;
  if (starLevel >= 135) cost *= 1.05;
  if (starLevel >= 140) cost *= 1.05;
  if (starLevel >= 145) cost *= 1.05;
  if (starLevel >= 150) cost *= 1.05;
  if (starLevel >= 160) cost *= 1.05;
  if (starLevel >= 180) cost *= 1.05;
  if (starLevel >= 190) cost *= 1.05;
  if (starLevel >= 200) cost *= 1.05;
  if (starLevel >= 210) cost *= 1.05;
  if (starLevel >= 220) cost *= 1.05;
  if (starLevel >= 230) cost *= 1.035;
  if (starLevel >= 250) cost *= 1.1;
  if (starLevel >= 270) cost *= 1.14;
  if (starLevel >= 290) cost *= 1.15;
  if (starLevel >= 300) cost *= 1.04;
  if (starLevel >= 310) cost *= 1.1;
  if (starLevel >= 330) cost *= 1.1;
  if (starLevel >= 350) cost *= 1.05;
  if (starLevel >= 370) cost *= 1.1;
  if (starLevel >= 390) cost *= 1.018;
  if (starLevel >= 410) cost *= 1.1;
  if (starLevel >= 430) cost *= 1.1;
  if (starLevel >= 450) cost *= 1.06;
  if (starLevel >= 470) cost *= 1.1;
  if (starLevel >= 490) cost *= 1.05;
  if (starLevel >= 510) cost *= 1.09;
  if (starLevel >= 530) cost *= 1.09;
  if (starLevel >= 550) cost *= 1.09;
  if (starLevel >= 570) cost *= 1.09;
  if (starLevel >= 590) cost *= 1.07;
  if (starLevel >= 610) cost *= 1.1;
  if (starLevel >= 630) cost *= 1.1;
  if (starLevel >= 650) cost *= 1.1;
  if (starLevel >= 670) cost *= 1.07;
  if (starLevel >= 690) cost *= 1.05;
  if (starLevel >= 710) cost *= 1.1;
  if (starLevel >= 810) cost *= 1.1;
  if (starLevel >= 910) cost *= 1.1;
  if (starLevel >= 1010) cost *= 1.1;
  if (starLevel >= 1020) cost *= 1.1;
  if (starLevel >= 1090) cost *= 1.1;
  if (starLevel >= 1110) cost *= 1.3;
  if (starLevel >= 1120) cost *= 1.1;
  if (starLevel >= 1130) cost *= 1.1;
  if (starLevel >= 1210) cost *= 1.3;
  if (starLevel >= 1260) cost *= 1.18;
  if (starLevel >= 1285) cost *= 1.18;
  if (starLevel >= 1310) cost *= 1.4;
  if (starLevel >= 1360) cost *= 1.4;
  if (starLevel >= 1410) cost *= 1.45;
  if (starLevel >= 1460) cost *= 1.4;
  if (starLevel >= 1510) cost *= 1.3;
  if (starLevel >= 1560) cost *= 1.269;
  if (starLevel >= 1610) cost *= 1.1;
  if (starLevel >= 1660) cost *= 1.1;
  if (starLevel >= 1710) cost *= 1.3;
  if (starLevel >= 1760) cost *= 1.269;
  if (starLevel >= 1810) cost *= 1.1;
  if (starLevel >= 1860) cost *= Math.pow(1.1, Math.floor((starLevel - 1810) / 50));
  return Math.floor(cost * 100 / (scrapyardMul + 100));
}

function fragmentCost(starLevel, scrapyardMul) {
  var cost = 4 + (starLevel - 10); //adjust for first 10 stars
  if (starLevel >= 60) cost *= 1.05;
  if (starLevel >= 70) cost *= 1.05;
  if (starLevel >= 75) cost *= 1.05;
  if (starLevel >= 80) cost *= 1.05;
  if (starLevel >= 85) cost *= 1.05;
  if (starLevel >= 90) cost *= 1.05;
  if (starLevel >= 94) cost *= 1.05;
  if (starLevel >= 96) cost *= 1.05;
  if (starLevel >= 98) cost *= 1.05;
  if (starLevel >= 100) cost *= 1.1;
  if (starLevel >= 110) cost *= 1.05;
  if (starLevel >= 115) cost *= 1.05;
  if (starLevel >= 120) cost *= 1.05;
  if (starLevel >= 125) cost *= 1.05;
  if (starLevel >= 130) cost *= 1.05;
  if (starLevel >= 140) cost *= 1.05;
  if (starLevel >= 150) cost *= 1.05;
  if (starLevel >= 160) cost *= 1.05;
  if (starLevel >= 170) cost *= 1.05;
  if (starLevel >= 180) cost *= 1.05;
  if (starLevel >= 190) cost *= 1.05;
  if (starLevel >= 200) cost *= 1.05;
  if (starLevel >= 210) cost *= 1.3;
  if (starLevel >= 260) cost *= 1.3;
  if (starLevel >= 310) cost *= 1.4;
  if (starLevel >= 410) cost *= 1.4;
  if (starLevel >= 510) cost *= 1.4;
  if (starLevel >= 610) cost *= 1.2;
  if (starLevel >= 710) cost *= 1.1;
  if (starLevel >= 810) cost *= 1.1;
  if (starLevel >= 910) cost *= 1.1;
  if (starLevel >= 1010) cost *= 1.1;
  return Math.floor((cost * 100) / (scrapyardMul + 100));
}
