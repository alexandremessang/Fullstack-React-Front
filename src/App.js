import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouterNav from './routes';
import Header from './layouts/header';
import Footer from './layouts/footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <div className="content">
            <RouterNav />
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
