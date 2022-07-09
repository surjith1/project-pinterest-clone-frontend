import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button } from "@mui/material";
import { imgList } from "../components/data/imageList";
import Signup from "./Signup";
import Topbar from "./Topbar";

const Home = () => {
  const itemData = [
    {
      images: [
        {
          img: "https://i.pinimg.com/550x/c2/5e/31/c25e3114ebf041852be0292200727e92.jpg",
          title: "Breakfast",
          classname:
            "animate__animated animate__slideOutUp animate__infinite item1",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8owI3K-u6YFMwnQDlBs9VrsnKsEa4jD3DA&usqp=CAU",
          title: "Burger",
          classname:
            "animate__animated animate__slideOutUp animate__infinite item2",
        },
        {
          img: "",
          title: "",
          classname: "",
        },
        {
          img: "https://i.pinimg.com/550x/ef/bb/b0/efbbb046771ba42cf1df5327bfb963ed.jpg",
          title: "Camera",
          classname:
            "animate__animated animate__slideOutUp animate__infinite item4",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8owI3K-u6YFMwnQDlBs9VrsnKsEa4jD3DA&usqp=CAU",
          title: "Coffee",
          classname:
            "animate__animated animate__slideOutUp animate__infinite item5",
        },
      ],
    },
    {
      images: [
        {
          img: "https://i.pinimg.com/550x/c2/5e/31/c25e3114ebf041852be0292200727e92.jpg",
          title: "Breakfast",
        },
        {
          img: "https://i.pinimg.com/550x/9d/dd/50/9ddd50ff3f173ef56a61a7277b50dcbd.jpg",
          title: "Burger",
        },
        {
          img: "",
          title: "",
        },
        {
          img: "https://i.pinimg.com/550x/ef/bb/b0/efbbb046771ba42cf1df5327bfb963ed.jpg",
          title: "Camera",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8owI3K-u6YFMwnQDlBs9VrsnKsEa4jD3DA&usqp=CAU",
          title: "Coffee",
        },
      ],
    },
  ];

  const [data, setData] = useState(itemData);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setData(itemData);
  };

  return (
    <div className="home-wrap">
      <Topbar />
      <div className="content-wrap">
        <h1>Get Your Next</h1>
        <div className="top-contnet animate__animated animate__heartbeat">
          <h1 className="blue-color">DYI idea</h1>
        </div>
        <ImageList cols={5} gap={8} rowHeight={230}>
          {data[0].images.map((item) => {
            return (
              <ImageListItem key={item.title}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  className={item.classname}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        <div className="expand-colapse-icon">
          <i className="fa-solid fa-circle-up"></i>
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
