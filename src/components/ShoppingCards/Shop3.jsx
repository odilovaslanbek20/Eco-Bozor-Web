import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'
import { FaAngleLeft } from 'react-icons/fa6'
import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { LuHeart } from 'react-icons/lu'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
function valuetext(value) {
	return `${value}°C`
}

function Shop5() {
	const [modal, setModal] = useState(false)
	const [modal1, setModal1] = useState(false)
	const [modal2, setModal2] = useState(false)
	const [modal3, setModal3] = useState(false)

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
			images: 'meva5.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$37.00',
		},
		{
			id: 12,
			images: 'meva4.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$31.00',
		},
		{
			id: 13,
			images: 'meva3.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$39.00',
		},
		{
			id: 14,
			images: 'meva2.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$36.00',
		},
		{
			id: 15,
			images: 'meva1.svg',
			title: 'Green Chili',
			images1: 'yulduz.svg',
			prise: '$37.00',
		},
	]

	const categories = [
		'Healthy',
		'Low fat',
		'Vegetarian',
		'Kid foods',
		'Vitamins',
		'Bread',
		'Meat',
		'Snacks',
		'Tiffin',
		'Launch',
		'Dinner',
		'Breackfast',
		'Fruit',
	]

	const [value, setValue] = React.useState([20, 37])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] my-[24px]'>
				<div className='flex items-start justify-center gap-[20px] max-[500px]:flex-col'>
					<div className='min-w-[320px] w-[320px] max-[810px]:min-w-[280px] max-[590px]:min-w-[250px] max-[500px]:min-w-full max-[500px]:w-full'>
						<div
							onClick={() => setModal(!modal)}
							className='cursor-pointer flex items-center justify-between w-full'
						>
							<span className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
								All Categories
							</span>
							<FaAngleLeft
								className={`${
									modal ? 'rotate-90' : '-rotate-90'
								} text-[20px] transition-transform duration-300`}
							/>
						</div>
						{modal && (
							<div className='mt-[20px] w-full'>
								<form className='w-full flex flex-col sm:flex-row sm:flex-wrap gap-[8px]'>
									{[
										'Fresh Fruit (25)',
										'Vegetables (150)',
										'Cooking (54)',
										'Snacks (47)',
										'Beverages (43)',
										'Beauty & Health (38)',
										'Bread & Bakery (15)',
									].map((label, index) => (
										<label
											key={index}
											htmlFor={`name${index}`}
											className='w-full sm:w-[48%] lg:w-full py-[10px] px-[8px] rounded cursor-pointer flex items-center gap-[8px]'
										>
											<input
												id={`name${index}`}
												name='category'
												className='w-[20px] h-[20px] cursor-pointer'
												type='radio'
											/>
											<span className='text-[14px] font-["Poppins"] text-[rgba(0,0,0,1)] font-normal'>
												{label}
											</span>
										</label>
									))}
								</form>
							</div>
						)}
						<div className='border-y w-full py-[20px] border-[#dad8d8] my-[20px]'>
							<div
								onClick={() => setModal1(!modal1)}
								className={`cursor-pointer w-full ${
									modal1 ? 'mb-[20px]' : 'm-0'
								} flex items-center justify-between`}
							>
								<span className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
									Price
								</span>
								<FaAngleLeft
									className={`${
										modal1 ? 'rotate-90' : '-rotate-90'
									} text-[20px] transition-transform duration-300`}
								/>
							</div>
							{modal1 && (
								<div className='w-full'>
									<Box className='mb-[10px]' sx={{ width: '100%' }}>
										<Slider
											getAriaLabel={() => 'Temperature range'}
											value={value}
											onChange={handleChange}
											valueLabelDisplay='auto'
											getAriaValueText={valuetext}
										/>
									</Box>
									<span className='text-[14px] font-["Poppins"] flex items-center gap-[10px] font-normal text-[#9a9999]'>
										Price:
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											50 — 1,500
										</span>
									</span>
								</div>
							)}
						</div>
						<div className='w-full'>
							<div
								onClick={() => setModal2(!modal2)}
								className='cursor-pointer flex items-center justify-between w-full'
							>
								<span className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
									Rating
								</span>
								<FaAngleLeft
									className={`${
										modal2 ? 'rotate-90' : '-rotate-90'
									} text-[20px] transition-transform duration-300`}
								/>
							</div>
							{modal2 && (
								<div className='w-full mt-[20px]'>
									<form className='flex flex-col gap-[10px]'>
										{[5, 4, 3, 2, 1].map((starCount, index) => (
											<label
												key={index}
												htmlFor={`star${starCount}`}
												className='flex items-center gap-[10px] py-[5px] cursor-pointer'
											>
												<input
													type='radio'
													id={`star${starCount}`}
													name='stars'
													className='w-[20px] h-[20px]'
													value={starCount}
												/>

												<div className='flex items-center gap-[6px]'>
													{/* Yulduzlar */}
													<div className='flex gap-[2px]'>
														{[1, 2, 3, 4, 5].map(num => (
															<span
																key={num}
																className={`
										text-[18px]
										${num <= starCount ? 'text-yellow-400' : 'text-gray-300'}
									`}
															>
																★
															</span>
														))}
													</div>

													{/* "4.0 & up" yozuvi */}
													<span className='text-sm text-gray-600'>
														{starCount}.0 & up
													</span>
												</div>
											</label>
										))}
									</form>
								</div>
							)}
						</div>
						<div className='w-full'>
							<div
								onClick={() => setModal3(!modal3)}
								className='cursor-pointer my-[20px] border-t  border-[#dad8d8] py-[20px] flex items-center justify-between w-full'
							>
								<span className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
									Popular Tag
								</span>
								<FaAngleLeft
									className={`${
										modal3 ? 'rotate-90' : '-rotate-90'
									} text-[20px] transition-transform duration-300`}
								/>
							</div>
							{modal3 && (
								<div className='flex items-start flex-wrap gap-[8px]'>
									{categories?.map((text, index) => (
										<div
											key={index}
											tabIndex={0}
											className='bg-[rgba(242,242,242,1)] cursor-pointer group transition-all hover:bg-[rgba(0,178,7,1)] focus:bg-[rgba(0,178,7,1)] rounded-[30px]'
										>
											<p className='group-hover:text-[#fff] group-focus:text-[#fff] py-[6px] px-[16px] text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
												{text}
											</p>
										</div>
									))}
								</div>
							)}
						</div>
						<div
							className='w-full h-[295px] mt-[26px] rounded-[10px]'
							style={{
								backgroundImage: `url("/catigoriyImg.jpg")`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center bottom',
								backgroundSize: 'cover',
							}}
						>
							<div className='w-full h-full bg-[#000]/50 rounded-[10px] flex items-center justify-center flex-col gap-[10px]'>
								<h2 className='text-[24px] font-["Poppins"] leading-[120%] font-normal text-[#e9e6e6]'>
									<span className='font-semibold text-[rgba(0,178,7,1)] text-[32px]'>
										79%
									</span>{' '}
									Discount
								</h2>
								<span className='text-[#e0dfdf] text-[16px] font-["Poppins"] font-normal'>
									on your first order
								</span>
								<Link>
									<div className='flex items-center justify-center gap-[2px]'>
										<span className='text-[#eeeeee] text-[16px] font-["Poppins"] font-semibold'>
											Shop Now
										</span>
										<FaArrowRight className='text-[#e8eae8] text-[20px]' />
									</div>
								</Link>
							</div>
						</div>
						<div className=''>
							<div className='mt-[20px]'>
								<div className='max-[870px]:col-span-2'>
									<span className='text-[18px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
										Sale Products
									</span>
									<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
										<img
											className='w-[100px] h-[100px]'
											src='meva7.svg'
											alt='meva img'
										/>
										<div className='flex items-start justify-start flex-col'>
											<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
												Big Potatos
											</span>
											<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
												$14.99
											</span>
											<img
												className='group-hover:hidden w-[80px]'
												src='yulduz.svg'
												alt='yulduz img'
											/>
											<div className='group-hover:block hidden transition-all mt-[5px]'>
												<div className='flex items-center gap-[12px] transition-all'>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<HiOutlineShoppingBag className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<MdOutlineRemoveRedEye className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<LuHeart className='text-[20px]' />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
										<img
											className='w-[100px] h-[100px]'
											src='meva8.svg'
											alt='meva img'
										/>
										<div className='flex items-start justify-start flex-col'>
											<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
												Corn
											</span>
											<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
												$14.99
											</span>
											<img
												className='group-hover:hidden w-[80px]'
												src='yulduz.svg'
												alt='yulduz img'
											/>
											<div className='group-hover:block hidden transition-all mt-[5px]'>
												<div className='flex items-center gap-[12px] transition-all'>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<HiOutlineShoppingBag className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<MdOutlineRemoveRedEye className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<LuHeart className='text-[20px]' />
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
										<img
											className='w-[100px] h-[100px]'
											src='meva9.svg'
											alt='meva img'
										/>
										<div className='flex items-start justify-start flex-col'>
											<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
												Fresh cauliflower
											</span>
											<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
												$14.99
											</span>
											<img
												className='group-hover:hidden w-[80px]'
												src='yulduz.svg'
												alt='yulduz img'
											/>
											<div className='group-hover:block hidden transition-all mt-[5px]'>
												<div className='flex items-center gap-[12px] transition-all'>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<HiOutlineShoppingBag className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<MdOutlineRemoveRedEye className='text-[20px]' />
													</div>
													<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
														<LuHeart className='text-[20px]' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full'>
						<div className='grid grid-cols-3 gap-[24px] max-[840px]:gap-[10px] max-[1011px]:grid-cols-2 max-[760px]:grid-cols-1'>
							{products?.map(card => {
								return (
									<Link to="/shopDetails" key={card?.id}>
										<div
											className='group  rounded hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all cursor-pointer bg-[rgba(255,255,255,1)] border-1 border-[rgba(230,230,230,1)]'
										>
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
				</div>
			</section>
		</>
	)
}

export default Shop5
