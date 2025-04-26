import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

function Chegirma() {
	return (
		<div className="max-w-[1320px] mx-auto max-[1360px]:mx-[20px] my-[60px] h-auto relative overflow-hidden rounded-[10px]">
  <img
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="rasm.jpeg"
    alt="rasm"
  />
  <div className="relative w-full flex items-center justify-end z-10 h-[358px] max-[1012px]:bg-[#000000]/50">
    <div className="max-w-[441px] px-4">
      <h2 className="text-white text-[16px] font-medium font-['Poppins']">
        Summer Sale
      </h2>
      <h2 className="text-[56px] font-['Poppins'] font-medium text-[rgba(0,178,7,1)] leading-[1.1]">
        37% <span className="text-white font-normal">OFF</span>
      </h2>
      <p className="text-[#c4c4c4] text-[16px] font-medium font-['Poppins'] mb-[28px]">
        Free on all your order, Free Shipping and 30 days money-back guarantee
      </p>
      <Link
        to="/shopping"
        className="w-[191px] h-[51px] font-['Poppins'] flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full bg-[rgba(0,178,7,1)] transition text-[16px] font-semibold hover:opacity-90"
      >
        Shop now
        <FaArrowRight />
      </Link>
    </div>
  </div>
</div>

	);
}

export default Chegirma;
