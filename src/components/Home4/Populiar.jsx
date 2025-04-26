import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'

const  products = [
	{
		id: 1,
		images: 'meva1.svg',
		title: 'Green Apple',
		images1: 'yulduz.svg',
		prise: '$14.99',
	},
	{
		id: 2,
		images: 'meva2.svg',
		title: 'Fresh Indian Malta',
		images1: 'yulduz.svg',
		prise: '$20.00',
	},
	{
		id: 3,
		images: 'meva3.svg',
		title: 'Chinese cabbage',
		images1: 'yulduz.svg',
		prise: '$12.00',
	},
	{
		id: 4,
		images: 'meva4.svg',
		images1: 'yulduz.svg',
		prise: '$9.00',
		title: 'Green Lettuce',
	},
	{
		id: 5,
		images: 'meva5.svg',
		title: 'Eggplant',
		images1: 'yulduz.svg',
		prise: '$34.00',
	},
	{
		id: 6,
		images: 'meva6.svg',
		title: 'Big Potatoes',
		images1: 'yulduz.svg',
		prise: '$20.00',
	},
	{
		id: 7,
		images: 'meva7.svg',
		title: 'Corn',
		images1: 'yulduz.svg',
		prise: '$20.00',
	},
	{
		id: 8,
		images: 'meva8.svg',
		title: 'Fresh Cauliflower',
		images1: 'yulduz.svg',
		prise: '$12.00',
	},
]

function Products4() {
	return (
		<>
			<section className='bg-[rgba(237,242,238,1)] py-[50px] mt-[60px]'>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mb-[50px]'>
					<div className='flex items-center justify-center flex-col mb-[30px] max-[400px]:flex-col max-[400px]:gap-[10px]'>
						<h1 className='text-[rgba(26,26,26,1)] text-center text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px]'>
						Introducing Our Products
						</h1>
						<div className="flex items-center justify-center gap-[24px] mb-[20px] mt-[10px] flex-wrap">
							<div className="group">
								<span className='hover:text-[rgba(32,181,38,1)] cursor-pointer text-[rgba(128,128,128,1)] text-[16px] font-["Poppins"] font-medium'>All</span>
								<div className="w-0 group-hover:w-full transition-all h-[2px] bg-[rgba(0,178,7,1)]"></div>
							</div>
							<div className="h-[28px] w-[1px] bg-[rgba(180,204,180,1)]"></div>
							<div className="group">
								<span className='hover:text-[rgba(32,181,38,1)] cursor-pointer text-[rgba(128,128,128,1)] text-[16px] font-["Poppins"] font-medium'>Vegetable</span>
								<div className="w-0 group-hover:w-full transition-all h-[2px] bg-[rgba(0,178,7,1)]"></div>
							</div>
							<div className="h-[28px] w-[1px] bg-[rgba(180,204,180,1)]"></div>
							<div className="group">
								<span className='hover:text-[rgba(32,181,38,1)] cursor-pointer text-[rgba(128,128,128,1)] text-[16px] font-["Poppins"] font-medium'>Fruit</span>
								<div className="w-0 group-hover:w-full transition-all h-[2px] bg-[rgba(0,178,7,1)]"></div>
							</div>
							<div className="h-[28px] w-[1px] bg-[rgba(180,204,180,1)]"></div>
							<div className="group">
								<span className='hover:text-[rgba(32,181,38,1)] cursor-pointer text-[rgba(128,128,128,1)] text-[16px] font-["Poppins"] font-medium'>Meat & Fish</span>
								<div className="w-0 group-hover:w-full transition-all h-[2px] bg-[rgba(0,178,7,1)]"></div>
							</div>
							<div className="h-[28px] w-[1px] bg-[rgba(180,204,180,1)]"></div>
							<div className="group">
								<span className='hover:text-[rgba(32,181,38,1)] cursor-pointer text-[rgba(128,128,128,1)] text-[16px] font-["Poppins"] font-medium'>View All</span>
								<div className="w-0 group-hover:w-full transition-all h-[2px] bg-[rgba(0,178,7,1)]"></div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-4 max-[1011px]:grid-cols-3 max-[840px]:grid-cols-2 max-[650px]:grid-cols-1 max-[450px]:grid-cols-1'>
						{products?.map(card => {
							return (
								<div
									key={card?.id}
									className='group hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all cursor-pointer bg-[rgba(255,255,255,1)] border-1 border-[rgba(230,230,230,1)]'
								>
									<div className='hidden group-hover:block absolute z-[50] p-[16px] transition-all'>
										<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)] mb-[6px]'>
											<i className='fa-regular fa-heart'></i>
										</div>
										<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)]'>
											<FaRegEye />
										</div>
									</div>
									<img className='w-full' src={card?.images} alt='cards img' />
									<div className='p-[12px]'>
										<div className='flex items-end justify-between'>
											<div className=''>
												<span className='text-[14px] font-normal font-["Poppins"] text-[rgba(77,77,77,1)]'>
													{card?.title}
												</span>
												<br />
												<span className='text-[rgba(26,26,26,1)] text-[16px] font-medium font-["Poppins"]'>
													{card?.prise}
												</span>
											</div>
											<div className='w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer bg-[rgba(242,242,242,1)] group-hover:bg-[rgba(0,178,7,1)] group-hover:text-[#fff] transition-all '>
												<HiOutlineShoppingBag className='text-[20px]' />
											</div>
										</div>
										<img
											className='mt-[6px]'
											src={card?.images1}
											alt='images'
										/>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Products4
