import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainDashboard from "../MainDashboard";
import NorthEastSharpIcon from "@mui/icons-material/NorthEastSharp";
import { useNavigate } from "react-router-dom";
import MoreDetailsMenu from "./MoreDetailsMenu";
import CustomizedDialogs from "../DialogShare";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ChartReact } from "../ChartReact";

const DashboardHome = () => {
  const [dbData, setDbData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pinterest/dashboard-home`)
      .then((response) => response.json())
      .then((actualData) => {
        setDbData(actualData);
      });
  }, []);

  return (
    <div className="db-home-wrapper">
      <MainDashboard />
   {/*   <div className="chart-section">
        <ChartReact />
  </div>*/}

      <div className="db-home-page">
        <div className="content-wrapp">
          <ul className="db-home-item">
            {dbData.map((home) => (
              <DBHomeItem data={home} key={home._id} />
            ))}
          </ul>
          <div
            className="add-task"
            onClick={() => navigate("/dbhome-creation")}
          >
            <AddCircleIcon title="Add Content" />
          </div>
        </div>
      </div>
    </div>
  );
};

function DBHomeItem({ data }) {
  const [isShown, setIsShown] = useState(false);
  let navigate = useNavigate();

  return (
    <li
      className="db-home-item-content"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <Button variant="contained" color="error" className="save">
          {data.saveText}
        </Button>
      )}
      <img
        src={data.image}
        alt={data.title}
        onClick={() => navigate(`/dashboard-home/${data._id}`)}
      />
      {isShown && (
        <>
          <div className="db-home-item-footer">
            <div className="item-inner-wrap">
              <a
                className="cus-btn"
                target="_blank"
                rel="noopener noreferrer"
                href={data.landingUrl}
              >
                <NorthEastSharpIcon />
                <span className="lan-url">{data.landingUrl}</span>
              </a>
              {/* <IosShareIcon />*/}
              <CustomizedDialogs />
              <MoreDetailsMenu img={data.image} />
            </div>
          </div>
        </>
      )}

      <p>{data.title}</p>
    </li>
  );
}

export default DashboardHome;
