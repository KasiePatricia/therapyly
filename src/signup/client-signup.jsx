import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AppLayout from "../components/layout/AppLayout";
import { useState, useContext } from "react";
import Spinner from "../components/utils/Spinner";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { googleAuth } from "../services/requests";
import { storeUserDetails } from "../services/requests";
import { OnboardingContext } from "../context/UserOboardingContext";

import cogoToast from "cogo-toast";
import axios from "axios";

export default function ClientSignup() {
  const [passwordType, setPasswordType] = useState("password");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(OnboardingContext);

  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setValidation(false);
      return;
    }
    setPasswordType("password");
    setValidation(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      firstName.trim().length < 1 ||
      lastName.trim().length < 1 ||
      password.trim().length < 5 ||
      (email.trim().length < 1 && !email.includes("@"))
    ) {
      return setValidation(true);
    }

    (() => {
      setLoadingSpinner(true);
      axios
        .post("https://apitherapy-production.up.railway.app/usersignup", {
          name: `${firstName} ${lastName}`,
          email: email,
          password: password,
        })
        .then(function (response) {
          let message;
          if (response.data.message) {
            message = "message";
          } else {
            message = "meesage";
          }
          console.log("show response here ", response);
          cogoToast.success(response.data[message]);
          console.log(response);

          setTimeout(() => {
            setLoadingSpinner(false);
            if (response.status === 200) {
              if (!response.data["meesage"]) {
                navigate("/OTP-setup");
              }
            }
          }, 1000);
        })
        .catch(function (error) {
          cogoToast.error("Registration unsuccessful");
          setLoadingSpinner(false);
          console.log(error);
        });
    })();
  }

  let fNameErrorText;
  let lNameErrorText;
  let eNameErrorText;
  let pNameErrorText;

  if (validation && !firstName) {
    fNameErrorText = "Enter your first name correctly";
  }
  if (validation && !lastName) {
    lNameErrorText = "Enter your last name correctly";
  }
  if (validation && !email) {
    eNameErrorText = "Enter correct email";
  }
  if (validation && password.length < 5) {
    pNameErrorText = "Password must be up to five characters";
  }

  const googleUserLogin = async (details) => {
    const response = await googleAuth(details);
    storeUserDetails(response);
    setUser(response);
    if (response.activated) {
      return navigate("/dashboard");
    }
  };

  return (
    <AppLayout>
      <main className="w-full h-full ">
        <div className="w-full h-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="border-2 border-therapyDarkGreen rounded-2xl w-full max-w-lg p-6 "
          >
            <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10 ">
              client signup
            </p>
            <div className="flex space-x-3">
              <input
                type="text"
                name="firstName"
                placeholder={
                  fNameErrorText ? fNameErrorText : "Enter first name"
                }
                className={
                  fNameErrorText
                    ? " text-sm placeholder-red-500 w-full h-12 rounded-md border  border-red-700 bg-red-100 outline-none p-3  text-red-700 mb-4"
                    : "w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                }
                onChange={(e) => {
                  setValidation(false);
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder={
                  lNameErrorText ? lNameErrorText : "Enter last name"
                }
                className={
                  lNameErrorText
                    ? "text-sm placeholder-red-500 w-full h-12 rounded-md border  border-red-700 bg-red-100 outline-none p-3  text-red-700 mb-4"
                    : "w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                }
                onChange={(e) => {
                  setValidation(false);
                  setLastName(e.target.value);
                }}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder={eNameErrorText ? eNameErrorText : "Enter your email"}
              className={
                eNameErrorText
                  ? " text-sm placeholder-red-500 w-full h-12 rounded-md border  border-red-700 bg-red-100 outline-none p-3  text-red-700 mb-4"
                  : "w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
              }
              onChange={(e) => {
                setValidation(false);
                setEmail(e.target.value);
              }}
            />
            <div className="flex space-x-3">
              {pNameErrorText ? (
                <span className=" text-sm  text-red-500">{pNameErrorText}</span>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <input
                type={passwordType}
                name="password"
                placeholder={!pNameErrorText ? "Enter password" : ""}
                className={
                  pNameErrorText
                    ? " text-sm placeholder-red-500 w-full h-12 rounded-md border  border-red-700 bg-red-100 outline-none p-3  text-red-700 mb-4"
                    : "w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                }
                onChange={(e) => {
                  setValidation(false);
                  setPassword(e.target?.value);
                }}
                value={password}
              />
              {/* <BsFillEyeFill className="text-therapyDarkGreen w-6 h-6 absolute top-3 right-3" /> */}
              <span onClick={togglePassword}>
                {passwordType === "password" ? (
                  <BsFillEyeFill className="text-therapyDarkGreen w-6 h-6 absolute top-3 right-3" />
                ) : (
                  <BsEyeSlashFill className="text-therapyDarkGreen w-6 h-6 absolute top-3 right-3" />
                )}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="btn w-full max-w-[242px] bg-therapyDarkGreen text-white capitalize h-14 rounded-xl hover:bg-therapyLightGreen border-none"
              >
                {!loadingSpinner && "register"}
                {loadingSpinner && "reistering"}
                {loadingSpinner && <Spinner />}
              </button>
            </div>
            <div className="w-full flex justify-center">
              <span>or</span>
            </div>

            <div className="w-full flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const { credential } = credentialResponse;
                  const decoded = jwt_decode(credential);
                  const { email, name, picture, sub } = decoded;

                  googleUserLogin({ email, name, imageUrl: picture, id: sub });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </div>
          </form>
        </div>
      </main>
    </AppLayout>
  );
}
