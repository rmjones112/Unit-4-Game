//game goal to match your score to random number at begining of game

//need random number generator btw 19-120 for score you're trying to match 

//need to create variables for gems, crystal #s randomly generated btw 1-12
//need reset function at end

//start game 
$(document).ready(function() {

    //set variables win, lose and score of game 
    var win = 0;
    var lose = 0;
    var score = 0;

// Create random numb generator
var computerGuess = parseInt(Math.floor(Math.random() * 101) + 19);
$("#randomNumber").html(computerGuess);

//converting the string into #
var gem1 = parseInt(Math.floor(Math.random() * 12) + 1);
var gem2 = parseInt(Math.floor(Math.random() * 12) + 1);
var gem3 = parseInt(Math.floor(Math.random() * 12) + 1);
var gem4 = parseInt(Math.floor(Math.random() * 12) + 1);



//make images clickable and connected to a random number
    

$("#gem1").on("click", function() {
    
            score = score + gem1;
            $("#score").html(score);
            console.log("score1 " + score);
            
   //use if/else         
            if (score == computerGuess) {
                winnerStatus();
            }else if (score > computerGuess) {
                winnerStatus();
            }
});
    
$("#gem2").on("click", function() {
    
            score = score + gem2;
            $("#score").html(score);
            console.log("score2 " + score);
           
        //use if/else   
            if (score == computerGuess) {
                winnerStatus();
            }else if (score > computerGuess) {
                winnerStatus();
            }
});
    
$("#gem3").on("click", function() {
    
            score = score + gem3;
            $("#score").html(score);
            console.log("score3 " + score);
            if (score == computerGuess) {
                winnerStatus();
            }else if (score > computerGuess) {
                winnerStatus();
            }
});

$("#gem4").on("click", function() {
    
            score = score + gem4;
            $("#score").html(score);
            console.log("score4 " + score);
            if (score == computerGuess) {
                winnerStatus();
            }else if (score > computerGuess) {
                winnerStatus();
            }
});


//make reset function

function reset () {
    
    score = 0;
    $("#score").html(score);
    computerGuess = parseInt(Math.floor(Math.random() * 101) + 19);
    $("#randomNumber").html(computerGuess);


    gem1 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem2 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem3 = parseInt(Math.floor(Math.random() * 12) + 1);
    gem4 = parseInt(Math.floor(Math.random() * 12) + 1);


}

    // create Winner or Loser results
function winnerStatus() {
    
    if(score === computerGuess) {
    
    win++;
    console.log(win);
    $("#status").html("Winner");
    $("#win").html("win: " +win);
    reset();
    alert("Al Davis said it best, just win baby win!")
} else if (score > computerGuess) {
    
    lose++;
    console.log(lose);
    $("#status").html("Loser");
    $("#lost").html("Lost: " + lose);
    reset();
    alert("Oh how unfortunate")
}
  
}
    
});