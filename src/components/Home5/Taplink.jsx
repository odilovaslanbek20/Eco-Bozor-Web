function Taplikn() {
	return (
		<>
			<section className='max-w-[1320px] grid grid-cols-4 max-[1021px]:grid-cols-2 max-[520px]:grid-cols-1 gap-[24px] m-auto max-[1360px]:mx-[20px]'>
				<div className='p-[20px] border-2 border-[rgba(32,181,38,0.2)] rounded-[8px]'>
					<img className='mb-[16px]' src='Icon3.svg' alt='' />
					<span className='font-["Poppins"] font-medium text-[rgba(26,26,26,1)] block uppercase'>
						Call Us 24/7
					</span>
					<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)] leading-[150%] mt-[10px]'>
						1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
					</p>
				</div>
				<div className=' border-2 p-[20px] border-[rgba(32,181,38,0.2)] rounded-[8px]'>
					<img className='mb-[16px]' src='Icon2.svg' alt='Icons' />
					<span className='font-["Poppins"] font-medium text-[rgba(26,26,26,1)] block uppercase'>
						Call Us 24/7
					</span>
					<div className='mt-[10px]'>
						<a
							className='text-[rgba(0,178,7,1)] font-["Poppins"] text-[24px] font-normal'
							href='tel:(303) 555-0105'
						>
							(303) 555-0105
						</a>
					</div>
				</div>
				<div className='col-span-2 max-[520px]:col-span-1 border-2 p-[20px] border-[rgba(32,181,38,0.2)] rounded-[8px]'>
					<img
						className='mb-[14px]'
						src='Icon1.svg'
						alt='iconka'
					/>
					<span className='font-["Poppins"] font-medium text-[rgba(26,26,26,1)] uppercase text-[16px]'>
						Subscribe Newsletter
					</span>
					<form className='w-full h-auto border-[rgba(230,230,230,1)] max-[520px]:rounded-none mt-[10px] flex flex-wrap max-[520px]:flex-col justify-between items-center border rounded-[40px]'>
						<input
							className='flex-1 min-w-[180px] min-h-[40px] pl-[20px] outline-none text-[14px] font-["Poppins"] font-normal text-[rgba(153,153,153,1)]'
							type='email'
							placeholder='Your email address'
						/>
						<button
							className='bg-[rgba(0,178,7,1)] max-[520px]:w-full max-[520px]:rounded-none w-[136px] h-[40px] flex items-center justify-center rounded-[40px] text-[14px] font-["Poppins"] text-white font-semibold'
							type='submit'
						>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default Taplikn
