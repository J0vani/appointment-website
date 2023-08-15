import './App.css';
import Landing from './pages/Landing';
import barberVideo from './assets/barber.mp4';

function App() {
  return (
    <div className='app'>
      <video autoPlay loop muted id="video">
        <source src={barberVideo} type="video/mp4"></source>
      </video>
      <Landing></Landing>
    </div>
  );
}

export default App;
