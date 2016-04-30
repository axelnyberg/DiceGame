var omgong = 0;
var fuser = null;
var euser = null;
var userpoints;




function roll(){
var resultat;
resultat = Math.floor((Math.random() * 6)+ 1);
return resultat;
}


function kastaa(e){
  

 var ok;

e = e?e:window.event;
var form = document.getElementById('kastform');

if(form.checkValidity){
  ok = form.checkValidity();
   e.preventDefault();
 }
else {

      ok = guess();
 }

 if(ok){
      

var tarningar = new Array();

for (var i=0;i<4;i++)
{ 
tarningar[i] = roll();
}   



document.getElementById('t1').style.backgroundImage = calc(tarningar[0]);
document.getElementById('t2').style.backgroundImage = calc(tarningar[1]);
document.getElementById('t3').style.backgroundImage = calc(tarningar[2]);
document.getElementById('t4').style.backgroundImage = calc(tarningar[3]);






	omgong = omgong + 1;
	document.getElementById('omgong').innerHTML = omgong;
	document.getElementById('poang').innerHTML = +document.getElementById('poang').innerHTML + +poangs(tarningar[0],tarningar[1],tarningar[2],tarningar[3]);

	 if(omgong >= 10){
    document.getElementById("kasta").disabled=true;

//userpoints = document.getElementById('poang').innerHTML;
userpoints=2000000004;
omgong = 0;
savepoints();


	}
return;
	}

}

function changediv(a, b, c, d) {

      document.getElementById(a).style.display = 'inline';
      document.getElementById(b).style.display = 'none';
       document.getElementById(c).style.display = 'none';
        document.getElementById(d).style.display = 'none';

   
   }

  function poangs(e,f,g,h){
   	var poang = 0;
   	if((e+f+g)==document.getElementById('gissa').value){
poang = (e+f+g)*h;
   		return poang;}
else{return poang;}
   	

   }

   function reset(){
document.getElementById('omgong').innerHTML = 0;
	document.getElementById('poang').innerHTML = 0;
	document.getElementById("kasta").disabled=false;

document.getElementById('t1').style.backgroundImage = 'url(dice1.png)'
document.getElementById('t2').style.backgroundImage = 'url(dice2.png)'
document.getElementById('t3').style.backgroundImage = 'url(dice3.png)'
document.getElementById('t4').style.backgroundImage = 'url(dice4.png)'

   }



   function kontroll(e){
     var ok = false;
    e = e?e:window.event;
     var form = document.getElementById('formregister');

   if(form.checkValidity){
    ok = form.checkValidity();
   e.preventDefault();
   console.log("Validet")
       
    } else {

      ok = validateForm();



 
 }

    if(ok){
      reg();
    }

else{document.getElementById('dothis').innerHTML = "Skriv in uppgifter enligt givna exempel";}
   }


   function validateForm()
{




if(fornamn() && efternamn() && emailvalidate() && CheckPassword() ){
console.log("Works")
return true;
}
else{document.getElementById('dothis').innerHTML = "Skriv in uppgifter enligt givna exempel";}
return false;
}

function emailvalidate(){
var epost = document.getElementById('epost').value;

var atpos=epost.indexOf("@");
var dotpos=epost.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=epost.length)
  {
    document.getElementById('epost').innerHTML = "fel";
  return false;
  }
else{return true;}
}

function CheckPassword()   
{   
var losenord = document.getElementById('losenord').value.length;

if(losenord >= 6){
  return true;
}
else{
document.getElementById('losenord').innerHTML = "fel";
  return false;}

}  

function fornamn(){
  var fornamn = document.getElementById('fornamn').value;
var letters = /^[a-zA-Z]+$/;   
  if(fornamn =! "" && fornamn.match(letters) ){
    return true;
  }
  else{
document.getElementById('fornamn').innerHTML = "fel";
    return false;}

}


function efternamn(){
  var efternamn = document.getElementById('efternamn').value;
  var letters = /^[a-zA-Z]+$/;  
  if(efternamn =! "" && efternamn.match(letters)){
    return true;
  }


}

function guess(){
 var giss = document.getElementById('gissa').value;
var numbers = /^[0-9]+$/;   
  if(giss =! "" && giss.match(numbers) ){
    return true;
  }
  else{

    return false;}

}

function calc(pelle){
var tn1 = 'url(dice1.png)'
var tn2 = 'url(dice2.png)'
var tn3 = 'url(dice3.png)'
var tn4 = 'url(dice4.png)'
var tn5 = 'url(dice5.png)'
var tn6 = 'url(dice6.png)'

if(pelle == 1)
  {return tn1;}

else if(pelle == 2)
  {return tn2;}
 
  else if(pelle == 3)
    {return tn3}
  
    else if(pelle == 4)
      {return tn4}
    
      else if(pelle == 5)
        {return tn5}
      
        else if(pelle == 6)
          {return tn6}

}

function login(e){

  var ok = false;
   e = e?e:window.event;
  

var form = document.getElementById('loginform');




if(form.checkValidity){
  ok = form.checkValidity();
   e.preventDefault();
 }
else {

      ok = inlogvali();
 }

 if(ok){

inloggish();


 }

}

function inlogvali(){

if(emailvalidate() && CheckPassword()){
console.log("Works")
return true;
}
else{console.log("fel inmatning");
return false;}

}


function inloggish()
{
    var emailLog= document.getElementById('mail');
    var passwordLog= document.getElementById('losen');
    var servermessage=null;
    var url="http://edunet.cust.bluerange.se/dice/user/login.aspx?email="+emailLog.value+"&pwd="+passwordLog.value;
    ajaxRequest(url, function(XHR){
      servermessage = JSON.parse(XHR.responseText);
      alert(servermessage.user.firstName + servermessage.user.lastName);
      if(servermessage.status==400)
      {
        console.log("inloggad");
        topScores();
        localStorage.setItem("session", servermessage.session);
 document.getElementById('inlogg1').style.display = 'none';
      document.getElementById('inloggad').style.display = 'inline';
      document.getElementById('inlag').innerHTML = "Signed in as " + servermessage.user.firstName + servermessage.user.lastName;
        
      }
   });
}
function ajaxRequest(url, callback) {
    var XHR = null;
    if (window.XMLHttpRequest) {
        XHR = new XMLHttpRequest();
    } else {
        XHR = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 || XHR.readyState == "complete") {
            if (XHR.status == 200) {
                callback(XHR); 
            } else {
                alert("fel på servern");
            }
            
        }
    }
    XHR.open("GET", url, true);
    XHR.send(null);
}
function reg()
{
  
  var namnCreate = document.getElementById('fornamn');
  var enamnCreate = document.getElementById('efternamn');
  var passwordCreate = document.getElementById('losenord');
  var emailCreate = document.getElementById('epost');
  
    
  var url="http://edunet.cust.bluerange.se/dice/user/create.aspx?email="+emailCreate.value+"&pwd="+passwordCreate.value+"&firstname="+namnCreate.value+"&lastname="+enamnCreate.value;
  
  ajaxRequest(url, function(XHR){
        servermessage = JSON.parse(XHR.responseText); 
        alert(servermessage.message);
  });

  
  }






  function topScores(){
  var url="http://edunet.cust.bluerange.se/dice/score/top.aspx";
  ajaxRequest(url, topScoresResponse);
}
function topScoresResponse(XHR){
  var data=JSON.parse(XHR.responseText);
  var placeHolder=document.getElementById('toplist');
  for(var i = 0; i < data.scores.length; i++){
    console.log(i+1+". "+data.scores[i].name+" "+data.scores[i].points);
    var score=document.createElement('div');
    score.className="score";
    score.innerText=i+1+". "+data.scores[i].name+" "+data.scores[i].points;
    placeHolder.appendChild(score);
  }
}

function savepoints()
{
  alert(userpoints);
var url="http://edunet.cust.bluerange.se/dice/score/add.aspx?score="+userpoints+"&session="+localStorage.getItem("session");
      ajaxRequest(url, function(XHR){
    servermessage = JSON.parse(XHR.responseText); 
    alert(servermessage.message);
});
topScores();
}






