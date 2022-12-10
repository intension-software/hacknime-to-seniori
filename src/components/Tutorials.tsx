import { FC } from 'react'
import './Tutorials.css';
import Video from './Video';

const Tutorials: FC = () => {
  const videos = []
  for (let i = 0; i < 54; i++) {
    videos.push(<Video />)
  }


  return (
    <section style={{paddingInline:"2rem"}}>
      <div className="Tutorials">
        <div className='Title'>Návody</div>
        <div className='Badges'>
          <div className='Badge'>Online komunikácia</div>
          <div className='Badge'>Cestovné poriadky</div>
          <div className='Badge'>Správy</div>
          <div className='Badge'>Úrady</div>
          <div className='Badge'>Užitočné aplikácie</div>
          <div className='Badge'>Zariadenia</div>
          <div className='Badge'>Hry</div>
        </div>
        <div style={{display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: "2rem"}}>
          {videos}
        </div>
      </div>
    </section>
  );
}

export default Tutorials;
