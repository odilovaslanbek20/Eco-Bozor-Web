function Bgcards() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] my-[60px]'>
				<div
					className='w-full h-[400px] bg-cover bg-center flex items-center justify-center'
					style={{
						backgroundImage: `url("/natureimg.png")`,
						width: '100%',
						height: '396px',
					}}
				>
					<div className='flex items-center justify-center flex-col gap-[30px] max-w-[490px] max-[370px]:px-[10px] max-[500px]:px-[20px]'>
						<h2 className='text-[rgba(255,255,255,1)] max-[500px]:text-[25px] text-center font-semibold font-["Poppins"] leading-[120%] text-[36px]'>
							We’re the Best Organic Farm in the World
						</h2>

						<div className='w-[80px] h-[80px] max-[500px]:w-[60px] max-[500px]:h-[60px] border border-[rgba(255,255,255,1)] rounded-full flex items-center justify-center'>
							<img src='Vector.svg' alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Bgcards
