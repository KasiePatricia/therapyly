import React from "react";
import Accordion from "./Accordion";
import AppLayout from "./components/layout/AppLayout";
import { accordionData } from "./content";

const Link = () => {
  return (
    <AppLayout>
      <div className="h-full w-full pb-10">
        <h1 className=" text-therapyDarkGreen capitalize">
          Frequently asked questions
        </h1>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Link;
