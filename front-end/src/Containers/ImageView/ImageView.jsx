import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ImageView.css";
const ImageView = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [dlg, setDlg] = useState(false);
  
  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    axios
      .get(`http://localhost:5000/view/${params.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteImage = (id, e) => {
    axios
      .delete(`http://localhost:5000/delete/${params.id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let src = "http://localhost:5000/uploads/" + data.url;
  
  
  return (
    <div className="image_view">
      <div className="Image_container">
        <img src={src} alt="" />
        <div className="img_funct">
          <div className="img_dtls">
            <h3>{data.name}</h3>
            <p>{data.time}</p>
          </div>
          <div className="dlt">
            <i
              onClick={() => {
                setDlg(true);
              }}
              class="fa-solid fa-trash"
            ></i>
          </div>
        </div>
      </div>
      {dlg ? (
        <div className="delete_dlg">
          <h2>Delete?</h2>
          <div className="dlt_btns">
            <button
              className="green_btn"
              onClick={() => {
                setDlg(false);
              }}
            >
              <i class="fa-solid fa-x"></i>
            </button>
            <button
              className="red_btn"
              onClick={() => {
                deleteImage();
              }}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageView;
