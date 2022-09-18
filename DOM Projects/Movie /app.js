// Selecting DOM Elements
const movieTitle = document.querySelector(".movie-title");
const movieImg = document.getElementById("movie-image");
const movieRatings = document.querySelectorAll(".rate");
const form = document.querySelector(".movie-form");
const movieInput = document.getElementById("movie-input");
const moviesSection = document.querySelector(".movies-center");
console.log(movieTitle, movieImg);
console.log(movieRatings);

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", async function () {
  movieInput.value = "";
  let fetchedMovie = await initialFetchMovie();
  const { Actors, Director, Genre, Poster, Ratings, Title, Year } =
    fetchedMovie;

  movieTitle.textContent = Title;
  movieImg.src = Poster;

  let ratings = Ratings.map((rate) => {
    return `${rate.Source}: ${rate.Value}`;
  });

  for (let i = 0; i < ratings.length; i++) {
    movieRatings[i].textContent = ratings[i];
  }
});

// Listening For Form Submission
form.addEventListener("submit", async function (event) {
  // Prevent Form Default Behaviour
  event.preventDefault();
  // Logging Input
  console.log(movieInput.value.replaceAll(" ", "-"));
  // Sending HTTP GET Request to the API
  let movieObject = await fetchMovieByName(
    movieInput.value.replaceAll(" ", "-")
  );
  console.log(movieObject);
  // Destructuring Every Movie Object
  const { Title, Poster, Ratings, Director } = movieObject;

  moviesSection.innerHTML += `
  <article class="movie-card">
  <!-- Movie Title -->
  <h2 class="movie-title">${Title}</h2>
  <!-- Image Container -->
  <div class="img-container">
    <img src="${Poster}" alt="" id="movie-image" />
  </div>
  <!-- Movie Ratings -->
  <div class="movie-ratings">
    <span class="internet-movie-database rate">${"Kire Asbe Abi"}</span>
    <span class="rotter-tomatoes rate">${"Kose Asbe Abi"}</span>
    <span class="metacritic rate">${"Sine Asbe Abi"}</span>
  </div>
</article>`;

  console.log(Title, Poster, Director, Ratings);
  movieInput.value = "";
});

// First Some Initial Movies After DOM Content has been loaded successfully
async function initialFetchMovie() {
  let response = await fetch(
    "http://www.omdbapi.com/?apikey=8f7c9dc&t=dancer-in-the-dark"
  );

  let data = await response.json();
  return data;
}

// Fetch Movie By Name Provided By User
async function fetchMovieByName(movieName) {
  let response = await fetch(
    `http://www.omdbapi.com/?apikey=8f7c9dc&t=${movieName}`
  );

  let data = await response.json();
  return data;
}
