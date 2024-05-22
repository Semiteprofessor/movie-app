import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Search } from "./components/Search";

const tempMoviesData = [
  {
    imdbID: "tt137566",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0111161",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0068646",
    title: "The Godfather: Part II",
    year: 1974,
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0108052",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0071562",
    title: "12 Angry Men",
    year: 1957,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0050083",
    title: "Schindler's List",
    year: 1993,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0167260",
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0110912",
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0060196",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0137523",
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt137566",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    watchedDate: new Date(2021, 10, 1),
    runtime: 120,
    watched: true,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0111161",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    watchedDate: new Date(2021, 10, 1),
    runtime: 175,
    watched: true,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0068646",
    title: "The Godfather: Part II",
    year: 1974,
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    watchedDate: new Date(2021, 10, 1),
    runtime: 202,
    watched: true,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0108052",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    watchedDate: new Date(2021, 10, 1),
    runtime: 152,
    watched: true,
    imdbRating: 8.8,
    userRating: 10,
  },
];

const average = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

const logo =
  "https://static.vecteezy.com/system/resources/thumbnails/030/347/569/small_2x/ai-generated-image-of-delicious-popcorn-on-a-transparent-background-free-png.png";

function App() {
  const [movies, setMovies] = useState(tempMoviesData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <Result movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watchedMovies} />
          <WatchedMoviesList watchedMovies={watchedMovies} />
        </Box>
      </Main>
    </>
  );
}

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width={50} />
      <h1>usePopcorn</h1>
    </div>
  );
};

const Result = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length} results</strong>
    </p>
  );
};

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

const Movie = ({ movie }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <div className="title">
        <h3>{movie.title}</h3>
        <div>
          <p>📅 </p>
          <span>{movie.year}</span>
        </div>
      </div>
    </li>
  );
};

const WatchedSummary = ({ watchedMovies }) => {
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

const WatchedMoviesList = ({ watchedMovies }) => {
  return (
    <ul className="list">
      {watchedMovies?.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

const WatchedMovie = ({ movie }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <div className="title1">
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default App;
