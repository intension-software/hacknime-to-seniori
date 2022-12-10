import { FC, useState } from 'react'
import './Video.css';
import { useNavigate } from 'react-router-dom'

// interface VideoProps {
//   position: any;
//   maxWidth?: string;
//   maxHeight?: string;
//   width?: string;
//   height?: string;
//   top?: any;
//   left?: any;
// }


const Video: FC = () => {
  const navigate = useNavigate();

  // const [fullscreen, setFullscreen] = useState<VideoProps>({
  //   position: "absolute",
  //   width: "240px",
  //   height: "140px",
  // });

  // const handleFullscreen = () => {
  //   if (fullscreen.width === "100%") {
  //     setFullscreen({
  //       position: "absolute",
  //       maxWidth: "240px",
  //       maxHeight: "140px",
  //     })
  //   } else {
  //     setFullscreen({
  //       position: "absolute",
  //       width: "100%",
  //       height: "100%",
  //       top: 0,
  //       left: 0,
  //     })
  //   }
  // }

  return (
    <div className="Video">
      <img style={{cursor: "pointer", width: "240px", height: "140px", borderRadius: "10px"}} onClick={() => navigate('/video')} src="./images/thumbnail.png" alt="thumbnail" />
      <div>
        <div style={{color: "rgba(0, 0, 0, 0.5);", fontSize: "small"}}>Video</div>
        <div className='SubTitle'>Ako odoslať platbu?<img width="20px" height="20px" src="./images/ystar.png"/>4.1</div>
        <div style={{color: "rgba(0, 0, 0, 0.5);", fontSize: "small"}}>Digiškolitelia</div>
        
      </div>
    </div>
  );
}

export default Video;
