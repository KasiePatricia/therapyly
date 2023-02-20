import AppLayout from "./components/layout/AppLayout";
import { useLocation } from "react-router-dom";
import { storeUserDetails } from "./services/requests";
import { useEffect, useState } from "react";
import Spinner from "./components/utils/Spinner";
import { bookAppointment } from "./services/requests";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";
import { getSessions } from "./services/requests";
export default function Bookapp() {
  const [userData, setUserData] = useState();
  const [spinner, setSpinner] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    phone: "",
    day: "",
    time: "",
    meetingType: "",
    description: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const {
    email: therapistEmail,
    location: therapistLocation,
    name: therapistName,
    specialty: therapistSpecialty,
    therapistId,
  } = location.state;

  useEffect(() => {
    setUserData(storeUserDetails());
  }, [appointmentData]);

  const handleInptChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };
  const checkInputs = Boolean(
    appointmentData.DOB &&
      appointmentData.day &&
      appointmentData.description &&
      appointmentData.firstName &&
      appointmentData.lastName &&
      appointmentData.meetingType &&
      appointmentData.phone &&
      appointmentData.time
  );

  async function handleSubmit(event) {
    event.preventDefault();
    setSpinner(true);
    const appointmentDetails = {
      username: userData.username,
      therapistname: therapistName,
      therapistId: therapistId,
      meetingType: appointmentData.meetingType,
      disorderType: "none",
      appointmentTime: appointmentData.time.toString(),
      therapistEmail: therapistEmail,
      userEmail: userData.email,
      day: appointmentData.day.toString(),
      DOB: appointmentData.DOB.toString(),
      phoneNumber: appointmentData.phone,
      description: appointmentData.description,
    };

    const response = await bookAppointment(appointmentDetails, userData.token);
    if (response.message) {
      cogoToast.success(response.message);
      setSpinner(false);
      navigate("/dashboard", { state: { response } });
    }

   
  }

  return (
    <AppLayout>
      <main className="w-full h-[calc(100vh-64px)] overflow-y-auto  ">
        <div className="w-full text-center mt-3 ">
          <p className="text-therapyDarkGreen text-xl font-bold uppercase ">
            book appointment
          </p>
        </div>
        <div className="flex justify-center px-6 py-8 w-full  ">
          <form className="w-full max-w-lg " onSubmit={handleSubmit}>
            <div className="">
              <p className="text-therapyDarkGreen text-lg font-bold leading-6 capitalize mb-5">
                patient Information
              </p>
              <div className="flex space-x-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">
                      first name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="input input-bordered w-full "
                    name="firstName"
                    onChange={handleInptChange}
                    value={appointmentData.firstName}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">last name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="input input-bordered w-full "
                    name="lastName"
                    onChange={handleInptChange}
                    value={appointmentData.lastName}
                  />
                </div>
              </div>
              <div className="flex space-x-5 my-3">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">
                      date of birth
                    </span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered w-full "
                    name="DOB"
                    onChange={handleInptChange}
                    value={appointmentData.DOB}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">
                      phone number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input input-bordered w-full "
                    name="phone"
                    onChange={handleInptChange}
                    value={appointmentData.phone}
                  />
                </div>
              </div>
            </div>

            <div className="my-10">
              <p className="text-therapyDarkGreen text-lg font-bold leading-6 capitalize mb-5">
                appointment Information
              </p>
              <div className="flex space-x-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">day</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="input input-bordered w-full "
                    name="day"
                    onChange={handleInptChange}
                    value={appointmentData.day}
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize">time</span>
                  </label>
                  <input
                    type="time"
                    placeholder="Enter last name"
                    className="input input-bordered w-full "
                    name="time"
                    onChange={handleInptChange}
                    value={appointmentData.time}
                  />
                </div>
              </div>
              <div className="flex space-x-5 my-4 item-start">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize"></span>
                  </label>
                  <select
                    className="select select-ghost w-full max-w-xs  capitalize input-bordered"
                    name="meetingType"
                    onChange={handleInptChange}
                    value={appointmentData.meetingType}
                  >
                    <option selected>Meeting type</option>
                    <option value="virtual">virtual</option>
                    <option value="In-person">In-person</option>
                  </select>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt capitalize"></span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Brief health description...."
                    name="description"
                    onChange={handleInptChange}
                    value={appointmentData.description}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-therapyDarkGreen text-lg capitalize ">
                  preferred physician
                </p>
                <p className="capitalize text-lg font-bold text-therapyDarkGreen">
                  {therapistName}
                </p>
              </div>
              <div className="w-full flex justify-center my-4">
                <button
                  type="submit"
                  className="btn capitalize bg-therapyDarkGreen "
                  disabled={!checkInputs}
                >
                  {!spinner && "submit"}
                  {spinner && "submiting"}
                  {spinner && <Spinner />}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </AppLayout>
  );
}
