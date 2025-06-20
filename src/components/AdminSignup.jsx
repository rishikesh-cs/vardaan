import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Admin signed up successfully!');
      navigate('/admin');  // Redirect to admin panel
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Admin Sign Up</h2>
      <input
        type="email"
        className="input form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="input form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className='btn' type="submit">Sign Up</button>
    </form>
  );
};

export default AdminSignup;