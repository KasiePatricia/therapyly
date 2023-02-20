export default function Clientprofile() {
  return (
    <>
      <div className="profile-template">
        <img src="./src/assets/profile" alt="" />
        <form action="">
          <div className="form-input">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Nameofclient" value={name} />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Location</label>
            <input type="text" placeholder="location" value={Location} />
          </div>
          <label htmlFor="">Number of Appointment Booked</label>{" "}
          <span>
            <input type="number" />
          </span>
          <div className="btn">
            <button>
              <a href="">Save</a>
            </button>
            <button>
              <a href="">Edit</a>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
