import { Link } from 'react-router-dom'

function Information2() {
	return (
		<>
			<section className='max-w-[760px]'>
				<div className='flex items-start flex-col gap-[15px]'>
					<div className='flex items-center justify-between w-full gap-[20px]'>
						<div className='flex items-center gap-[12px]'>
							<img src='ramka.png' alt='remka img' />
							<div className=''>
								<p className='text-[14px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
									Kristin Watson
								</p>
								<img className='w-[100px]' src='yulduz.svg' alt='' />
							</div>
						</div>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
							2 min ago
						</p>
					</div>
					<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
						Duis at ullamcorper nulla, eu dictum eros.
					</p>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className='flex items-start flex-col gap-[15px]'>
					<div className='flex items-center justify-between w-full gap-[20px]'>
						<div className='flex items-center gap-[12px]'>
							<img src='ramka.png' alt='remka img' />
							<div className=''>
								<p className='text-[14px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
								Jane Cooper
								</p>
								<img className='w-[100px]' src='yulduz.svg' alt='' />
							</div>
						</div>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
						30 Apr, 2021
						</p>
					</div>
					<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
					Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.
					</p>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className='flex items-start flex-col gap-[15px]'>
					<div className='flex items-center justify-between w-full gap-[20px]'>
						<div className='flex items-center gap-[12px]'>
							<img src='ramka.png' alt='remka img' />
							<div className=''>
								<p className='text-[14px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
								Jacob Jones
								</p>
								<img className='w-[100px]' src='yulduz.svg' alt='' />
							</div>
						</div>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
							2 min ago
						</p>
					</div>
					<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
					Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.
					</p>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className='flex items-start flex-col gap-[15px]'>
					<div className='flex items-center justify-between w-full gap-[20px]'>
						<div className='flex items-center gap-[12px]'>
							<img src='ramka.png' alt='remka img' />
							<div className=''>
								<p className='text-[14px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
								Ralph Edwards
								</p>
								<img className='w-[100px]' src='yulduz.svg' alt='' />
							</div>
						</div>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
							2 min ago
						</p>
					</div>
					<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
					200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA
					</p>
				</div>

				<Link>
				  <div className="flex mt-[24px] max-[430px]:w-full items-center justify-center w-[138px] h-[45px] rounded-[30px] bg-[rgba(86,172,89,0.1)]">
						<p className='text-[14px] font-["Poppins"] font-semibold text-[rgba(0,178,7,1)]'>Load More</p>
					</div>
				</Link>
			</section>
		</>
	)
}

export default Information2
