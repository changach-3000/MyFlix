//fetch movies
const popup = document.getElementById("movieDetails")
const container = document.getElementById("container")
fetch('http://localhost:3000/movies')
.then(response => response.json())
.then((shows => {
    shows.forEach(show => {
        // create a card to hold the images
        const card = document.createElement("div")
        card.id = "card"
        const image = document.createElement("img")
        image.src = show.poster
        card.appendChild(image)
        container.appendChild(card)
        
    //   create a h4 to hold titles
        const content = document.createElement("div")
        content.id = "content"
        const title = document.createElement("h4")
        title.innerText = show.title
        card.appendChild(title)
        container.appendChild(content)

        

      
    // add listener to the image cards so that when a user clicks on an image, it shows them the user details
    card.addEventListener("click", () => {
        // clicked items
        const img = document.getElementById("imgdet")
        img.src = show.poster
        const titlesmovie = document.getElementById("titlesmovie")
        titlesmovie.innerText = show.title
        const year = document.getElementById("year");
        year.innerText = `Year : ${show.year}`
        const genre = document.getElementById("genres");
        genre.innerText = `Genres: ${show.genres}`;
        const language = document.getElementById("language");
        language.innerText = `Language: ${show.language}`;
        const rating = document.getElementById("rating")
        rating.innerText = `Rating: ${show.rating}`
        const summary= document.getElementById("summary");
        summary.innerText = `Summary: ${show.summary}`;

        //set popup to display on click
        popup.style.display = "block";
        
        // add button to close the popup
        const btn = document.getElementById("btn");
        const closeBtn = document.createElement("input");
        closeBtn.type = "button";
        closeBtn.value = "close"
        btn.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
}); 
      });
})
}))



        



    

