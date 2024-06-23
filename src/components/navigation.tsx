import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-between mx-9 my-10">
      <div>
        <Image src="" alt="Logo" />
      </div>
      <div className="justify-between space-x-20">
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
