import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Milk() {
	return (
		<section className='max-w-[1320px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{[
				{
					img: 'milk1.png',
					title: '100% Fresh Cow Milk',
					price: '$14.99',
				},
				{
					img: 'milk2.png',
					title: 'Water & Soft Drink',
					sub: 'Drink Sale',
				},
				{
					img: 'milk3.png',
					title: 'Quick Breakfast',
					sub: 'Drink Sale',
				},
			].map((card, index) => (
				<div
					key={index}
					className='bg-cover bg-no-repeat bg-right rounded-[8px] h-[255px] w-full flex items-center'
					style={{
						backgroundImage: `url("${card.img}")`,
					}}
				>
					<div className='w-full h-full bg-black/40  flex justify-start items-start p-4 sm:pt-10 sm:pl-6 rounded-[8px] text-white'>
						<div className='max-w-[183px] text-left sm:text-left w-full'>
							{card.sub && (
								<span className='text-[14px] font-medium font-["Poppins"] text-[#cbc7c7] sm:text-white block mb-1  sm:text-left'>
									{card.sub}
								</span>
							)}
							<h2 className='text-[24px] sm:text-[32px] leading-[120%] font-["Poppins"] font-semibold sm:text-left'>
								{card.title}
							</h2>
							{card.price && (
								<span className='text-[14px] font-["Poppins"] font-normal text-[#cbc7c7] block mt-1 sm:text-left'>
									Starting at
									<span className='text-[20px] font-medium text-white'>
										{card.price}
									</span>
								</span>
							)}
							<Link to="/shopping">
								<div className='w-[162px] mt-4 h-[45px] mx-auto sm:mx-0 rounded-full bg-white flex items-center justify-center gap-[2px]'>
									<span className='text-[rgba(0,178,7,1)] text-[14px] font-medium font-["Poppins"]'>
										Shop Now
									</span>
									<FaArrowRight className='text-[rgba(0,178,7,1)]' />
								</div>
							</Link>
						</div>
					</div>
				</div>
			))}
		</section>
	)
}

export default Milk
