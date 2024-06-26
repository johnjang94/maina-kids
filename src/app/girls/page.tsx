import Image from "next/image";
import linkIcon from "../../assets/link.svg";

export default function Girls() {
  return (
    <div>
      {/* section 1 */}
      <div className="w-full pt-10 pb-20 mb-20 flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-[#336699] text-xl font-bold uppercase">
            Girl Child
          </h1>
          <h2 className="text-stone-700 text-4xl font-extrabold">
            Girl Child Program
          </h2>
          <p className="text-stone-700 text-lg mt-2">
            Every girl child&apos;s voice deserves to be heard, she deserves to
            dream big and aim for a better tomorrow.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 px-4">
          <Image
            className="rounded-lg"
            src="https://via.placeholder.com/600x390"
            width={600}
            height={390}
            alt="Girl Child Program"
          />
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:w-2/5 ">
            <div className="border-l-2 border-slate-900 h-10 hidden lg:block"></div>
            <p className="text-stone-700 text-lg">
              The Girl Child Program was launched to carry out awareness
              activities among young girls in rural communities in the Northern
              part of Nigeria on sanitary hygiene and bring about possible
              solutions to ending period poverty.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 text-white text-lg p-6 md:p-12 rounded-md text-center max-w-xl -mt-10 md:-mt-28 mx-4">
          Addressing the specific needs and challenges faced by girls over the
          next five years with possible extension, we aim to implement a series
          of programs and activities focused on education, health, skill
          development, and confidence-building for girls aged 12-19.
        </div>
      </div>

      {/* section 2 */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-[#336699] text-xl font-bold uppercase">Problem</h1>
        <h2 className="text-stone-700 text-4xl font-extrabold">
          A glimpse into the problem
        </h2>
        <p className="text-stone-700 text-lg mt-2">
          Giving you a tiny glimpse into the issues the girl child faces, issues
          that stifle her growth and development.
        </p>
      </div>

      {/* problems cards */}
      <div className="flex flex-wrap justify-center lg:w-10/12 lg:m-auto">
        <div className="w-[90%] md:w-[570px] h-auto px-4 py-5 bg-stone-50 rounded-[10px] shadow-lg justify-center items-center gap-2.5 inline-flex m-5">
          <p className="text-stone-700 text-base md:text-lg font-normal font-['Kumbh Sans'] leading-relaxed">
            The situation of the girl child in the northern part of Nigeria is a
            toxic situation of disregard, lack of awareness, lack of proper
            amenities, discrimination, carelessness and utter irresponsibility.
            The girl child is seen as the lesser child, whose only purpose is
            marriage, staying home and giving birth. No education, no health
            awareness, no skills, no dreams, and no voice.
          </p>
        </div>

        <div className="w-[90%] md:w-[570px] h-auto px-4 py-5 bg-stone-50 rounded-[10px] shadow-lg justify-center items-center gap-2.5 inline-flex m-5">
          <p className="text-stone-700 text-base md:text-lg font-normal font-['Kumbh Sans'] leading-relaxed">
            The situation of the girl child in the northern part of Nigeria is a
            toxic situation of disregard, lack of awareness, lack of proper
            amenities, discrimination, carelessness and utter irresponsibility.
            The girl child is seen as the lesser child, whose only purpose is
            marriage, staying home and giving birth. no education, no health
            awareness, no skills, no dreams and no voice.
          </p>
        </div>

        <div className="w-[90%] md:w-[570px] h-auto px-4 py-5 bg-stone-50 rounded-[10px] shadow-lg justify-center items-center gap-2.5 inline-flex m-5">
          <p className="text-stone-700 text-base md:text-lg font-normal font-['Kumbh Sans'] leading-relaxed">
            The situation of the girl child in the northern part of Nigeria is a
            toxic situation of disregard, lack of awareness, lack of proper
            amenities, discrimination, carelessness and utter irresponsibility.
            The girl child is seen as the lesser child, whose only purpose is
            marriage, staying home and giving birth. no education, no health
            awareness, no skills, no dreams and no voice.
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div>
        <div className="text-center my-10 px-4">
          <h1 className="text-[#336699] text-xl font-bold uppercase">
            Our Objectives
          </h1>
          <h2 className="text-stone-700 text-4xl font-extrabold">
            How we are tackling the problem
          </h2>
          <p className="text-stone-700 text-lg mt-2">
            We are using our resources to tackle the problem, one girl at a
            time.
          </p>
        </div>
        {/* image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 m-auto place-items-center w-4/5">
          <div className="w-full lg:w-[400px]">
            <Image
              className="rounded-lg border-2"
              src="https://via.placeholder.com/320/220"
              width={400}
              height={200}
              alt="Educational Workshops"
            />
            <p className="mt-4">
              Educational Workshops: Conducting workshops to promote access to
              quality education, career guidance, and awareness about the
              importance of education for girls.
            </p>
          </div>
          <div className="w-full lg:w-[400px]">
            <Image
              className="rounded-lg border-2"
              src="https://via.placeholder.com/320/220"
              width={400}
              height={200}
              alt="Educational Workshops"
            />
            <p className="mt-4">
              Educational Workshops: Conducting workshops to promote access to
              quality education, career guidance, and awareness about the
              importance of education for girls.
            </p>
          </div>
          <div className="w-full lg:w-[400px]">
            <Image
              className="rounded-lg border-2"
              src="https://via.placeholder.com/320/220"
              width={400}
              height={200}
              alt="Educational Workshops"
            />
            <p className="mt-4">
              Educational Workshops: Conducting workshops to promote access to
              quality education, career guidance, and awareness about the
              importance of education for girls.
            </p>
          </div>
          <div className="w-full lg:w-[400px]">
            <Image
              className="rounded-lg border-2"
              src="https://via.placeholder.com/320/220"
              width={400}
              height={200}
              alt="Educational Workshops"
            />
            <p className="mt-4">
              Educational Workshops: Conducting workshops to promote access to
              quality education, career guidance, and awareness about the
              importance of education for girls.
            </p>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="w-10/12 mx-auto mt-24">
        <h1 className="text-stone-700 text-4xl font-extrabold">Projects</h1>
        <p className="mb-10 py-5">
          Our projects are carefully curated to tackle the issues faced by the
          girl child and look for ways to avoid it entirely.
        </p>
        {/* cards */}
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 justify-center scrollbar-hide gap-40">
          <div className="flex-shrink-0 w-80 bg-stone-50 rounded-lg shadow-xl flex flex-col justify-center items-start p-8 gap-4">
            <h2 className="text-slate-900 text-2xl font-bold">
              Sister to Sister
            </h2>
            <Image
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/320x220"
              alt="Sister to Sister"
              width={320}
              height={220}
            />
            <p className="text-stone-700 text-xl">
              A mentor-mentee program curated to help build confidence, improve
              the well-being of girl child and general life.
            </p>
            <button className="bg-[#336699] text-white text-base font-medium rounded-lg py-3 px-4 w-full">
              Learn more
            </button>
          </div>
          <div className="flex-shrink-0 w-80 bg-stone-50 rounded-lg shadow-xl flex flex-col justify-center items-start p-8 gap-4">
            <h2 className="text-slate-900 text-2xl font-bold">
              Sister to Sister
            </h2>
            <Image
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/320x220"
              alt="Sister to Sister"
              width={320}
              height={220}
            />
            <p className="text-stone-700 text-xl">
              A mentor-mentee program curated to help build confidence, improve
              the well-being of girl child and general life.
            </p>
            <button className="bg-[#336699] text-white text-base font-medium rounded-lg py-3 px-4 w-full">
              Learn more
            </button>
          </div>
          <div className="flex-shrink-0 w-80 bg-stone-50 rounded-lg shadow-xl flex flex-col justify-center items-start p-8 gap-4">
            <h2 className="text-slate-900 text-2xl font-bold">
              Sister to Sister
            </h2>
            <Image
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/320x220"
              alt="Sister to Sister"
              width={320}
              height={220}
            />
            <p className="text-stone-700 text-xl">
              A mentor-mentee program curated to help build confidence, improve
              the well-being of girl child and general life.
            </p>
            <button className="bg-[#336699] text-white text-base font-medium rounded-lg py-3 px-4 w-full">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
