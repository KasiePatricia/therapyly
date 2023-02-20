import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import Dashboardlayout from "../components/layout/Dashboardlayout";
import {
  storeUserDetails,
  updateUserProfile,
  uploadProfilePicture,
} from "../services/requests";
import Spinner from "../components/utils/Spinner";
import cogoToast from "cogo-toast";

function PatientProfile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "",
    isEditing: true,
    spinner: false,
    token: "",
    profilePicture: "",
    imageUrl: "",
    imageSpin: false,
    imageEdit: true
  });

  useEffect(() => {
    let user = storeUserDetails();
    const { username, email, location, token, imageUrl } = user;
   
    // set state here
    setUserData({
      ...userData,
      name: username,
      email,
      location,
      token,
      imageUrl,
      profilePicture: imageUrl,
    });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

  };

  const handleEdit = (e) => {
    e.target.parentElement.parentElement.parentElement
      .querySelector("#name")
      .focus();
    setUserData({ ...userData, isEditing: false });
  };

  const handleInputSubmit = async () => {
    setUserData({ ...userData, spinner: true, isEditing: true });
    const response = await updateUserProfile(
      {
        name: userData.name,
        email: userData.email,
        location: userData.location,
      },
      userData.token
    );
    if ((response.message = "Details successfully saved!")) {
      cogoToast.success(response.message);
      setUserData({ ...userData, spinner: false });
      setUserData({
        ...userData,
        name: response.name,
        email: response.email,
        location: response.location,
      });
     
    }
    setUserData({
      ...userData,
      spinner: false,
      isEditing: true,
    });
    let user = storeUserDetails();
    const newImageObj = { ...user, username: response.name,
      email: response.email,
      location: response.location,};
    console.log(newImageObj);
    storeUserDetails(newImageObj);
  };
  const handleImageUpload = async () => {
    let formData = new FormData();
    formData.append("image", userData.profilePicture);
    const impageUploadResponse = await uploadProfilePicture(
      formData,
      userData.token
    );
    
   
    setUserData({
      ...userData,
      imageUrl: impageUploadResponse.imageUrl,
      imageSpin: true,
      imageEdit: false,
    });
    
   
   
    let user = storeUserDetails();
    const newImageObj = { ...user, imageUrl: impageUploadResponse.imageUrl };
    console.log(newImageObj);
    storeUserDetails(newImageObj);
    let u = storeUserDetails();
    if(impageUploadResponse.message){
     setTimeout(() => {
      
        setUserData({
          ...userData,
          imageSpin: false,
          imageEdit: true,
        });

      
      
    },1000);
  }
  };
  return (
    <Dashboardlayout>
      <div className="card w-3/4 mx-auto bg-therapyLightGreen ">
        <div className="card-body flex flex-col  items-center">
          <div
            className="w-44 h-44   rounded-3xl border-8 border-therapyDarkGreen "
            style={{
              backgroundImage: `url(${userData.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className=" flex  justify-around items-center ">
            <label
              htmlFor="profilepicture"
              className=" text-white flex  items-center "
            >
              <FaCamera
                className=" text-therapyDarkGreen text-xl cursor-pointer flex border mr-4 "
                title="Upload DP"
              />
            </label>
            <p
              disabled={userData.imageEdit}
              onClick={handleImageUpload}
              className=" text-xs btn btn-sm border-0 px-4 ml-2 bg-therapybtn hover:bg-therapyDarkGreen   justify-self-end"
            >
              {!userData.imageSpin && 'Upload Image'}
              {userData.imageSpin && 'uploading'}
              {userData.imageSpin && <Spinner/>}
            </p>
          </div>

          <input
            type="file"
            accept="image/*"
            id="profilepicture"
            className="input input-bordered input-sm  hidden "
            onChange={(e) =>
              setUserData({
                ...userData,
                imageEdit: false,
                profilePicture: e.target.files[0],
                imageUrl: URL.createObjectURL(e.target.files[0]),
              })
            }
            filename={userData.profilePicture}
          />

          <div className="form-control w-2/5  text-white bold min-w-1/4  ">
            <label className="input-group input-group-md bold"> Name </label>
            <input
              type="text"
              className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
              value={userData.name}
              readOnly={userData.isEditing}
              id="name"
              autoFocus
              name="name"
              onChange={handleInput}
            />
          </div>
          <div className="form-control w-2/5 text-white bold min-w-2/5">
            <label className="input-group input-group-md bold"> Email </label>
            <input
              type="text"
              className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
              name="email"
              readOnly={userData.isEditing}
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-control w-2/5 text-white bold min-w-2/5">
            <label className="input-group input-group-md bold">
              {" "}
              Location{" "}
            </label>
            <input
              type="email"
              className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
              name="location"
              readOnly={userData.isEditing}
              value={userData.location}
              onChange={handleInput}
            />
          </div>

          <div className="form-control w-2/5 text-white bold min-w-2/5">
            <div className=" flex justify-center  pt-4">
              <button
                className="btn btn-sm border-0 px-4 mr-2 bg-therapybtn hover:bg-therapyDarkGreen"
                onClick={handleInputSubmit}
                disabled={userData.isEditing}
              >
                {!userData.spinner && "Save"}
                {userData.spinner && "Saving"}
                {userData.spinner && <Spinner />}
              </button>
              <button
                className="btn btn-sm border-0 px-4 ml-2 bg-therapybtn hover:bg-therapyDarkGreen"
                onClick={handleEdit}
                disabled={!userData.isEditing}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dashboardlayout>
  );
}

export default PatientProfile;
