import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import IosShareIcon from "@mui/icons-material/IosShare";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dialog-wrap">
      <div variant="outlined" onClick={handleClickOpen}>
        <IosShareIcon className="share-icon" />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className="text-center"
        >
          Share To
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="social-wrapper">
            <div className="whats-app">
              <WhatsAppIcon />
              <p>Whats App</p>
            </div>
            <div className="twitter-app">
              <TwitterIcon />
              <p>Twitter</p>
            </div>
            <div className="insta-app">
              <InstagramIcon />
              <p>Instagran</p>
            </div>
            <div className="fb-app">
              <FacebookIcon />
              <p>Facebook</p>
            </div>
            <div className="email-app">
              <EmailIcon />
              <p>Email</p>
            </div>
            <div className="link-app">
              <LinkIcon />
              <p>Copy Link</p>
            </div>
          </div>
        </DialogContent>
        <DialogContent dividers>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className="text-center"
          >
            Send on Pinterest
          </BootstrapDialogTitle>
          <div className="social-wrapper">
            <div className="search-app">
              <SearchIcon />
              <p>Search</p>
            </div>
            <div className="search-app">
              <GroupAddIcon />
              <p>Import</p>
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
  </DialogActions>*/}
      </BootstrapDialog>
    </div>
  );
}
