function calculate() {
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
    document.getElementById("inpStar10").value
]
var desired = document.getElementById("target").value;

    /*
    var star1 = document.getElementById("inpStar1").value;
    var star2 = document.getElementById("inpStar2").value;
    var star3 = document.getElementById("inpStar3").value;
    var star4 = document.getElementById("inpStar4").value;
    var star5 = document.getElementById("inpStar5").value;
    var star6 = document.getElementById("inpStar6").value;
    var star7 = document.getElementById("inpStar7").value;
    var star8 = document.getElementById("inpStar8").value;
    var star9 = document.getElementById("inpStar9").value;
    var star10 = document.getElementById("inpStar10").value;
    var v2Level = document.getElementById("v2").value;
*/
var gsAmount = 0;
var magAmount = 0;
var fragmentAmount = 0;

stars.forEach(star => {
    for (let index = star; index < desired; index++) {
        gsAmount += w(index);
        magAmount += x(index);
        fragmentAmount += y(index);
    
    }
});


    

    document.getElementById("gs").innerHTML = gsAmount.toLocaleString(undefined,{ maximumFractionDigits: 0 });
    document.getElementById("mag").innerHTML = magAmount.toLocaleString(undefined,{ maximumFractionDigits: 0 });
    document.getElementById("fragment").innerHTML = fragmentAmount.toLocaleString(undefined,{ maximumFractionDigits: 0 });
}



function isNumber(event) {
if (!String.fromCharCode(event.which).match(/[0-9]/)) {
            event.preventDefault();
        }
}

function w(starLevel) {
    starLevel-=10;
    var cost = (100000 * starLevel + 250000);
    if (starLevel >= 10) cost *= 1.3;
    if (starLevel >= 20) cost *= 1.3; 
    if (starLevel >= 50) cost *= 1.3; 
    if (starLevel >= 70) cost *= 1.3; 
    if (starLevel >= 80) cost *= 1.3; 
    if (starLevel >= 90) cost *= 1.3; 
    if (starLevel >= 140) cost *= 1.1; 
    if (starLevel >= 150) cost *= 1.1; 
    if (starLevel >= 160) cost *= 1.1; 
    if (starLevel >= 170) cost *= 1.1; 
    if (starLevel >= 180) cost *= 1.1; 
    if (starLevel >= 190) cost *= 1.1; 
    if (starLevel >= 200) cost *= 1.1; 
    if (starLevel >= 210) cost *= 1.1; 
    if (starLevel >= 220) cost *= 1.1; 
    if (starLevel >= 240) cost *= 1.1; 
    if (starLevel >= 290) cost *= 1.1; 
    if (starLevel >= 340) cost *= 1.1; 
    if (starLevel >= 390) cost *= 1.1; 
    if (starLevel >= 440) cost *= 1.1; 
    if (starLevel >= 490) cost *= 1.1; 
    if (starLevel >= 540) cost *= 1.1; 
    return (cost * 100.0 / ((E() - 1) + 100.0));
  }
  
  //E() = scrapyard level
  function E() {
      var l2;
      var l1 = document.getElementById("v2").value;
      if (l1 > 200) {
        l2 = (l1 - 200) * 4 + 300;
      } else {
        l2 = l1;
        if (l1 > 100)
          l2 = (l1 - 100) * 2 + 100; 
      } 
      return l2;
    }

    function x(starLevel) {
    starLevel -= 10;
    var cost = 250 * starLevel + 1000;
    if (starLevel >= 2) cost *= 0.98;
    if (starLevel >= 3) cost *= 0.98; 
    if (starLevel >= 4) cost *= 0.98; 
    if (starLevel >= 5) cost *= 0.98; 
    if (starLevel >= 6) cost *= 0.98; 
    if (starLevel >= 7) cost *=  0.98; 
    if (starLevel >= 8) cost *= 0.98; 
    if (starLevel >= 9) cost *= 0.98; 
    if (starLevel >= 10) cost *= 0.98; 
    if (starLevel >= 11) cost *= 0.98; 
    if (starLevel >= 12) cost *= 0.98; 
    if (starLevel >= 13) cost *= 0.99; 
    if (starLevel >= 60) cost *= 1.04; 
    if (starLevel >= 65) cost *= 1.04; 
    if (starLevel >= 70) cost *= 1.06; 
    if (starLevel >= 75) cost *= 1.06; 
    if (starLevel >= 80) cost *= 1.06; 
    if (starLevel >= 84) cost *= 1.06; 
    if (starLevel >= 86) cost *= 1.06; 
    if (starLevel >= 88) cost *= 1.05; 
    if (starLevel >= 90) cost *= 1.05; 
    if (starLevel >= 95) cost *= 1.05; 
    if (starLevel >= 100) cost *= 1.05; 
    if (starLevel >= 105) cost *= 1.03; 
    if (starLevel >= 110) cost *= 1.05; 
    if (starLevel >= 115) cost *= 1.05; 
    if (starLevel >= 120) cost *= 1.05; 
    if (starLevel >= 125) cost *= 1.05; 
    if (starLevel >= 130) cost *= 1.05; 
    if (starLevel >= 135) cost *= 1.05; 
    if (starLevel >= 140) cost *= 1.05; 
    if (starLevel >= 150) cost *= 1.05; 
    if (starLevel >= 170) cost *= 1.05; 
    if (starLevel >= 180) cost *= 1.05; 
    if (starLevel >= 190) cost *= 1.05; 
    if (starLevel >= 200) cost *= 1.05; 
    if (starLevel >= 210) cost *= 1.05; 
    if (starLevel >= 220) cost *= 1.035; 
    if (starLevel >= 240) cost *= 1.1; 
    if (starLevel >= 260) cost *= 1.14; 
    if (starLevel >= 280) cost *= 1.15; 
    if (starLevel >= 290) cost *= 1.04; 
    if (starLevel >= 300) cost *= 1.1; 
    if (starLevel >= 320) cost *= 1.1; 
    if (starLevel >= 340) cost *= 1.05; 
    if (starLevel >= 360) cost *= 1.1; 
    if (starLevel >= 380) cost *= 1.018; 
    if (starLevel >= 400) cost *= 1.1; 
    if (starLevel >= 420) cost *= 1.1; 
    if (starLevel >= 440) cost *= 1.06; 
    if (starLevel >= 460) cost *= 1.1; 
    if (starLevel >= 480) cost *= 1.05; 
    if (starLevel >= 500) cost *= 1.09; 
    if (starLevel >= 520) cost *= 1.09; 
    if (starLevel >= 540) cost *= 1.09; 
    if (starLevel >= 560) cost *= 1.09; 
    if (starLevel >= 580) cost *= 1.07; 
    if (starLevel >= 600) cost *= 1.1; 
    if (starLevel >= 620) cost *= 1.1; 
    if (starLevel >= 640) cost *= 1.1; 
    if (starLevel >= 660) cost *= 1.07; 
    if (starLevel >= 680) cost *= 1.05; 
    if (starLevel >= 700) cost *= 1.1; 
    if (starLevel >= 800) cost *= 1.1; 
    if (starLevel >= 900) cost *= 1.1; 
    if (starLevel >= 1000) cost *= 1.1; 
    if (starLevel >= 1010) cost *= 1.1; 
    if (starLevel >= 1080) cost *= 1.1; 
    if (starLevel >= 1100) cost *= 1.3; 
    if (starLevel >= 1110) cost *= 1.1; 
    if (starLevel >= 1120) cost *= 1.1; 
    if (starLevel >= 1200) cost *= 1.3; 
    if (starLevel >= 1250) cost *= 1.18; 
    if (starLevel >= 1275) cost *= 1.18; 
    if (starLevel >= 1300) cost *= 1.4; 
    if (starLevel >= 1350) cost *= 1.4; 
    if (starLevel >= 1400) cost *= 1.45; 
    if (starLevel >= 1450) cost *= 1.4; 
    if (starLevel >= 1500) cost *= 1.3; 
    if (starLevel >= 1550) cost *= 1.269; 
    if (starLevel >= 1600) cost *= 1.1; 
    if (starLevel >= 1650) cost *= 1.1; 
    if (starLevel >= 1700) cost *= 1.3; 
    if (starLevel >= 1750) cost *= 1.269; 
    if (starLevel >= 1800) cost *= 1.1; 
    if (starLevel >= 1800) cost *= Math.pow(1.1, ((starLevel - 1800) / 50)); 
    return (cost * 100 / ((E() - 1) + 100));
  }
  
function y(starLevel) {
    starLevel -= 10;
    var cost = (4 + starLevel);
    if (starLevel >= 50) cost *= 1.05;
    if (starLevel >= 60) cost *= 1.05; 
    if (starLevel >= 65) cost *= 1.05; 
    if (starLevel >= 70) cost *= 1.05; 
    if (starLevel >= 75) cost *= 1.05; 
    if (starLevel >= 80) cost *= 1.05; 
    if (starLevel >= 84) cost *= 1.05; 
    if (starLevel >= 86) cost *= 1.05; 
    if (starLevel >= 88) cost *= 1.05; 
    if (starLevel >= 90) cost *= 1.1; 
    if (starLevel >= 100) cost *= 1.05; 
    if (starLevel >= 105) cost *= 1.05; 
    if (starLevel >= 110) cost *= 1.05; 
    if (starLevel >= 115) cost *= 1.05; 
    if (starLevel >= 120) cost *= 1.05; 
    if (starLevel >= 130) cost *= 1.05; 
    if (starLevel >= 140) cost *= 1.05; 
    if (starLevel >= 150) cost *= 1.05; 
    if (starLevel >= 160) cost *= 1.05; 
    if (starLevel >= 170) cost *= 1.05; 
    if (starLevel >= 180) cost *= 1.05; 
    if (starLevel >= 190) cost *= 1.05; 
    if (starLevel >= 200) cost *= 1.3; 
    if (starLevel >= 250) cost *= 1.3; 
    if (starLevel >= 300) cost *= 1.4; 
    if (starLevel >= 400) cost *= 1.4; 
    if (starLevel >= 500) cost *= 1.4; 
    if (starLevel >= 600) cost *= 1.2; 
    if (starLevel >= 700) cost *= 1.1; 
    if (starLevel >= 800) cost *= 1.1; 
    if (starLevel >= 900) cost *= 1.1; 
    if (starLevel >= 1000) cost *= 1.1; 
    return (cost * 100.0 / ((E() - 1) + 100.0));
  }
