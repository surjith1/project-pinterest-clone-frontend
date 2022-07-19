import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const SliderContent = ({ heading, color }) => {
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
    <>
      <div className="top-contnet animate__animated animate__heartbeat">
        <h1 className={`heading-${color}`}>{heading}</h1>
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
    </>
  );
};

export default SliderContent;
