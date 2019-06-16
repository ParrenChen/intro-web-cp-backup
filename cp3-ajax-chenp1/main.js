// Name: Parren Chen
// Date: May 3, 2019
// Section: CSE 154 AL
//
// This is the main.js that fetch from the dog api and
// have an interaction with the user.

(function() {
  "use strict";

  const API_URL = "https://dog.ceo/api/breeds/image/random";

  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   *  Add 2 EventListener to the page
   */
  function init() {
    document.getElementById('button').addEventListener("click", makeRequest);
    document.getElementById('clear').addEventListener("click", clear);
  }

  /**
   * Steps to making an Fetch request:
   */
  function makeRequest() {
    let url = API_URL;

    fetch(url)
      .then(checkStatus)      // helper function provide to ensure request is successful or not
      .then(JSON.parse)
      .then(successFunction)
      .catch(errorHandle);    // this is reached if error happened down the fetch chain pipeline,
  }

  /**
   *  handle the success case of the request
   * @param {object} response - the response data
   */
  function successFunction(response) {
    document.getElementById("clear").classList.remove("hidden");
    let newPic = document.createElement("img");
    newPic.classList.add("newPic");
    newPic.setAttribute("src", response.message);
    newPic.setAttribute("alt", "dog's pic received");
    document.getElementById('new').appendChild(newPic);
  }

  /**
   *  handle the error case of the request
   */
  function errorHandle(){
    let text = document.createElement("p");
    text.innerText = "sry, pls refresh to try again";
    document.getElementById('main').appendChild(text);
    document.getElementById('button').disabled = true;
  }

  /**
   *  clear the loaded image on the page
   */
  function clear(){
    let newPic = document.getElementById("new");
    while(newPic.firstChild){
      newPic.removeChild(newPic.firstChild);
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

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
