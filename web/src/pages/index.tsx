import Link from 'next/link';

function App() {
  return (
    <div className="main">
      <h1 className='main-title'>Welcome Page</h1>
      <Link className='main-dropdown' href="./searchable-dropdown">Go to Searchable Dropdown Page</Link>
      <Link className='main-opposite' href="./home">Go to Opposite Direction Page</Link>
      <Link className='main-game' href="./color-guessing">Color Guessing Game</Link>
      <Link className='main-movie' href="./MovieList">Go to MovieList Page</Link>

    </div>
  );
}

export default App;




