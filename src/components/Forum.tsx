import { FC } from 'react'
import './Forum.css';

const Forum: FC = () => {
  return (
    <>
      <div className="Forum1">
        <div className='Title1'>Fórum</div>
        <div className='ForumButton1'>Vaše správy</div>
      </div>
      <div className='Forum2'>
        <div>
          <div className='ForumSubTitle'>Ako môžem vymazať staré fotky?</div>
        </div>
        <button className='Button2'>Zobraziť 4 nové</button>
      </div>
    </>
  );
}

export default Forum;
