import { useState, useEffect } from 'react';

// Define a TypeScript type for the movie object
type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};

//Component State Initialization
function MovieListManager() {
  const [listOfMovie, setListOfMovie] = useState<Movie[]>([]);
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const [watchedList, setWatchedList] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailsVisible, setDetailsVisible] = useState<number | null>(null);
  const [currentPageWatchList, setCurrentPageWatchList] = useState<number>(0);
  const [currentPageWatchedList, setCurrentPageWatchedList] = useState<number>(0);
  const itemsPerPage = 10;

  // Fetch movie data from an API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://freetestapi.com/api/v1/movies');
      const data = await response.json();
      setListOfMovie(data);
      setWatchList(data);
    };

    fetchData();
  }, []);

  const addToWatched = (movie: Movie) => {
    setWatchList((prev) => prev.filter((mov) => mov.id !== movie.id));
    setWatchedList((prev) => [...prev, movie]);
  };

  const removeFromWatched = (movie: Movie) => {
    setWatchedList((prev) => prev.filter((mov) => mov.id !== movie.id));
    setWatchList((prev) => [...prev, movie]);
  };

  const toggleDetails = (id: number) => {
    setDetailsVisible((prev) => (prev === id ? null : id));
  };

  const filteredWatchList = watchList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWatchedList = watchedList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowMoreWatchList = () => {
    setCurrentPageWatchList((prev) => prev + 1);
  };

  const handleShowLessWatchList = () => {
    setCurrentPageWatchList((prev) => Math.max(prev - 1, 0));
  };

  const handleShowMoreWatchedList = () => {
    setCurrentPageWatchedList((prev) => prev + 1);
  };

  const handleShowLessWatchedList = () => {
    setCurrentPageWatchedList((prev) => Math.max(prev - 1, 0));
  };

  //Rendering the Component
  return (
    <div className='main-page'>
      <h1 className='title'>Movie List Manager</h1>
      <input
        className='searchInput'
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className='listsContainer'>
        <div className='movieList'>
          <h2>Watch List</h2>
          {filteredWatchList.slice(0, (currentPageWatchList + 1) * itemsPerPage).map((movie) => (
            <div key={movie.id}>
              {/*<p>{movie.id}</p>*/}
              <h3>{movie.title}</h3>
              <p><strong>Plot:</strong> {movie.plot}</p>
              <button className='handleButton' onClick={() => addToWatched(movie)}>Add to Watched</button>
              <button className='toggleButton' onClick={() => toggleDetails(movie.id)}>
                {detailsVisible === movie.id ? 'Show Less' : 'Read More Info'}
              </button>
              {detailsVisible === movie.id && (
                <div>
                  <p><strong>Year:</strong> {movie.year}</p>
                  <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p><strong>Director:</strong> {movie.director}</p>
                  <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
                  <p><strong>Poster:</strong> <a href={movie.poster} target="_blank">Watch Poster</a></p>
                  <p><strong>Trailer:</strong> <a href={movie.trailer} target="_blank">Watch Trailer</a></p>
                  <p><strong>Run Time:</strong> {movie.runtime} minutes</p>
                  <p><strong>Awards:</strong> {movie.awards}</p>
                  <p><strong>Country:</strong> {movie.country}</p>
                  <p><strong>Language:</strong> {movie.language}</p>
                  <p><strong>Box Office:</strong> {movie.boxOffice}</p>
                  <p><strong>Production:</strong> {movie.production}</p>
                  <p><strong>Website:</strong> <a href={movie.website} target="_blank">Visit Website</a></p>
                </div>
              )}
            </div>
          ))}
          {currentPageWatchList > 0 && (
            <button className='handleButtonList' onClick={handleShowLessWatchList}>Show Less</button>
          )}
          {filteredWatchList.length > (currentPageWatchList + 1) * itemsPerPage && (
            <button className='handleButtonList' onClick={handleShowMoreWatchList}>Show More</button>
          )}
        </div>

        <div className='movieList'>
          <h2>Watched List</h2>
          {filteredWatchedList.slice(0, (currentPageWatchedList + 1) * itemsPerPage).map((movie) => (
            <div key={movie.id}>
              {/*<p>{movie.id}</p>*/}
              <h3>{movie.title}</h3>
              <p><strong>Plot:</strong> {movie.plot}</p>
              <button className='handleButton' onClick={() => removeFromWatched(movie)}>Remove from Watched</button>
              <button className='toggleButton' onClick={() => toggleDetails(movie.id)}>
                {detailsVisible === movie.id ? 'Show Less' : 'Read More Info'}
              </button>
              {detailsVisible === movie.id && (
                <div>
                  <p><strong>Year:</strong> {movie.year}</p>
                  <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p><strong>Director:</strong> {movie.director}</p>
                  <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
                  <p><strong>Poster:</strong> <a href={movie.poster} target="_blank">Watch Poster</a></p>
                  <p><strong>Trailer:</strong> <a href={movie.trailer} target="_blank">Watch Trailer</a></p>
                  <p><strong>Run Time:</strong> {movie.runtime} minutes</p>
                  <p><strong>Awards:</strong> {movie.awards}</p>
                  <p><strong>Country:</strong> {movie.country}</p>
                  <p><strong>Language:</strong> {movie.language}</p>
                  <p><strong>Box Office:</strong> {movie.boxOffice}</p>
                  <p><strong>Production:</strong> {movie.production}</p>
                  <p><strong>Website:</strong> <a href={movie.website} target="_blank">Visit Website</a></p>
                </div>
              )}
            </div>
          ))}
          {currentPageWatchedList > 0 && (
            <button className='handleButtonList' onClick={handleShowLessWatchedList}>Show Less</button>
          )}
          {filteredWatchedList.length > (currentPageWatchedList + 1) * itemsPerPage && (
            <button className='handleButtonList' onClick={handleShowMoreWatchedList}>Show More</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieListManager;


