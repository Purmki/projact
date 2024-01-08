  const totalPages = 5;
  let currentPage = 1;
  const nextButton = document.querySelector('.page-link[aria-label="Next"]');
  const previousButton = document.querySelector('.page-link[aria-label="Previous"]');
  const fPageBtn = document.getElementById("fPageBtn");
  const sPageBtn = document.getElementById("sPageBtn");
  const tPageBtn = document.getElementById("tPageBtn");
  const foPageBtn = document.getElementById("foPageBtn");
  const lPageBtn = document.getElementById("lPageBtn");
  const movieArray = []
  let time="day"
  fPageBtn.addEventListener("click",()=>{ twentyMoviesDisplay(1)
    fPageBtn.style.backgroundColor = "blue"})
   sPageBtn.addEventListener("click",()=>{ twentyMoviesDisplay(2)
   sPageBtn.style.backgroundColor = "blue"})
   tPageBtn.addEventListener("click",()=>{ twentyMoviesDisplay(3)
     tPageBtn.style.backgroundColor = "blue"})
   foPageBtn.addEventListener("click",()=>{ twentyMoviesDisplay(4)
     foPageBtn.style.backgroundColor = "blue"})
   lPageBtn.addEventListener("click",()=>{ twentyMoviesDisplay(5)
     lPageBtn.style.backgroundColor = "blue"})
   previousButton.addEventListener('click', handlePreviousPage);
   
   
   function handlePreviousPage() {
     if (currentPage > 1) {
       currentPage--;
       twentyMoviesDisplay(currentPage);
     }
   }
   nextButton.addEventListener('click', handleNextPage);
   function handleNextPage() {
     if (currentPage <totalPages){
     currentPage++;
     twentyMoviesDisplay(currentPage);
   }
 }
  twentyMoviesDisplay(currentPage);
  const popularDayBtn= document.getElementById("popularDay")
  const popularWeekBtn= document.getElementById("popularWeek")
  const myButton = document.getElementById("myBtn");
  const heartIcon =  '<img class="heartIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVKYYEYbbm_XeczsIdlGN5KsCSj4nf5TeKg&usqp=CAU"></img>'
  function twentyMoviesDisplay(pageNumber) {
      fetch(`https://api.themoviedb.org/3/trending/movie/${time}?&page=${pageNumber}&query=Jack+Reacher&api_key=bc1f09cc15ddc7d57d1d665f10e1e5a6`)
          .then(response => response.json())
          .then(data => {
            currentPage = pageNumber;
              console.log(data);
              const container = document.getElementById("twentyContainer");
              container.innerHTML = "";
              data.results.map((movie) => {
                const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            
                const movieCard = document.createElement('div');
                movieCard.classList.add('movieCard');
            
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('imageContainer');
            
                const movieImage = document.createElement('img');
                movieImage.classList.add('movieImage');
                movieImage.src = posterUrl;
            
                const movieOverview = document.createElement('p');
                movieOverview.classList.add('movieOverview');
                movieOverview.textContent = ` ${movie.overview}`;
            
                const heartIconDiv = document.createElement('div');
                const heartIcon = document.createElement('img');
                heartIcon.classList.add('heartIcon');
                heartIcon.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVKYYEYbbm_XeczsIdlGN5KsCSj4nf5TeKg&usqp=CAU';
            
               
                imageContainer.appendChild(movieImage);
                imageContainer.appendChild(movieOverview);
                movieCard.appendChild(imageContainer);
                heartIconDiv.appendChild(heartIcon); 
                movieCard.appendChild(heartIconDiv); 
            
                container.appendChild(movieCard); 

                [fPageBtn, sPageBtn, tPageBtn, foPageBtn, lPageBtn].forEach((btn, index) => {
                  btn.style.backgroundColor = index + 1 === currentPage ? "blue" : "";
                });
              });

          


              function saveFavorite(){
                localStorage.setItem("movieArray",JSON.stringify(movieArray))
              }
              const heartIcons = document.querySelectorAll(".heartIcon");
              heartIcons.forEach((heartIcon, index) => {
                  heartIcon.addEventListener(("click"), () =>{
                    console.log(data.results[index]);
                    const foundIndex = movieArray.findIndex(movie => movie.id === data.results[index].id)
                    if (foundIndex > -1) {                   
                    movieArray.splice(foundIndex, 1)
                    } else {
                    movieArray.push(data.results[index])
                    }
                    saveFavorite()
                    heartIcon.src="https://media.istockphoto.com/id/936563406/vector/heart-shape.jpg?s=612x612&w=0&k=20&c=YvhbqoOTOc3GNndlvgTefqCZIM9HJuR7wrk-gw4sL8g="
                  })
                  heartIcon.addEventListener("mouseover", function() {
                      heartStyle(heartIcon, true);
                  });
                  heartIcon.addEventListener("mouseout", function() {
                      heartStyle(heartIcon, false);
                  });
              });
          })
          .catch(error => {
              console.log(error);
          });
  }



  function heartStyle(heartIcon, isMouseOver) {
      if (isMouseOver) {
          heartIcon.style.transform = 'scale(1.2)';
      } else {
          heartIcon.style.transform = 'scale(1)';
      }
  }
  popularDayBtn.addEventListener("click",function(){
time= "day"
twentyMoviesDisplay(1)
  })
  popularWeekBtn.addEventListener("click",function(){
    time= "week"
    twentyMoviesDisplay(1)
      })
















