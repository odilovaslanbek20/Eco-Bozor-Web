function AboutCards() {
	return (
		<>
			<section className='w-full my-[80px] max-[850px]:my-[40px] max-[420px]:my-[20px]'>
				<div className=''>
					<div className='max-w-[1320px] m-auto max-[850px]:flex-col max-[1360px]:mx-[20px] flex items-center gap-[41px]'>
						<div className='max-w-[610px] max-[640px]:w-full max-[850px]:order-2'>
							<h2 className='text-[56px] text-[rgba(26,26,26,1)] max-[335px]:text-[25px] max-[850px]:text-center max-[995px]:text-[40px] max-[995px]:leading-[100%] max-[435px]:text-[30px] max-[1200px]:text-[45px] font-["Poppins"] font-semibold leading-[120%]'>
								100% Trusted Organic Food Store
							</h2>
							<p className='text-[rgba(102,102,102,1)] max-[435px]:text-[15px] max-[435px]:mt-[10px] font-["Poppins"]  max-[995px]:text-[16px] max-[1200px]:text-[17px] max-[1200px]:mt-[20px] max-[850px]:text-center font-normal text-[18px] max-[995px]:leading-[120%] leading-[150%] mt-[32px]'>
								Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
								laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies
								elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at
								accumsan. Donec a eros non massa vulputate ornare. Vivamus
								ornare commodo ante, at commodo felis congue vitae.
							</p>
						</div>
						<img
							className='w-full h-auto max-[850px]:order-1 max-[850px]:max-w-[600px] max-[1200px]:max-w-[600px] max-[995px]:max-w-[500px]'
							src='amaki.png'
							alt='amaki images'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutCards
