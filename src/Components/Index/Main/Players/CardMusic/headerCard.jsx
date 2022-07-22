import image1 from "../1.jpg";
import { useEffect, useRef, useState } from "react";
import {
  ProgressTime,
  HeaderCardPlayer,
  SharePlayer,
  BgMusic,
  DivBtnPlayer,
  DivProgress,
  FooterHeaderCardPlayer,
  DivTextTimeMusic,
  DivProgressMusic,
} from "../PlayerStyles";
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

const HeaderCard = ({ musicAuto }) => {
  const progress = useRef();
  const parentProgress = useRef();
  const [playMusic, setPlayMusic] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [duration, setDuration] = useState("");

  const [currentTimePlayer, setCurrentTimePlayer] = useState("");
  const [timeMusic, setTimeMusic] = useState("");

  let srcMusic =
    "https://dls.music-fa.com/tagdl/1401/Mohsen%20Ebrahimzade%20-%20Rafti%20(128).mp3";

  useEffect(() => {
    musicAuto.current.src = srcMusic;
  }, [srcMusic]);

  const handelPlay = () => {
    if (playMusic) {
      musicAuto.current.pause();
      setPlayMusic(false);
    } else {
      musicAuto.current.play();
      setPlayMusic(true);
    }
  };

  useEffect(() => {
    if (musicAuto.current && playMusic) {
      const interval = setInterval(() => {
        var minutes = Math.floor((musicAuto.current.currentTime % 3600) / 60);
        var seconds = Math.floor(musicAuto.current.currentTime % 60);
        seconds = seconds > 9 ? seconds : `0${seconds}`;
        setCurrentTimePlayer(`${minutes}:${seconds}`);
        if (musicAuto.current.currentTime === musicAuto.current.duration) {
          setPlayMusic(false);
        }
      }, 1000);
      var minutes = Math.floor((musicAuto.current.duration % 3600) / 60);
      var seconds = Math.floor(musicAuto.current.duration % 60);
      seconds = seconds > 9 ? seconds : `0${seconds}`;
      setTimeMusic(`${minutes}:${seconds}`);
      return () => clearInterval(interval);
    }
  }, [musicAuto, srcMusic, playMusic]);

  useEffect(() => {
    if (playMusic) {
      const interval = setInterval(() => {
        const duration = musicAuto.current.duration;
        const currentTime = musicAuto.current.currentTime;

        setDuration(duration);
        setCurrentTime(currentTime);
        if (duration === currentTime) {
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        return clearInterval(interval);
      };
    }
  }, [playMusic, duration, currentTime]);

  const handelNext = () => {
    musicAuto.current.currentTime -= 5;
  };

  function setProgressBar(event) {
    const width = event.target.clientWidth;
    const clickX = parentProgress.current.offsetX;
    const duration = musicAuto.current.duration;
    musicAuto.current.currentTime = (clickX / width) * duration;
  }

  const handelPrev = () => {
    musicAuto.current.currentTime += 5;
  };

  return (
    <HeaderCardPlayer>
      <SharePlayer>
        <Shear />
      </SharePlayer>
      <BgMusic src={image1} alt="bg " />
      <div className="cover-bg"></div>
      <DivBtnPlayer>
        <h5 className="name-video">افزایش نرخ تورم و تاثیر آن بر</h5>
        <div>
          <button className="btn-player next" onClick={handelPrev}>
            <NextMusic />
          </button>
          <button onClick={handelPlay} className="btn-player play">
            {!playMusic ? <PlayerMusic /> : <PuseMusic />}
          </button>
          <button className="btn-player back" onClick={handelNext}>
            <BackMusic />
          </button>
        </div>
      </DivBtnPlayer>
      <DivProgressMusic ref={parentProgress} onClick={setProgressBar}>
        <ProgressTime
          className="prograss-time"
          music={true}
          width={`${(currentTime / duration) * 100}%`}
          ref={progress}
        ></ProgressTime>
      </DivProgressMusic>
      <DivTextTimeMusic>
        <span>{timeMusic}</span>
        <span>{currentTimePlayer}</span>
      </DivTextTimeMusic>
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
