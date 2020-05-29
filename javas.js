/*eslint-env browser*/
var playing = false;
var score;
var action;
var timeremaining;
var symb;
var x;
var y;
var correctans;
var i;
document.getElementById("startreset").onclick = function() {
     //if we are palying
    
     if(playing == true){
             location.reload();
             
         }
    //if not playing
    else{
        //set score to 0
        hide("gameover");
       score = 0;
        //change mode to playing
       playing = true; document.getElementById("scorevalue").innerHTML= score;
        show("timer");
       timeremaining = 60; 
       document.getElementById("timeremain").innerHTML = timeremaining ; 
       
        document.getElementById("startreset").innerHTML = "Reset Game" ;
        //start countdown
        startCountdown();
         
        generateQnA();    
    }
    
 }
function show(Id){
    document.getElementById(Id).style.display = "block";   
}


function startCountdown()
{
   action = setInterval(function(){
    timeremaining = timeremaining - 1;
        document.getElementById("timeremain").innerHTML = timeremaining ;
   if(timeremaining == 0)
       {
           stopcountdown();
           document.getElementById("gameover").innerHTML = "<p>Game Over !</p><p>Your score is " + score +"</p>";
           show("gameover");
           hide("timer");
           hide("right");
           hide("wrong");
           playing = false;
           document.getElementById("startreset").innerHTML="Start Game";
       }
      
   
   
   },1000);
    
}
function generateQnA()
{
    symb = 1+Math.round(3*Math.random());
    x = 1+ Math.round(9*Math.random());
    y= 1+ Math.round(9*Math.random());
    if(symb == 1)
        {   document.getElementById("question").innerHTML = x + "x" + y;
            correctans = x*y;
           generatemul(correctans); 
        }
    if(symb == 2)
        {   document.getElementById("question").innerHTML = x + "+" + y;
            correctans = x+y;
            generateadd(correctans);
        }
    if(symb == 3)
        {   document.getElementById("question").innerHTML = x + "-" + y;
            correctans = x-y;
            generatesub(correctans);
        }
    if(symb == 4)
        {
            document.getElementById("question").innerHTML = x + "%" + y;
            correctans = (x%y);
            generatediv(correctans);
        }
}

function generatemul(correctans)
{
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctans;
    
    var answers = [correctans];
     for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
function generateadd(correctans)
{
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctans;
    var answers = [correctans];
     for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
function generatesub(correctans)
{
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctans;
    var answers = [correctans];
     for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
function generatediv(correctans)
{
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctans;
    var answers = [correctans];
     for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctans){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("right");
            setTimeout(function(){
                hide("right");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQnA();
        }else{
        //wrong answer
            hide("right");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}


function stopcountdown()
{
    clearInterval(action);
}
function hide(Id)
{
    document.getElementById(Id).style.display = "none";
}