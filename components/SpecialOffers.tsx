import { offer } from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { arrowRight } from "@/public/assets/icons";

const SpecialOffers = () => {
  return (
    <section className="padding flex max-xl:flex-col-reverse items-center max-container gap-10 justify-wrap ">
      <div className="flex-1">
        <Image src={offer} alt="offer" width={773} height={687} />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palaquin capitalize text-4xl max-w-lg font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className=" info-text mt-4 lg:max-w-lg ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 mb-8 lg:max-w-lg">
          Our decleration to detail and excelence ensures your satisfaction
        </p>
        <div className="mt-11 flex gap-2">
          <Button label="Shop Now!" iconurl={arrowRight} />
          <Button label="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
