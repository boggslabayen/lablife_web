"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "./ui/fonts";
import { Typewriter } from "react-simple-typewriter";
import Brand_Icon from "@/public/images/icons/Branding.svg";
import Creative from "@/public/images/icons/Creative.svg";
import Workshop from "@/public/images/icons/Workshop.svg";
import Modal from "./ui/components/Modal";
import { useState } from "react";
import Post from "./ui/components/Post";
import { eventNames } from "process";

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
        <Modal onClose={hideModalHandler}>
          <Post
            ServiceTitle="Branding"
            ServiceDescription="We help organizations in shaping a positive perception among consumers by guiding them in articulating their brands through  identity and positioning."
            serviceList1="Brand Visual Identity"
            serviceList2="Brand Design Guidelines"
            serviceList3="Taglines"
            serviceList4="Brand Positioning"
            onClose={hideModalHandler}
            serviceList5={undefined}
          />
        </Modal>
      ) : (
        false
      )}

      {creativeIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <Post
            ServiceTitle="Creative Production "
            ServiceDescription="We help organizations in conveying their messages across various creative platforms, spanning from conceptualization to deployment."
            serviceList1="Content Creation (Narrative / Non-Narrative)"
            serviceList2="Advertising Campaigns"
            serviceList3="Music/Jingle Creation"
            serviceList4="Digital Experiences"
            serviceList5="Commissioned Art Arrangements"
            onClose={hideModalHandler}
          />
        </Modal>
      ) : (
        false
      )}

      {workshopIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <Post
            ServiceTitle="Bespoke Workshop "
            ServiceDescription="We empower organizations to enhance their creative prowess through uniquely customized creative workshops."
            serviceList1="Creative Leadership"
            serviceList2="Creative Writing"
            serviceList3="Music Production"
            onClose={hideModalHandler}
            serviceList4={undefined}
            serviceList5={undefined}
          />
        </Modal>
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
