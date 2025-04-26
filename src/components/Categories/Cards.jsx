import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Cards() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] rounded-[10px] grid grid-cols-3 gap-[20px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:flex max-[600px]:items-center max-[600px]:flex-col max-[600px]:justify-center'>
				<div
					className='max-w-[424px] h-[536px] pt-[35px] rounded-[10px] p-[15px] w-full'
					style={{
						backgroundImage: "url('Rectangle.png')",
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex items-center justify-center flex-col'>
						<h2 className='text-[rgba(255,255,255,1)] font-["Poppins"] font-medium text-[14px] text-center'>
							Best Deals
						</h2>
						<h2 className='font-["Poppins"] leading-[120%] font-semibold text-[rgba(255,255,255,1)] text-[40px] text-center'>
							Sale of the Month
						</h2>
						<div className="flex items-start gap-[16px] justify-center">
							<div className="flex items-center justify-center flex-col">
								<p className='text-[rgba(255,255,255,1)] text-[24px] font-["Poppins] font-normal'>00</p>
								<p className='text-[rgba(255,255,255,0.8)] text-[12px] font-["Poppins] font-normal uppercase'>Days</p>
							</div>
							 <p className='text-[24px] font-normal font-["Poppins"] text-[rgba(255,255,255,0.6)]'> : </p>
							<div className="flex items-center justify-center flex-col">
								<p className='text-[rgba(255,255,255,1)] text-[24px] font-["Poppins] font-normal'>02</p>
								<p className='text-[rgba(255,255,255,0.8)] text-[12px] font-["Poppins] font-normal uppercase'>Hours</p>
							</div>
							 <p className='text-[24px] font-normal font-["Poppins"] text-[rgba(255,255,255,0.6)]'> : </p>
							<div className="flex items-center justify-center flex-col">
								<p className='text-[rgba(255,255,255,1)] text-[24px] font-["Poppins] font-normal'>18</p>
								<p className='text-[rgba(255,255,255,0.8)] text-[12px] font-["Poppins] font-normal uppercase'>Mins</p>
							</div>
							 <p className='text-[24px] font-normal font-["Poppins"] text-[rgba(255,255,255,0.6)]'> : </p>
							<div className="flex items-center justify-center flex-col">
								<p className='text-[rgba(255,255,255,1)] text-[24px] font-["Poppins] font-normal'>46</p>
								<p className='text-[rgba(255,255,255,0.8)] text-[12px] font-["Poppins] font-normal uppercase'>Secs</p>
							</div>
						</div>
						<Link
						  to='/shopping'
							className='w-[191px] mt-[24px] h-[51px] font-["Poppins"]  flex items-center justify-center gap-2 bg-[rgba(255,255,255,1)] text-[rgba(0,178,7,1)] px-6 py-3 rounded-full transition text-[16px] font-semibold'
						>
							Shop now
							<FaArrowRight />
						</Link>
					</div>
				</div>
 
        <div
					className='max-w-[424px] h-[536px] pt-[35px] rounded-[10px] p-[15px] w-full'
					style={{
						backgroundImage: "url('Rectangle1.png')",
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex items-center justify-center flex-col'>
						<h2 className='text-[rgba(255,255,255,1)] font-["Poppins"] font-medium text-[14px] text-center'>
						85% Fat Free
						</h2>
						<h2 className='font-["Poppins"] leading-[120%] font-semibold text-[rgba(255,255,255,1)] text-[40px] text-center'>
						Low-Fat Meat
						</h2>
						<div className="flex items-start gap-[16px] justify-center">
							<p className='text-[18px] font-normal font-["Poppins"] text-[rgba(255,255,255,1)]'>Started at <span className='text-[rgba(255,138,0,1)] text-[20px] font-["Poppins] font-semibold'>$79.99</span></p>
						</div>
						<Link
						to='/shopping'
							className='w-[191px] mt-[24px] h-[51px] font-["Poppins"]  flex items-center justify-center gap-2 bg-[rgba(255,255,255,1)] text-[rgba(0,178,7,1)] px-6 py-3 rounded-full transition text-[16px] font-semibold'
						>
							Shop now
							<FaArrowRight />
						</Link>
					</div>
				</div>

				<div
					className='max-w-[424px] h-[536px] pt-[35px] rounded-[10px] px-[15px] w-full'
					style={{
						backgroundImage: "url('Rectangle2.png')",
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex items-center justify-center flex-col'>
						<h2 className='text-[rgba(26,26,26,1)] font-["Poppins"] font-medium text-[14px] text-center'>
						Summer Sale
						</h2>
						<h2 className='font-["Poppins"] leading-[120%] font-semibold text-[rgba(26,26,26,1)] text-[40px] text-center'>
						100% Fresh Fruit
						</h2>
						<div className="flex items-start gap-[16px] justify-center">
							<p className='text-[18px] flex items-center gap-[12px] text-[rgba(26,26,26,1)] font-normal font-["Poppins"]'>Up to <span className='w-[100px] h-[39px] rounded-[5px] bg-[rgba(26,26,26,1)] flex items-center justify-center text-[rgba(252,201,0,1)] text-[18px] font-["Poppins"] font-normal'>64% OFF</span></p>
						</div>
						<Link
						to='/shopping'
							className='w-[191px] mt-[24px] h-[51px] font-["Poppins"]  flex items-center justify-center gap-2 bg-[rgba(255,255,255,1)] text-[rgba(0,178,7,1)] px-6 py-3 rounded-full transition text-[16px] font-semibold'
						>
							Shop now
							<FaArrowRight />
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default Cards
