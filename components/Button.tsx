import Image from "next/image";

interface Props {
  label: string;
  iconurl?: string;
}

const Button = ({ label, iconurl }: Props) => {
  return (
    <button className="flex gap-2 px-7 justify-center items-center py-4 border font-montserrat tex-lg leading-none bg-coral-red rounded-full text-white-400">
      {label}
      {iconurl && <Image src={iconurl} alt="icon" width={25} height={10} />}
    </button>
  );
};

export default Button;
