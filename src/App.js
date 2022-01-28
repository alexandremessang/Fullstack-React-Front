import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RouterNav from './routes';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './App.css';


function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isLogMenuOpen, setIsLogMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  
  
  

  const handleLog = () => {
    if ((dropdown === null || dropdown === undefined) && isLogMenuOpen) setIsLogMenuOpen(false)
  }


  return (
    <div className="App">
      <Router>
        <Header setDropDown={setDropdown} isLogMenuOpen={isLogMenuOpen} setIsLogMenuOpen={setIsLogMenuOpen} setIsLogged={setIsLogged} isLogged={isLogged}/>
          <div className="content" onClick={handleLog}>
            <RouterNav />
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
