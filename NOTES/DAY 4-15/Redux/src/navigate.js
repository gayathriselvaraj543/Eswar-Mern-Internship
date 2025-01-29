import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import About from './about';
import Users from './users';
import Contact from './contact';
import Home from './home';
import './App.css';
import { Newform } from './newform';
function Navigator1() {
  return (
<Router>
  <div className='Hi'>
    <h1>WELCOME😍</h1>
  </div>
  <div>
  <nav className='Gaya'>
      <Link to="/">Home</Link>
     <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/newform">Newform</Link>
   </nav>
   <Routes>
   <Route path="/" element={<Home section="home" />} />
   <Route path="/users" element={<Users section="users" />} />
   <Route path="/about" element={<About section="about" />} />
   <Route path="/contact" element={<Contact section="contact" />} />
   <Route path="/newform" element={<Newform section="newform" />} />
   
   
   </Routes>
  </div>
</Router>
   
  );
}

export default Navigator1;