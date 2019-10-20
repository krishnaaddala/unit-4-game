//create global variables for computer generated and hidden values for each crystal and also for wins and loses
var computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
//create 4 crystal num's one for each crystal
var crystalNumber1 = Math.floor(Math.random() * 12) + 1;
var crystalNumber2 = Math.floor(Math.random() * 12) + 1;
var crystalNumber3 = Math.floor(Math.random() * 12) + 1;
var crystalNumber4 = Math.floor(Math.random() * 12) + 1;
//create variables wins, loses and allCrystal and set them to 0 as initial value
var wins = 0;
var loses = 0;
var allCrystalValue = 0;
//Function for reset the game after win/loss
function resetGame(){
     computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
     $("#computerRandom").text(computerChoice);
     crystalNumber1 = Math.floor(Math.random() * 12) + 1;
     crystalNumber2 = Math.floor(Math.random() * 12) + 1;
     crystalNumber3 = Math.floor(Math.random() * 12) + 1;
     crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    allCrystalValue =0;

}
//This will place the computer generated random number on the page using the ID
$("#computerRandom").text(computerChoice);
//similarly the below will set the values for wins/loses to 0 and gameStatus to BLANK
$("#winsCount").text(0);
$("#losesCount").text(0);
$("#gameStatus").text("");

//create clicks for 4 crystal images
$("#blue-image").on("click", function(){
    allCrystalValue = allCrystalValue+crystalNumber1;
    $("#totalScoreNumber").text(allCrystalValue);
    checkGameStatus();
});
$("#green-image").on("click", function(){
    allCrystalValue = allCrystalValue+crystalNumber2;
    $("#totalScoreNumber").text(allCrystalValue);
    checkGameStatus();
});
$("#red-image").on("click", function(){
    allCrystalValue = allCrystalValue+crystalNumber3;
    $("#totalScoreNumber").text(allCrystalValue);
    checkGameStatus();
});
$("#yellow-image").on("click", function(){
    allCrystalValue = allCrystalValue+crystalNumber4;
    $("#totalScoreNumber").text(allCrystalValue);
    checkGameStatus();
});

//function for checking Game Status comparing with computer choice and declare win/loss
function checkGameStatus(){
    if (allCrystalValue === computerChoice){
        $("#gameStatus").text("You Win!")
        wins++;
        $("#winsCount").text(wins);
        resetGame();
    }
    else if (allCrystalValue > computerChoice){
        $("#gameStatus").text("You Lost!")
        loses++;
        $("#losesCount").text(loses);
        resetGame();
    }
    else {
        $("#gameStatus").text("");
    }
}
