import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function AboutCards2() {
	return (
		<>
			<section className='w-full my-[80px] max-[850px]:my-[40px] max-[420px]:my-[20px]'>
				<div className='max-w-[1320px] m-auto max-[850px]:flex-col max-[1360px]:mx-[20px] flex items-center gap-[41px]'>
					<div className='max-w-[610px] max-[640px]:w-full max-[850px]:order-2'>
						<h2 className='text-[56px] text-[rgba(26,26,26,1)] max-[335px]:text-[25px] max-[850px]:text-center max-[995px]:text-[40px] max-[995px]:leading-[100%] max-[435px]:text-[30px] max-[1200px]:text-[45px] font-["Poppins"] font-semibold leading-[120%]'>
							We Delivered, You Enjoy Your Order.
						</h2>
						<p className='text-[rgba(102,102,102,1)] max-[435px]:text-[15px] max-[435px]:mt-[10px] font-["Poppins"]  max-[995px]:text-[16px] max-[1200px]:text-[17px] max-[1200px]:mt-[20px] max-[850px]:text-center font-normal text-[18px] max-[995px]:leading-[120%] leading-[150%] mt-[32px]'>
							Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
							ultrices consectetur velit dapibus eu. Mauris sollicitudin
							dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
							bibendum nunc eget elementum.
						</p>
						<Link to='/shopping'>
							<div className='w-[191px] h-[51px] mt-8 rounded-full bg-[rgba(0,178,7,1)] flex items-center justify-center gap-2 mx-auto lg:mx-0'>
								<span className='text-[16px] text-white font-["Poppins"] font-semibold'>
								Shop Now
								</span>
								<FaArrowRight className='text-white' />
							</div>
						</Link>
					</div>
					<img
						className='w-full bg-contain max-[850px]:order-1 max-[850px]:max-w-[600px] max-[1200px]:max-w-[600px] max-[995px]:max-w-[500px] h-[500px] max-[600px]:h-auto'
						src='qizil.png'
						alt='amaki images'
					/>
				</div>
			</section>
		</>
	)
}

export default AboutCards2
