import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import testimonials from './testimonials'

function Client() {
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	return (
		<section className='w-full h-auto bg-[rgba(242,242,242,1)] py-[60px] mt-[60px]'>
			<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
				<div className='flex items-center justify-between mb-[32px] max-[450px]:mb-[10px] max-[450px]:flex-col'>
					<h2 className='text-[32px] font-["Poppins"] max-[450px]:mb-[10px] max-[550px]:text-[25px] font-semibold text-[rgba(26,26,26,1)]'>
						Client Testimonials
					</h2>
					<div className='flex items-center gap-[12px] max-[450px]:justify-between max-[450px]:w-full'>
						<div
							ref={prevRef}
							className='group hover:bg-[rgba(0,178,7,1)] w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)] cursor-pointer'
						>
							<FaArrowLeft className='group-hover:text-[#fff]' />
						</div>
						<div
							ref={nextRef}
							className='group hover:bg-[rgba(0,178,7,1)] w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)] cursor-pointer'
						>
							<FaArrowRight className='group-hover:text-[#fff]' />
						</div>
					</div>
				</div>

				<Swiper
					modules={[Pagination, Autoplay, Navigation]}
					spaceBetween={10}
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000 }}
					loop={true}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current
						swiper.params.navigation.nextEl = nextRef.current
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						529: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						855: {
							slidesPerView: 2.5,
						},
						1050: {
							slidesPerView: 3,
						},
					}}
				>
					{testimonials.map((item, i) => (
						<SwiperSlide key={i}>
							<div className='bg-white w-full h-full p-[24px] rounded-[8px] mb-[50px] max-[323px]:mb-[20px]'>
								<img src='vergul.svg' alt='quote' />
								<p className='mt-[16px] mb-[24px] text-[14px] font-["Poppins"] font-normal'>
									{item.text}
								</p>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-[12px] max-[380px]:flex-col'>
										<img src={item.img} alt='user img' />
										<div>
											<span className='text-[16px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
												{item.user}
											</span>
											<p className='text-[rgba(153,153,153,1)] font-normal font-["Poppins"] text-[14px]'>
												{item.role}
											</p>
										</div>
									</div>
									<img className='w-[104px]' src='yulduz.svg' alt='stars' />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Client
