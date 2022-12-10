import { FC, useState } from 'react'
import './Video.css';

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
      <div /*style={fullscreen}*/>
          <video style={{width: "100%", height: "100%"}} controls  src="./videos/video.mp4"></video>
          {/* <button style={{position: "absolute",bottom: "42px", right: "32px"}} onClick={handleFullscreen}>[ ]</button> */}
      </div>
    </div>
  );
}

export default Video;
