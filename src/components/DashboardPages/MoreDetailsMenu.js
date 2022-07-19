import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const MoreDetailsMenu = ({ img }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="">
      <Tooltip title="More Details">
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
        className="more-details-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <p style={{ padding: "10px", margin: "0" }}>
          This Pin was inspired by your recent activity
        </p>
        <MenuItem>Hide Pin</MenuItem>
        <a
          className="download-img"
          href={img}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download Images
        </a>

        <MenuItem>Report Pin</MenuItem>
      </Menu>
    </div>
  );
};
export default MoreDetailsMenu;
