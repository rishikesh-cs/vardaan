import { useState, useEffect } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Footer from './Footer';
import Navbar from './Navbar';

function AdminPanel() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      alert('Please select file and enter title.');
      return;
    }

    const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);

    try {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);  // This is the URL you need

      await addDoc(collection(db, 'images'), {
        title: title,
        imageUrl: url,  // Store the full URL here
        createdAt: new Date()
      });

      alert('Image uploaded successfully!');
      navigate('/display');
    } catch (error) {
      console.error(error);
      alert('Upload failed.');
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
          <div className="preloader__progress">
            <span />
          </div>
        </div>
      </div>
      {/* Top */}
      <nav className="navbar navbar-compact">
        <div className="mr-auto">
          {/* <a className="logo-link magnetic" href="index.html"> */}
          <Link className="logo-link magnetic" to='/'>
            <img
              className="logotype"
              src="./img/logo5.png"
              alt="vardaan interior design"
            />
          </Link>
          {/* </a> */}
        </div>
        <div className="ml-sm-auto">
          <button className="hamburger zoom-cursor magnetic" type="button">
            <span className="hamburger__inner" />
          </button>
        </div>
      </nav>
      <main className="js-scroll">
        <div className="container-fullyy vh-100 text-right ">
          <div >
            <LogoutButton />
          </div>

          <div className="row  align-items-md-center">
            <div className="col-12 col-lg-12 col-xl-12">
              <div className=''>
                <div>
                  <h3 className="title text-center title--h1 js-lines">Welcome <span style={{ color: "rgb(105, 18, 129)" }}>Pulkit</span></h3>
                </div>

              </div>

              <form onSubmit={handleUpload}
                id="contact-form"
                className="contact-form"
                data-toggle="validator"
              >
                <div className="row">
                  <div className="form-group col-12 col-md-12">
                    <input

                      type="text"
                      placeholder="Enter title"
                      value={title} onChange={(e) => setTitle(e.target.value)}
                      className="input form-control"
                      id="nameContact"
                      name="nameContact"

                      required="required"
                      autoComplete="on"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-12 col-md-12">
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="input form-control"
                      id="emailContact"
                      name="emailContact"
                      placeholder=""
                      required="required"
                      autoComplete="on"
                    />
                    <div className="help-block with-errors" />
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn">
                      Upload Image
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
      {/* <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '50px auto' }}>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Upload Image</button>
    </form> */}
      {/* <div> */}
      {/* <h2>Welcome Admin</h2> */}

      {/* Your admin UI */}
      {/* </div> */}
      <Navbar />
      <Footer />
    </>
  );
}

export default AdminPanel;
