"use client";
import Image from "next/image";
import Link from "next/link";
import { headerLogo } from "../public/assets/images/index";
import { hamburger } from "../public/assets/icons/index";
import { navLinks } from "@/constants";

import { useState } from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full ">
        <nav className="flex justify-between items-center max-container">
          <Link href={"/"}>
            <Image src={headerLogo} alt="logo" width={130} height={29} />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red hover:font-[600] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:flex relative">
            <Image
              src={hamburger}
              alt="hum"
              width={25}
              height={25}
              onClick={() => setIsMobile(!isMobile)}
              className="cursor-pointer"
            />
            {isMobile && <MobileNav onclick={() => setIsMobile(!isMobile)} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
