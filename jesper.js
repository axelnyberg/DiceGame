function roll()
{
  var result = 0;
  result = Math.floor((Math.random() * 6) + 1);
  return result;
}
var points = 0;
var buttoncunt = 0;
document.getElementById('humanDice').innerHTML = "<img src = 'dice7.png'>" + "<img src = 'dice7.png'>" + "<img src = 'dice7.png'>";
document.getElementById('multiDice').innerHTML = "<img src = 'dice7.png'>";
function play()
{
	
	try
	{
	var tryer = document.getElementById('guess').value;
	if(tryer=="") throw "Input your guess please";
	if(isNaN(tryer)) throw "Input a number between 3 and 18 please";
	if(tryer > 18) throw "Input a number between 3 and 18 please";
	if(tryer < 3) throw "Input a number between 3 and 18 please";
	}
	catch(err)
	{
		document.getElementById('guess').value = "";
		alert("Error: " + err);
		return;
	}
	
  buttoncunt = buttoncunt + 1;
  document.getElementById('rounds').innerHTML = ("Round " + buttoncunt +"/10");
  if(buttoncunt == 10)
  {
	  alert("Your final score was: " + points);
	  buttoncunt = 0;
	  points = 0;
	  document.getElementById('points').innerHTML = "Your points: 0";
	  document.getElementById('guess').value = "";
	  document.getElementById('humanDice').innerHTML = "<img src = 'dice7.png'>" + "<img src = 'dice7.png'>" + "<img src = 'dice7.png'>";
	  document.getElementById('multiDice').innerHTML = "<img src = 'dice7.png'>";
	  document.getElementById('rounds').innerHTML = "Round 0/10";
	  return;
  }
  // create dice array
  var humanDice = new Array();
  
  var diceTotal = 0;
  
  var multiDice = 0;
  // totals
  var humanTotal = 0;
 
 
 
  
  // output
  var out = "";
  
  // roll the dice
  for (var i = 0; i < 4; i++)
  {
  	if (i==3)
  	{
  	humanDice[3] = roll();
  	multiDice = humanDice[3]; 
	humanTotal = (humanTotal * multiDice);
	break;
 	}
    humanDice[i] = roll();
    humanTotal += humanDice[i];
    
    
  }
  
  // display human dice
  var diceTot = (humanDice[0] + humanDice[1] + humanDice[2]);
	var correcto = parseInt(document.getElementById('guess').value);
if(correcto == diceTot){
	out1 = displaymulti(multiDice);
  document.getElementById('multiDice').innerHTML = out1;
}
else
{
	out3 = hidemulti(multiDice);
  document.getElementById('multiDice').innerHTML = out3;
}
  
  out2 = displayDice(humanDice);
  document.getElementById('humanDice').innerHTML = out2;
  
 
 if(correcto == diceTot)
 {
	 points = points + humanTotal;
	 document.getElementById('points').innerHTML = "Your points: " + points;
 }  
 
}
function hidemulti(multiDice)
{
	
	
	var out3 = "";
	out3 = "<img src = 'dice7.png'/>";
	return out3;
	
	
}
function displaymulti(multiDice)
{
	
	
	var out1 = "";
	out1 = "<img src = 'dice"+ multiDice +".png'/>"
	return out1;
	
	
}
function displayDice(dice)
{
  var out2 = "";
  for (var i = 0; i < 3; i++)
  { 
  out2 += "<img src='dice" + dice[i] + ".png'/>";
  }
  return out2;
}