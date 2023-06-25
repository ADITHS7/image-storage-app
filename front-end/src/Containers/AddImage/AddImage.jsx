import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddImage.css";
import axios from "axios";
const AddImage = () => {
  const [error, setError] = useState(false);
  const [prevImg, setPrevImg] = useState();
  const [dlg, setDlg] = useState(false);
  const [change, setChange] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [item, setItem] = useState({
    url: "",
  });

  const handleImg = (e) => {
    setChange(true);
    setPrevImg(URL.createObjectURL(e.target.files[0]));
    setItem({ url: e.target.files[0] });
  };
  const sendData = (e) => {
    if (!item.url) {
      setError(true);
      return false;
    }

    e.preventDefault();

    const formData = new FormData();
    formData.append("senddata", item.url);
    formData.append("name", user.name);

    formData.append("time", Date());
    formData.append("uid", JSON.stringify(user._id));
    formData.append("change", change);

    axios
      .post("http://localhost:5000/add", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setDlg(true);
  };
  return (
    <div className="add_image">
      <div className="add_container">
        <h1>Add Image</h1>

        <form action="">
          <div className="form_first">
            <input
              name="img"
              id="img"
              type="file"
              className="img_box"
              onChange={handleImg}
            />

            <div className="img_bg">
              <label htmlFor="img" className="label_img">
                <img src={prevImg} alt="" />

                <p>
                  <i class="fa-solid fa-image"></i>
                </p>
                <p>Click to upload image</p>
              </label>
            </div>
          </div>

          <button className="add_btn" onClick={sendData}>
            Add Image
          </button>
          <div className="invalid_input">
            {error && !item.url && <span>Upload a image</span>}
            <br />
          </div>
        </form>

        {dlg ? (
          <div className="dlg_box">
            <i class="fa-regular fa-circle-check"></i>
            <p>Image added successfully</p>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              OK
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddImage;
