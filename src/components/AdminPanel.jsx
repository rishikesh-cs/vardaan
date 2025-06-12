// import { useState, useEffect } from 'react';
// import { storage, db } from '../firebase';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { collection, addDoc } from 'firebase/firestore';
// import { v4 as uuidv4 } from 'uuid';
// import {  Link } from 'react-router-dom';
// import LogoutButton from './LogoutButton';
// import Footer from './Footer';
// import Navbar from './Navbar';

// function AdminPanel() {
//    const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);

//   // const [file, setFile] = useState(null);
//   // const [title, setTitle] = useState('');
//   // const navigate = useNavigate();

//   // const handleUpload = async (e) => {
//   //   e.preventDefault();
//   //   if (!file || !title) {
//   //     alert('Please select file and enter title.');
//   //     return;
//   //   }

//   //   const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);

//   //   try {
//   //     await uploadBytes(imageRef, file);
//   //     const url = await getDownloadURL(imageRef);  // This is the URL you need

//   //     await addDoc(collection(db, 'images'), {
//   //       title: title,
//   //       imageUrl: url,  // Store the full URL here
//   //       createdAt: new Date()
//   //     });

//   //     alert('Image uploaded successfully!');
//   //     navigate('/display');
//   //   } catch (error) {
//   //     console.error(error);
//   //     alert('Upload failed.');
//   //   }
//   // };
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/js/common.js'; // path relative to public/
//     script.async = true;

//     script.onload = () => {
//       if (typeof window.anime === 'function') {
//         window.anime(); // Call the function
//       } else {
//         console.error("anime is not defined");
//       }
//     };

//     document.body.appendChild(script);

//     // Cleanup
//     return () => {
//       document.body.removeChild(script);
//     };
//   });



//  const handleUpload = async (e) => {
//    e.preventDefault();
//     if (!title || !description || !thumbnail || images.length === 0) {
//       alert("All fields are required!");
//       return;
//     }

//     const projectId = uuidv4();

//     // Upload thumbnail
//     const thumbRef = ref(storage, `projects/${projectId}/thumbnail_${thumbnail.name}`);
//     await uploadBytes(thumbRef, thumbnail);
//     const thumbnailUrl = await getDownloadURL(thumbRef);

//     // Upload gallery images
//     const imageUrls = [];
//     for (let i = 0; i < images.length; i++) {
//       const imgRef = ref(storage, `projects/${projectId}/images/${images[i].name}`);
//       await uploadBytes(imgRef, images[i]);
//       const url = await getDownloadURL(imgRef);
//       imageUrls.push(url);
//     }

//     // Save to Firestore
//     await addDoc(collection(db, "projects"), {
//       id: projectId,
//       title,
//       description,
//       thumbnail: thumbnailUrl,
//       images: imageUrls,
//       createdAt: Date.now()
      
//     });

//     alert("Project uploaded successfully!");
//     setTitle("");
//     setDescription("");
//     setThumbnail(null);
//     setImages([]);
//   };





//   return (
//     <>

//       {/* Preloader */}
//       <div className="preloader">
//         <div className="preloader__wrap">
//           <img
//             className="preloader__logo"
//             src="./img/logo2.png"
//             alt="vardaan interior design"
//           />
//           <div className="preloader__progress">
//             <span />
//           </div>
//         </div>
//       </div>
//       {/* Top */}
//       <nav className="navbar navbar-compact">
//         <div className="mr-auto">
//           {/* <a className="logo-link magnetic" href="index.html"> */}
//           <Link className="logo-link magnetic" to='/'>
//             <img
//               className="logotype"
//               src="./img/logo5.png"
//               alt="vardaan interior design"
//             />
//           </Link>
//           {/* </a> */}
//         </div>
//         <div className="ml-sm-auto">
//           <button className="hamburger zoom-cursor magnetic" type="button">
//             <span className="hamburger__inner" />
//           </button>
//         </div>
//       </nav>
//       <main className="js-scroll">
//         <div className="container-fullyy vh-100 text-right ">
//           <div >
//             <LogoutButton />
//           </div>

//           <div className="row  align-items-md-center">
//             <div className="col-12 col-lg-12 col-xl-12">
//               <div className=''>
//                 <div>
//                   <h3 className="title text-center title--h1 js-lines">Welcome <span style={{ color: "rgb(105, 18, 129)" }}>Pulkit</span></h3>
//                 </div>

//               </div>
//  <div>
//  <form onSubmit={handleUpload}   id="contact-form"  className="contact-form"  data-toggle="validator">
//    <div className="row">
//                   <div className="form-group col-12 col-md-12">
//   <input type="text" placeholder="Title" value={title}   className="input form-control"   id="nameContact" onChange={e => setTitle(e.target.value)} />
//                   </div>
//      <div className="form-group col-12 col-md-12">
//   <textarea placeholder="Description" value={description} className="input form-control"   id="nameContact"  onChange={e => setDescription(e.target.value)} />
//                   </div>
     
//       <div className="form-group col-12 col-md-12">
       
//         <input type="file" className="input form-control"   id="nameContact" placeholder='Main Image' onChange={e => setThumbnail(e.target.files[0])} />
//       </div>
//       <div className="form-group col-12 col-md-12">
//         <label>Gallery Images:</label>
//         <input type="file"  className="input form-control"   id="nameContact"  multiple onChange={e => setImages([...e.target.files])} />
//       </div>
//       <button type='submit' >Upload Project</button>
//       </div>
//       </form>
//     </div>
//               {/* <form onSubmit={handleUpload}
//                 id="contact-form"
//                 className="contact-form"
//                 data-toggle="validator"
//               >
//                 <div className="row">
//                   <div className="form-group col-12 col-md-12">
//                     <input

//                       type="text"
//                       placeholder="Enter title"
//                       value={title} onChange={(e) => setTitle(e.target.value)}
//                       className="input form-control"
//                       id="nameContact"
//                       name="nameContact"

//                       required="required"
//                       autoComplete="on"
//                     />
//                     <div className="help-block with-errors" />
//                   </div>
//                   <div className="form-group col-12 col-md-12">
//                     <input 
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => setFile(e.target.files[0])}
//                       className="input form-control"
//                       id="emailContact"
//                       name="emailContact"
//                       placeholder=""
//                       required="required"
//                       autoComplete="on"
//                     />
//                     <div className="help-block with-errors" />
//                   </div>

//                   <div className="col-12 text-center">
//                     <button type="submit" className="btn">
//                       Upload Image
//                     </button>
//                   </div>
//                 </div>
//                 <div id="validator-contact" className="hidden">
//                   &nbsp;
//                 </div>
//               </form> */}
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '50px auto' }}>
//       <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
//       <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <button type="submit">Upload Image</button>
//     </form> */}
//       {/* <div> */}
//       {/* <h2>Welcome Admin</h2> */}

//       {/* Your admin UI */}
//       {/* </div> */}
//       <Navbar />
//       <Footer />
//     </>
//   );
// }

// export default AdminPanel;
import { useState, useEffect } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Footer from './Footer';
import Navbar from './Navbar';

function AdminPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);

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
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      const list = snapshot.docs.map(docSnap => ({ docId: docSnap.id, ...docSnap.data() }));
      setProjects(list);
    };

    fetchProjects();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !description || !thumbnail || images.length === 0) {
      alert("All fields are required!");
      return;
    }

    const projectId = uuidv4();

    const thumbRef = ref(storage, `projects/${projectId}/thumbnail_${thumbnail.name}`);
    await uploadBytes(thumbRef, thumbnail);
    const thumbnailUrl = await getDownloadURL(thumbRef);

    const imageUrls = [];
    for (let i = 0; i < images.length; i++) {
      const imgRef = ref(storage, `projects/${projectId}/images/${images[i].name}`);
      await uploadBytes(imgRef, images[i]);
      const url = await getDownloadURL(imgRef);
      imageUrls.push(url);
    }

    await addDoc(collection(db, "projects"), {
      id: projectId,
      title,
      description,
      thumbnail: thumbnailUrl,
      images: imageUrls,
      createdAt: Date.now()
    });

    alert("Project uploaded successfully!");
    setTitle("");
    setDescription("");
    setThumbnail(null);
    setImages([]);
  };

  const handleUpdate = async (project) => {
    const docRef = doc(db, "projects", project.docId);
    await updateDoc(docRef, {
      title: project.title,
      description: project.description,
    });
    alert("Project updated!");
  };

  const handleDeleteProject = async (project) => {
    if (!window.confirm("Delete entire project?")) return;

    try {
      const thumbRef = ref(storage, project.thumbnail);
      await deleteObject(thumbRef).catch(() => {});

      for (let url of project.images) {
        const imgRef = ref(storage, url);
        await deleteObject(imgRef).catch(() => {});
      }

      await deleteDoc(doc(db, "projects", project.docId));
      setProjects(projects.filter(p => p.docId !== project.docId));
      alert("Project deleted!");
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const handleDeleteImage = async (project, imageUrl) => {
    if (!window.confirm("Delete image?")) return;

    const imgRef = ref(storage, imageUrl);
    await deleteObject(imgRef);

    const updatedImages = project.images.filter(img => img !== imageUrl);
    await updateDoc(doc(db, "projects", project.docId), { images: updatedImages });

    setProjects(projects.map(p =>
      p.docId === project.docId ? { ...p, images: updatedImages } : p
    ));
  };

  return (
    <>
      <div className="preloader">
        <div className="preloader__wrap">
          <img className="preloader__logo" src="./img/logo2.png" alt="vardaan interior design" />
          <div className="preloader__progress"><span /></div>
        </div>
      </div>

      {/* <nav className="navbar navbar-compact">
        <div className="mr-auto">
          <Link className="logo-link magnetic" to='/'>
            <img className="logotype" src="./img/logo5.png" alt="vardaan interior design" />
          </Link>
        </div>
        <div className="ml-sm-auto">
          <button className="hamburger zoom-cursor magnetic" type="button">
            <span className="hamburger__inner" />
          </button>
        </div>
      </nav> */}
<Navbar/>
      <main className="js-scroll">
        <div className="container-fullyy vh-100 text-right">
          <div><LogoutButton /></div>

          <div className="row align-items-md-center">
            <div className="col-12">
              <h3 className="title text-center title--h1 js-lines">
                Welcome <span style={{ color: "rgb(105, 18, 129)" }}>Pulkit</span>
              </h3>

              <form onSubmit={handleUpload} className="contact-form" id="contact-form">
                <div className="row">
                  <div className="form-group col-12">
                    <input type="text" placeholder="Title" value={title} className="input form-control" onChange={e => setTitle(e.target.value)} />
                  </div>
                  <div className="form-group col-12">
                    <textarea placeholder="Description" value={description} className="input form-control" onChange={e => setDescription(e.target.value)} />
                  </div>
                  <div className="form-group col-12">
                    <input type="file" className="input form-control" onChange={e => setThumbnail(e.target.files[0])} />
                  </div>
                  <div className="form-group col-12">
                    <label>Gallery Images:</label>
                    <input type="file" className="input form-control" multiple onChange={e => setImages([...e.target.files])} />
                  </div>
                  <button className='btn' type="submit">Upload Project</button>
                </div>
              </form>

              <hr />
              <h3>All Projects</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {projects.map(project => (
                  <div key={project.docId} style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
                    <img src={project.thumbnail} alt="thumb" width="100%" />
                    <input
                    className="input form-control"
                      type="text"
                      value={project.title}
                      onChange={e => setProjects(projects.map(p => p.docId === project.docId ? { ...p, title: e.target.value } : p))}
                    />
                    <textarea
                    className="input form-control"
                      value={project.description}
                      onChange={e => setProjects(projects.map(p => p.docId === project.docId ? { ...p, description: e.target.value } : p))}
                    />
                    <button className='btn' style={{width:"100%"}} onClick={() => handleUpdate(project)}>Save</button>
                    <button className='btn' style={{width:"100%"}} onClick={() => handleDeleteProject(project)}>Delete Project</button>
                    <h5>Images</h5>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {project.images.map((img, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <img src={img} alt="" width="80" />
                          <button style={{ position: "absolute", top: 0, right: 0 }} onClick={() => handleDeleteImage(project, img)}>❌</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* <Navbar /> */}
   
    </>
  );
}

export default AdminPanel;

// import { useState, useEffect } from 'react';
// import { storage, db } from '../firebase';
// import { ref, uploadBytes, getDownloadURL, deleteObject,listAll  } from 'firebase/storage';
// import { collection, addDoc,getDocs, deleteDoc, doc} from 'firebase/firestore';

// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate} from 'react-router-dom';
// import LogoutButton from './LogoutButton';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import Logo from './Logo';

// function AdminPanel() {
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState('');
//   const navigate = useNavigate(); 

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file || !title) {
//       alert('Please select file and enter title.');
//       return;
//     }

//     const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);

//     try {
//       await uploadBytes(imageRef, file);
//       const url = await getDownloadURL(imageRef);  // This is the URL you need

//       await addDoc(collection(db, 'images'), {
//         title: title,
//         imageUrl: url,  // Store the full URL here
//         createdAt: new Date()
//       });

//       alert('Image uploaded successfully!');

//     } catch (error) {
//       console.error(error);
//       alert('Upload failed.');
//     }
//   };
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

//     // Cleanup
//     return () => {
//       document.body.removeChild(script);
//     };
//   });
// const fetchUploadedImages = async () => {
//   const imageRef = ref(storage, 'images');
//   try {
//     const res = await listAll(imageRef);
//     const urls = await Promise.all(
//       res.items.map((itemRef) => getDownloadURL(itemRef))
//     );
//     setUploadedImages(urls);
//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// };

// const deleteImage = async (url) => {
//   const imagePath = decodeURIComponent(new URL(url).pathname.split('/o/')[1].split('?')[0]);
//   const imageRef = ref(storage, imagePath);

//   try {
//     await deleteObject(imageRef);
//     setUploadedImages((prev) => prev.filter((img) => img !== url));
//     alert('Image deleted successfully!');
//   } catch (error) {
//     console.error('Error deleting image:', error);
//     alert('Failed to delete image.');
//   }
// };

// useEffect(() => {
//   fetchUploadedImages();

//   // your script loading logic remains unchanged...
// }, []);
//   return (
//     <>

//       {/* Preloader */}
//       <div className="preloader">
//         <div className="preloader__wrap">
//           <img
//             className="preloader__logo"
//             src="./img/logo2.png"
//             alt="vardaan interior design"
//           />
      
//         </div>
//       </div>
//       {/* Top */}
//       <nav className="navbar navbar-compact">
 
//         <Logo/>
//         <div className="ml-sm-auto">
//           <button className="hamburger zoom-cursor magnetic" type="button">
//             <span className="hamburger__inner" />
//           </button>
//         </div>
//       </nav>
//       <main className="js-scroll">
//         <div className="container-fullyy vh-100 text-right ">
//           <div >
//             <LogoutButton />
//           </div>

//           <div className="row  align-items-md-center">
//             <div className="col-12 col-lg-12 col-xl-12">
//               <div className=''>
//                 <div>
//                   <h3 className="title text-center title--h1 js-lines">Welcome <span style={{ color: "rgb(105, 18, 129)" }}>Pulkit</span></h3>
//                 </div>

//               </div>

//               <form onSubmit={handleUpload}
//                 id="contact-form"
//                 className="contact-form"
//                 data-toggle="validator"
//               >
//                 <div className="row">
//                   <div className="form-group col-12 col-md-12">
//                     <input

//                       type="text"
//                       placeholder="Enter Title"
//                       value={title} onChange={(e) => setTitle(e.target.value)}
//                       className="input form-control"
//                       id="nameContact"
//                       name="nameContact"

//                       required="required"
//                       autoComplete="on"
//                     />
//                     <div className="help-block with-errors" />
//                   </div>
//                   <div className="form-group col-12 col-md-12">
//                     <input 
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => setFile(e.target.files[0])}
//                       className="input form-control"
//                       id="emailContact"
//                       name="emailContact"
//                       placeholder=""
//                       required="required"
//                       autoComplete="on"
//                     />
//                     <div className="help-block with-errors" />
//                   </div>

//                   <div className="col-12 text-center">
//                     <button type="submit" className="btn">
//                       Upload Image
//                     </button>
//                   </div>
//                 </div>
//                 <div id="validator-contact" className="hidden">
//                   &nbsp;
//                 </div>
//               </form>
//             </div>

//           </div>
//         </div>
//       <div className="container mt-5">
//   <h4 className="text-center mb-3">Uploaded Images</h4>
//   <div className="row">
//     {uploadedImages.map((img, index) => (
//       <div className="col-md-4 mb-4" key={index}>
//         <div style={{backgroundColor:"black"}} className="card h-100 shadow-sm">
//           <img
//             src={img}
//             className="card-img-top"
//             alt={`uploaded-${index}`}
//             style={{ height: '200px', objectFit: 'cover' }}
//           />
//           <div className="card-body  d-flex flex-column">
//             <button
//               className="btn  mt-auto"
//               onClick={() => deleteImage(img)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//     {uploadedImages.length === 0 && (
//       <div className="col-12 text-center">
//         <p>No images uploaded yet.</p>
//       </div>
//     )}
//   </div>
// </div>
//       </main>

//       <Navbar />
//       <Footer />
//     </>
//   );
// }

// export default AdminPanel;