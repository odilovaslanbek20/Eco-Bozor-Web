import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
function Hero4() {
	const data = [
		{
			id: 1,
			title: 'Fresh & Healthy Organic Food',
			span: 'Welcome to shopery',
			text: 'Free shipping on all your order. we deliver, you enjoy',
			btnText: 'Shop now',
			body: 'Sale up to',
			body2: '30% OFF',
			images: 'heroimg3.png',
		},
		{
			id: 1,
			title: 'Fresh & Healthy Organic Food',
			span: 'Welcome to shopery',
			text: 'Free shipping on all your order. we deliver, you enjoy',
			btnText: 'Shop now',
			body: 'Sale up to',
			body2: '30% OFF',
			images: 'heroimg3.png',
		},
		{
			id: 1,
			title: 'Fresh & Healthy Organic Food',
			span: 'Welcome to shopery',
			text: 'Free shipping on all your order. we deliver, you enjoy',
			btnText: 'Shop now',
			body: 'Sale up to',
			body2: '30% OFF',
			images: 'heroimg3.png',
		},
	]

	return (
		<>
			<section className='max-w-[1320px] mx-auto px-5 mt-6'>
				<div className='bg-[rgba(237,242,238,1)] flex items-center justify-center h-auto min-h-[600px] py-10'>
					<Swiper
						className='w-full max-w-full'
						modules={[Pagination, Autoplay]}
						spaceBetween={20}
						slidesPerView={1}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						pagination={{ clickable: true }}
					>
						{data?.map(data => {
							return (
								<SwiperSlide>
									<div
										key={data.id}
										className='flex flex-col-reverse mb-[80px] lg:flex-row items-center justify-between w-full gap-10 px-5'
									>
										<div className='flex justify-center'>
											<img
												className='w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[1000px]'
												src={data?.images}
												alt='data img'
											/>
										</div>
										<div className='text-center lg:text-left max-w-xl'>
											<span className='text-sm font-medium text-[rgba(0,178,7,1)] uppercase font-["Poppins"]'>
												{data?.span}
											</span>
											<h2 className='text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[72px] mt-2 mb-6 font-semibold text-[rgba(26,26,26,1)] leading-[120%]'>
												{data?.title}
											</h2>
											<span className='text-[26px] sm:text-[30px] lg:text-[32px] font-normal text-[rgba(26,26,26,1)] font-["Poppins"]'>
												{data?.body}{' '}
												<span className='text-[rgba(0,178,7,1)] font-medium'>
													{data?.body2}
												</span>
											</span>
											<p className='text-[14px] text-gray-600 mt-2 font-["Poppins"]'>
												{data?.text}
											</p>
											<Link to='/shopping'>
												<div className='w-[191px] h-[51px] mt-8 rounded-full bg-[rgba(0,178,7,1)] flex items-center justify-center gap-2 mx-auto lg:mx-0'>
													<span className='text-[16px] text-white font-["Poppins"] font-semibold'>
														{data?.btnText}
													</span>
													<FaArrowRight className='text-white' />
												</div>
											</Link>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default Hero4
