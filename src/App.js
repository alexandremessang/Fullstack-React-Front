import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';
import RouterNav from './routes';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './App.css';


function App() {
  const [dropdown, setDropdown] = useState(null);
  const [isLogMenuOpen, setIsLogMenuOpen] = useState(false);

  const handleLog = () => {
    if ((dropdown === null || dropdown === undefined) && isLogMenuOpen) setIsLogMenuOpen(false)
  }


  return (
    <div className="App">
      <Router>
        <Header setDropDown={setDropdown} isLogMenuOpen={isLogMenuOpen} setIsLogMenuOpen={setIsLogMenuOpen} />
          <div className="content" onClick={handleLog}>
            <RouterNav />
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
