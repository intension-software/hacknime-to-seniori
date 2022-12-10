import { FC } from 'react'

const VideoDetail: FC = () => {
  return (
    <div id="videodetail">
      <div className="header">
        <div className="left">
          <div>Užitočné aplikácie</div>
          <h1>Ako sa prihlásiť</h1>
          <div>Internet banking</div>
        </div>
        <div className="right">
          <div>Pokročilý</div>
          <div>4.2</div>
          <div>Odporúčame si túto činnnosť prvýkrát vyskúšať pod dohľadom</div>
        </div>
      </div>
      <div id="video">
        <video src="./videos/video.mp4"></video>
        <div className="controls">
          <button id="playpause" type="button" data-state="play">Prehrať/pozastaviť</button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
