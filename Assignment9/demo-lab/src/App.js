import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
    {/* <nav className="App-header"> */}
      <ul className='header'>
    <li> <Link to='/'>Home</Link> {"       "}</li>
     <li><Link to='/about'>About</Link>{"       "} </li> 
     <li> <Link to='/contact'>Contact</Link>{"       "} </li>
      <li><Link to='/jobs'>Jobs</Link>{"       "} </li>
      <li><Link to='/login'>Login</Link>{"       "} </li>
      </ul>
    {/* </nav> */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route> 
      <Route path='/jobs' element={<Jobs />}></Route> 
      <Route path='/login' element={<Login />}></Route> 
    </Routes>
    {/* <footer>
      <div>This is Footer</div>
    </footer> */}
  </Router>
   
    
    </div>
  );
}

export default App;
