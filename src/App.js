
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, Routes } from "react-router-dom";
// import UploadForm from './components/UploadForm';
// import DisplayImage from './components/DisplayImage';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import AdminSignup from './components/AdminSignup';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import ProjectDetail from './components/ProjectDetail';
import Notfound from './components/Notfound';
function App() {
   return (
      <>
         <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            {/* <Route path="/upload" element={<UploadForm />} /> */}
            {/* <Route path="/display" element={<DisplayImage />} /> */}
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/signup" element={<AdminSignup />} />
            <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
            {/* <Route path="/project/:projectId" element={<ProjectDetail />} /> */}
              <Route path='/project' element={<ProjectDetail />} />
              <Route path="*" element={<Notfound />} />
         </Routes>
      </>
   );
}

export default App;
