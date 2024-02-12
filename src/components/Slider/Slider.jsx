import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg?w=1060&t=st=1707558235~exp=1707558835~hmac=ffd1cfbe94fb9c13043b25baad53b8baf850f371e07dd80a17e470c1fedc5807",
    "https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1060&t=st=1707558502~exp=1707559102~hmac=5feef9d38f5c9fd0dce2c5746a3592910a09ee2b312e0cee1612fd8e7546a9ff",
    "https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201770.jpg?w=1060&t=st=1707558552~exp=1707559152~hmac=5790638c53aa54e1152b3a15f9060259ad339019ab824ad2b85173c4d42fa414",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
