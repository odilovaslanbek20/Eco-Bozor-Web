import dataCategories from './category'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

function Top() {
	return (
		<>
			<section className='relative max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
				<div className=''>
					<div className='flex items-center justify-center flex-col mb-[30px]'>
						<span className='text-[rgba(0,178,7,1)] uppercase text-[14px] font-medium'>
							Category
						</span>
						<h1 className='text-[rgba(26,26,26,1)] text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px] text-center'>
							Shop by Top Categories
						</h1>
					</div>
					<div className=''>
						<Swiper
						  className='w-full'
							modules={[Pagination, Autoplay]}
							spaceBetween={20}
							slidesPerView={1}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false
							}}
							pagination={{ clickable: true }}
							breakpoints={{
								320: {
									slidesPerView: 1,
								},
								380: {
									slidesPerView: 2,
								},
								640: {
									slidesPerView: 3,
								},
								768: {
									slidesPerView: 4,
								},
								1024: {
									slidesPerView: 5,
								},
								1280: {
									slidesPerView: 6,
								},
							}}
						>
							{dataCategories?.categories?.map(card => {
								return (
									<SwiperSlide>
										<div
											key={card?.id}
											className='group mb-[50px] border-1 cursor-pointer transition-all hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:border-[rgba(44,116,47,1)] border-[rgba(230,230,230,1)] flex items-center justify-center flex-col rounded-[5px] pt-[16px] pb-[24px] px-[5px]'
										>
											<img
												className='mb-[16px]'
												src={card?.images}
												alt='cards img'
											/>
											<h2 className='text-center group-hover:text-[rgba(44,116,47,1)] text-[rgba(26,26,26,1)] max-[400px]:text-[16px] max-[345px]:text-[14px] text-[18px] font-["Poppins"] font-medium'>
												{card?.title}
											</h2>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}

export default Top
