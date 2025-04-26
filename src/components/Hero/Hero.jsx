import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Hero() {
	return (
		<section className='max-w-[1320px] mx-auto pt-10  max-[600px]:pt-[10px] max-[1360px]:mx-[20px]'>
			<div className='flex flex-col lg:flex-row gap-6 items-start'>
				<div className='relative w-full lg:w-[872px] h-[600px] rounded-[10px] overflow-hidden'>
					<img
						className='absolute inset-0 w-full h-full object-cover z-[-1]'
						src='herocardsimg.jpeg'
						alt='hero img'
					/>
					<div className='text-white p-[15px] max-[940px]:bg-[#000000]/50 w-full h-full max-[940px]:m-0 ml-[60px] mt-[150px] max-[940px]:flex max-[940px]:items-center max-[940px]:justify-center max-[940px]:flex-col'>
						<h1 className='text-[48px] font-bold leading-[120%] mb-[28px] max-[940px]:text-center max-[440px]:text-[33px]'>
							Fresh & Healthy <br className='max-[530px]:hidden'/> Organic Food
						</h1>
						<div className='mb-2 flex items-center gap-[8px]'>
							<p className='text-[20px] text-[rgba(255,255,255,1)] font-medium font-["Poppins"]'>
								Sale up to
							</p>
							<div className='w-[108px] py-[4px] rounded-[5px] bg-[rgba(255,138,0,1)]'>
								<p className='flex items-center font-["Poppins"] justify-center text-[20px] font-semibold text-[rgba(255,255,255,1)]'>
									30% OFF
								</p>
							</div>
						</div>
						<p className='font-["Poppins"] mb-[28px]'>
							Free shipping on all your order.
						</p>
						<Link
							to='/shopping'
							className='w-[191px] h-[51px] font-["Poppins"]  flex items-center justify-center gap-2 bg-[rgba(255,255,255,1)] text-[rgba(0,178,7,1)] px-6 py-3 rounded-full hover:bg-green-700 transition text-[16px] font-semibold'
						>
							Shop now
							<FaArrowRight />
						</Link>
					</div>
				</div>

				<div className='flex flex-col gap-6 w-full lg:w-[423px]'>
					<div className='w-full h-[288px] rounded-[10px] relative'>
						<img
							className='w-full h-[288px] absolute z-[-50] rounded-[10px] object-cover'
							src='herocardsimg1.jpeg'
							alt='card 1'
						/>
           
					  <div className="flex items-end justify-start flex-col rounded-[10px] p-[32px] w-full h-full max-[420px]:bg-pink-400/30 max-[400px]:p-[15px]">
							<h2 className='text-[rgba(26,26,26,1)] font-medium font-["Poppins"] text-[14px]'>Summer Sale</h2>
							<h2 className='text-[rgba(26,26,26,1)] font-semibold font-["Poppins"] text-[32px]'>75% OFF</h2>
							<p className='text-[rgba(102,102,102,1)] font-normal font-["Poppins"] text-[14px] mb-[24px]'>Only Fruit & Vegetable</p>
							<Link to='/shopping' className='flex items-center gap-[2px] justify-center'>
							  <p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-semibold text-[16px]'>Shop Now</p>
								<FaArrowRight  className='text-[rgba(0,178,7,1)] font-["Poppins"] font-semibold text-[16px]'/>
							</Link>
						</div>

					</div>
					<div className='relative w-full h-[288px] rounded-[10px]'>
						<img
							className='w-full h-[288px] rounded-[10px] object-cover absolute z-[-50]'
							src='herocardsimg2.jpeg'
							alt='card 2'
						/>
						<div className="w-full h-full flex items-center justify-center flex-col max-[380px]:p-[15px] bg-[#000000]/70 rounded-[10px]">
							<h2 className='text-[rgba(255,255,255,1)] font-medium text-[14px] font-["Poppins"]'>Best Deal</h2>
							<h2 className='text-[rgba(255,255,255,1)] text-[32px] mt-[12px] mb-[40px] font-semibold font-["Poppins"] text-center leading-[120%] max-[380px]:text-[25px]'>Special Products <br className='max-[380px]:hidden' /> Deal of the Month</h2>
							<Link to='/shopping' className='flex items-center gap-[2px] justify-center'>
							  <p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-semibold text-[16px]'>Shop Now</p>
								<FaArrowRight  className='text-[rgba(0,178,7,1)] font-["Poppins"] font-semibold text-[16px]'/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
