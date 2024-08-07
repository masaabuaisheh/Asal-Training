import { useState, useEffect } from 'react';
import Link from 'next/link';
import theshawshankredemption from "../../assets/images/the-shawshank-redemption.jpg";
import theGodfather from "../../assets/images/theGodfather.jpg";
import theDarkknight from "../../assets/images/theDark-knight.jpg";
import pulpFiction from "../../assets/images/pulpFiction.jpg";
import forrestGump from "../../assets/images/forrestGump.jpg";
import inception from "../../assets/images/inception.jpg";
import TheMatrix from "../../assets/images/TheMatrix.jpg";
import TheLordoftheRings from "../../assets/images/TheLordoftheRings.jpg";
import TheDarkKnightRises from "../../assets/images/TheDarkKnightRises.jpg";
import Interstellar from "../../assets/images/Interstellar.jpg";
import FightClub from "../../assets/images/FightClub.jpg";
import Gladiator from "../../assets/images/Gladiator.jpg";
import TheTwoTowers from "../../assets/images/TheTwoTowers.jpg";
import TheSilenceoftheLambs from "../../assets/images/TheSilenceoftheLambs.jpg";
import TheDeparted from "../../assets/images/TheDeparted.jpg";
import SavingPrivateRyan from "../../assets/images/SavingPrivateRyan.jpg";
import ThePrestige from "../../assets/images/ThePrestige.jpg";
import Glory from "../../assets/images/Glory.jpg";
import TheAvengers from "../../assets/images/TheAvengers.jpg";
import TheLionKing from "../../assets/images/TheLionKing.jpg";

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

function MovieListManager() {
  const [listOfMovie, setListOfMovie] = useState<Movie[]>([]);
  const [watchList, setWatchList] = useState<Movie[]>([]);
  const [watchedList, setWatchedList] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailsVisible, setDetailsVisible] = useState<number | null>(null);
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;

  const getPosterImage = (id: number): string => {
    switch (id) {
      case 1: return theshawshankredemption.src;
      case 2: return theGodfather.src;
      case 3: return theDarkknight.src;
      case 4: return pulpFiction.src;
      case 5: return forrestGump.src;
      case 6: return inception.src;
      case 7: return TheMatrix.src;
      case 8: return TheLordoftheRings.src;
      case 9: return TheDarkKnightRises.src;
      case 10: return Interstellar.src;
      case 11: return FightClub.src;
      case 12: return Gladiator.src;
      case 13: return TheTwoTowers.src;
      case 14: return TheSilenceoftheLambs.src;
      case 15: return TheDeparted.src;
      case 16: return SavingPrivateRyan.src;
      case 17: return ThePrestige.src;
      case 18: return Glory.src;
      case 19: return TheAvengers.src;
      case 20: return TheLionKing.src;
      default: return 'https://via.placeholder.com/200x300?text=No+Image';
    }
  };

  // Fetch movie data from an API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://freetestapi.com/api/v1/movies');
      const data = await response.json();

      const moviesWithImages = data.map((movie: Movie) => ({
        ...movie,
        poster: getPosterImage(movie.id),
      }));

      setListOfMovie(moviesWithImages);
      setWatchList(moviesWithImages.sort((a: any, b: any) => a.title.localeCompare(b.title)));
      setDisplayedMovies(moviesWithImages.slice(0, itemsPerPage));
    };

    fetchData();
  }, []);

  const addToWatched = (movie: Movie) => {
    setWatchList((prev) =>
      prev.filter((mov) => mov.id !== movie.id).sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))
    );
    setWatchedList((prev) =>
      [...prev, movie].sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))
    );
  };

  const removeFromWatched = (movie: Movie) => {
    setWatchedList((prev) =>
      prev.filter((mov) => mov.id !== movie.id).sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))
    );
    setWatchList((prev) =>
      [...prev, movie].sort((a: Movie, b: Movie) => a.title.localeCompare(b.title))
    );
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

  useEffect(() => {
    const handleScroll = () => {
      /*window.innerHeight is the height of the viewport
        window.scrollY is the amount of vertical scroll
        document.documentElement.offsetHeight is the total height of the document 
      */
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;

      if (bottom) {
        const nextPage = currentPage + 1;
        //Calculates the starting index for the next page of items
        const startIndex = nextPage * itemsPerPage;
        console.log("nextPage: ",nextPage);
        console.log("sIndex: ",startIndex);
        console.log("watchList.length: ",watchList.length )
        //Checks if more items are available and if so, updates the displayed movies
        if (startIndex < watchList.length ) {
          const newMovies = watchList.slice(startIndex, startIndex + itemsPerPage);
          console.log("newMovies",newMovies)
          console.log("startIndex + itemsPerPage: ",startIndex + itemsPerPage)
          if (newMovies.length > 0) {
            setDisplayedMovies((prev) => [...prev, ...newMovies]);
            setCurrentPage(nextPage);
            console.log("nextPage",nextPage)
          }
        }

        if (startIndex < watchedList.length) {
          const newMovies = watchedList.slice(startIndex, startIndex + itemsPerPage);
          if (newMovies.length > 0) {
            setDisplayedMovies((prev) => [...prev, ...newMovies]);
            setCurrentPage(nextPage);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, itemsPerPage, watchList, watchedList]);

  return (
    <div className='main-page'>
      <h1 className='title'>Movie List Manager</h1>
      <Link className='back' href="/">Back</Link>
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
          {filteredWatchList.slice(0, (currentPage + 1) * itemsPerPage).map((movie) => (
            <div key={movie.id}>
              <div className='watchMovie'>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={`${movie.title} Poster`} style={{ width: '200px', height: '300px' }} />
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
            </div>
          ))}
          </div>

        <div className='movieList'>
          <h2>Watched List</h2>
          {filteredWatchedList.slice(0, (currentPage + 1) * itemsPerPage).map((movie) => (
            <div key={movie.id}>
              <div className='watchMovie'>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={`${movie.title} Poster`} style={{ width: '200px', height: '300px' }} />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieListManager;
