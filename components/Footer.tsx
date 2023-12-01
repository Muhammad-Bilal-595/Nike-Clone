import { footerLinks, socialMedia } from "@/constants";
import { footerLogo } from "@/public/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 padding-x padding-t rounded-t-md bg-black pb-8 max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href={"/"}>
            <Image src={footerLogo} alt="logo" width={150} height={46} />
          </Link>
          <p className="captalize text-white-400 mt-6 text-base font-montserrat sm:max-w-sm">
            Get your ready for the new term at your nearest Nke store. Find Your
            perfect size in store.get rewards
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <Link
                href={"/"}
                key={icon.src}
                className="flex justify-center items-center bg-slate-gray hover:bg-white rounded-full w-12 h-12 transition-all"
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-1 lg:gap-10 gap-20 justify-between flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul className="flex flex-col">
                {section.links.map((link) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="text-slate-gray hover:text-white-400 mt-3 leading-normal"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
