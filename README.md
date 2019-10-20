# unit-4-game
As part of this jQuery assignment, we will be creating a another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

## Table of contents
Technologies Used
Applications Used
Code Snippets

## Technologies Used
HTML
Javascript/jQuery
Markdown

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser

## Code Snippets

```<div id="crystalimages">
        <input type="image" id="blue-image" src= "assets/images/blue.png"/>
        <input type="image" id="green-image" src= "assets/images/green.png"/>
        <input type="image" id="red-image" src= "assets/images/red.png"/>
        <input type="image" id="yellow-image" src= "assets/images/yellow.png"/>
  ```

  ```var computerChoice = Math.floor(Math.random() * ((120-19)+1) + 19);
//create 4 crystal num's one for each crystal
var crystalNumber1 = Math.floor(Math.random() * 12) + 1;
var crystalNumber2 = Math.floor(Math.random() * 12) + 1;
var crystalNumber3 = Math.floor(Math.random() * 12) + 1;
var crystalNumber4 = Math.floor(Math.random() * 12) + 1;
//create variables wins, loses and allCrystal and set them to 0 as initial value
  ```

  ```$("#blue-image").on("click", function(){
    allCrystalValue = allCrystalValue+crystalNumber1;
    $("#totalScoreNumber").text(allCrystalValue);
    checkGameStatus();
});
  ```
  ```function checkGameStatus(){
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
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```