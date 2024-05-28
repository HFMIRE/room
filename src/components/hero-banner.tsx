import Image from "next/image";
import DesktopImage1 from "../.././images/desktop-image-hero-1.jpg";
import Arrow from "../../images/icon-arrow.svg";
import AngleLeft from "../.././images/icon-angle-left.svg";
import AngleRight from "../.././images/icon-angle-right.svg";
const HeroBanner = () => {
  return (
    <div className="flex z-10 top-0 bg-blue-100 ">
      <Image
        src={DesktopImage1}
        alt="Desktop Image"
        width={1200}
        height={300}
      />
      <div className="w-2/4  flex items-center justify-center  ">
        <div className=" flex flex-col w-3/4 p-10">
          <div className="text-5xl font-bold">
            Discover innovative ways to decorate
          </div>
          <div className="text-lg py-6 text-[#A1A1A1]">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </div>
          <div className="text-xl tracking-[.6em] flex">
            {" "}
            Shop now
            <Image src={Arrow} alt="Arrow" className="ml-4" />
          </div>
        </div>
        <div className="absolute inset-0 ">
          <Image src={AngleLeft} alt="Arrow" className="bg-black w-4" />{" "}
          <Image src={AngleRight} alt="Arrow" className="bg-black w-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
