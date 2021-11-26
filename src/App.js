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
          <RouterNav />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
