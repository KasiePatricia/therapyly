import React from "react";

const ContactForm = () => {
  return (
    <div className="mx-auto w-[90%] md:mx-0 md:w-1/2">
      <div className="w-full md:flex md:justify-end py-3">
        <form className="w-full md:w-[90%]">
          <div className="form-control w-full border border-white h-[45px] rounded-xl overflow-hidden mb-6">
            <input
              type="text"
              className="border-none focus:border-0 outline-none w-full h-full bg-transparent px-3 text-white placeholder:text-white"
              placeholder="First Name"
              name="first_name"
            />
          </div>

          <div className="form-control w-full border border-white h-[45px] rounded-xl overflow-hidden mb-6">
            <input
              type="text"
              className="border-none focus:border-0 outline-none w-full h-full bg-transparent px-3 text-white placeholder:text-white"
              placeholder="Last Name"
              name="last_name"
            />
          </div>

          <div className="form-control w-full border border-white h-[45px] rounded-xl overflow-hidden mb-6">
            <input
              type="email"
              className="border-none focus:border-0 outline-none w-full h-full bg-transparent px-3 text-white placeholder:text-white"
              placeholder="Email Address"
              name="email"
            />
          </div>

          <div className="form-control w-full border border-white rounded-xl overflow-hidden mb-6">
            <textarea
              name="message"
              placeholder="Message"
              className=" border-none focus:border-0 outline-none w-full h-full bg-transparent p-3 text-white placeholder:text-white resize-y"
            ></textarea>
          </div>

          <div className="w-[120px] h-[55px] bg-therapyDarkGreen transition rounded-lg overflow-hidden ml-auto ">
            <button className="btn w-full h-full rounded-none bg-transparent outline-none border-none text-white font-extralight capitalize hover:bg-transparent">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
