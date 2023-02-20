import { useState } from "react";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AppLayout from "../components/layout/AppLayout";
import Spinner from "../components/utils/Spinner";
import { signupTherapist } from "../services/requests";
import { useNavigate } from "react-router-dom";

import cogoToast from "cogo-toast";
export default function TherapistSignup() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    location: "",
    specialty: "",
    liscense: "",
    email: "",
    password: "",
    spinner: false,
  });
  const navigate = useNavigate();
  const canSubmit =
    Boolean(signupDetails.email) &&
    Boolean(signupDetails.password) &&
    Boolean(signupDetails.name) &&
    Boolean(signupDetails.specialty) &&
    Boolean(signupDetails.location) &&
    Boolean(signupDetails.liscense);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setSignupDetails({ ...signupDetails, spinner: true });
    const response = await signupTherapist(signupDetails);
    console.log(response);
    if (response.message) {
      cogoToast.success(response.message);
      setSignupDetails({ ...signupDetails, spinner: false });
      return navigate("/OTP-therapist");
    }

    cogoToast.error("Registration Unsuccessful!");
    setSignupDetails({ ...signupDetails, spinner: false });
  }

  return (
    <AppLayout>
      <main className="w-full  h-[calc(100vh-64px)] overflow-y-auto py-8">
        <div className="w-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="border-2 border-therapyDarkGreen rounded-2xl w-full max-w-lg p-6 "
          >
            <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10 ">
              therapist sign up
            </p>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              onChange={handleInputChange}
              value={signupDetails.name}
              name="name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              onChange={handleInputChange}
              value={signupDetails.email}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              onChange={handleInputChange}
              value={signupDetails.location}
              required
            />
            <input
              type="text"
              name="specialty"
              placeholder="Enter your specialty"
              className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              onChange={handleInputChange}
              value={signupDetails.specialty}
              required
            />
            <input
              type="text"
              name="liscense"
              placeholder="Enter your liscense number"
              className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              onChange={handleInputChange}
              value={signupDetails.liscense}
              required
            />
            <div className="relative">
              <input
                type={passwordType}
                onChange={handleInputChange}
                value={signupDetails.password}
                required
                name="password"
                placeholder="Enter password"
                className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              />
              <div className=" ">
                <button onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <BsFillEyeFill className="text-therapyDarkGreen w-6 h-6 absolute top-3 right-3" />
                  ) : (
                    <BsEyeSlashFill className="text-therapyDarkGreen w-6 h-6 absolute top-3 right-3" />
                  )}
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                disabled={!canSubmit}
                type="submit"
                className="btn w-full max-w-[242px] bg-therapyDarkGreen text-white capitalize h-14 rounded-xl hover:bg-therapyLightGreen border-none"
              >
                {!signupDetails.spinner && "register"}
                {signupDetails.spinner && "registering"}
                {signupDetails.spinner && <Spinner />}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AppLayout>
  );
}
