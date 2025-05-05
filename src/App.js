
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { Route, Routes } from "react-router-dom";
function App() {
   return (
      <>
         <Routes>

            <Route path='/' element = {<Home />} />
            <Route path='/portfolio' element = {<Portfolio />} />  
            <Route path='/about' element = {<About />} />  
            <Route path='/Contactus' element = {<ContactUs />} />       
            

         </Routes>
      </>
   );
}

export default App;
