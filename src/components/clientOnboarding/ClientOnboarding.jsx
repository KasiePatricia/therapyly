import React, { useContext, useRef, useState, useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import { OnboardingContext } from "../../context/UserOboardingContext";
import axios from "axios";
import cogoToast from "cogo-toast";
import Spinner from "../utils/Spinner";
import { useNavigate } from "react-router-dom";
import { userID } from "../../services/requests";
import { userOnborading } from "../../services/requests";
import { useLocation } from "react-router-dom";
export default function ClientOnboarding() {
  const { userData } = useContext(OnboardingContext);
  const stateOfOriginRef = useRef(null);
  const maritalStatusRef = useRef(null);
  const hobbiesRef = useRef(null);
  const [spinner, setSpinner] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  

  useEffect(() => {
    setId(userID());
  }, []);

  const handleOnboardingInputs = async (e) => {
    e.preventDefault();

    console.log(id);
    const enteredStateOfOrigin = stateOfOriginRef.current.value;
    const enteredMaritalStatus = maritalStatusRef.current.value;
    const enteredHobbies = hobbiesRef.current.value;
    if (
      enteredStateOfOrigin.trim().length < 1 ||
      enteredMaritalStatus.trim().length < 1 ||
      enteredHobbies.trim().length < 1
    ) {
      return cogoToast.error("Input field must not be empty");
    }
    cogoToast.loading("Onbording in progress!");
    setSpinner(true);

    const response = await userOnborading(location.state,{
      userId: id,
      hobbies: enteredHobbies,
      stateOfOrigin: enteredStateOfOrigin,
      marriageStatus: enteredMaritalStatus,
    });
console.log(response)
    
    if (response?.activated && response?.boarded) {
      cogoToast.success(response.message);
      setSpinner(false);
      return navigate("/signin");
    }
    if (response?.response?.data?.errorMessage) {
      cogoToast.error(response.errorMessage);
      setSpinner(false);
      return navigate("OTP-setup");
    }
  };

  return (
    <AppLayout>
      <form className="flex-col w-full" onSubmit={handleOnboardingInputs}>
        <p className="text-center my-3 py-0 text-therapyDarkGreen">
          Onboarding
        </p>
        <div className="card w-3/5 mx-auto bg-therapyLightGreen my-5  ">
          <div className="card-body flex flex-col  items-center">
            <div className="form-control w-3/5  text-white bold min-w-1/4  ">
              <label className="input-group input-group-md bold">
                {" "}
                Hobbies{" "}
              </label>
              <input
                type="text"
                className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
                ref={hobbiesRef}
              />
            </div>
            <div className="form-control w-3/5 text-white bold min-w-2/5">
              <label className="input-group input-group-md bold">
                {" "}
                State of Origin{" "}
              </label>
              <input
                type="text"
                className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
                ref={stateOfOriginRef}
              />
            </div>
            <div className="form-control w-3/5 text-white bold min-w-2/5">
              <label className="input-group input-group-md bold">
                {" "}
                Marriage Status
              </label>
              <input
                type="text"
                className="input input-bordered input-sm text-white bg-therapyDarkGreen py-5"
                ref={maritalStatusRef}
              />
            </div>

            <div className="form-control w-2/5 text-white bold min-w-2/5">
              <div className=" flex justify-center  pt-4">
                <button
                  type="submit"
                  className="btn btn-sm border-0 px-4 mr-2 bg-therapybtn hover:bg-therapyDarkGreen"
                >
                  {!spinner && "Save"}
                  {spinner && "Saving"}
                  {spinner && <Spinner />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AppLayout>
  );
}
