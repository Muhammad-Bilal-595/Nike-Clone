"use client";
import { arrowRight } from "@/public/assets/icons";
import Button from "./Button";
import { shoes, statistics } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { bigShoe1, bigShoe2, bigShoe3 } from "@/public/assets/images";
import ShoeCard from "./ShoeCard";
import { useEffect, useState } from "react";
const Hero = () => {
  const [image, setImage] = useState(bigShoe1.src);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const img = [bigShoe1, bigShoe2, bigShoe3];
    const intervalId = setInterval(() => {
      if (currentIndex === img.length - 1) {
        setCurrentIndex(0);
        setImage(img[currentIndex].src);
      } else {
        setCurrentIndex(currentIndex + 1);
        setImage(img[currentIndex].src);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="xl:padding-1 wide:padding-r padding-b xl:flex-row flex-col w-full flex justify-center min-h-screen  gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palaquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative max-lg:z-0 z-10 pr-10 xl:rounded-md">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality,comfort and inovation for your
          active life.
        </p>
        <Button label="Shop Now!" iconurl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leadin-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center relative items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={`${image ? image : bigShoe1.src}`}
          alt="shoes"
          width={610}
          height={500}
          className="relative object-contain z-10"
        />
        <div className="flex absolute bottom-[-50px] z-10">
          {shoes.map((shoe, index) => {
            return (
              <div key={shoe.bigShoe} className={` ml-2`}>
                <ShoeCard
                  imgurl={shoe.bigShoe}
                  bigimg={image}
                  onclick={() => {
                    setCurrentIndex(index);
                    setImage(shoe.bigShoe);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
