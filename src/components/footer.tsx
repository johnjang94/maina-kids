import Image from "next/image";
import FooterLogo from "../assets/components/footer-logo.png";

import { FaRegCopyright } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="py-12 border-b border-b-black">
        <table className="justify-between w-full">
          <thead className="flex-grow text-left">
            <tr className="table-row-spacing">
              <th>Navigation</th>
              <th>Get Involved</th>
              <th>Donation</th>
            </tr>
          </thead>
          <tbody className="flex-grow text-left">
            <tr className="table-row-spacing">
              <td>Home</td>
              <td>Mentorship</td>
              <td>Grant</td>
            </tr>
            <tr className="table-row-spacing">
              <td>About Us</td>
              <td>Sponsorship</td>
              <td>Monthly</td>
            </tr>
            <tr className="table-row-spacing">
              <td>Girl Child</td>
              <td>Partnership</td>
              <td>Yearly</td>
            </tr>
            <tr className="table-row-spacing">
              <td>Contact Us</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:flex md:justify-between md:mx-9 my-6">
        <div>
          <Image src={FooterLogo} alt="Footer Logo" width={138} />
        </div>
        <div className="flex space-x-2 items-center text-sm md:text-lg">
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
    </div>
  );
}
