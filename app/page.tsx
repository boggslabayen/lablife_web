"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "./ui/fonts";
import { Typewriter } from "react-simple-typewriter";
import Brand_Icon from "@/public/images/icons/Branding.svg";
import Creative from "@/public/images/icons/Creative.svg";
import Workshop from "@/public/images/icons/Workshop.svg";

import { useState } from "react";

import { eventNames } from "process";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import classes from "@/app/ui/components/Module.module.css";

export default function Home() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [brandingIsVisible, setBrandingIsVisible] = useState(false);
  const [creativeIsVisible, setCreativeIsVisible] = useState(false);
  const [workshopIsVisible, setWorkshopIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
    setBrandingIsVisible(false);
    setCreativeIsVisible(false);
    setWorkshopIsVisible(false);
  }

  function showBrandinghandler() {
    setModalIsVisible(true);
    setBrandingIsVisible(true);
  }

  function showCreativehandler() {
    setModalIsVisible(true);
    setCreativeIsVisible(true);
  }

  function showWorkshophandler() {
    setModalIsVisible(true);
    setWorkshopIsVisible(true);
  }

  return (
    <main className="justify-between">
      {brandingIsVisible ? (
        <div className={classes.backdrop}>
          <dialog open className={classes.modal}>
            <div className="bg-lab-yellow p-8 md:min-w-80">
              <div className="flex justify-between content-center">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold py-4">
                    Branding
                  </h3>
                </div>
                <div
                  className="text-lab-purple pb-2 text-end text-4xl content-center"
                  onClick={hideModalHandler}
                >
                  <FontAwesomeIcon icon={faX} />
                </div>
              </div>

              <div>
                <p className="text-sm leading-relaxed md:text-xl md:leading-10">
                  We help organizations in shaping a positive perception among
                  consumers by guiding them in articulating their brands through
                  identity and positioning.
                </p>
              </div>

              <div className="pt-8">
                <ul className="list-none">
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Brand Visual Identity
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Brand Design Guidelines
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Brand Positioning
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Brand Essence
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Brand Taglines
                  </li>
                </ul>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        false
      )}

      {creativeIsVisible ? (
        <div className={classes.backdrop}>
          <dialog open className={classes.modal}>
            <div className="bg-lab-yellow p-8 md:min-w-80">
              <div className="flex justify-between content-center">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold py-4">
                    Creative Production
                  </h3>
                </div>
                <div
                  className="text-lab-purple pb-2 text-end text-4xl content-center"
                  onClick={hideModalHandler}
                >
                  <FontAwesomeIcon icon={faX} />
                </div>
              </div>

              <div>
                <p className="text-sm leading-relaxed md:text-xl md:leading-10">
                  We help organizations in conveying their messages across
                  various creative platforms, spanning from conceptualization to
                  deployment.
                </p>
              </div>

              <div className="pt-8">
                <ul className="list-none">
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Content Creation (Narrative / Non-Narrative)
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Advertising Campaigns
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Music/Jingle Creation
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Digital Experiences
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Commissioned Art Arrangements
                  </li>
                </ul>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        false
      )}

      {workshopIsVisible ? (
        <div className={classes.backdrop}>
          <dialog open className={classes.modal}>
            <div className="bg-lab-yellow p-8 md:min-w-80">
              <div className="flex justify-between content-center">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold py-4">
                    Bespoke Workshop
                  </h3>
                </div>
                <div
                  className="text-lab-purple pb-2 text-end text-4xl content-center"
                  onClick={hideModalHandler}
                >
                  <FontAwesomeIcon icon={faX} />
                </div>
              </div>

              <div>
                <p className="text-sm leading-relaxed md:text-xl md:leading-10">
                  We empower organizations to enhance their creative prowess
                  through uniquely customized creative workshops.
                </p>
              </div>

              <div className="pt-8">
                <ul className="list-none">
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Creative Leadership
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Creative Writing
                  </li>
                  <li className="md:text-xl text-md pb-4 font-medium pl-4">
                    Music Production
                  </li>
                </ul>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        false
      )}

      <div className="bg-lab-purple min-h-80 md:min-h-96 place-content-center">
        <div>
          <h1
            className={`${montserrat.className} text-3xl font-regular text-gray-50 text-center pb-4`}
          >
            Your <span className="font-black">labteam</span> for
          </h1>
        </div>
        <div
          className={`${montserrat.className} text-3xl md:text-8xl  font-black text-gray-50 text-center`}
        >
          <Typewriter
            words={["Branding", "Marketing", "Creative Workshops", "Design"]}
            loop={false}
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={10}
            delaySpeed={1000}
          />
        </div>
      </div>

      <div className="max-w-80 md:max-w-screen-lg mx-auto py-16">
        <div className="">
          <h3
            className={`${montserrat.className} text-center font-bold text-3xl md:text-6xl pb-4 text-lab-purple`}
          >
            Human connection as the main anchor of your success{" "}
          </h3>

          <p className={`${montserrat.className} text-center font-medim`}>
            We are a family of story tellers and creators. Our core is rooted in
            <span className="font-bold">human centric approach</span>. This is
            just a sample copy please change
          </p>

          <div className="flex mx-auto py-8 justify-center">
            <button
              className={`${montserrat.className} border-2 border-lab-purple rounded-full px-8 py-3 text-lab-purple font-medium hover:bg-lab-purple hover:text-gray-50`}
            >
              <Link href="/about-us">Learn More About us</Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-lab-yellow">
        <div className="max-w-80 md:max-w-screen-lg mx-auto py-16">
          <div className="text-center font-normal text-4xl text-lab-purple">
            <h5>Our Services</h5>
          </div>

          <div className="pt-16">
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {/* Service #1 */}

              <div
                className="flex flex-col place-items-center"
                onClick={showBrandinghandler}
                id="branding"
              >
                <Image
                  src={Brand_Icon}
                  width={200}
                  height={200}
                  alt="brand-icon"
                />
                <h3 className="pt-8 font-medium text-2xl">Branding</h3>
              </div>

              {/* Service #2 */}

              <div
                className="flex flex-col place-items-center"
                onClick={showCreativehandler}
                id="branding"
              >
                <Image
                  src={Creative}
                  width={200}
                  height={200}
                  alt="creative-icon"
                />
                <h3 className="pt-8 font-medium text-2xl">
                  Creative Production
                </h3>
              </div>

              {/* Service #3 */}

              <div
                className="flex flex-col place-items-center"
                onClick={showWorkshophandler}
                id="branding"
              >
                <Image
                  src={Workshop}
                  width={200}
                  height={200}
                  alt="creative-icon"
                />
                <h3 className="pt-8 font-medium text-2xl">Bespoke Workshop</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
