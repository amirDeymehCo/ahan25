import {
  BgVideo,
  DivBtnPlayer,
  DivProgress,
  DivProgressVideo,
  DivTextTime,
  DivTextVideo,
  FooterHeaderCardPlayer,
  ProgressTime,
  SharePlayer,
} from "../PlayerStyles";
import { useEffect, useRef, useState } from "react";
import { HeaderCardPlayer } from "../PlayerStyles";
import {
  BackMusic,
  Comment,
  Date,
  Like,
  NextMusic,
  PlayerMusic,
  PuseMusic,
  Shear,
  Visit,
} from "../../../../Icons/Icons";

const HeaderCard = () => {
  const videoAuto = useRef();
  const [playVideo, setPlayVideo] = useState(true);
  const [currentTimePlayer, setCurrentTimePlayer] = useState("");
  const [timeVideo, setTimeVideo] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [duration, setDuration] = useState("");
  const progressSlider = useRef();
  const handelPlay = () => {
    if (playVideo) {
      videoAuto.current.play();
      setPlayVideo(false);
    } else {
      videoAuto.current.pause();
      setPlayVideo(true);
    }
  };

  const handelNext = () => {
    videoAuto.current.currentTime += 5;
  };

  const handelPrev = () => {
    videoAuto.current.currentTime -= 5;
  };

  useEffect(() => {
    if (videoAuto.current && !playVideo) {
      const interval = setInterval(() => {
        var minutes = Math.floor((videoAuto.current.currentTime % 3600) / 60);
        var seconds = Math.floor(videoAuto.current.currentTime % 60);
        seconds = seconds > 9 ? seconds : `0${seconds}`;
        setCurrentTimePlayer(`${minutes}:${seconds}`);
        setCurrentTime(videoAuto.current.currentTime);
        setDuration(videoAuto.current.duration);
        if (videoAuto.current.currentTime === videoAuto.current.duration) {
          setPlayVideo(false);
        }
      }, 1000);
      var minutes = Math.floor((videoAuto.current.duration % 3600) / 60);
      var seconds = Math.floor(videoAuto.current.duration % 60);
      seconds = seconds > 9 ? seconds : `0${seconds}`;
      setTimeVideo(`${minutes}:${seconds}`);
      return () => {
        clearInterval(interval);
      };
    }
  }, [videoAuto, playVideo]);

  function setProgress(e) {
    const newTime = e.offsetX / progressSlider.current.offsetWidth;
    videoAuto.current.currentTime = newTime * videoAuto.current.duration;
    setCurrentTime(videoAuto.current.currentTime);
  }

  return (
    <HeaderCardPlayer>
      <SharePlayer className="btn-shear">
        <Shear />
      </SharePlayer>
      <BgVideo
        ref={videoAuto}
        className="bg-music"
        src="https://dominikfrackowiak.github.io/Custom-HTML5-Video-Player/video.mp4"
      ></BgVideo>
      <DivBtnPlayer>
        <h5 className="name-video">افزایش نرخ تورم و تاثیر آن بر</h5>
        <div>
          <button className="btn-player next" onClick={handelNext}>
            <NextMusic />
          </button>
          <button className="btn-player play" onClick={handelPlay}>
            {playVideo ? <PlayerMusic /> : <PuseMusic />}
          </button>
          <button className="btn-player back" onClick={handelPrev}>
            <BackMusic />
          </button>
        </div>
      </DivBtnPlayer>
      <DivProgressVideo onMouseDown={setProgress}>
        <ProgressTime
          ref={progressSlider}
          width={`${(currentTime / duration) * 100}%`}
          className="prograss-time"
        ></ProgressTime>
      </DivProgressVideo>
      <DivTextVideo>
        <span>{timeVideo}</span>
        <span>{currentTimePlayer}</span>
      </DivTextVideo>
      <FooterHeaderCardPlayer>
        <div>
          <Comment />
          109 نظر
        </div>
        <div>
          <Visit />
          109 بازدید
        </div>
        <div>
          <Date />
          12 بهمن،1400
        </div>
        <div>
          <Like />
          200
        </div>
      </FooterHeaderCardPlayer>
    </HeaderCardPlayer>
  );
};

export default HeaderCard;
