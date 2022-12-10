import { FC } from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom'
import storage from '../utils/storage';

const Header: FC = () => {
  const navigate = useNavigate();

  const user = storage.getItem('user');

  return (
    <div className="Header">
      <div className='Left'>
        <img onClick={() => navigate('/')} width="180" height="50" src='./images/logo.png'/>
        <input placeholder="Vyhľadávanie..." className='Input'/>
      </div>
      {user ? 
        <div style={{display: "flex", alignItems: "center", gap: "2rem", fontWeight: "bold"}}>
          <div>Digiškolitelia</div>
          <div onClick={() => navigate('/account')}>Užívateľ: {user.email}</div>
        </div> : 
        <div onClick={() => navigate('/login')} className='Right'>Prihlasenie / Registrácia</div>}
    </div>
  );
}

export default Header;
