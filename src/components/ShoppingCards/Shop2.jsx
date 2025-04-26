import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Shop2() {
	const products = [
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
			title: 'Green Lettuce',
			images1: 'yulduz.svg',
			prise: '$9.00',
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
		{
			id: 9,
			images: 'meva9.svg',
			title: 'Green Capsicum',
			images1: 'yulduz.svg',
			prise: '$9.00',
		},
		{
			id: 10,
			images: 'meva10.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$34.00',
		},
		{
			id: 11,
			images: 'meva1.svg',
			title: 'Red Apple',
			images1: 'yulduz.svg',
			prise: '$15.00',
		},
		{
			id: 12,
			images: 'meva2.svg',
			title: 'Broccoli',
			images1: 'yulduz.svg',
			prise: '$18.00',
		},
		{
			id: 13,
			images: 'meva3.svg',
			title: 'Carrot',
			images1: 'yulduz.svg',
			prise: '$10.00',
		},
		{
			id: 14,
			images: 'meva4.svg',
			title: 'Tomato',
			images1: 'yulduz.svg',
			prise: '$11.00',
		},
		{
			id: 15,
			images: 'meva5.svg',
			title: 'Pumpkin',
			images1: 'yulduz.svg',
			prise: '$25.00',
		},
		{
			id: 16,
			images: 'meva6.svg',
			title: 'Garlic',
			images1: 'yulduz.svg',
			prise: '$8.00',
		},
	]

	return (
		<>
			<section className='mb-[50px]'>
				<div className='pt-[40px] pb-[24px] max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
					<div className='flex items-center flex-wrap justify-between gap-[30px]'>
						<div className='flex items-center flex-wrap gap-[16px]'>
							<form className='border max-[413px]:w-full border-[rgba(229,229,229,1)] w-[178px] h-[41px] flex items-center justify-center rounded'>
								<select className='w-[90%] h-full outline-none'>
									<option disabled selected hidden>
										Select Category
									</option>
									<option value='vegetables'>Vegetables</option>
									<option value='fruits'>Fruits</option>
									<option value='grains'>Grains</option>
									<option value='nuts'>Nuts & Seeds</option>
									<option value='plantmilk'>Plant-based Milk</option>
								</select>
							</form>

							<form className='border max-[413px]:w-full border-[rgba(229,229,229,1)] w-[178px] h-[41px] flex items-center justify-center rounded'>
								<select className='w-[90%] h-full outline-none'>
									<option disabled selected hidden>
										Select Price
									</option>
									<option value='low'>Under $5</option>
									<option value='medium'>$5 - $10</option>
									<option value='high'>$10 - $20</option>
									<option value='premium'>Above $20</option>
								</select>
							</form>

							<form className='border max-[413px]:w-full border-[rgba(229,229,229,1)] w-[178px] h-[41px] flex items-center justify-center rounded'>
								<select className='w-[90%] h-full outline-none'>
									<option disabled selected hidden>
										Select Rating
									</option>
									<option value='5'>★★★★★</option>
									<option value='4'>★★★★☆</option>
									<option value='3'>★★★☆☆</option>
									<option value='2'>★★☆☆☆</option>
									<option value='1'>★☆☆☆☆</option>
								</select>
							</form>
						</div>

						<div className='flex items-center gap-[16px] flex-wrap'>
							<form className='border max-[413px]:w-full border-[rgba(229,229,229,1)] w-[178px] h-[41px] flex items-center justify-center rounded'>
								<select className='w-[90%] h-full outline-none'>
									<option disabled selected hidden>
										Sort by: Latest
									</option>
									<option value='latest'>Latest</option>
									<option value='popular'>Most Popular</option>
									<option value='priceLow'>Price: Low to High</option>
									<option value='priceHigh'>Price: High to Low</option>
								</select>
							</form>

							<form className='border max-[413px]:w-full border-[rgba(229,229,229,1)] w-[178px] h-[41px] flex items-center justify-center rounded'>
								<select className='w-[90%] h-full outline-none'>
									<option disabled selected hidden>
										Show: 16
									</option>
									<option value='8'>8</option>
									<option value='16'>16</option>
									<option value='24'>24</option>
									<option value='32'>32</option>
								</select>
							</form>
						</div>
					</div>
				</div>

				<div className='border-y border-[#c7c6c6] mb-[32px]'>
					<div className='max-w-[1320px] max-[637px]:flex-wrap m-auto max-[1360px]:mx-[20px] py-[16px] flex items-center justify-between gap-[40px]'>
						<div className='flex items-center flex-wrap gap-[24px]'>
							<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
								Active Filters:
							</span>
							<span className='group cursor-pointer text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)] flex items-center gap-[15px]'>
								Wing Chair
								<FaXmark className='text-[rgba(128,128,128,1)] text-[18px] group-hover:text-[#000]' />
							</span>
							<span className='group cursor-pointer text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)] flex items-center gap-[15px]'>
								Min $300 - Max 500
								<FaXmark className='text-[rgba(128,128,128,1)] text-[18px] group-hover:text-[#000]' />
							</span>
						</div>
						<div className=''>
							<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(39,35,67,1)]'>
								2,547{' '}
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
									Results found.
								</span>
							</span>
						</div>
					</div>
				</div>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
					<div className='grid grid-cols-4 gap-[24px] max-[1011px]:grid-cols-4 max-[840px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1'>
						{products?.map(card => {
							return (
								<Link key={card?.id} to='/shopDetails'>
									<div className='group hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all cursor-pointer bg-[rgba(255,255,255,1)] border-1 border-[rgba(230,230,230,1)]'>
										<div className='hidden group-hover:block absolute z-[50] p-[16px] transition-all'>
											<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)] mb-[6px]'>
												<i className='fa-regular fa-heart'></i>
											</div>
											<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)]'>
												<FaRegEye />
											</div>
										</div>
										<img
											className='w-full'
											src={card?.images}
											alt='cards img'
										/>
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
								</Link>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Shop2
