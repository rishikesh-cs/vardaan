import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { storage } from '../firebase';
import { ref, getDownloadURL, deleteObject, listAll } from 'firebase/storage';
import { Link } from 'react-router-dom';

function DisplayImage() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    // try {
    //   const snapshot = await getDocs(collection(db, '/images'));
    
    //   const fetchedImages = snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     ...doc.data()
    //   }));
    //   console.log(fetchedImages);
    //   setImages(fetchedImages);
    // } catch (error) {
    //   console.error('Error fetching images:', error);
    //   alert('Error loading images.');
    // }
    listAll(ref(storage,"images")).then(imgs=>{
      console.log(imgs)
      imgs.items.forEach(val=>{
          getDownloadURL(val).then(url=>{
              setImages(data=>[...data,url])
          })
      })
  })
  };

  const handleDelete = async (id, imageUrl) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    try {
      // Extract the image path from URL
      const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/';
      const bucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
      const prefix = `${baseUrl}${bucket}/o/`;
      const path = decodeURIComponent(imageUrl.replace(prefix, '').split('?')[0]);

      const imageRef = ref(storage, path);
      await deleteObject(imageRef);
      await deleteDoc(doc(db, 'images', id));

      setImages(images.filter((img) => img.id !== id));
      console.log(images)
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image.');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {images.map(img => (
          <div key={img.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '250px' }}>
            <img src={img} alt={img.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h4>{img.title}</h4>
            <button
              onClick={() => handleDelete(img.id, img.imageUrl)}
              style={{ marginTop: '10px', backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <Link to="/upload">Upload More</Link>
    </div>
  );
}

export default DisplayImage;
