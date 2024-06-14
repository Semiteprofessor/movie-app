import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Search } from "./components/Search";
import StarRating from "./components/StartRating";
import { toast } from "react-toastify";
import Notification from "./components/Notification";

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

const KEY = "59ada9b8";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWateched = (movie) => {
    const watched = setWatchedMovies((watchedMovies) => [
      ...watchedMovies,
      movie,
    ]);
    if (watched) {
      toast.error("Add movie failed!");
    } else {
      toast.success("Movie added successfully!");
    }
  };

  const handleDeleteWatched = (id) => {
    setWatchedMovies((watchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== id)
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (error) {
        console.log(error.message);

        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Result movies={movies} />
      </NavBar>
      <Main>
        {/* <Box> {isLoading ? <Loader /> : <MovieList movies={movies} />}</Box> */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWateched}
              watchedMovies={watchedMovies}
            />
          ) : (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMoviesList
                watchedMovies={watchedMovies}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
        <Notification />
      </Main>
    </>
  );
}

const Loader = () => {
  return (
    <div className="loader">
      <img src="./loader1.gif" alt="logo" width={50} />
    </div>
  );
};

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <span>⛔</span>
      <p>{message}</p>
    </div>
  );
};

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

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="title">
        <h3>{movie.Title}</h3>
        <div>
          <p>📅 </p>
          <span>{movie.Year}</span>
        </div>
      </div>
    </li>
  );
};

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watchedMovies,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const callback = (event) => {
      if (event.code === "Escape") {
        onCloseMovie();
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await response.json();
      console.log(data);
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!Title) return;
    document.title = `Movie - ${Title}`;

    return () => {
      document.title = "usePopCorn";
    };
  }, [Title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={Poster} alt={`Poster of ${movie} movie`} height={300} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>
                <span>⭐</span>
                <span>{imdbRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{Runtime}</span>
              </p>
              <p>
                <span>🎥</span>
                <span>{Genre}</span>
              </p>
            </div>
          </header>
        </>
      )}
      <section>
        <div className="rating">
          {!isWatched ? (
            <>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <button className="add-btn" onClick={handleAdd}>
                  + Add to List
                </button>
              )}
            </>
          ) : (
            <p>
              You rated this movie {watchedUserRating}
              <span>⭐</span>
            </p>
          )}
        </div>
        <p>
          <em>{Plot}</em>
        </p>
        <p>Starring: {Actors}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
};

const WatchedSummary = ({ watchedMovies }) => {
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => movie.Runtime));
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
          <span>{avgImdbRating.toFixed(2)}</span>
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

const WatchedMoviesList = ({ watchedMovies, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watchedMovies?.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <div className="title1">
        <h3>{movie.Title}</h3>
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
            <span>{movie.Runtime} min</span>
          </p>
          <button
            className="btn-delete"
            onClick={() => onDeleteWatched(movie.imdbID)}
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default App;
