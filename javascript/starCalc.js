function gsCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) {
    starLevel -= 10; //adjust for first 10 stars to keep in line with what Endte sends me
  var cost = 100000 * starLevel + 250000;
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
  return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul / ((scrapyardMul + 100) * 1000));
}

function magnetCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) { 
    starLevel -= 10; //adjust for first 10 stars to keep in line with what Endte sends me
  var cost = 250 * starLevel + 1000; //adjust for first 10 stars
  if (starLevel >= 2) cost *= 0.98;
  if (starLevel >= 3) cost *= 0.98;
  if (starLevel >= 4) cost *= 0.98;
  if (starLevel >= 5) cost *= 0.98;
  if (starLevel >= 6) cost *= 0.98;
  if (starLevel >= 7) cost *= 0.98;
  if (starLevel >= 8) cost *= 0.98;
  if (starLevel >= 9) cost *= 0.98;
  if (starLevel >= 10) cost *= 0.98;
  if (starLevel >= 11) cost *= 0.98;
  if (starLevel >= 12) cost *= 0.98;
  if (starLevel >= 13) cost *= 0.98;
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
  if (starLevel >= 1150) cost *= 1.1;
  if (starLevel >= 1200) cost *= 1.3;
  if (starLevel >= 1250) cost *= 1.18;
  if (starLevel >= 1275) cost *= 1.18;
  if (starLevel >= 1300) cost *= 1.34;
  if (starLevel >= 1350) cost *= 1.34;
  if (starLevel >= 1400) cost *= 1.34;
  if (starLevel >= 1450) cost *= 1.34;
  if (starLevel >= 1500) cost *= 1.3;
  if (starLevel >= 1550) cost *= 1.269;
  if (starLevel >= 1600) cost *= 1.1;
  if (starLevel >= 1650) cost *= 1.1;
  if (starLevel >= 1700) cost *= 1.3;
  if (starLevel >= 1750) cost *= 1.269;
  if (starLevel >= 1800) cost *= Math.pow(1.1, Math.floor((starLevel - 1750) / 50));
  //return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul / ((scrapyardMul + 100) * 1000));

  cost = (cost*100 / (100 + (scrapyardMul)));
  cost = cost * achievementMul;
  cost = cost * masteryBoost17Mul;
  

  var extraLevels = Math.floor((starLevel - 1750)/50);
  var increments = Math.floor(extraLevels/300);
  extraLevels -= increments * 300;
  
  var gradN = Math.pow(10, Math.floor((Math.log10(1.1) * extraLevels - 6) / 8) * 8 + 5); //move to if 0.001 when 1 <= N < 1e6; 1e5 when 1e6 <= N < 1e14; and 1e13 otherwise 
  
  
  var deviation = (Math.floor(Math.pow(1.1,extraLevels)/gradN)*gradN) / Math.pow(1.1,extraLevels);
  cost = cost * Math.pow((Math.floor(Math.pow(1.1,300)/1e8)*1e8) / Math.pow(1.1,300),increments) * deviation;

  return Math.floor(cost/1000);

}

function fragmentCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) {
    starLevel -= 10; //adjust for first 10 stars to keep in line with what Endte sends me
  var cost = 4 + starLevel; 
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
  return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul / ((scrapyardMul + 100) * 1000));
}

function scrapyardModifier()
{
    var modifier;
    var level = Math.max(window.starInputs.V2 || 0, 1);
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

function achievementModifier()
{
  var modifier;
  var amount = window.starInputs.Achievement
  modifier = Math.max(0, 1000 - Math.max(0,amount * 2));
  return modifier;
}

function masteryBoost17Modifier()
{
  var modifier;
  var amount = window.starInputs.Mastery
  modifier = Math.pow(0.99,Math.floor(amount/10));
  return modifier;
}

// Define the function and attach it globally
window.runCalculations = function() {
  //const results = [];
  var gsAmount = 0;
  var magAmount = 0;
  var fragmentAmount = 0;
  var scrapyardMul = scrapyardModifier();
  var achievementMul = achievementModifier(); // scaled by 1000, to be multiplied
  var masteryBoost17Mul = masteryBoost17Modifier(); // To be multiplied

  // Loop through 1–10 for star pairs
  for (let i = 1; i <= 10; i++) {
    const starVal = parseFloat(window.starInputs["inpStar" + i]) || 0;
    const targetVal = parseFloat(window.starInputs["targetStar" + i]) || 0;

    for (let index = starVal; index < targetVal; index++) {
          gsAmount += gsCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
          magAmount += magnetCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
          fragmentAmount += fragmentCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
      }

  }
  document.getElementById("gsCost").innerHTML = formatNumber(gsAmount);
  document.getElementById("magnetCost").innerHTML = formatNumber(magAmount);
  document.getElementById("fragmentCost").innerHTML = formatNumber(fragmentAmount);
  //console.log(results);
  //return results;
};
