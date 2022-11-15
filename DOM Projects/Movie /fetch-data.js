// First Some Initial Movies After DOM Content has been loaded successfully
export async function initialFetchMovie(movieName) {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=8f7c9dc&t=${movieName}&y=2022`
    );

    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Fetch Movie By Name Provided By User
// async function fetchMovieByName(movieName) {
//   let response = await fetch(
//     `http://www.omdbapi.com/?apikey=8f7c9dc&t=${movieName}`
//   );

//   let data = await response.json();
//   return data;
// }

// export { initialFetchMovie, fetchMovieByName };
