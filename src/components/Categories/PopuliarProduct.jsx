import dataCategories from './category'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Products1() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mb-[50px]'>
				<div className=''>
					<div className='flex items-center justify-center flex-col my-[30px]'>
						<span className='text-[rgba(0,178,7,1)] uppercase text-[14px] font-medium'>
							Products
						</span>
						<h1 className='text-[rgba(26,26,26,1)] text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px] text-center'>
							Our Featured Products
						</h1>
					</div>
					<div className='grid grid-cols-5 gap-[20px] max-[1011px]:grid-cols-4 max-[840px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1'>
						<div
							className='bg-center bg-cover flex items-center justify-start flex-col text-center w-full  px-[16px] py-[24px] rounded-[12px] max-[450px]:min-h-[300px]'
							style={{
								backgroundImage: `url("/ppppppp.png")`,
							}}
						>
							<span className='text-[12px] sm:text-[14px] text-[rgba(26,26,26,1)] font-["Poppins"] font-medium uppercase'>
								Summer Sale
							</span>
							<span className='text-[28px] sm:text-[32px] text-[rgba(0,178,7,1)] font-["Poppins"] font-semibold mb-[12px]'>
								75% off
							</span>
							<Link to='/shopping'>
								<div className='flex items-center justify-center gap-[6px] w-[140px] sm:w-[162px] h-[40px] sm:h-[42px] bg-[rgba(255,255,255,1)] rounded-full hover:shadow-md transition-all'>
									<span className='text-[14px] text-[rgba(0,178,7,1)] font-semibold font-["Poppins"]'>
										Shop Now
									</span>
									<FaArrowRight className='text-[rgba(0,178,7,1)] text-[16px]' />
								</div>
							</Link>
						</div>

						{dataCategories?.products1?.map(card => {
							return (
								<Link to='/data'>
									<div
										key={card?.id}
										className='group hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] transition-all cursor-pointer bg-[rgba(255,255,255,1)] border-1 border-[rgba(230,230,230,1)]'
									>
										<div className='hidden group-hover:block absolute z-[50] p-[16px] transition-all'>
											<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)] mb-[6px]'>
												<i className='fa-regular fa-heart'></i>
											</div>
											<div className='w-[40px] h-[40px] bg-[rgba(255,255,255,1)] hover:text-[#fff] hover:bg-[rgba(0,178,7,1)] rounded-full border flex items-center justify-center border-[rgba(0,178,7,1)]'>
												<FaRegEye />
											</div>
										</div>
										<img
											className='w-full'
											src={card?.images}
											alt='cards img'
										/>
										<div className='p-[12px]'>
											<div className='flex items-end justify-between'>
												<div className=''>
													<span className='text-[14px] font-normal font-["Poppins"] text-[rgba(77,77,77,1)]'>
														{card?.title}
													</span>
													<br />
													<span className='text-[rgba(26,26,26,1)] text-[16px] font-medium font-["Poppins"]'>
														{card?.prise}
													</span>
												</div>
												<div className='w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer bg-[rgba(242,242,242,1)] group-hover:bg-[rgba(0,178,7,1)] group-hover:text-[#fff] transition-all '>
													<HiOutlineShoppingBag className='text-[20px]' />
												</div>
											</div>
											<img
												className='mt-[6px]'
												src={card?.images1}
												alt='images'
											/>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Products1
