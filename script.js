//fetch movies
const popup = document.getElementById("movieDetails")
const container = document.getElementById("container")
fetch('https://myflix-fxlh.onrender.com/movies')
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
        
        // Add like and comment  
        const like = document.createElement("img")
        like.src = "https://img.icons8.com/fluency/48/null/filled-like.png"
        like.id="likecomm"
        card.appendChild(like)

        //add counter to the likes
         const counter = document.createElement("p")
         counter.id = "likecomm"
         counter.innerHTML = show.likes
         card.appendChild(counter)

         like.addEventListener("click", (e) => {
          e.preventDefault();
            counter.innerHTML = parseInt(counter.innerHTML) + 1;
            const newLikes = parseInt(counter.innerHTML);
            fetch(`https://myflix-fxlh.onrender.com/movies${show.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ likes : newLikes }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
        });
            
    // add listener to the image cards so that when a user clicks on an image, it shows them the user details
    image.addEventListener("click", () => {
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
        

        // Add Comment Section
        const comm= document.getElementById("comm").value
        const comments = document.getElementById("comments")
        const submit = document.getElementById("submit")

        submit.addEventListener("click",() => {
            comments.innerText =`${comm}`
        })
               
        //set popup to display on click
        popup.style.display = "block";
        
        const closeBtn= document.getElementById("btn")
        closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
}); 
})
    })
}))