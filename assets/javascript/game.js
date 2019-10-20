//create global variables for computer generated and hidden values for each crystal and also for wins and loses
var computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
console.log(computerChoice);
var crystalNumber = Math.floor(Math.random() * 12) + 1;
console.log(crystalNumber);
// create a array list of images to associate a random crystalNumber
var imagesList = ["blue.png", "green.png", "red.png", "yellow.png"];
var wins = 0;
var loses = 0;
var crystalClick =0;
var numberOfWins = document.getElementById("wins");
var numberOfLosses = document.getElementById("losses");
var youWin = document.getElementById("youWin");
var youLost = document.getElementById("youLost");
//create clicks for 4 crystal images
$("#computerRandom").text(computerChoice);

$("crystalimages").on("click", function(){
    var crystalValue = imagesList[crystalNumber];
    crystalClick+=crystalValue;
    if (crystalClick === computerChoice){
        $("#youWin").text("You Win!")
        wins++;
        //$("#wins")
    }
    else{
        $("#youlost").text("You Lost!")
        loses++;

    }
});
numberOfWins.textContent = "Wins :" + wins;
numberOfLosses.textContent = "Losses :" + losses;
