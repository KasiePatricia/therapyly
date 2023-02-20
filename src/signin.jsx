import AppLayout from "./components/layout/AppLayout";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState, useRef, useContext, useEffect } from "react";
import { OnboardingContext } from "./context/UserOboardingContext";
import cogoToast from "cogo-toast";
import Spinner from "./components/utils/Spinner";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./services/requests";
import { userID } from "./services/requests";
import { storeUserDetails } from "./services/requests";
import { sendOtp } from "./services/requests";

export default function Signin() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    spinner: false,
  });
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const { handlePatientLoginDetails, loginData, setUser } =
    useContext(OnboardingContext);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const canSubmit =
    Boolean(loginDetails.email) && Boolean(loginDetails.password);

  async function handleLoginSubmit(event) {
    event.preventDefault();
    setLoginDetails({ ...loginDetails, spinner: true });

    const response = await loginUser({
      email: loginDetails.email,
      password: loginDetails.password,
    });
    // COMPLETE THIS @CHILE
    if (response?.response?.status === 400) {
      if (
        response?.response?.data?.message ===
        "User does not exist please sign up"
      ) {
        setLoginDetails({ ...loginData, spinner: false });
        
        return cogoToast.error(response.response.data.message);
      }
      if (response?.response?.data?.errorMessage === "Incorrect Passsword!") {
        setLoginDetails({ ...loginData, spinner: false });
        return cogoToast.info(response.response.data.errorMessage);
      }

      if (!response?.response?.data?.boarded) {
        const name = response.response.data.username;
        const email = loginDetails.email;
        const password = loginDetails.password;
        const res = await sendOtp({ name, email, password });
        
        if (
          res.message === "OTP sent to your mail, Enter OTP for confirmation"
        ) {
          cogoToast.info(
            `${response.response.data.errorMessage}, ${res.message} `
          );
          setLoginDetails({ ...loginData, spinner: false });
         
          userID(response.response.data.userId);
          return navigate("/OTP-setup");
        }
      }
      if (!response?.response?.data?.activated) {
        cogoToast.info(response.response.data.errorMessage);
        setLoginDetails({ ...loginData, spinner: false });
        userID(response.response.data.userId);
        return navigate("/client-onboarding");
      }
    }

    cogoToast.success(response.message);
    setLoginDetails({ ...loginData, spinner: false });
    storeUserDetails(response);
    setUser(response)
    handlePatientLoginDetails(response)
    return navigate("/dashboard");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  }
  return (
    <AppLayout>
      <div className=" h-[calc(100vh-64px)]">
        <form
          className="w-full flex items-center justify-center h-full "
          onSubmit={handleLoginSubmit}
        >
          <div className="border-2 border-therapyDarkGreen rounded-2xl w-full max-w-lg p-6">
            <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10">
              Signin
            </p>
            <div>
              <div>
                <input
                  name="email"
                  className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  placeholder="Email"
                  type="email"
                  value={loginDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type={passwordType}
                  name="password"
                  className="w-full h-12 rounded-md border border-therapyDarkGreen bg-white outline-none p-3 text-black mb-4"
                  placeholder="Password"
                  value={loginDetails.password}
                  onChange={handleInputChange}
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
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                disabled={!canSubmit}
                type="submit"
                className="btn w-full max-w-[242px] bg-therapyDarkGreen text-white capitalize h-14 rounded-xl hover:bg-therapyLightGreen border-none"
              >
                {!loginDetails.spinner && "Sign In"}
                {loginDetails.spinner && "Logging in..."}
                {loginDetails.spinner && <Spinner />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}
