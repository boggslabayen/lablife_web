import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import Boggs from "@/public/images/headshot/Mask group-2.png";
import Joma from "@/public/images/headshot/Mask group.png";
import Cams from "@/public/images/headshot/Mask group-1.png";
import Mama from "@/public/images/headshot/Mask group-3.png";
import classes from "@/app/contact-us/Form.module.css";
import { sendMessage } from "@/lib/actions";

export default function about() {
  return (
    <>
      <div className="max-w-80 md:max-w-screen-lg mx-auto py-8">
        <h2
          className={`${montserrat.className}  font-bold text-2xl md:text-4xl pb-4 text-lab-purple`}
        >
          Our Lab Story...
        </h2>
        <p className="leading-loose text-lg justify-around">
          LabLife Multimedia Production is a dynamic creative agency dedicated
          to crafting compelling brand narratives through innovative multimedia
          solutions. Since our inception in 2023, we have been committed to
          delivering impactful brand experiences through creative campaign
          executions, immersive digital experiences, brand design, and engaging
          workshops. Our mission is to empower brands to connect with their
          audiences on a deeper level and leave a lasting impression.
        </p>
      </div>
      {/* Ways of Working */}
      <div>
        <div className="max-w-80 md:max-w-screen-lg mx-auto py-8 text-center">
          <h2 className="text-2xl font-semibold pb-4">How we Work</h2>
          <p className="leading-loose text-lg justify-around">
            Our output is inspired by the lessons our father learned in life and
            work
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-80 md:max-w-screen-lg mx-auto text-center">
          <div className="border-2 border-lab-purple rounded-lg py-8 md:p-16">
            <h3 className="font-bold text-lab-purple text-lg">Charisma</h3>
          </div>
          <div className="border-2 border-lab-purple rounded-lg py-8 md:p-16">
            <h3 className="font-bold text-lab-purple text-lg">Meaning</h3>
          </div>
          <div className="border-2 border-lab-purple rounded-lg py-8 md:p-16">
            <h3 className="font-bold text-lab-purple text-lg">Values</h3>
          </div>
          <div className="border-2 border-lab-purple rounded-lg py-8 md:p-16">
            <h3 className="font-bold text-lab-purple text-lg">Inspiration</h3>
          </div>
        </div>
      </div>

      <div className=" bg-lab-yellow py-8 my-8">
        <div>
          <h2 className="text-3xl text-center text-lab-purple">Our Team</h2>
        </div>
        <div className="md:flex justify-between max-w-80 md:max-w-screen-lg mx-auto py-16">
          <div className="flex flex-col items-center">
            <Image src={Cams} width={200} height={200} alt="Cams-Headshot" />
            <div className="py-4">
              <p className="text-lg text-center font-bold">Camille Eusebio</p>
              <p className="text-lg text-center">CEO / COO</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Joma} width={200} height={200} alt="Joma-Headshot" />
            <div className="py-4">
              <p className="text-lg text-center font-bold">Joma Labayen</p>
              <p className="text-lg text-center">Chief Creative Officer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Mama} width={200} height={200} alt="Mama-Headshot" />
            <div className="py-4">
              <p className="text-lg text-center font-bold">Ging Labayen</p>
              <p className="text-lg text-center">CFO</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Boggs} width={200} height={200} alt="Bogs-Headshot" />
            <div className="py-4">
              <p className="text-lg text-center font-bold">Camille Eusebio</p>
              <p className="text-lg text-center">Head of Design</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-80 md:max-w-screen-lg mx-auto py-16">
          <div className="">
            <h3
              className={`${montserrat.className} text-center font-bold text-xl md:text-4xl pb-4 text-lab-purple max-w-4xl`}
            >
              Got a project in mind? Want to collaborate?Send us a message.
            </h3>
          </div>
        </div>
        <form
          className={`${classes.form} max-w-80 md:max-w-screen-lg mx-auto py-4`}
          action={sendMessage}
        >
          <div className="flex flex-col py-4">
            <label htmlFor="Name" className="">
              Your Name
            </label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="flex flex-col py-4">
            <label htmlFor="Email" className="">
              Your Email
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="flex flex-col py-4">
            <label htmlFor="number" className="">
              Mobile Number
            </label>
            <input type="number" id="number" name="number" required />
          </div>

          <div className="flex flex-col py-4">
            <label htmlFor="message" className="">
              Your Message
            </label>
            <textarea id="message" name="message" rows={10} required />
          </div>

          <div className={classes.actions}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
