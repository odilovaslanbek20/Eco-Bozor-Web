import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuApple, LuLeaf } from 'react-icons/lu'
import { GoPlus } from 'react-icons/go'
import { IoFishOutline, IoIceCreamOutline } from 'react-icons/io5'
import { TbMeat } from 'react-icons/tb'
import { LiaCocktailSolid } from 'react-icons/lia'
import { CiBurger } from 'react-icons/ci'
import { BsCake } from 'react-icons/bs'
import { PiCookingPotLight } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const categories = [
	{ icon: <LuApple />, label: 'Fresh Fruit', to: '' },
	{ icon: <LuLeaf />, label: 'Vegetables', to: '' },
	{ icon: <IoFishOutline />, label: 'River Fish', to: '' },
	{ icon: <TbMeat />, label: 'Chicken & Meat', to: '' },
	{ icon: <LiaCocktailSolid />, label: 'Drink & Water', to: '' },
	{ icon: <IoIceCreamOutline />, label: 'Yogurt & Ice Cream', to: '' },
	{ icon: <BsCake />, label: 'Cake & Bread', to: '' },
	{ icon: <CiBurger />, label: 'Butter & Cream', to: '' },
	{ icon: <PiCookingPotLight />, label: 'Cooking', to: '' },
	{ icon: <GoPlus />, label: 'View all Category', to: '' },
]

const slider = [
	{
		id: 1,
		title: 'Fresh & Healthy Organic Food',
		images: 'oshbgimg.png',
		body: 'Sale Up to',
		text: 'off',
		price: '48%',
	},
	{
		id: 1,
		title: 'Fresh & Healthy Organic Food',
		images: 'oshbgimg.png',
		body: 'Sale Up to',
		text: 'off',
		price: '48%',
	},
	{
		id: 1,
		title: 'Fresh & Healthy Organic Food',
		images: 'oshbgimg.png',
		body: 'Sale Up to',
		text: 'off',
		price: '48%',
	},
]

function Hero2() {
	const [activeIndex, setActiveIndex] = useState(null)
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<section className='relative max-w-[1320px] m-auto max-[1360px]:mx-[20px] flex items-start gap-[24px] max-[850px]:flex-col'>
			<div className='hidden max-[850px]:flex justify-between w-full items-center'>
				<RxHamburgerMenu
					className='text-3xl cursor-pointer text-[#00b207]'
					onClick={() => setMenuOpen(true)}
				/>
				<h2 className='text-[30px] font-semibold font-["Poppins"] text-[rgba(0,178,7,1)]'>
					Category
				</h2>
			</div>

			<div
				className={`min-w-[312px] max-[850px]:min-w-[300px] border border-[rgba(230,230,230,1)] transition-all duration-300 z-50 bg-white max-[850px]:fixed max-[850px]:top-0 max-[850px]:h-screen max-[850px]:backdrop-blur-3xl max-[850px]:bg-[#ffd1d1] ${
					menuOpen ? 'left-0' : 'max-[850px]:left-[-100%]'
				}`}
			>
				<div className='px-4 py-3 max-[850px]:block hidden'>
					<IoClose
						className='text-2xl cursor-pointer text-[#00b207]'
						onClick={() => setMenuOpen(false)}
					/>
				</div>

				<ul>
					{categories.map((cat, index) => {
						const isActive = index === activeIndex
						return (
							<li
								key={index}
								onClick={() => {
									setActiveIndex(index)
									setMenuOpen(false)
								}}
								className={`cursor-pointer py-[15px] px-[22px] group ${
									isActive
										? 'bg-[rgba(0,178,7,1)]'
										: 'hover:bg-[rgba(0,178,7,1)]'
								}`}
							>
								<Link to={cat.to} className='flex items-center gap-[14px]'>
									<span
										className={`text-[25px] ${
											isActive
												? 'text-white'
												: 'text-[rgba(153,153,153,1)] group-hover:text-white'
										}`}
									>
										{cat.icon}
									</span>
									<span
										className={`text-[14px] font-["Poppins"] ${
											isActive
												? 'text-white'
												: 'text-[rgba(26,26,26,1)] group-hover:text-white'
										}`}
									>
										{cat.label}
									</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>

			{menuOpen && (
				<div
					onClick={() => setMenuOpen(false)}
					className='fixed inset-0 bg-black/30 z-40 max-[850px]:block hidden'
				></div>
			)}

			<Swiper
			className="w-full max-w-full"
				modules={[Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
			>
					{slider.map(card => {
						return (
							<SwiperSlide>
							<div
								key={card.id}
								className='bg-right bg-cover h-[552px]'
								style={{
									backgroundImage: `url(${card.images})`,
								}}
							>
								<div className='max-[1320px]:bg-[#000000]/60 w-full h-full flex items-center max-[520px]:justify-center justify-start'>
									<div className='w-[382px] ml-[48px] max-[520px]:m-0 max-[520px]:flex max-[520px]:flex-col max-[520px]:justify-center max-[520px]:items-center'>
										<h2 className='text-[48px] max-[470px]:text-[35px] max-[345px]:text-[30px] mb-[20px] max-[520px]:text-center  leading-[120%] text-white font-semibold font-["Poppins"]'>
											{card.title}
										</h2>
										<div className='flex items-center gap-[12px] mb-[32px] max-[520px]:justify-center'>
											<div className='w-[2px] h-[56px] bg-[rgba(0,178,7,1)]'></div>
											<span className='text-[24px] max-[345px]:text-[20px] font-medium leading-[120%] font-["Poppins"] uppercase text-white/60'>
												{card.body} <br />
												<span className='text-white'>{card.price}</span>
												{card.text}
											</span>
										</div>
										<Link to='/shopping' className=''>
											<div className='w-[191px] h-[51px] rounded-full bg-[rgba(0,178,7,1)] flex items-center justify-center gap-[3px]'>
												<span className='text-[16px] text-white font-["Poppins"] font-semibold'>
													Shop now
												</span>
												<FaArrowRight className='text-white' />
											</div>
										</Link>
									</div>
								</div>
							</div>
				</SwiperSlide>
						)
					})}
			</Swiper>
		</section>
	)
}

export default Hero2
