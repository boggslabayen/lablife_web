"use client";

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import whiteLogo from "@/public/images/white_logo.png";
import Image from "next/image";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-2"
        children={undefined}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a
          href="/about-us"
          className="flex items-center hover:text-amber-600 transition-colors"
        >
          Who we are
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-amber-600 transition-colors"
        >
          Services
        </a>
      </Typography> */}
      <Typography as="li" variant="lead" color="white" className="p-2">
        <a
          href="/contact-us"
          className="flex items-center hover:text-amber-600 transition-colors"
        >
          Contact Us
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full md:px-40 py-3 rounded-none bg-lab-purple border-0">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <Image src={whiteLogo} width={60} height={60} alt="Logo" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
