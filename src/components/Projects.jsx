// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import { storage } from '../firebase';
// import { ref, getDownloadURL, listAll } from 'firebase/storage';
// import './Portfolio.css';
// import Footer from './Footer';
// import Logo from './Logo';

// export default function Projects() {

//     const [selectedImage, setSelectedImage] = useState(null);
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = '/js/common.js';
//         script.async = true;

//         script.onload = () => {
//             if (typeof window.anime === 'function') {
//                 window.anime();
//             } else {
//                 console.error("anime is not defined");
//             }
//         };

//         document.body.appendChild(script);
//         fetchImages();

//         // 🔒 Disable right-click
//         const handleContextMenu = (e) => e.preventDefault();
//         document.addEventListener("contextmenu", handleContextMenu);

//         return () => {
//             document.body.removeChild(script);
//             document.removeEventListener("contextmenu", handleContextMenu);
//         };
//     }, []);

//     const fetchImages = async () => {
//         listAll(ref(storage, "images")).then(imgs => {
//             imgs.items.forEach(val => {
//                 getDownloadURL(val).then(url => {
//                     setImages(data => [...data, url]);
//                 });
//             });
//         });
//     };

//     return (
//         <>
//             <div className="preloader">
//                 <div className="preloader__wrap">
//                     <img
//                         className="preloader__logo"
//                         src="./img/logo2.png"
//                         alt="VARDAAN INTERIORS"
//                     />
//                 </div>
//             </div>

//             <nav className="navbar navbar-compact">
//                 <div className="mr-auto">
//                     <Logo />
//                 </div>
//                 <div className="ml-sm-auto">
//                     <button className="hamburger zoom-cursor magnetic" type="button">
//                         <span className="hamburger__inner" />
//                     </button>
//                 </div>
//             </nav>

//             <main className="js-scroll">
//                 <div className="container-fully">
//                     <header className="header-page">
//                         <div className='text-right'>
//                             <Link to='/admin'>
//                                 <button className='btn'>Admin Login</button>
//                             </Link>
//                         </div>

//                         <h1 className="title portfoliotitle title--h1 js-lines">Projects</h1>

//                         <div className="containerport">
//                             {images.map((img, index) => (
//                                 <img
//                                     key={index}
//                                     className='portimg'
//                                     src={img}
//                                     alt="Project"
//                                     data-toggle="modal"
//                                     data-target="#exampleModal"
//                                     onClick={() => setSelectedImage(img)}
//                                     draggable={false} // 🔒 Prevent drag
//                                     onContextMenu={(e) => e.preventDefault()} // 🔒 Prevent right-click on image
//                                     style={{
//                                         userSelect: 'none',
//                                         WebkitUserSelect: 'none',
//                                         MozUserSelect: 'none',
//                                     }}
//                                 />
//                             ))}
//                         </div>

//                         {selectedImage && (
//                             <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
//                                 <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                                     <button className="close-btn" onClick={() => setSelectedImage(null)}>
//                                         &times;
//                                     </button>
//                                     <img
//                                         src={selectedImage}
//                                         alt="Enlarged"
//                                         className="modal-image"
//                                         draggable={false} // 🔒 Prevent drag in modal
//                                         onContextMenu={(e) => e.preventDefault()} // 🔒 Prevent right-click in modal
//                                         style={{
//                                             userSelect: 'none',
//                                             WebkitUserSelect: 'none',
//                                             MozUserSelect: 'none',
//                                         }}
//                                     />
//                                 </div>
//                             </div>
//                         )}
//                     </header>
//                 </div>

//                 <Footer />
//             </main>

//             <Navbar />
//             <div className="node" id="node" />
//             <div className="cursor" id="cursor" />
//             <div className="back-to-top zoom-cursor magnetic" />
//         </>
//     );
// }

// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import { db } from '../firebase';
// import { deleteDoc, doc } from 'firebase/firestore';
// import { storage } from '../firebase';
// import { ref, getDownloadURL, deleteObject, listAll } from 'firebase/storage';
// import './Portfolio.css';
// import { collection, getDocs } from 'firebase/firestore';
// import Footer from './Footer';

// export default function Portfolio() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/js/common.js';
//     script.async = true;

//     script.onload = () => {
//       if (typeof window.anime === 'function') {
//         window.anime();
//       } else {
//         console.error("anime is not defined");
//       }
//     };

//     document.body.appendChild(script);


//     return () => {
//       document.body.removeChild(script);
//     };
//   });
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const data = await getDocs(collection(db, "projects"));
//       setProjects(data.docs.map(doc => doc.data()));
//       console.log(data)
//     };
//     fetchProjects();

//   }, []);
//   return (
//     <>
 
//       <div className="preloader">
//         <div className="preloader__wrap">
//           <img
//             className="preloader__logo"
//             src="./img/logo2.png"
//             alt="VARDAAN INTERIORS"
//           />

//         </div>
//       </div>
   
// <Navbar/>

//       <main className="js-scroll">
//         <div className="container-fully">
//           <header className="header-page">
//             <h1 className="title portfoliotitle title--h1 js-lines">Projects</h1>

//             <div className="containerport">
//               {projects.map(project => (
             
//                 <div
//                   key={project.id}
//                   onClick={() => navigate(`/project/${project.id}`)}
//                 >
//                   <img className='portimg' src={project.thumbnail} alt="thumbnail" data-toggle="modal" data-target="#exampleModal" onClick={() => setSelectedImage(project)} />

//                 </div>
//               ))}
//             </div>


//             {selectedImage && (
//               <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
//                 <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                   <button className="close-btn" onClick={() => setSelectedImage(null)}>
//                     &times;
//                   </button>
//                   <img src={selectedImage} alt="Enlarged" className="modal-image" />
//                 </div>
//               </div>
//             )}


//           </header>
//         </div>

//       </main>
//       <Footer />



//       <div className="overlay-slideNav" />
   
//       <div className="node" id="node" />
//       <div className="cursor" id="cursor" />
//       <div className="back-to-top zoom-cursor magnetic" />


//     </>


//   )
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Portfolio.css';
import Logo from './Logo';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
 useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/common.js';
    script.async = true;

    script.onload = () => {
      if (typeof window.anime === 'function') {
        window.anime();
      } else {
        console.error("anime is not defined");
      }
    };

    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };
  });
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getDocs(collection(db, "projects"));
      setProjects(data.docs.map(doc => doc.data()));
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="preloader__wrap">
          <img className="preloader__logo" src="./img/logo2.png" alt="VARDAAN INTERIORS" />
        </div>
      </div>

      {/* Top */}
              <nav className="navbar navbar-compact">
      
                <Logo />
                <div className="ml-sm-auto">
                  <button className="hamburger zoom-cursor magnetic" type="button">
                    <span className="hamburger__inner" />
                  </button>
                </div>
              </nav>

      <Navbar />

      <main className="js-scroll">
        <div className="container-fully">
          <header className="header-page">
            <h1 className="title portfoliotitle title--h1 js-lines">Projects</h1>

            <div className="containerport">
              {projects.map(project => (
                // <div
                //   key={project.id}
                //   onClick={() => navigate(`/project?id=${project.id}`)}
                // >
                //   <img
                //     className='portimg'
                //     src={project.thumbnail}
                //     alt="thumbnail"
                //     data-toggle="modal"
                //     data-target="#exampleModal"
                //     onClick={() => setSelectedImage(project)}
                //   />
                // </div>
<div
  key={project.id}
  className="project-card"
  onClick={() => navigate(`/project?id=${project.id}`)}
>
  <div className="thumbnail-wrapper">
    <img
      className="portimg"
      src={project.thumbnail}
      alt={project.title}
    />
    <div className="overlay-title">
      <span>{project.title}</span>
    </div>
  </div>
</div>
              ))}
            </div>
     {selectedImage && (
              <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={() => setSelectedImage(null)}>
                    &times;
                  </button>
                  <img src={selectedImage} alt="Enlarged" className="modal-image" />
                </div>
              </div>
            )}
          </header>
        </div>
      </main>

      <Footer />
    </>
  );
}
