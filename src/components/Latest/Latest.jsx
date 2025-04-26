import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CiUser, CiHome } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";

function Latest() {
	const cards = [
		{ img: "new.png", day: "18", month: "Nov" },
		{ img: "new1.png", day: "12", month: "Jan" },
		{ img: "new2.png", day: "21", month: "Feb" },
	];

	return (
		<section className='max-w-[1320px] mx-auto px-5'>
			<h2 className='text-[rgba(26,26,26,1)] text-[32px] font-semibold font-["Poppins"] text-center mb-[32px]'>
				Latest News
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
				{cards.map((card, index) => (
					<div
						key={index}
						className='group relative cursor-pointer hover:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] transition-all bg-white rounded-[8px] border border-[rgba(230,230,230,1)]'
					>
						<img src={card.img} alt='news img' className='w-full h-auto rounded-t-[8px]' />
						
						<div className="w-[58px] h-[58px] bg-[#f9f9f9] mt-[-90px] ml-[20px] rounded absolute z-10 flex items-center justify-center">
							<p className='text-[16px] font-semibold text-[#000000] font-["Poppins"] flex flex-col items-center'>
								{card.day}
								<span className='text-[rgba(128,128,128,1)] text-[12px] uppercase font-medium'>
									{card.month}
								</span>
							</p>
						</div>

						<div className='p-[24px] max-[400px]:flex max-[400px]:items-center max-[400px]:justify-center max-[400px]:flex-col'>
		
							<span className='flex flex-wrap items-center gap-[16px] mb-[8px] max-[400px]:justify-center'>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<CiHome className='text-[20px] rotate-[-20deg]' />
									Food
								</p>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<CiUser className='text-[20px]' />
									By Admin
								</p>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<TfiComment />
									65 Comments
								</p>
							</span>

							<p className='text-[rgba(26,26,26,1)] group-hover:text-[rgba(44,116,47,1)] text-[18px] font-medium font-["Poppins"] mb-[20px] max-[400px]:text-center'>
								Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
							</p>

							<Link to="/news-detail" className='flex items-center gap-[5px]'>
								<p className='text-[16px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'>
									Read More
								</p>
								<FaArrowRight className='text-[rgba(0,178,7,1)]' />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Latest;
