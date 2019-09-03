//game goal to match your score to random number at begining of game

//need random number generator btw 19-120 for score you're trying to match 

//need to create variables for gems, crystal #s randomly generated btw 1-12
//need reset function at end

//background color 
document.body.style.backgroundColor = "#ffe6ff" 

//setting values for gemstones
var gems = {
    diamond:
    {
        name: "diamond",
        value: 0
    },

    emerald:
    {
        name: "emerald",
        value: 0
    },
    pink:
    {
        name: "pink",
        value: 0
    },
    ruby:
    {
        name: "ruby",
        value:0
    }
};

//variables
var win= 0;
var lose= 0;
var yourscore = 0;
var goalscore = 0;

//random number generator 19-120 
function myFunction() {
    var x = document.getElementById("demo")
    x.innerHTML = Math.floor((Math.random() * 120) + 19);
  }

  //start game


  //need onclick for clicking on crystals

  //w/l use similar if/else from psychic game 

  //restart game