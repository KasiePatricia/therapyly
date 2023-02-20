import { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientSignup from "./signup/client-signup";
import Signin from "./signin";
import TherapistSignup from "./signup/therapist-signup";
import Faq from "./faq";
import Home from "./pages/Home";
import Bookapp from "./bookapp";
import Clientprofile from "./ClientUserprofile";
import Dashboard from "./dashboard";
import TherapistProfile from "./pages/therapist-profile";
import PatientProfile from "./pages/patient-profile";
import Notification from "./pages/notification";
import Registrationpin from "./components/SignupPin/Registrationpin";
import ClientOnboarding from "./components/clientOnboarding/ClientOnboarding";
import BookedSessions from "./components/Dashboard/BookedSessions";
import EachSessionDetails from "./components/Dashboard/EachSessionDetails";
import TherapistRegistrationPin from "./components/SignupPin/TherapistRegistrationPin";
import { OnboardingContext } from "./context/UserOboardingContext";
import { userOnborading } from "./services/requests";
import AuthComponent from "./components/UnauthrizedUser/AuthComponent";

function App() {
  const { user } = useContext(OnboardingContext);
  const token = user?.token;
  const activated = user?.activated;
  const boarded = user?.boarded;
  const auth = Boolean(token && activated && boarded);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/client-signup" element={<ClientSignup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/therapist-signup" element={<TherapistSignup />} />

        <Route
          path="/bookapp"
          element={auth ? <Bookapp /> : <AuthComponent />}
        />

        <Route
          path="/client-profile"
          element={auth ? <Clientprofile /> : <AuthComponent />}
        />

        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <AuthComponent />}
        />

        <Route
          path="/therapist-profile"
          element={auth ? <TherapistProfile /> : <AuthComponent />}
        />
        <Route
          path="/patient-profile"
          element={auth ? <PatientProfile /> : <AuthComponent />}
        />
        <Route
          path="/notification"
          element={auth ? <Notification /> : <AuthComponent />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/OTP-setup" element={<Registrationpin />} />
        <Route path="/OTP-therapist" element={<TherapistRegistrationPin />} />
        <Route path="/client-onboarding" element={<ClientOnboarding />} />
        <Route
          path="/sessions"
          element={auth ? <BookedSessions /> : <AuthComponent />}
        />
        <Route
          path="/session-details"
          element={auth ? <EachSessionDetails /> : <AuthComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
