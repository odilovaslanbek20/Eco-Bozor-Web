import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Cols() {
	return (
		<>
			<section className='w-full m-auto bg-[rgba(26,26,26,1)]'>
				<div className='w-full py-[40px] bg-[#e8e6e6] m-auto'>
					<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] flex items-center justify-between gap-[100px] max-[1197px]:gap-[50px] max-[1056px]:flex-col max-[1056px]:gap-[20px]'>
						<div className='max-w-[448px]'>
							<h1 className='text-[24px] font-["Poppins"] font-semibold text-[rgba(26,26,26,1)] max-[1056px]:text-center  max-[332px]:text-[22px]'>Subcribe our Newsletter</h1>
							<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(153,153,153,1)] max-[1056px]:text-center w-full'>
								Pellentesque eu nibh eget mauris congue mattis mattis nec
								tellus. Phasellus imperdiet elit eu magna.
							</p>
						</div>

						<div className='flex items-center w-[100%] gap-[40px] justify-center max-[701px]:flex-col max-[701px]:gap-[20px]'>
							<form className='w-[536px] max-[501px]:w-full max-[1142px]:w-[450px] h-[52px] bg-[#f8f5f5] rounded-full flex items-center justify-between border border-[rgba(230,230,230,1)] max-[500px]:h-[50px] max-[400px]:flex-col max-[400px]:h-[120px] max-[400px]:rounded-[10px] max-[400px]:p-[15px] max-[400px]:gap-[10px]'>
								<input
									className='pl-[20px] text-[16px] font-["Poppins"] font-normal max-[400px]:border max-[400px]:w-full max-[400px]:h-[45px] max-[400px]:rounded w-[100%] outline-none'
									type='text'
									placeholder='Your email address'
								/>
								<button
									className='w-[162px] max-[1142px]:w-[120px] h-full rounded-full bg-[rgba(0,178,7,1)] text-[16px] font-semibold font-["Poppins"] max-[500px]:text-[14px] max-[500px]:h-[45px] max-[500px]:w-[100px] text-[rgba(255,255,255,1)] max-[400px]:h-[30px] max-[400px]:w-full max-[400px]:rounded cursor-pointer'
									type='submit'
								>
									Subscribe
								</button>
							</form>
							<div className="flex items-center gap-[8px]">
                 <div className="group w-[40px] transition-all h-[40px] rounded-full bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer">
								   <FaFacebookF className='text-[#fff] transition-all'/>
								 </div>
								 <div className="group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer">
								   <FaTwitter className='group-hover:text-[#fff] transition-all'/>
								 </div>
								 <div className="group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer">
								   <FaPinterestP className='group-hover:text-[#fff] transition-all'/>
								 </div>
								 <div className="group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer">
								   <FaInstagram className='group-hover:text-[#fff] transition-all'/>
								 </div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Cols
