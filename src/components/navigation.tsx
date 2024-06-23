import Image from "next/image";
import Link from "next/link";

// LOGO
import Logo from "../assets/components/logo.jpg";

export default function Navigation() {
  return (
    <div className="flex justify-between mx-9 my-3 items-center">
      <div>
        <Image src={Logo} alt="Logo" width={90} className="rounded-full" />
      </div>
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
  );
}
