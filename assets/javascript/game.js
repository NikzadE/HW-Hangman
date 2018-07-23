    

   var computerChoices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   //Creates tracking variables
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letterGuessed= [];
    var userGuess = null
    
    // creates array of possible computer choices
    
      
     
    //Loads function

    var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    
   //Adds event listners
    document.onkeyup = function(event){
    //Records user inputs
        userGuess  = String.fromCharCode(event.keyCode).toLowerCase(", ");
    //Makes sure user does not input the same letter
    if (letterGuessed.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
        letterGuessed [letterGuessed.length] = userGuess;
        guessesLeft--;
    }    
    //Operates the letter matching game
            if (userGuess == computerGuess){
                wins ++; 
                alert ("You did it");
                guessesLeft = 0; 
                letterGuessed =[]
                
                computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
            } 
                if (guessesLeft == 0) {
                losses ++; 
               alert("Better luck next time!")
                guessesLeft = 9; 
                letterGuessed = []
                computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.lenght)];
            }
            if (userGuess != computerGuess) {
                guessesLeft --; 
                alert("Keep trying, you can do it!!");
                letterGuessed.length = 9;
            
            }
        
    
    //Synchorizing things with index
   
        document.getElementById("win").innerHTML = wins
        document.getElementById("lose").innerHTML= losses
        document.getElementById("left").innerHTML= guessesLeft
        document.getElementById("soFar").innerHTML= letterGuessed
    
        }
