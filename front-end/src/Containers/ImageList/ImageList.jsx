import axios from "axios";
import "./ImageList.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    axios
      .get(`http://localhost:5000/images/${JSON.stringify(user._id)}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const items =
    data.length > 0 ? (
      data.map((items, key) => {
        let src = "http://localhost:5000/uploads/" + items.url;

        return (
          <div className="image">
            <img  src={src} alt="" />
          </div>
        );
      })
    ) : (
      <h1>No Photos Available</h1>
    );
  return (
    <div className="image_list">
      <div className="heading">
        <h2 className="imageList_heading">YOUR PHOTOS</h2>
      </div>
      <div className="image_view">{items}</div>
      <div
        className="image_add"
        onClick={() => {
          navigate("/add");
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default ImageList;
