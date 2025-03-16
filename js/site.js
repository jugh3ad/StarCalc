var inputs = ["setAll","v2","achievement","masteryBoost17","target"];
var inpStars = ["inpStar1","inpStar2","inpStar3","inpStar4","inpStar5","inpStar6","inpStar7","inpStar8","inpStar9","inpStar10"]
var inpCheckbox = ["rememberMe","useMagic"]
var language = window.navigator.userLanguage || window.navigator.language;

var languages = { //TODO translate Achievement25, MasteryBoost17, Magic label
  "en": {
    "Title": "Star Calc",
    "SetAll": "Set all to: ",
    "Settings": "Remember levels: ",
    "v2Level": "Scrapyard V2: ",
    "Achievement25": "Achievement Boost 2 Level:",
    "MasteryBoost17": "Mastery 17+ Barrels:",
    "Target": "Target Stars: ",
    "Magic": "Use Black Magic (Experimental): "
  },
  "es": {
    "Title": "Cálculo de Estrellas",
    "SetAll": "Establecer todo en: ",
    "Settings": "Recuerda niveles: ",
    "v2Level": "Vertedero V2: ",
    "Achievement25": "Achievement Boost 2 Level:",
    "MasteryBoost17": "Mastery 17+ Barrels:",
    "Target": "Objetivo Estrellas: ",
    "Magic": "Use Black Magic (Experimental): "
  },
  "ru": {
    "Title": "Звездный Кальк",
    "SetAll": "Установить все звезды: ",
    "Settings": "Запомнить уровни: ",
    "v2Level": "Двор мусора v2: ",
    "Achievement25": "Achievement Boost 2 Level:",
    "MasteryBoost17": "Mastery 17+ Barrels:",
    "Target": "Целевые звезды: ",
    "Magic": "Use Black Magic (Experimental): "
  },
  "de": {
    "Title": "Sterne Kalkulator",
    "Settings": "Merken Sie sich die Level: ",
    "SetAll": "Setze alle Sterne: ",
    "v2Level": "Schrottplatz V2: ",
    "Achievement25": "Achievement Boost 2 Level:",
    "MasteryBoost17": "Mastery 17+ Barrels:",
    "Target": "Zielsterne: ",
    "Magic": "Use Black Magic (Experimental): "
  },
  "fr": {
    "Title": "Étoile Calculette",
    "Settings": "Mémoriser les niveaux: ",
    "SetAll": "Définir toutes les étoiles: ",
    "v2Level": "Parc à casse V2: ",
    "Achievement25": "Achievement Boost 2 Level:",
    "MasteryBoost17": "Mastery 17+ Barrels:",
    "Target": "Cible Étoile: ",
    "Magic": "Use Black Magic (Experimental): "
  }
}


language = language.substring(0,2);
document.getElementById("lblTitle").innerHTML = languages[language]["Title"];
document.getElementById("lblSetAll").innerHTML = languages[language]["SetAll"];
document.getElementById("lblSettings").innerHTML = languages[language]["Settings"];
document.getElementById("lblv2Level").innerHTML = languages[language]["v2Level"];
document.getElementById("lblAchievement25").innerHTML = languages[language]["Achievement25"];
document.getElementById("lblMasteryBoost17").innerHTML = languages[language]["MasteryBoost17"];
document.getElementById("lblTarget").innerHTML = languages[language]["Target"];
document.getElementById("lblMagic").innerHTML = languages[language]["Magic"];

window.onload = checkLocalStorage();

function onRememberMeChange(){
	if (document.getElementById("rememberMe").checked) 
	{
		setLocalStorage()
	}
	else
	{
		localStorage.clear();
	}
}

function setLocalStorage() {
	inputs.forEach(input => {
		localStorage.setItem(input,document.getElementById(input).value);
	});
	inpStars.forEach(input => {
		localStorage.setItem(input,document.getElementById(input).value);
	});
  inpCheckbox.forEach(input => {
    localStorage.setItem(input,document.getElementById(input).checked)
  })
  localStorage.setItem("inputNotation", document.getElementById("inputNotation").value)
}

function checkLocalStorage(){
	var cond = JSON.parse(localStorage.getItem("rememberMe"));
	if (!cond){
		localStorage.clear()
		calculate();
		return;
	}
  inpCheckbox.forEach(input => {
		document.getElementById(input).checked = JSON.parse(localStorage.getItem(input));
	});
	document.getElementById("rememberMe").checked = JSON.parse(localStorage.getItem("rememberMe"));
	inpStars.forEach(input => {
		if (Number(localStorage.getItem(input))) 
		{
		  document.getElementById(input).value = localStorage.getItem(input);
		}
	});
	inputs.forEach(input => {
		if (Number(localStorage.getItem(input))) 
		{
		  document.getElementById(input).value = localStorage.getItem(input);
		}
	});
  document.getElementById("inputNotation").value = localStorage.getItem("inputNotation");
	calculate();
}

function setAll() {
  inpStars.forEach(input => {
    if (input.includes("inpStar")) {
      document.getElementById(input).value = document.getElementById("setAll").value;
    }
	  if (document.getElementById("target").value <= document.getElementById("setAll").value){
		  
    document.getElementById("target").value = +document.getElementById("setAll").value + 1;
  }
  });
}
	
function calculate() {
  var isValid = true;
  inpStars.every(input => {
    if (document.getElementById(input).value <= 0) { // TODO can be raised to < 10
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
  var achievementMul = achievementModifier(); // scaled by 1000, to be multiplied
  var masteryBoost17Mul = masteryBoost17Modifier(); // To be multiplied

  stars.forEach((star) => {
      for (let index = Number(star); index < Number(desired); index++) {
          gsAmount += gsCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
          magAmount += magnetCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
          fragmentAmount += fragmentCost(index, scrapyardMul, achievementMul, masteryBoost17Mul);
      }
  });

  document.getElementById("gs").innerHTML = convertNumberToNotation(gsAmount);
  document.getElementById("mag").innerHTML = convertNumberToNotation(magAmount);
  document.getElementById("fragment").innerHTML = convertNumberToNotation(fragmentAmount);
  
  if ( document.getElementById("rememberMe").checked ) setLocalStorage();
  
}

function convertNumberToNotation(number) {
  if((Math.abs(number)<1e9) || (Math.abs(number)==1/0)) return number.toLocaleString(language);
  var exponent = Math.floor(Math.log10(number));
  var mantissa = (Math.floor(1e8 * (number / Math.pow(10,exponent)))/1e8);
  switch(document.getElementById("inputNotation").value){
    case "Original":
      return number.toLocaleString(language);
    case "Normal":
      mantissa *= Math.pow(10, exponent%3);
      var index = Math.floor(exponent/3)-1;
      var index1 = Math.floor(index%10)
      var index10 = Math.floor(index%100/10)
      var index100 = Math.floor(index%1000/100)
      var normal1 = ["", "U", "D", "T", "Q", "q", "S", "s", "O", "N"]
      var normal10 = ["", "D", "V", "Tr", "QU", "qu", "Se", "Sp", "Oc", "No"]
      var normal100 = ["", "C", "Overflow"]
      var normalConcat = ""
      switch(index%100){
        case 0:
          normalConcat = "".concat(normal100[index100], "t");
          break;
        case 1:
          normalConcat = "".concat(normal100[index100], "M")
          break;
        case 2:
          normalConcat = "".concat(normal100[index100], "B")
          break;
        default:
          normalConcat = "".concat(normal100[index100], normal1[index1], normal10[index10])
      }
      return "".concat(mantissa.toPrecision(9)," ",normalConcat)
    case "Abstract":
      mantissa *= Math.pow(10, exponent%3);
      var index = Math.floor(exponent/3)-1;
      return "".concat(mantissa.toPrecision(9)," ",convertIndexToAbstract(index))
    case "Scientific":
      return "".concat(mantissa.toPrecision(9),"e",exponent)
  }
}

function convertIndexToAbstract(index){
  if(index<=0) return ""
  var remainder = (Math.floor(index)-1)%26+1;
  return "".concat(convertIndexToAbstract((index-remainder)/26),String.fromCharCode(96+remainder))
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

function achievementModifier()
{
  var modifier;
  var amount = document.getElementById("achievement").value;
  modifier = Math.max(0, 1000 - Math.max(0,amount * 2));
  return modifier;
}

function masteryBoost17Modifier()
{
  var modifier;
  var amount = document.getElementById("masteryBoost17").value;
  modifier = Math.pow(0.99,Math.floor(amount/10));
  return modifier;
}

function magic(starLevel){ // I like it when *(long)2147483648 becomes *(long)2100000000 due to [REDACTED] - IcyZeroTwo
  if(starLevel < 1760) return 1;
  if(!document.getElementById("useMagic").checked) return 1;

  const BULK_SIZE = 300;
  const BULK_PRECISION = 1e8;
  const BULK_DEVIATION = (Math.floor(Math.pow(1.1,BULK_SIZE)/BULK_PRECISION)*BULK_PRECISION) / Math.pow(1.1,BULK_SIZE);

  var jumpCount = Math.floor((starLevel - 1760)/50);
  var bulkCount = Math.floor(jumpCount/BULK_SIZE);
  jumpCount -= bulkCount * BULK_SIZE;
  var precision = Math.pow(10, Math.floor((Math.log10(1.1) * jumpCount - 6) / 8) * 8 + 5);
  var jumpDeviation = (Math.floor(Math.pow(1.1,jumpCount)/precision)*precision) / Math.pow(1.1,jumpCount);
  return Math.pow(BULK_DEVIATION,bulkCount) * jumpDeviation;
}

function gsCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) {
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
  return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul / ((scrapyardMul + 100) * 1000));
}

function magnetCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) { // formula from v11.6
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
  if (starLevel >= 23) cost *= 0.98;
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
  if (starLevel >= 1160) cost *= 1.1;
  if (starLevel >= 1210) cost *= 1.3;
  if (starLevel >= 1260) cost *= 1.18;
  if (starLevel >= 1285) cost *= 1.18;
  if (starLevel >= 1310) cost *= 1.34;
  if (starLevel >= 1360) cost *= 1.34;
  if (starLevel >= 1410) cost *= 1.34;
  if (starLevel >= 1460) cost *= 1.34;
  if (starLevel >= 1510) cost *= 1.3;
  if (starLevel >= 1560) cost *= 1.269;
  if (starLevel >= 1610) cost *= 1.1;
  if (starLevel >= 1660) cost *= 1.1;
  if (starLevel >= 1710) cost *= 1.3;
  if (starLevel >= 1760) cost *= 1.269;
  if (starLevel >= 1810) cost *= Math.pow(1.1, Math.floor((starLevel - 1760) / 50));
  return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul * magic(starLevel) / ((scrapyardMul + 100) * 1000));
}

function fragmentCost(starLevel, scrapyardMul, achievementMul, masteryBoost17Mul) {
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
  return Math.floor((cost * 100) * achievementMul * masteryBoost17Mul / ((scrapyardMul + 100) * 1000));
}