import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Logout failed');
    }
  };

  return <button className='btn' onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;