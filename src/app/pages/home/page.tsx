import Image from "next/image";
import Opening from "../../../assets/group-photo1.jpg";
import Opening2 from "../../../assets/group-photo2.jpg";
import Opening3 from "../../../assets/group-photo3.jpg";

// For Section 5
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SectionFiveToSeven() {
  return (
    <div>
      <div className="my-20">
        {/* ===================== SECTION 5 ====================== */}
        <h3 className="text-center text-[#336699] text-xl font-bold">
          PORTFOLIO
        </h3>
        <h1 className="text-6xl text-[#443838] text-center font-extrabold my-2">
          Our Gallery
        </h1>
        <div className="grid grid-cols-3 gap-5 mt-12 mb-4">
          <Image
            src={Opening}
            alt="Opening group photo 1"
            className="rounded-2xl"
          />
          <Image
            src={Opening2}
            alt="Opening group photo 2"
            className="rounded-2xl"
          />
          <Image
            src={Opening3}
            alt="Opening group photo 3"
            className="rounded-2xl"
          />
        </div>
        <div className="flex justify-end">
          <div className="flex gap-4 items-center">
            <div className="flex px-2 py-4 items-center hover:pointer">
              <FaArrowLeftLong width={24} />
              <button className="text-base text-[#443838] font-medium px-4">
                Prev
              </button>
            </div>
            <div className="flex px-2 py-4 items-center hover:pointer">
              <button className="text-base text-[#336699] font-medium px-4">
                Next
              </button>
              <FaArrowRightLong width={24} className="text-[#336699]" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-5xl text-[#443838] font-extrabold">
          Meet the team
        </h1>
        <p className="my-6 text-[#443838] text-lg font-normal">
          A dedicated team committed to making positive impact in the lives of
          children.
        </p>
        <div className="my-5">
          <p>I am done for the day. I might do more tomorrow.</p>
        </div>
      </div>
    </div>
  );
}
