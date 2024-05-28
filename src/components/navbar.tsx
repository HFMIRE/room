import Image from "next/image";
import Logo from "../.././images/logo.svg";
const Navbar = () => {
  return (
    <div className="z-20 absolute top-0 flex  justify-around w-2/6 text-white font-semibold py-8 text-lg ">
      <Image src={Logo} alt="" width={50} height={10} />
      <div>home</div>
      <div>shop</div>
      <div>about</div>
      <div>contact</div>
    </div>
  );
};

export default Navbar;
