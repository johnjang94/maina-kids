import Image from "next/image";
import FooterLogo from "../assets/footer-logo.png";

import { FaRegCopyright } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between mx-9 my-6">
      <div>
        <Image src={FooterLogo} alt="Footer Logo" width={138} />
      </div>
      <div className="flex space-x-2 items-center">
        <span>Maina and kids children foundation</span>
        <FaRegCopyright />
        <span>2024</span>
      </div>
      <div className="flex justify-between items-center space-x-10">
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
    </div>
  );
}
