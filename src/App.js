import React , {useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route }
   from 'react-router-dom';
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import MainCompo from "./main-components/maincompo";

function App() {
   const [activeNav,setactiveNav] = useState("#");
   useEffect(() => {
        console.log(activeNav);
   }, [activeNav])

   return (
      <>
        <Router>
           <Nav actNav={activeNav}/>
         <Routes>
            <Route exact path='/' element={<MainCompo setactiveNav={setactiveNav}/>}></Route>
         </Routes>
         <Footer/>
        </Router>
      </>
   );
}

export default App;
