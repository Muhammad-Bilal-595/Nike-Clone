import { arrowRight } from "@/public/assets/icons";
import { offer, shoe4, shoe6, shoe7, shoe8 } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="padding flex justify-between  max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palaquin capitalize text-4xl max-w-lg font-bold">
          we provide you
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className=" info-text mt-4 lg:max-w-lg ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 mb-8 lg:max-w-lg">
          Our decleration to detail and excelence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={shoe8} alt="shoe" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
