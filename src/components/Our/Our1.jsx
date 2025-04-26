import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination, Autoplay } from 'swiper/modules'

function Our1() {
	const teamMembers = [
		{
			id: 1,
			name: 'Jenny Wilson',
			position: 'Ceo & Founder',
			image: 'bobo.jpg',
		},
		{
			id: 2,
			name: 'Jane Cooper',
			position: 'Worker',
			image: 'oka2.png',
		},
		{
			id: 3,
			name: 'Cody Fisher',
			position: 'Security Guard',
			image: 'akalar.svg',
		},
		{
			id: 4,
			name: 'Robert Fox',
			position: 'Senior Farmer Manager',
			image: 'bobo.jpg',
		},
		{
			id: 5,
			name: 'Robert Fox',
			position: 'Senior Farmer Manager',
			image: 'oka2.png',
		},
		{
			id: 6,
			name: 'Robert Fox',
			position: 'Senior Farmer Manager',
			image: 'akalar.svg',
		},
		{
			id: 7,
			name: 'Robert Fox',
			position: 'Senior Farmer Manager',
			image: 'oka1.png',
		},
	]

	return (
		<>
			<section className='relative max-w-[1320px] m-auto px-[20px]'>
				<div className='flex items-center justify-center flex-col'>
					<h2 className='text-[rgba(26,26,26,1)] text-center text-[36px] font-semibold font-["Poppins"] leading-[120%] max-[345px]:text-[25px]'>
					Our Awesome Team
					</h2>
					<p className='text-[16px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)] max-w-[640px] text-center'>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
				</div>
				
				<div className='mt-[30px]'>
					<Swiper
						modules={[Pagination, Autoplay]}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{ clickable: true }}
						spaceBetween={20}
						breakpoints={{
							320: { slidesPerView: 1 },
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
							1280: { slidesPerView: 4 },
						}}
					>
						{teamMembers.map(member => (
							<SwiperSlide key={member.id}>
								<div className='hover:border-none mb-[50px] transition-all hover:shadow-[0px_20px_48px_0px_rgba(0,38,3,0.08)] border border-[rgba(230,230,230,1)]'>
									<img
										className='w-full h-[280px] object-cover'
										src={member.image}
										alt={member.name}
									/>
									<div className='px-[20px] py-[16px] max-[600px]:px-[15px] max-[600px]:py-[10px]'>
										<span className='text-[rgba(26,26,26,1)] text-[18px] font-["Poppins"] font-medium max-[500px]:text-[16px]'>
											{member.name}
										</span>
										<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)] max-[500px]:text-[12px]'>
											{member.position}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default Our1
