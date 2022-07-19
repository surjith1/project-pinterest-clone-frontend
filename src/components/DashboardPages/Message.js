import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PushPinIcon from "@mui/icons-material/PushPin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Menu from "@mui/material/Menu";

const Message = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="msg-wrapper">
      <span
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <i className="fa-solid fa-comment-dots"></i>
      </span>

      <Menu
        id="basic-menu"
        className="msg-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          className="msg-content-wrap"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <h1>Share ideas with your friends</h1>
          <div className="form-group" onClick={() => setShow(false)}>
            <input
              type="text"
              name="search"
              placeholder="search by name or email address"
            />
          </div>
          <div className="msg-btm-sec">
            <div
              className={`form-group icons-w-control ${show ? "show" : "hide"}`}
            >
              <AddIcon />
              <PushPinIcon />
              <input
                type="text"
                name="search"
                placeholder="search by name or email address"
              />
              <FavoriteIcon />
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Message;
