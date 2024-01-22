import './App.css';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18px', right : '0'}} />
      <div className="blur" style={{top: '36%', left: '-8rem'}} />
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
