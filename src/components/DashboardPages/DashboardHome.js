import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainDashboard from "../MainDashboard";
import IosShareIcon from "@mui/icons-material/IosShare";
import NorthEastSharpIcon from "@mui/icons-material/NorthEastSharp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
const DashboardHome = () => {
  const [dbData, setDbData] = useState([]);

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
      <div className="db-home-page">
        <div className="content-wrapp">
          <ul className="db-home-item">
            {dbData.map((home) => (
              <DBHomeItem data={home} key={home._id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function DBHomeItem({ data }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li
      className="db-home-item-content"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={data.image} alt={data.title} />
      <p>{data.title}</p>
      {isShown && (
        <>
          <div className="db-home-item-footer">
            <div className="item-inner-wrap">
              <Link
                className="cus-btn"
                target="_blank"
                rel="noopener noreferrer"
                to="data.landingUrl"
              >
                <NorthEastSharpIcon />
                <span className="lan-url">{data.landingUrl}</span>
              </Link>
              <IosShareIcon />
              <AccountMenu />
            </div>
          </div>

          <Button variant="contained" color="error" className="save">
            {data.saveText}
          </Button>
        </>
      )}
    </li>
  );
}

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          className="icon-btn"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <i className="fa-solid fa-ellipsis"></i>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <p style={{ padding: "10px" }}>
          This Pin was inspired by your recent activity
        </p>
        <MenuItem>Hide Pin</MenuItem>
        <MenuItem>Download Images</MenuItem>

        <MenuItem>Report Pin</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default DashboardHome;
