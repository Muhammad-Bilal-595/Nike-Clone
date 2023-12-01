import Image, { StaticImageData } from "next/image";

interface Props {
  imgurl: string;
  bigimg: string;
  onclick: () => void;
}

const ShoeCard = ({ imgurl, bigimg, onclick }: Props) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        bigimg === imgurl ? "border-coral-red" : ""
      } cursor-pointer bg-primary bg-card bg-center bg-cover flex justify-center items-center`}
    >
      <Image
        src={`${imgurl}`}
        alt="shoe"
        width={150}
        height={150}
        onClick={onclick}
      />
    </div>
  );
};

export default ShoeCard;
