import { reviews } from "@/constants";
import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReiew = () => {
  return (
    <section className="bg-pale-blue padding max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((rev) => (
          <ReviewCard key={rev.imgURL} {...rev} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReiew;
