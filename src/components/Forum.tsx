import { FC } from 'react'
import './Forum.css';
import { useNavigate } from 'react-router-dom'

const Forum: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{paddingInline:"2rem"}}>
      <div className="Forum1">
        <div className='Title1'>Fórum</div>
        <div className='ForumButton1'>Vaše správy</div>
      </div>
      <div className='Forum2'>
        <div>
          <div className='ForumSubTitle'>Ako môžem vymazať staré fotky?</div>
        </div>
        <button className='Button2' onClick={() => navigate('/forum')}>Zobraziť 4 nové</button>
      </div>
    </div>
  );
}

export default Forum;
