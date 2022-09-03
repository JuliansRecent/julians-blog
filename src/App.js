import './App.css';
import './Reset.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/Main/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <LandingPage/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
