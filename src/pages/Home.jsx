import React from "react";
import { Link } from "react-router-dom";
import { aboutData } from "../data";
import * as Components from "../components/home";
import Footer from "../components/Footer";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div className=" w-full pt-3 text-black">
        {/* hero section */}
        <section className="mx-auto w-90  py-5 ">
          <div className="w-full flex flex-col-reverse md:flex-row min-h-[90vh] justify-center md:justify-between md:items-center">
            <article className="w-full  md:w-1/2  md:mt-10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl capitalize leading-normal font-bold mb-3 text-center md:text-left">
                let&apos;s talk about it
              </h1>
              <p className="sm:w-[450px] mx-auto md:mx-0 leading-normal text-sm font-normal mb-4 md:w-[95%] text-center md:text-left">
                BetterHelp is the global leader in providing online therapy and
                virtual mental health services to people who deserve support.
                Your mental health can significantly improve by working with our
                licensed and experienced therapists, who have the ability to
                help with concerns like depression, stress, anxiety, and more
                mental health conditions.
              </p>

              <div className="w-[120px] h-[55px] bg-therapyDarkGreen hover:bg-therapyLightGreen transition rounded-[18px] overflow-hidden mx-auto md:mx-0">
                <button className="btn w-full h-full rounded-none bg-transparent outline-none border-none text-white font-extralight capitalize hover:bg-transparent">
                  <Link to="/signup/client-signup">get started</Link>
                </button>
              </div>
            </article>

            <figure className="m-0 p-0 w-full md:w-1/2 sm:h-[400px] lg:h-[465px] my-6 md:my-0 flex justify-end">
              <img src="/assets/hero-img.svg" alt="" className="w-90 h-full " />
            </figure>
          </div>
        </section>

        {/* about us */}
        <section id="about" className="mx-auto w-90 mt-[40px] pt-[40px]">
          <h3 className="capitalize leading-normal font-bold mb-9 text-center text-lg md:text-2xl">
            about us
          </h3>

          <div className="mt-5 w-full sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
            {aboutData.map((data) => (
              <Components.Card
                key={data.id}
                paragraph={data.paragraph}
                heading={data.heading}
              />
            ))}
          </div>

          <Components.Carousel />
        </section>

        {/* our service */}
        <section id="services" className="mx-auto w-90 mt-[40px] pt-[40px]">
          <h3 className="capitalize leading-normal font-bold mb-9 text-center text-lg md:text-2xl">
            our service
          </h3>

          <div className="w-90 mx-auto mt-5 sm:w-[80%]">
            <Components.ServiceCards
              bg="bg-[#FCFCFC]"
              heading="in-person therapy"
            />
            <Components.ServiceCards
              bg="bg-therapyDarkGreen"
              heading="virtual therapy"
              color="text-white"
            />
          </div>
        </section>

        {/* contact us */}
        <section
          id="contact"
          className="w-full max-w-[1036px] mx-auto mt-[40px] pt-[40px] "
        >
          <h3 className="capitalize leading-normal font-bold mb-2 text-center text-lg md:text-2xl mx-auto w-90">
            contact us
          </h3>
          <p className="text-sm leading-normal text-center mx-auto w-80">
            Do you have a question, concern, idea, feedback, or problem? Take a
            look at our frequently asked questions for some quick answers. If
            you still need assistance, please fill out the form below and we'd
            be happy to help!
          </p>

          <div className="w-full my-5 bg-therapyLightGreen p-7 rounded-3xl flex justify-between mx-auto text-white">
            <div className="hidden w-1/2 md:block">
              <h3 className="capitalize leading-normal font-bold mb-2 text-lg text-therapyDarkGreen">
                types of questions
              </h3>

              <ul className="w-full m-0 p-0 text-therapyDarkGreen">
                <li className="bullet">
                  I am a registered client and i need help.
                </li>
                <li className="bullet">
                  I am a therapist interested in joining.
                </li>
                <li className="bullet">I have a question about the service.</li>
                <li className="bullet">I have a billing related question.</li>
                <li className="bullet">I am interested in getting therapy.</li>
              </ul>
            </div>

            <Components.ContactForm />
          </div>
        </section>

        {/* footer */}
        <Footer />
      </div>
    </AppLayout>
  );
};

export default Home;
