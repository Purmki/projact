
    const savedContent = document.getElementById("savedContent")
    const storageValue=localStorage.getItem("movieArray")
    const parsedData = JSON.parse(storageValue)
    console.log(JSON.parse(storageValue));
    parsedData.forEach((movie) => {
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        savedContent.innerHTML += `
        <div class="movieCard">
            <img class="movieImage" src="${posterUrl}"
            <br>
            <p>Overview: ${movie.overview}</p>
            <hr>
        </div>
        `;
    });

