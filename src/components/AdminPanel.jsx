import { useState } from 'react';
import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

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

  return (
    <>
    <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '50px auto' }}>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Upload Image</button>
    </form>
     <div>
     <h2>Welcome Admin</h2>
     <LogoutButton/>
     {/* Your admin UI */}
   </div>
   </>
  );
}

export default AdminPanel;
