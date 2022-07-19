import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainDashboard from "./../MainDashboard";
import Paper from "@mui/material/Paper";
import MoreDetailsMenu from "./MoreDetailsMenu";
import IosShareIcon from "@mui/icons-material/IosShare";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CustomizedDialogs from "./../DialogShare";

const DashboardHomeDetail = () => {
  const [dbData, setDbData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  //const [inputValue, setInputValue] = useState("");
  const [follow, setFollow] = useState(830);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pinterest/dashboard-home/${_id}`)
      .then((response) => response.json())
      .then((actualData) => {
        setDbData([actualData]);
      });
  }, []);

  // const submitHandle = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="getHomeById">
      <MainDashboard />
      {dbData.map((home) => {
        return (
          <div className="db-home-details-Wrap" key={home._id}>
            <Paper elevation={8} className="db-details-paper">
              <div className="db_container">
                <div className="cont_left">
                  <img src={home.image} alt={home.title} />
                </div>
                <div className="cont_right">
                  <div className="icons-wrap">
                    <MoreDetailsMenu img={home.image} />
                    <CustomizedDialogs />
                    <ContentCopyIcon />
                  </div>

                  <h1 className="db-home-title">{home.title}</h1>
                  <p>{home.summary}</p>
                  <div className="logo-sec">
                    <div className="logo-w-name">
                      <img
                        src={home.logo}
                        alt={home.logoName}
                        className="logo-pic"
                      />
                      <div className="name-w-follow">
                        <p>{home.logoName}</p>
                        <p>{follow}k</p>
                      </div>
                    </div>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setFollow(follow + 1)}
                    >
                      {home.followText}
                    </Button>
                  </div>
                  <div className="comment-sec">
                    <div className="icon-label">
                      <h1>Comments</h1>
                      <span onClick={() => setToggle(!toggle)}>
                        {!toggle ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                      </span>
                    </div>
                    {!toggle && (
                      <div className="comment">
                        {text && <p className="comment-text">{text}</p>}
                        <div className="input-comment">
                          <input
                            type="text"
                            name="comment"
                            placeholder="Add a Comment"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                          />
                          <span>😃</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardHomeDetail;
