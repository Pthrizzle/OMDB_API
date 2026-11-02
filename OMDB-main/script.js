

async function getCards() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON

        const searchRequest = document.getElementById("search").value;
        const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name="+searchRequest;
        


        const response = await fetch(url);
        
        const json = await response.json();

        console.log(JSON.stringify(json));


        const cardHolder = document.getElementById("cardHolder");

        
        for (const card of json.data) {
            let container = document.createElement("div");
            container.classList.add("card");

            let img = document.createElement("img");
            // `card_images` is an array; access the image URL from the first element
            img.src = card.card_images[0].image_url;
            img.width = 300;

            let cardInfoContainer = document.createElement("div");
            cardInfoContainer.classList.add("container");

            let titleHeader = document.createElement("h3");
           
            titleHeader.textContent = card.name;

            let stats = document.createElement("h3");
            stats.textContent = "Atk: " + card.atk + " Def: " + card.def;

            let description = document.createElement("h3");
            description.textContent = card.desc;

            cardInfoContainer.appendChild(titleHeader);
            cardInfoContainer.appendChild(stats);

            cardInfoContainer.appendChild(description);

            container.appendChild(img);
            container.appendChild(cardInfoContainer);

            cardHolder.appendChild(container);
        }


    }
    catch (error) {
        console.log(error)
    }
}