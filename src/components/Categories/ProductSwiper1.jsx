import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import dataCategories from './category'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'
function ProductsSwiper1() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mb-[50px]'>
				<div className=''>
					<div className='flex items-center justify-between mb-[30px] max-[400px]:flex-col max-[400px]:gap-[10px]'>
						<h1 className='text-[rgba(26,26,26,1)] text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px]'>
							Newest Products
						</h1>
						<Link className='flex items-center gap-[5px]'>
							<p className='text-[16px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'>
								View All
							</p>
							<FaArrowRight className='text-[rgba(0,178,7,1)]' />
						</Link>
					</div>
					<div className=''>
						<Swiper
							modules={[Pagination, Autoplay]}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{ clickable: true }}
							spaceBetween={20}
							breakpoints={{
								320: {
									slidesPerView: 1,
								},
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
								1280: {
									slidesPerView: 5,
								},
							}}
						>
							{dataCategories?.products?.map(card => {
								return (
									<SwiperSlide>
										<Link to='/data'>
											<div
												key={card?.id}
												className='group mb-[50px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all cursor-pointer bg-[rgba(255,255,255,1)] border-1 border-[rgba(230,230,230,1)]'
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

export default ProductsSwiper1
