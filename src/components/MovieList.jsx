import movies from "../data/movies.json";

function MovieList() {
  return (
    <>
      <h1>List of movies:</h1>

      {movies.map((movieObj) => {
        return (
        <div key={movieObj.id} className="card">
            <img src={movieObj.imgURL}/>
            <h3>{movieObj.title}</h3>
            <p>Rating: {movieObj.rating}</p>
            <p>Year: {movieObj.year}</p>
        </div>
      )
      })}
    </>
  );
}

export default MovieList;
