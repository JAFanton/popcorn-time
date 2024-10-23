import { useState } from "react";
import movies from "../data/movies.json";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newArray = moviesToDisplay.filter((movieObj) => {
      return movieObj.id !== movieId;
    });

    setMoviesToDisplay(newArray);
  };

  return (
    <section className="MovieList">
      <h2>We currently have {moviesToDisplay.length} movies available</h2>

      {moviesToDisplay.map((movieObj) => {
        return (
          <div key={movieObj.id} className="card">
            <img src={movieObj.imgURL} />
            <h3>{movieObj.title}</h3>
            <p>Rating: {movieObj.rating}</p>
            <p>Year: {movieObj.year}</p>

            <p>
              <button
                onClick={() => {
                  deleteMovie(movieObj.id);
                }}
              >
                Delete this movie
              </button>
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default MovieList;
