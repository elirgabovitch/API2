let APIKEY = "BjYalBiTKOVLv3Jsih5Ukwu5cTCIxyJl";
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&q=`;
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log('META', content.meta);
                let out = document.querySelector('.out');
                while (out.firstChild) {
                    out.removeChild(out.firstChild)
                }
                let img = document.createElement('img');
                img.src = content.data.images.original.webp;
                img.alt = 'Sorry, try again'
                out.appendChild(img);  
            })
            .catch(err => {
              console.error(err);
            });
        });
      }