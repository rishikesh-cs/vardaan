import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Logo from './Logo';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Admin logged in successfully!');
      navigate('/admin');  // Redirect to admin panel
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/common.js'; // path relative to public/
    script.async = true;

    script.onload = () => {
      if (typeof window.anime === 'function') {
        window.anime(); // Call the function
      } else {
        console.error("anime is not defined");
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  });
  return (
    <>

      {/* Preloader */}
      <div className="preloader">
        <div className="preloader__wrap">
          <img
            className="preloader__logo"
            src="./img/logo2.png"
            alt="vardaan interior design"
          />
          {/* <div className="preloader__progress">
            <span />
          </div> */}
        </div>
      </div>
      {/* Top */}
      {/* <nav className="navbar navbar-compact">
      
        <Logo/>
        <div className="ml-sm-auto">
          <button className="hamburger zoom-cursor magnetic" type="button">
            <span className="hamburger__inner" />
          </button>
        </div>
      </nav> */}
      <Navbar/>
      <main className="js-scroll">
        <div className="container-fullyy vh-100 m-5" >
          <div className="row align-items-md-center">
            <div className="col-12 col-lg-12 col-xl-12">
              <h3 className="title portfoliotitle  js-lines">Admin Login</h3>
              <form
                onSubmit={handleLogin}
                id="contact-form"
                className="contact-form"
                data-toggle="validator"
              >
                <div className="row">

                  <div className="form-group col-12 col-md-12">
                    <input
                      type="email"
                      className="input form-control"
                      id="emailContact"
                      name="emailContact"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="on"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-12 col-md-12">
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input form-control"
                      id="emailContact"
                      name="emailContact"

                      autoComplete="on"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn">
                      Login
                    </button>
                  </div>
                </div>
                <div id="validator-contact" className="hidden">
                  &nbsp;
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
      {/* <Navbar /> */}
      <Footer />

    </>
  );
};

export default AdminLogin;
