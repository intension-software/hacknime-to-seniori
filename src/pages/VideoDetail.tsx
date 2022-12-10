import { FC, MouseEvent, MouseEventHandler, useEffect, useRef } from 'react'

const VideoDetail: FC = () => {
  const video = useRef<HTMLVideoElement>(null)
  const playpauseBtn = useRef<HTMLImageElement>(null)
  const muteBtn = useRef<HTMLImageElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const time = useRef<HTMLDivElement>(null)

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
        muteBtn.current!.src = '/svgs/volume.svg'
      } else {
        video.current.muted = true
        muteBtn.current!.src = '/svgs/mute.svg'
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

  useEffect(() => {
    if (video.current) {
      video.current.addEventListener('timeupdate', () => {
        if (progressBar.current) {
          const percentage = (video.current!.currentTime / video.current!.duration) * 100
          progressBar.current.style.width = `${percentage}%`
        }

        if (time.current) {
          const minutes = Math.floor(video.current!.currentTime / 60)
          const seconds = Math.floor(video.current!.currentTime - minutes * 60)
          const totalMinutes = Math.floor(video.current!.duration / 60)
          const totalSeconds = Math.floor(video.current!.duration - totalMinutes * 60)

          const currentTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
          const duration = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
          time.current.innerHTML = `${currentTime} / ${duration}`
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
        <video muted={false} ref={video} src="./videos/video.mp4"></video>
        <div className="overlay">
          <div id="progress" onClick={(event) => {
            if (video.current) {
              const percent = event.clientX / window.innerWidth
              video.current.currentTime = percent * video.current.duration
            }

            if (progressBar.current) {
              const percentage = (video.current!.currentTime / video.current!.duration) * 100
              progressBar.current.style.width = `${percentage}%`
            }

            if (time.current) {
              const minutes = Math.floor(video.current!.currentTime / 60)
              const seconds = Math.floor(video.current!.currentTime - minutes * 60)
              const totalMinutes = Math.floor(video.current!.duration / 60)
              const totalSeconds = Math.floor(video.current!.duration - totalMinutes * 60)

              const currentTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
              const duration = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
              time.current.innerHTML = `${currentTime} / ${duration}`
            }
          }}>
            <div id="progress-bar" ref={progressBar}></div>
          </div>
          <div className="controls">
            <button id="playpause" type="button" onClick={playpause}>
              <img ref={playpauseBtn} src="/svgs/play.svg" alt="play" />
            </button>
            <button id="volume" type="button" onClick={volume}>
              <img ref={muteBtn} src="/svgs/volume.svg" alt="pause" />
            </button>
            <div ref={time} className="time">00:00 / 00:00</div>
            <button id="full" type="button" onClick={full}>
              <img src="/svgs/full.svg" alt="pause" />
            </button>
          </div>
        </div>
      </div>
      <div className="header m0">
        <div className="left">
          <h1>Popis</h1>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
