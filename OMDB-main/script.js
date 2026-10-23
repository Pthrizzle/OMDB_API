

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        const searchRequest = document.getElementById("search").value;
        const url = "http://www.omdbapi.com/?apikey=8ff4dd5b&s="+searchRequest;
        


        const response = await fetch(url);
        
        const json = await response.json();

        console.log(JSON.stringify(json));


        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD

            // Create an image element
            //      point it to the image from this movie


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element

            let container = document.createElement("div");
            container.classList.add("card");

            let img = document.createElement("img");
            img.src = movie.Poster;
            img.width = 100;

            let card = document.createElement('div')
            card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title + ": " + movie.Year

            card.appendChild(titleHeader)

            container.appendChild(img);
            container.appendChild(card)

            movieHolder.appendChild(container)

           

           
        }


    }
    catch (error) {
        console.log(error)
    }
}