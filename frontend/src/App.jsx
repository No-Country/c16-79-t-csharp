

import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import { Router } from './Router';


function App() {
  return (
    <>
      <NavBar />
      <Router />
      <FooterComponent />
    </>
  );
}

export default App;
