

const myInput = document.getElementById("myInput");
let startingMovie = "jjk"

function searchMoviesDisplay(pageName) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${pageName}&api_key=bc1f09cc15ddc7d57d1d665f10e1e5a6`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const movieContainer = document.getElementById("movieContainer");
            const moviesHTML = data.results
                .map(movie => {
                    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    return `
                        <img src="${posterUrl}">
                        <div id="overviewContent">
                        <h3>Overview: ${movie.overview}</h3>
                        </div>
                        <hr>
                    `;
                })
                .join(""); 

            movieContainer.innerHTML = moviesHTML;
        })
        .catch(error => {
            console.log(error);
        });
}
searchMoviesDisplay(startingMovie);
myInput.addEventListener("input", () => {
    searchMoviesDisplay(myInput.value);
});






