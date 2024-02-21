

import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path=''></Route>
        <Route path=''></Route>
        <Route path=''></Route>
        <Route path=''></Route>

      </Routes>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
