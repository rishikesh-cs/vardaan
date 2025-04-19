
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { Route, Routes } from "react-router-dom";
function App() {
   return (
      <>
         <Routes>

            <Route path='/' element = {<Home />} />
            <Route path='/portfolio' element = {<Portfolio />} />         
            

         </Routes>
      </>
   );
}

export default App;
