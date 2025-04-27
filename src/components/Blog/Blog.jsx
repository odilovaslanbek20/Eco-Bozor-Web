import { useState } from 'react'
import { IoIosColorFilter } from 'react-icons/io'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CiUser, CiHome } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";

function Blog() {
	const [modal3, setModal3] = useState(false)

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

	const cards = [
		{
			img: 'new.png',
			day: '12',
			month: 'Apr',
		},
		{
			img: 'new.png',
			day: '15',
			month: 'May',
		},
		{
			img: 'new.png',
			day: '18',
			month: 'Jun',
		},
		{
			img: 'new.png',
			day: '21',
			month: 'Jul',
		},
		{
			img: 'new.png',
			day: '25',
			month: 'Aug',
		},
		{
			img: 'new.png',
			day: '05',
			month: 'Sep',
		},
		{
			img: 'new.png',
			day: '10',
			month: 'Oct',
		},
		{
			img: 'new.png',
			day: '14',
			month: 'Nov',
		},
		{
			img: 'new.png',
			day: '19',
			month: 'Dec',
		},
		{
			img: 'new.png',
			day: '01',
			month: 'Jan',
		},
	];
	

	return (
		<>
			<section className='max-[1360px]:mx-[20px] my-[50px] max-w-[1320px] m-auto'>
				<div className='flex items-start gap-[24px] max-[700px]:flex-col'>
					<div className='max-w-[424px] max-[1140px]:max-w-[350px] max-[700px]:max-w-full w-full'>
						<div className='w-[131px] h-[45px] bg-[rgba(0,178,7,1)] cursor-pointer gap-[12px] flex items-center justify-center rounded-[30px]'>
							<p className='text-[14px] font-["Poppins"] text-[rgba(255,255,255,1)] font-semibold'>
								Filter
							</p>
							<IoIosColorFilter className='text-[rgba(255,255,255,1)]' />
						</div>
						<div className='mt-[32px] mb-[28px]'>
							<form className='border py-[14px] px-[16px] rounded border-[rgba(230,230,230,1)]'>
								<input
									className='text-[14px] font-["Poppins"] text-[rgba(153,153,153,1)]'
									type='text'
									placeholder='Search...'
								/>
							</form>
						</div>
						<hr className='text-[rgba(230,230,230,1)]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Top Categories
							</h2>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Fresh Fruit
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									(134)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Vegetables
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(150)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Cooking
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(54)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Snacks
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(47)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Beverages
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(43)
								</span>
							</div>

							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Beauty & Health
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(38)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Bread & Bakery
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(15)
								</span>
							</div>
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
						<hr className='text-[rgba(230,230,230,1)] my-[20px]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Our Gallery
							</h2>
							<div className='grid grid-cols-4 gap-[8px]'>
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
								<img src='gallery.png' alt='galeriy' />
							</div>
						</div>
						<hr className='text-[rgba(230,230,230,1)] my-[20px]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Recently Added
							</h2>
							<div className=''>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Curabitur porttitor orci eget nequ accumsan.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Donec mattis arcu faucibus suscipit viverra.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Quisque posuere tempus rutrum. Integer velit ex.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<div className="flex items-center justify-between gap-[30px] mb-[34px] flex-wrap">
							<div className="flex items-center gap-[12px]">
								<p>Sort by:</p>
								<form className='border border-[rgba(230,230,230,1)] w-[166px] px-[16px] h-[41px] flex items-center justify-center'>
									<select className='flex items-center justify-between w-full outline-none'>
										<option disabled hidden selected>Latest</option>
										<option value="1111">11111</option>
										<option value="1111">11111</option>
										<option value="1111">11111</option>
										<option value="1111">11111</option>
									</select>
								</form>
							</div>
							<p className='text-[16px] font-["Poppins"] font-semibold'>52<span className='font-normal text-[rgba(128,128,128,1)]'> Results Found</span></p>
						</div>
						<div className='grid grid-cols-2 max-[1010px]:grid-cols-1 gap-[20px]'>
							{cards.map((card, index) => (
								<div
									key={index}
									className='group relative cursor-pointer hover:shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)] transition-all bg-white rounded-[8px] border border-[rgba(230,230,230,1)]'
								>
									<img
										src={card.img}
										alt='news img'
										className='w-full h-auto rounded-t-[8px]'
									/>

									<div className='w-[58px] h-[58px] bg-[#f9f9f9] mt-[-90px] ml-[20px] rounded absolute z-10 flex items-center justify-center'>
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
											Curabitur porttitor orci eget neque accumsan venenatis.
											Nunc fermentum.
										</p>

										<Link
											className='flex items-center gap-[5px]'
										>
											<p className='text-[16px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'>
												Read More
											</p>
											<FaArrowRight className='text-[rgba(0,178,7,1)]' />
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Blog
