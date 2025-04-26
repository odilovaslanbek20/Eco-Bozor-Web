function Order() {
	return (
		<>
			<section className='bg-cover w-full'
			 style={{
				backgroundImage: `url("barig.jpg")`,
				backgroundRepeat: "no-repeat",
				width: "100%",
				height: "100%",
				backgroundPosition: "center" ,
			 }}
			>
				<div className="bg-[rgba(0,16,9,0.9)] w-full h-full py-[50px]">
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] grid grid-cols-4 gap-[24px]'>
					<div className='max-w-[312px] h-[174px] bg-[rgba(255,255,255,0.07)] flex items-center justify-center flex-col rounded-[8px]'>
						<p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-light text-[56px] text-center'>37+</p>
						<p className='font-["Poppins"] text-[18px] font-normal text-[rgba(255,255,255,1)] text-center'>Years of Hard Work</p>
					</div>
					<div className='max-w-[312px] h-[174px] bg-[rgba(255,255,255,0.07)] flex items-center justify-center flex-col rounded-[8px]'>
						<p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-light text-[56px] text-center'>500k+</p>
						<p className='font-["Poppins"] text-[18px] font-normal text-[rgba(255,255,255,1)] text-center'>Happy Customer</p>
					</div>
					<div className='max-w-[312px] h-[174px] bg-[rgba(255,255,255,0.07)] flex items-center justify-center flex-col rounded-[8px]'>
						<p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-light text-[56px] text-center'>28</p>
						<p className='font-["Poppins"] text-[18px] font-normal text-[rgba(255,255,255,1)] text-center'>Qualified Team Member</p>
					</div>
					<div className='max-w-[312px] h-[174px] bg-[rgba(255,255,255,0.07)] flex items-center justify-center flex-col rounded-[8px]'>
						<p className='text-[rgba(0,178,7,1)] font-["Poppins"] font-light text-[56px] text-center'>750k+</p>
						<p className='font-["Poppins"] text-[18px] font-normal text-[rgba(255,255,255,1)] text-center'>Monthly Orders</p>
					</div>
				</div>
				</div>
			</section>
		</>
	)
}

export default Order
