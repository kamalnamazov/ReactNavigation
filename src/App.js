import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import Info from './Components/Info';
import Examples from './Components/Examples';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
    <div className="App">

      <div className='menu'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/info' >Haqqında</NavLink>
        <NavLink to='/examples' >İş nümunələri</NavLink>
        <NavLink to='/contact'>Əlaqə məlumatları</NavLink>
      </div>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/examples' element={<Examples />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
