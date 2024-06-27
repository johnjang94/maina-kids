import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

// LOGO
import Logo from "../assets/components/logo.png";

export default function Navigation() {
  return (
    <div className="flex justify-between mx-9 my-3 items-center">
      <div>
        <Image src={Logo} alt="Logo" className="w-8 md:w-20" />
      </div>
      <div className="hidden md:flex">
        <div className="justify-between space-x-14">
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/about">
            <button>About Us</button>
          </Link>
          <Link href="/girls">
            <button>Girl Child</button>
          </Link>
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <RxHamburgerMenu className="w-6" />
      </div>
    </div>
  );
}
