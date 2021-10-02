// const baseURL = "api.giphy.com/v1/gifs/random"; // declare baseURL
// const key = "BjYalBiTKOVLv3Jsih5Ukwu5cTCIxyJl"; // declare API key
// let url;

// function fetchData(e) {
//     e.preventDefault();
//     let input = document.getElementById('inputGif');
//     let gifDisplay = input.nodeValue;
//     url = baseURL + '?api_key=' + key + '&q=' + gifDisplay
    

//     fetch(url)
//     .then (response => {
//         return response.json();
//     })
//     .then(data => {
//         displayResults(data);
//     })
// }

// function displayResults(data) {
//     const section = document.querySelector('section')
//     while (section.firstChild) {
//         section.removeChild(section.firstChild)
//     }
//     let dashOutput = `Enjoy your random GIF ${data} `
// }

// let submitBtn = document.getElementById('submitBtn')
// submitBtn.addEventListener('click', fetchData)







let APIKEY = "BjYalBiTKOVLv3Jsih5Ukwu5cTCIxyJl";
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let str = document.getElementById("search").value.trim();
          let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&q=${str}`;
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log('META', content.meta);
                let fig = document.createElement('figure');
                let img = document.createElement('img');
                img.src = content.fixed_height_downsampled_url;
                img.alt = 'Sorry, try again'
                fig.appendChild(img);
                let out = document.querySelector('.out');
                out.insertAdjacentElement('afterbegin', fig); // places image at the top ... do I want to replace the image? if so, change this
                document.querySelector('#search').value = ''; //clears out the search bar after returning results
            })
            .catch(err => {
              console.error(err);
            });
        });
      }