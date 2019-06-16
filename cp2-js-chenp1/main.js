// Name: Parren Chen
// Date: 4.20.2019
// Section: CSE 154 AL
//
// This is the JS to implement the UI for my evil random number guessing game.


(function() {
  "use strict";
  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);
  /**
  *  click the enter bottom to change color and start the game
  */
  function init() {
    let change = document.getElementById("enter");
    change.addEventListener("click", changeClass);
    let start = document.getElementById("enter");
    start.addEventListener("click", singleGame);
    start.onclick = update();
  }

  /**
   *  plays a single game and allows user to entry a value and give feedback
   */
  function singleGame(){
    let currentNum = Math.round(Math.random() * 4 + 1);
    let value = document.getElementById("input").value;
    let extra = document.createElement("p");
    if (value != currentNum) {
      if (value > currentNum) {
        let newContent = document
                        .createTextNode("It's higher. Current is "+currentNum);
        extra.appendChild(newContent);
        let element = document.getElementById("guessingGame");
        element.appendChild(extra);
      } else {
        let newContent = document
                        .createTextNode("It's lower. Current is  "+currentNum);
        extra.appendChild(newContent);
        let element = document.getElementById("guessingGame");
        element.appendChild(extra);
      }
    } else{
      let element = document.createTextNode("It's right.");
      element.appendChild(extra);
    }
  }

  /**
   *  update the value of the user entry adn display
   */
  function update(){
    let value = document.getElementById("input").value;
    document.getElementById("demo").innerHTML = value;
  }

  /**
   *  reselect certain class
   */
  function changeClass(){
    let addClass = document.getElementById("guessingGame");
    addClass.classList.add("additionClassStyle");
  }

})();
