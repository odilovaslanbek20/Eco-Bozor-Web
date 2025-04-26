import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

function Month() {
	return (
		<>
			<section className='my-[50px] py-[32px] bg-[rgba(237,242,238,1)]'>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] flex flex-col lg:flex-row items-center justify-between gap-8'>
					<div className='flex justify-center lg:justify-start'>
						<img className='w-[300px] md:w-[400px] lg:w-[500px]' src='vigitabls.png' alt='sabzovotlar' />
					</div>
					
					<div className='flex flex-col items-center max-w-[400px] px-4 text-center'>
						<p className='text-[16px] font-["Poppins"] font-medium text-[rgba(0,178,7,1)]'>Best Deals</p>
						<h2 className='text-[rgba(0,38,3,1)] font-["Poppins"] font-semibold mt-[12px] mb-[24px] leading-[120%] text-[32px] sm:text-[40px] max-[400px]:text-[25px]'>
							Our Special Products Deal of the Month
						</h2>

						<div className="flex justify-between gap-2 sm:gap-4 mb-[32px] w-full max-w-[350px] sm:max-w-[400px]">
							{[
								{ time: '00', label: 'days' },
								{ time: '02', label: 'hours' },
								{ time: '18', label: 'mins' },
								{ time: '46', label: 'secs' },
							].map((item, index) => (
								<div
									key={index}
									className="flex-1 h-[70px] sm:h-[80px] flex flex-col items-center justify-center bg-white rounded-[6px]"
								>
									<span className='font-["Poppins"] text-[22px] sm:text-[25px] text-[rgba(0,178,7,1)]'>{item.time}</span>
									<span className='text-[13px] sm:text-[14px] text-[rgba(97,128,98,1)] font-["Poppins"]'>{item.label}</span>
								</div>
							))}
						</div>

						<Link to="/shopping">
							<div className="bg-[rgba(0,178,7,1)] w-[191px] rounded-[40px] h-[51px] gap-[2px] flex items-center justify-center">
								<p className='text-[16px] text-white font-["Poppins"] font-semibold'>Shop Now</p>
								<FaArrowRight className='text-[#fff]' />
							</div>
						</Link>
					</div>

					<div className='flex justify-center lg:justify-end'>
						<img className='w-[300px] md:w-[400px] lg:w-[500px]' src='ukam.png' alt='ukam rasmi' />
					</div>
				</div>
			</section>
		</>
	)
}

export default Month
