
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotfound from './pages/PageNotfound';


function App() {
 
  return (
    <>
  <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/menu' element={<Menu/>} />
    <Route path='*' element={<PageNotfound/>} />
   </Routes>
  </Router>
   
    </>
  )
}

export default App
