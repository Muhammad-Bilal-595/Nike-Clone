import { navLinks } from "@/constants";
import Link from "next/link";
interface Props {
  onclick: () => void;
}

const MobileNav = ({ onclick }: Props) => {
  return (
    <div className="z-10 max-sm:right-0 max-sm:justify-end bg-white items-center flex flex-col transition-transform gap-2 absolute top-10 right-5 shadow-2xl w-[200px] px-2 py-4 rounded-md border-2 border-coral-red">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className="hover:text-coral-red "
          onClick={onclick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
