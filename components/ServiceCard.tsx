import Image from "next/image";

interface Props {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex flex-col ">
        <Image
          src={imgURL}
          alt={label}
          width={40}
          height={40}
          className="rounded-full bg-coral-red p-1"
        />
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
          {label}
        </h3>
        <p className="mt-3 break-words">{subtext}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
