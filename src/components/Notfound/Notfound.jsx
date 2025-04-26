import { Link } from 'react-router-dom'

function Notfound() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] my-[80px]'>
				<div className='flex items-center justify-center flex-col'>
					<img src='notfound.png' alt='notfound images' />
					<h2 className='text-[rgba(26,26,26,1)] leading-[120%] text-[40px] font-semibold font-["Poppins"] text-center'>Oops! page not found</h2>
					<p className='my-[20px] font-["Poppins"] text-[16px] font-semibold text-[rgba(128,128,128,1)] text-center max-w-[600px]'>
						Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
						Maecenas sagittis tortor at metus mollis
					</p>
					<Link to="/">
						<div className='w-[163px] h-[43px] bg-[rgba(0,178,7,1)] rounded-[43px] flex items-center justify-center'>
							<p className='text-[rgba(255,255,255,1)] font-semibold text-[14px] font-["Poppins"]'>
								Back to Home
							</p>
						</div>
					</Link>
				</div>
			</section>
		</>
	)
}

export default Notfound
