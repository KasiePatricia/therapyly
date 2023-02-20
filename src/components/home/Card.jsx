import React from "react";

const Card = ({ heading, paragraph }) => {
  return (
    <div className=" p-5 bg-therapyDarkGreen rounded-[20px]">
      <article className="w-full">
        <h5 className="font-semibold text-therapyLightGreen capitalize text-base text-center leading-normal mb-4">
          {heading}
        </h5>
        <p className="leading-normal my-3 text-center text-white text-sm">
          {paragraph}
        </p>
      </article>
    </div>
  );
};

export default Card;
