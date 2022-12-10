import { FC } from 'react'
import './Tips.css';

const Tips: FC = () => {
  return (
    <>
      <div className="Tips1">
        <div className='Title1'>Tipy</div>
        <div className='Button1'>Zobraziť všetky</div>
      </div>
      <div className='Tips2'>
        <div>
          <div className='Title2'>Vedeli ste o tom, že...</div>
          <div className='SubTitle'>...môžete svojej rodine a priateľom zavolať cez Zoom?</div>
        </div>
        <button className='Button2'>Chcem to skúsiť</button>
      </div>
    </>
  );
}

export default Tips;
