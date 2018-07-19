    
 Window.onload = function (){
   
   //Creates tracking variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letterGuessed= [];
    var userGuess = null
    
    // creates array of possible computer choices
    var computerChoices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
     
    //Loads function
    document.onload = function () {
    var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerChoices.push(computerGuess);
    }
   //Adds event listners
    document.onkeyup = function(event){
    //Records user inputs
        var userGuess  = String.fromCharCode(event.keyCode).toLowerCase();
    //Makes sure user does not input the same letter
    if (letterGuessed.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        letterGuessed [letterGuessed.length] = userGuess;
        guessesLeft--;
    }    
    //Operates the letter matching game
            if (userGuess == computerGuess){
                wins ++; 
                console.log("I did it!");
                guessesLeft = 9; 
                computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
            } 

                if (guessesLeft == 0) {
                losses ++; 
                guessesLeft = 9; 
                letterGuessed = []
                computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.lenght)];
            }
            if (userGuess != computerGuess) {
                guessesLeft --; 
                letterGuessed.length = 0;
            }
        }
    
    //Synchorizing things with index
    var html = "<p><h1>The Hangman</h></p>" + "<p><h2>Guess what letter I am thinking of!</h2></p>" + "<p><h2>Wins: " + wins + "</h2><p/>" + "<p><h2> Losses: " + losses + "</h2></p>" + "<p><h2>Guesses Left: " + guessesLeft + "</h2></p>" + "<p><h2>Your Guesses So Far" + letterGuessed + "</h2></p2>";
    document.querySelector("#game").innerHTML = html;
    }
  
