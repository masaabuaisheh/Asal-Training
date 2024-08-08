import Link from 'next/link';

function App() {
  return (
    <div className="main">
      <h1 className='main-title'>Welcome Page</h1>
      <Link className='main-opposite' href="./home">Go to Opposite Direction Page</Link>
      <Link className='main-movie' href="./movielist">Go to MovieList Page</Link>
    </div>
  );
}

export default App;




