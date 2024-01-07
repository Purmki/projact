
const movieIndexInfo = document.getElementById("movieIndexInfo"); 
const movieButton = document.getElementById("getMovie"); 
const movieInfoContainer = document.getElementById("movieInfo"); 

function singularMovieInfo() {
    const movieId = movieIndexInfo.value; 

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bc1f09cc15ddc7d57d1d665f10e1e5a6&language=en-US&append_to_response=credits`)
        .then(response => response.json())
        .then(movieData => {
          
            console.log(movieData);
            let castList = "";
            const imageUrl = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
            const movieCast = movieData.credits.cast;
            if (movieData && movieData.credits && movieData.credits.cast) {
                 castList = movieCast.map(cast => `<li>${cast.name} as ${cast.character}</li>`).join("");
            }
            else{
                castList = "Cast information not available"
            }
            movieInfoContainer.innerHTML = `
                <img src="${imageUrl}">
                <h1>${movieData.title}</h1>
                <p>${movieData.overview}</p>
                <p>Release Date: ${movieData.release_date}</p>
                <p>Genres: ${movieData.genres.map(genres => genres.name).join(", ")}</p>
                <p>Cast:</p>
                <ul>${castList}</ul>

            `;
        })
        .catch(error => {
            console.error(error); 
        });
}

movieButton.addEventListener("click", singularMovieInfo);











