import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import storage from '../utils/storage';

interface IUser {
  email: string;
  password: string;
}


const Login: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rEmail, setREmail] = useState('');
  const [rPassword, setRPassword] = useState('');
  const [rControlPassword, setRControlPassword] = useState('');

  const handleLogin = (event: any) => {
    event.preventDefault();
    if (email === '' || password === '') return;

    const users = storage.getItem('users');
    const user = users.find((user: IUser) => user.email === email && user.password === password);
    if (user) {
      storage.setItem('user', user);
      navigate('/');
    }
  }

  const handleRegister = (event: any) => {
    event.preventDefault();
    const users = storage.getItem('users') || [];
    const check = users.find((user: IUser) => user.email === rEmail && user.password === rPassword);

    if (rEmail === '' || rPassword === '' || rControlPassword !== rPassword || check) return;

    storage.setItem('users', [...users, { email: rEmail, password: rPassword }])
    
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="Tips1">
          <div className='Title1'>Mám účet</div>
        </div>
        <div className='Tips2'>
          <div>
            <input onChange={(e: any) => setEmail(e.target.value)} className='Input' placeholder="Email" />
            <input type="password" onChange={(e: any) => setPassword(e.target.value)} className='Input' placeholder="Heslo" />
          </div>
          <button type="submit" className='Button2'>Prihlásiť sa</button>
        </div>
      </form>
      <form onSubmit={handleRegister}>
        <div className="Tips1">
          <div className='Title1'>Chcem si vytvoriť účet</div>
        </div>
        <div className='Tips2'>
          <div>
            <input onChange={(e) => setREmail(e.target.value)} className='Input' placeholder="Email" />
            <input type="password" onChange={(e) => setRPassword(e.target.value)} className='Input' placeholder="Heslo" />
            <input type="password" onChange={(e) => setRControlPassword(e.target.value)} className='Input' placeholder="Znova heslo" />
          </div>
          <button type="submit" className='Button2'>Zaregistrovať sa</button>
        </div>
      </form>
    </>
  );
}

export default Login;
