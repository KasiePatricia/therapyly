import React, { useState, useRef, useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { OnboardingContext } from "../../context/UserOboardingContext";
import { userID } from "../../services/requests";
import { sendOtp } from "../../services/requests";


export default function Registrationpin(props) {
  const { handleUserId } = useContext(OnboardingContext);
  const navigate = useNavigate();
  const [dataValues, setValue] = React.useState({
    data1: "",
    data2: "",
    data3: "",
    data4: "",
  });

  const data1Ref = useRef("");
  const data2Ref = useRef("");
  const data3Ref = useRef("");
  const data4Ref = useRef("");
  const [confirmSignup, setConfirmSignUp] = useState("");
  const [openModal, setOpenModal] = useState("");

  useEffect(() => {
    setOpenModal("modal-open");
  }, []);

  let string = "";

  const handleChange = async (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) <= 3) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=data-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
    const enteredValue1 = data1Ref.current;
    const enteredValue2 = data2Ref.current;
    const enteredValue3 = data3Ref.current;
    const enteredValue4 = data4Ref.current;

    setValue({
      ...value,
      [`data${fieldIndex}`]: value,
    });
    let str = `${enteredValue1.value}${enteredValue2.value}${enteredValue3.value}${enteredValue4.value}`;

    console.log("show Ot ============== ", str);
    if (str.length >= 4) {
      (() => {
        cogoToast.loading("Registering...");
        axios
          .post(
            "https://apitherapy-production.up.railway.app/usersignupconfirm",
            {
              OTP: str,
            }
          )
          .then((response) => {
            let message;
            if (response.data.message) {
              message = "message";
            } else {
              message = "errorMessage";
            }
            cogoToast.success(response.data[message]);

            if (response.data.message) {
              userID(response.data.userId);
              return navigate("/client-onboarding");
            }
            handleUserId(response.data.userId, response.data.activated);
          })
          .catch((error) => {
            cogoToast.error("Confirmation unsuccessful");
          });
      })();
    }
  };

  return (
    <AppLayout>
      <label
        htmlFor="my-modal-4"
        className={`modal cursor-pointer  ${openModal} w-full z-0   mt-16`}
      >
        <label className="modal-box relative" htmlFor="">
          <form className="border-2  rounded-2xl w-full max-w-lg p-6 flex-col flex-wrap">
            <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10 text-center">
              Confirm registration
            </p>
            <div className="flex justify-around flex-wrap">
              <div className=" w-16">
                <input
                  type="text"
                  className=" text-center w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  name="data-1"
                  maxLength={1}
                  onChange={handleChange}
                  value={dataValues.data1}
                  autoFocus
                  ref={data1Ref}
                />
              </div>
              <div className=" w-16">
                <input
                  type="text"
                  className="text-center w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  name="data-2"
                  maxLength={1}
                  onChange={handleChange}
                  value={dataValues.data2}
                  ref={data2Ref}
                />
              </div>
              <div className=" w-16">
                <input
                  type="text"
                  className="text-center w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  name="data-3"
                  maxLength={1}
                  onChange={handleChange}
                  value={dataValues.data3}
                  ref={data3Ref}
                />
              </div>
              <div className=" w-16">
                <input
                  type="text"
                  className="text-center w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  name="data-4"
                  maxLength={1}
                  onChange={handleChange}
                  value={dataValues.data4}
                  ref={data4Ref}
                />
              </div>
           
            </div>
          
            
          </form>
        </label>
      </label>
    </AppLayout>
  );
}

//activated
// :
// true
// boarded
// :
// false
// message
// :
// "Registration  confirmation successful, you can proceed to login"
// userId
// :
// "63dab450e24a659e09ae55d7"
