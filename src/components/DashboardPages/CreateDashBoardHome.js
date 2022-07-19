import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const CreateDashBoardHome = () => {
  let navigate = useNavigate();

  //   let [image, setImage] = useState("");
  //   let [title, setTitle] = useState("");
  //   let [summary, setSummary] = useState("");
  //   let [logo, setLogo] = useState("");
  //   let [logoName, setLogoName] = useState("");
  //   let [followSize, setFollowSize] = useState("");
  //   let [followText, setFollowText] = useState("");
  //   let [saveText, setSaveText] = useState("");
  //   let [landingUrl, setLandingUrl] = useState("");
  const [data, setData] = useState({
    image: "",
    title: "",
    summary: "",
    logo: "",
    logoName: "",
    followSize: "",
    followText: "",
    saveText: "",
    landingUrl: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/pinterest/dashboard-home/createHome`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((actualData) => {
        setData([actualData]);
        navigate("/dashboard-home");
      });
  };

  return (
    <div className="add-db-home-sec">
      <h1 className="text-center">Add Home Feed Form</h1>
      <form onSubmit={submitHandle}>
        <div className="form-group">
          <TextField
            name="image"
            type="text"
            fullWidth
            label="Image"
            variant="outlined"
            onChange={handleChange}
            value={data.image}
          />
        </div>
        <div className="form-group">
          <TextField
            name="title"
            type="text"
            fullWidth
            label="Title"
            variant="outlined"
            onChange={handleChange}
            value={data.tite}
          />
        </div>

        <div className="form-group">
          <TextField
            name="summary"
            type="text"
            fullWidth
            label="Summary"
            variant="outlined"
            onChange={handleChange}
            value={data.summary}
          />
        </div>
        <div className="form-group">
          <TextField
            name="logo"
            type="text"
            fullWidth
            label="Logo"
            variant="outlined"
            onChange={handleChange}
            value={data.logo}
          />
        </div>
        <div className="form-group">
          <TextField
            name="logoName"
            type="text"
            fullWidth
            label="Logo Name"
            variant="outlined"
            onChange={handleChange}
            value={data.logoName}
          />
        </div>
        <div className="form-group">
          <TextField
            name="followSize"
            type="text"
            fullWidth
            label="Follow Size"
            variant="outlined"
            onChange={handleChange}
            value={data.followSize}
          />
        </div>
        <div className="form-group">
          <TextField
            name="followText"
            type="text"
            fullWidth
            label="Follow Text"
            variant="outlined"
            onChange={handleChange}
            value={data.followText}
          />
        </div>
        <div className="form-group">
          <TextField
            name="saveText"
            type="text"
            fullWidth
            label="Save Text"
            variant="outlined"
            onChange={handleChange}
            value={data.saveText}
          />
        </div>
        <div className="form-group">
          <TextField
            name="landingUrl"
            type="text"
            fullWidth
            label="Landing Url"
            variant="outlined"
            onChange={handleChange}
            value={data.landingUrl}
          />
        </div>
        <div className="form-group add-movie-btn">
          <Button variant="outlined" fullWidth type="submit">
            Add Home Feed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDashBoardHome;
