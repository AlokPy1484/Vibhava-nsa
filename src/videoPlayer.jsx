import { useState,useRef,useEffect } from 'react';
import playButton from './assets/play-icon.png'
import trailer from './assets/trailer.mp4'
import './VideoPlayer.css'

function VideoPlayer(){

  //we are using a useState to toggle visibility of videoPlayer
  const [isActive,setIsActive] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlay = () =>{
    setIsActive(false);
    if (videoRef.current){
      videoRef.current.play();
      // videoRef.current.requestFullscreen()
    }
  }

  const handleClose = () => {
    setIsActive(true);
    if (videoRef.current){
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      console.log("Click outside detected");
    } else {
      console.log("Click inside container");
    }
  };

  // const handleClickOutside = (e) => {
  //   if (isActive == false) {
  //     handleClose();
  //   }
  // }


  useEffect(() => {
   
      document.addEventListener("mousedown", handleClickOutside);
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);





  return(<div>
    <div>
      <div className='image-container'>
      
        <img src={playButton} className="btnZ" 
              onClick={handlePlay}/>
      </div>
      <div  className={`video-container ${isActive ? "active":""}`}>
        <video ref={videoRef} src={trailer} controls></video>
        <p className="close-icon" onClick={handleClose}>X</p>
      </div>
    </div>
  </div>);
}

export default VideoPlayer;