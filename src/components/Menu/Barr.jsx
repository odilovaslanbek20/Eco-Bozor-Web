import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function Barr() {
  const location = useLocation();
  const currentPage = location.pathname.split("/").filter(Boolean).pop() || "Home";

  return (
    <div className="w-full h-auto relative">
      <div
        className="w-full h-[120px] max-[760px]:h-[80px] rotate-180"
        style={{
          backgroundImage: `url("/adminimg.jpeg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "bottom",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-5">
        <div className="w-full max-w-[1320px] mx-auto flex items-center gap-2 text-white">
          <GoHome className="text-[25px]" />
          <FaAngleRight className="text-[15px]" />
          <p className="capitalize">{currentPage}</p>
        </div>
      </div>
    </div>
  );
}

export default Barr;
