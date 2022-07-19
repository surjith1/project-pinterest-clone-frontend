import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";
import { imgList } from "../components/data/imageList";
import Signup from "../Signup/Signup";
import Topbar from "./Topbar";
import SliderContent from "./SliderContent";
import ChartsReact from "./ChartReact";

const Home = () => {
  return (
    <div className="home-wrap">
      <Topbar />
      <div className="content-wrap">
        <h1>Get Your Next</h1>
        <div className="slider">
          <input
            name="input-slider"
            id="input-slide-0"
            type="radio"
            className="input-slide input-slide-num"
          />
          <input
            name="input-slider"
            id="input-slide-1"
            type="radio"
            className="input-slide input-slide-num"
          />
          <input
            name="input-slider"
            id="input-slide-2"
            type="radio"
            className="input-slide input-slide-num"
          />
          <input
            name="input-slider"
            id="input-slide-3"
            type="radio"
            className="input-slide input-slide-num"
          />
          <input
            name="input-slider"
            id="input-slide-autoplay"
            type="radio"
            className="input-slide"
            checked
          />
          <ul>
            <li className="slide-0"></li>
            <li className="slide-1"></li>
            <li className="slide-2"></li>
            <li className="slide-3"></li>
          </ul>
          <div className="slide-description">
            <label className="slide-0">
              <SliderContent heading="DYI Idea" color="blue" />
            </label>
            <label className="slide-1">
              <SliderContent heading="chai time snacks idea" color="brown" />
            </label>
            <label className="slide-2">
              <SliderContent heading="home decor idea" color="green" />
            </label>
            <label className="slide-3">
              <SliderContent heading={"outfit idea"} color="violet" />
            </label>
          </div>
          <div className="slider-arrow-prev">
            <label className="slide-0" for="input-slide-0"></label>
            <label className="slide-1" for="input-slide-1"></label>
            <label className="slide-2" for="input-slide-2"></label>
            <label className="slide-3" for="input-slide-3"></label>
          </div>
          <div className="slider-arrow-next">
            <label className="slide-0" for="input-slide-0"></label>
            <label className="slide-1" for="input-slide-1"></label>
            <label className="slide-2" for="input-slide-2"></label>
            <label className="slide-3" for="input-slide-3"></label>
          </div>
          <div className="slider-dot">
            <label className="slide-0" for="input-slide-0"></label>
            <label className="slide-1" for="input-slide-1"></label>
            <label className="slide-2" for="input-slide-2"></label>
            <label className="slide-3" for="input-slide-3"></label>
          </div>
        </div>
      </div>
      <div className="home-sec-2">
        <Searchsection />
      </div>
      <div className="home-sec-last">
        <SignupSection imgList={imgList} />
      </div>
    </div>
  );
};

const Searchsection = () => {
  return (
    <div className="search-sec-wrap">
      <div className="search-left">
        <div className="img-1">
          <img
            src="https://s.pinimg.com/webapp/topRight-d0230035.png"
            alt="topimage"
          />
        </div>
        <div className="img-2">
          <img
            src="https://s.pinimg.com/webapp/left-511a9304.png"
            alt="topleft"
          />
        </div>
        <div className="img-3">
          <img
            src="https://s.pinimg.com/webapp/right-88044782.png"
            alt="topleft"
          />
        </div>
        <div className="img-4">
          <img
            src="https://s.pinimg.com/webapp/center-77497603.png"
            alt="topleft"
          />
        </div>
        <div className="img-5">
          <div className="img-5-wrap">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>easy chicken dinner</span>
          </div>
        </div>
      </div>
      <div className="search-right ">
        <div>
          <h1 className="primary-big text-error">Search for an idea</h1>
          <p className="secondary-big text-error text-center">
            What do you want to try next? Think of something you’re into—like
            “easy chicken dinner”—and see what you find.
          </p>
          <Button variant="contained" color="error">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

const SignupSection = ({ imgList }) => {
  const [imgdata, setImgdata] = useState(imgList);
  return (
    <div className="signup-sec-wrap">
      <div className="img-wrapper">
        <ImageList cols={5} gap={8} rowHeight={230}>
          {imgdata.map((item) => {
            return (
              <ImageListItem key={item.title}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.url}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
      <div className="signup-home">
        <Signup />
      </div>
    </div>
  );
};
export default Home;
