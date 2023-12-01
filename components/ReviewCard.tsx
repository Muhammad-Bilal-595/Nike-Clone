import { star } from "@/public/assets/icons";
import Image from "next/image";

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="Customer"
        width={120}
        height={120}
        className="object-cover rounded-full"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex gap-2 mt-3 justify-center items-center">
        <Image
          src={star}
          alt="Customer"
          width={24}
          height={24}
          className="object-cover m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
