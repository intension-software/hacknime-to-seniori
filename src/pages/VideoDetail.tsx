import { FC, useEffect, useRef } from 'react'

const VideoDetail: FC = () => {
  const video = useRef<HTMLVideoElement>(null)
  const playpauseBtn = useRef<HTMLImageElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)

  const playpause = () => {
    if (video.current) {
      if (video.current.paused) {
        video.current.play()
        playpauseBtn.current!.src = '/svgs/pause.svg'
      } else {
        video.current.pause()
        playpauseBtn.current!.src = '/svgs/play.svg'
      }
    }
  }

  const volume = () => {
    if (video.current) {
      if (video.current.muted) {
        video.current.muted = false
      } else {
        video.current.muted = true
      }
    }
  }

  const full = () => {
    if (video.current) {
      if (video.current.requestFullscreen) {
        video.current.requestFullscreen()
      }
    }
  }

  const progress = () => {
    if (video.current) {
      if (progressBar.current) {
        const percentage = (video.current!.currentTime / video.current!.duration) * 100
        progressBar.current.style.width = `${percentage}%`
      }
    }
  }

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener('timeupdate', () => {
        if (progressBar.current) {
          const percentage = (video.current!.currentTime / video.current!.duration) * 100
          progressBar.current.style.width = `${percentage}%`
        }
      })

      video.current.addEventListener('ended', () => {
        if (playpauseBtn.current) {
          playpauseBtn.current!.src = '/svgs/play.svg'
        }
      })
    }
  }, [])

  useEffect(() => {
    if (video.current) {
      video.current.play()
      playpauseBtn.current!.src = '/svgs/pause.svg'
    }
  }, [])

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
        <video controls ref={video} src="./videos/video.mp4"></video>
        <div className="overlay" style={{ display: 'none' }}>
          <div id="progress" onClick={progress}>
            <div id="progress-bar" ref={progressBar}></div>
          </div>
          <div className="controls">
            <button id="playpause" type="button" onClick={playpause}>
              <img ref={playpauseBtn} src="/svgs/play.svg" alt="play" />
            </button>
            <button id="volume" type="button" onClick={volume}>
              <img src="/svgs/volume.svg" alt="pause" />
            </button>
            <button id="full" type="button" onClick={full}>
              <img src="/svgs/full.svg" alt="pause" />
            </button>
          </div>
        </div>
      </div>
      <div className="header m0">
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
    </div>
  )
}

export default VideoDetail
