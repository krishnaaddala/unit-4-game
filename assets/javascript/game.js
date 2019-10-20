//create global variables for computer generated and hidden values for each crystal and also for wins and loses
var computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
console.log(computerChoice);
var crystalNumber1 = Math.floor(Math.random() * 12) + 1;
var crystalNumber2 = Math.floor(Math.random() * 12) + 1;
var crystalNumber3 = Math.floor(Math.random() * 12) + 1;
var crystalNumber4 = Math.floor(Math.random() * 12) + 1;

//console.log(crystalNumber);
// create a array list of images to associate a random crystalNumber
var imagesList = ["blue.png", "green.png", "red.png", "yellow.png"];
var wins = 0;
var loses = 0;
var crystalClick = 0;
var numberOfWins = document.getElementById("wins");
var numberOfLosses = document.getElementById("loses");
var youWin = document.getElementById("youWin");
var youLost = document.getElementById("youLost");
function resetGame(){
     computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
     crystalNumber = Math.floor(Math.random() * 12) + 1;
     $("#computerRandom").text(computerChoice);
     crystalNumber1 = Math.floor(Math.random() * 12) + 1;
     crystalNumber2 = Math.floor(Math.random() * 12) + 1;
     crystalNumber3 = Math.floor(Math.random() * 12) + 1;
     crystalNumber4 = Math.floor(Math.random() * 12) + 1;

}
//create clicks for 4 crystal images
$("#computerRandom").text(computerChoice);

$("#crystalimages").on("click", function(){
    var crystalValue1 = crystalNumber1[imagesList[0]];
    var crystalValue2 = crystalNumber2[imagesList[1]];
    var crystalValue3 = crystalNumber3[imagesList[2]];
    var crystalValue4 = crystalNumber4[imagesList[3]];
    var allCrystalsValue = crystalValue1+ crystalValue2+crystalValue3+crystalValue4;
    crystalClick+=allCrystalsValue;
    if (crystalClick === computerChoice){
        $("#youWin").text("You Win!")
        wins++;
        resetGame();
    }
    else{
        $("#youlost").text("You Lost!")
        loses++;
        resetGame();
    }
});
numberOfWins.textContent = "Wins :" + wins;
numberOfLosses.textContent = "Loses :" + loses;
