import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function HeroShop() {
	return (
		<section className='max-w-[1320px] max-[1360px]:mx-[20px] m-auto'>
			<div
				className='bg-cover w-full h-[358px] rounded-[10px]'
				style={{
					backgroundImage: `url("/adminimg.jpeg")`,
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className='w-full h-full bg-[#000]/60 p-[60px] max-[515px]:p-[30px] rounded-[10px]'>
					<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(255,255,255,1)] uppercase'>
						Best Deals
					</span>
					<h2 className='text-[40px] font-["Poppins"] leading-[120%] font-semibold text-[rgba(255,255,255,1)]'>
						Sale of the Month
					</h2>
					<div className='w-[228px] mt-[10px] mb-[20px] flex items-center justify-start gap-[8px]'>
						<div className='flex items-center justify-center flex-col'>
							<span className='text-[rgba(0,178,7,1)] text-[24px] font-["Poppins"] font-normal'>
								00
							</span>
							<span className='text-[12px] font-normal font-["Poppins"] uppercase text-[#e1e1e1]'>
								Days
							</span>
						</div>
						<span className='text-[20px] text-[#fff] font-["Poppins"] font-medium'>
							{' '}
							:
						</span>
						<div className='flex items-center justify-center flex-col'>
							<span className='text-[rgba(0,178,7,1)] text-[24px] font-["Poppins"] font-normal'>
								02
							</span>
							<span className='text-[12px] font-normal font-["Poppins"] uppercase text-[#e1e1e1]'>
								Hours
							</span>
						</div>
						<span className='text-[20px] text-[#fff] font-["Poppins"] font-medium'>
							{' '}
							:
						</span>
						<div className='flex items-center justify-center flex-col'>
							<span className='text-[rgba(0,178,7,1)] text-[24px] font-["Poppins"] font-normal'>
								48
							</span>
							<span className='text-[12px] font-normal font-["Poppins"] uppercase text-[#e1e1e1]'>
								Mins
							</span>
						</div>
						<span className='text-[20px] text-[#fff] font-["Poppins"] font-medium'>
							{' '}
							:
						</span>
						<div className='flex items-center justify-center flex-col'>
							<span className='text-[rgba(0,178,7,1)] text-[24px] font-["Poppins"] font-normal'>
								46
							</span>
							<span className='text-[12px] font-normal font-["Poppins"] uppercase text-[#e1e1e1]'>
								Secs
							</span>
						</div>
					</div>
					<Link
						to='/shopping'
						className='w-[191px] h-[51px] font-["Poppins"]  flex items-center justify-center gap-2 bg-[rgba(0,178,7,1)] text-[#fcfdfc] px-6 py-3 rounded-full transition text-[16px] font-semibold'
					>
						Shop now
						<FaArrowRight />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HeroShop
