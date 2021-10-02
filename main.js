const baseURL = "api.giphy.com/v1/gifs/random"; // declare baseURL
const key = "BjYalBiTKOVLv3Jsih5Ukwu5cTCIxyJl"; // declare API key
let url;

// SEARCH FORM
//start DOM elements
const searchTerm = document.querySelector(".search"); // basically connecting JS to first of each HTML element
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");


//RESULTS SECTION
const section = document.querySelector("section");
//End DOM elements


//EVENT LISTENERS ('Listening' to HTML for actions)
searchForm.addEventListener("submit", fetchResults); // perform a function, when doing an action (in this case "submitting" the button)


function fetchResults(e) { //e = parameter meaning 'event'
    e.preventDefault();     //method (prevent page from refreshing which would wipe out your search term)
    // Assemble the full url
    url = baseURL + '?api-key=' + key + '&q=' + searchTerm.value; //building out the url to search for the right thing
    console.log("URL:", url);
};

function displayResults(json) {
    while (section.firstChild) {           //while (is a loop function -- asking if section.firstChild is true (is there a result there? if so, remove it)) something is on the screen, display that info, but if you run it again remove those results and replace them with the new info
        section.removeChild(section.firstChild);
    };

    // for (let i = 0; i < articles.length; i++) {
    //     let gif = document.createElement("gif"); // taking elements of objects in docs array and creating them as variables and then adding them into the HTML
        let current = gif[i]; //storing whichever article is currently being referred to in a variable

        section.appendChild(gif);
    }
