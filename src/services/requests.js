import axios from "axios";
import cogoToast from "cogo-toast"
export async function loginUser(userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/userlogin",
      userDetails
    );
    return data;
  } catch (error) {

    console.error(error);
    return error;
  }
}
export async function signupTherapist(userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/therapistsignup",
      userDetails
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function googleAuth(userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/googleUserLogin",
      userDetails
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function sendFaq(userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/sendfaq",
      userDetails
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function userOnborading(userType, userDetails) {
  let url;
  if(userType === 'therapist'){
    url = "https://apitherapy-production.up.railway.app/therapistonboarding"
  }else{
    url = "https://apitherapy-production.up.railway.app/useronboarding"
  }
  try {
    const { data } = await axios.post(
      url,
      userDetails
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function sendOtp(userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/usersignup",
      userDetails
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getClientDashBoard(userDetails) {
  try {
    const { data } = await axios.get(
      "https://apitherapy-production.up.railway.app/dashboard",
      {
        headers: {
          Authorization: "Bearer " + userDetails,
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
   sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function gettherapist(userDetails) {
  try {
    const { data } = await axios.get(
      "https://apitherapy-production.up.railway.app/getTherapists",
      {
        headers: {
          Authorization: "Bearer " + userDetails,
         
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function getSessions(userDetails) {
  try {
    const { data } = await axios.get(
      "https://apitherapy-production.up.railway.app/getsessions",
      {
        headers: {
          Authorization: "Bearer " + userDetails,
         
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function getImage(userImg) {
  try {
    const { data } = await axios.get(
      userImg
    );
    return data;
  } catch (error) {
    
    console.error(error);
    return error;
  }
}
export async function getTherapistSessions(userDetails) {
  try {
    const { data } = await axios.get(
      "https://apitherapy-production.up.railway.app/therapistgetsessions",
      {
        headers: {
          Authorization: "Bearer " + userDetails,
         
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function getdonesessions(appointmentDetails, token) {
  try {
    const { data }= await axios.post(
      "https://apitherapy-production.up.railway.app/getdonesessions",
      appointmentDetails,
      {
        headers: {
          Authorization: "Bearer " + token,
         
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    

    return error;
  }
}
export async function bookAppointment(appointmentData, userDetails) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/bookappointment",
      appointmentData,
      {
        headers: {
          Authorization: "Bearer " + userDetails,
          'Content-Type':'application/json'
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function updateUserProfile(userData, token) {
  try {
    const { data } = await axios.put(
      "https://apitherapy-production.up.railway.app/edituserptofile",
      
        userData,
      
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function updateTherapistProfile(userData, token) {
  try {
    const { data } = await axios.put(
      "https://apitherapy-production.up.railway.app/edittherapistprofile",
      
        userData,
      
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}
export async function uploadProfilePicture(formData, token) {
  try {
    const { data } = await axios.post(
      "https://apitherapy-production.up.railway.app/uploadImage",
      formData,
      {
        headers: {
          Authorization: "Bearer " + token,
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    return data;
  } catch (error) {
    if(error.response.data.message === "Unauthorized User"){
      sessionStorage.clear()
      window.localStorage.clear()
      window.location.href = "/signin"
    }
    console.error(error);
    return error;
  }
}

export const userID = (userId) => {
  if (userId) {
    let data = sessionStorage.setItem("userId", JSON.stringify(userId));
    return data;
  }
  let user =JSON.parse(sessionStorage.getItem("userId"));
  return user;
};

export const storeUserDetails = (details) => {
  if (details?.token) {
    let data = sessionStorage.setItem("details", JSON.stringify(details));
    return data;
  }
  let userDetails = JSON.parse(sessionStorage.getItem("details"));
  return userDetails;
};
export const storeUserSessions = (sessions) => {
  if (sessions) {
    let data = localStorage.setItem("details", JSON.stringify(sessions));
    return data;
  }
  let userSessions = JSON.parse(localStorage.getItem("details"));
  return userSessions;
};
export const storeUserPage = (page) => {
  if (page) {
    let data = localStorage.setItem("page", JSON.stringify(page));
    return data;
  }
  let userSessions = JSON.parse(localStorage.getItem("page"));
  return userSessions;
};
export const logoutUser = () => {
  sessionStorage.clear()
  window.localStorage.clear()
  window.location.href = "/"
};
