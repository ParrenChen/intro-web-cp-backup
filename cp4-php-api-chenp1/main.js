// Name: Parren Chen
// Date: May 3, 2019
// Section: CSE 154 AL
//
// This is the main.js that fetch from my info.php api and
// have an interaction with the user.

(function() {
  "use strict";

  const API_URL = "info.php";

  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   *  Add  EventListener to the page
   */
  function init() {
    makeRequest();
    id("clear").addEventListener("click", clear);
  }

  /**
   * Steps to making an Fetch request:
   */
  function makeRequest() {
    let url = API_URL+ "?ship=all";

    fetch(url)
      .then(checkStatus)
      .then(successFunction)
      .catch(console.error);
  }

  /**
   *  handle the success case of the request to get all pictures
   * @param {object} response - the response data
   */
  function successFunction(response) {
    let ship = response.split("\n");
    for(let i = 0; i < 49; i++){
      let newDiv = document.createElement("div");
      newDiv.classList.add("allShips");
      id("new").appendChild(newDiv);
      ship[i] = ship[i].substring(0, ship[i].indexOf(":"));
      newDiv.id = ship[i];
      let newPic = document.createElement("img");
      newPic.setAttribute("src", "ships/" + ship[i] + "_wows_main.jpg");
      newPic.setAttribute("alt", ship[i]);
      newDiv.appendChild(newPic);
      let newText = document.createElement("p");
      newText.innerText = ship[i];
      newDiv.appendChild(newText);
      id(ship[i]).addEventListener("click", makeShipRequest);
    }
  }

  /**
   * make a Fetch request to get specific ship info
   */
  function makeShipRequest() {
    let url = API_URL+ "?shipName=" + this.id;
    let currentShip = this;
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      //.then(shipDetail)
      .then(function(response) {
        shipDetail(response, currentShip);
      })
      .catch(console.error);
  }

  /**
   *  handle the success case of the request
   * @param {object} response - the response data
   * @param {object} obj - the current this DOM object
   */
  function shipDetail(response, obj){
    id("intro").classList.add("hidden");
    for(let i = 0; i < 49; i++){
      qsa(".allShips")[i].classList.add("hidden");
      qsa(".allShips")[i].removeEventListener("click", makeShipRequest);
    }
    obj.classList.remove("hidden");
    id("clear").classList.remove("hidden");
    let newSection = document.createElement("section");
    newSection.id = response.name + "Section";
    let name = document.createElement("p");
    name.innerText = "This ship is " + response.name + " .";
    newSection.appendChild(name);
    let nation = document.createElement("p");
    nation.innerText = "It's a warship from " + response.nation + " .";
    newSection.appendChild(nation);
    let tier = document.createElement("p");
    tier.innerText = "In WOWS, it belongs to tier " + response.tier + " .";
    newSection.appendChild(tier);
    let type = document.createElement("p");
    type.innerText = "This ship is a " + response.type + " .";
    newSection.appendChild(type);
    obj.appendChild(newSection);
  }

  /**
   * clear the info appended and reture to initial page
   */
  function clear(){
    id("intro").classList.remove("hidden");
    for(let i = 0; i < 49; i++){
      if(!qsa(".allShips")[i].classList.contains("hidden")){
        let remove = qs(".allShips section");
        qsa(".allShips")[i].removeChild(remove);
        qsa(".allShips")[i].classList.add("hidden");
      }
      qsa(".allShips")[i].classList.remove("hidden");
      qsa(".allShips")[i].addEventListener("click", makeShipRequest);
    }
    id("clear").classList.add("hidden");
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @returns {object} - valid result text if response was successful, otherwise rejected
   *                     Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();
