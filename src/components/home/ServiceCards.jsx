import React from "react";
import { Link } from "react-router-dom";

const ServiceCards = ({ bg, heading, color = "text-black" }) => {
  return (
    <div
      className={`w-full p-5 flex flex-col-reverse md:flex-row 
    ${bg} items-center rounded-[20px] md:justify-between mb-6 ${color}`}
    >
      <article className="w-full md:w-1/2">
        <h5 className=" capitalize leading-normal font-bold mb-3 text-center md:text-left">
          {heading}
        </h5>
        <p className="sm:w-[450px] mx-auto md:mx-0 leading-normal text-sm font-normal mb-4 md:w-[95%] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <div className="w-[120px] h-[40px] bg-therapyLightGreen hover:bg-therapyDarkGreen transition rounded-[10px] overflow-hidden mx-auto md:mx-0">
          <button className="p-0 w-full h-full rounded-none bg-transparent outline-none border-none text-white font-extralight capitalize hover:bg-transparent text-sm">
            <Link to="/signup/client-signup">book now</Link>
          </button>
        </div>
      </article>

      <figure className="m-0 p-0 w-full h-[200px]  md:w-[350px] my-6 md:my-0 flex md:justify-end card-image rounded-[20px]"></figure>
    </div>
  );
};

export default ServiceCards;
