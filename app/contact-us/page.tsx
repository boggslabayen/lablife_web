"use client";

import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import classes from "./Form.module.css";
import { sendMessage } from "@/lib/actions";

export default function contact() {
  return (
    <>
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
    </>
  );
}
