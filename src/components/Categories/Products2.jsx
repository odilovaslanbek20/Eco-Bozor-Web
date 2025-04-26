import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import dataCategories from './category'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaRegEye } from 'react-icons/fa6'

function Products2() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mb-[50px]'>
				<div className=''>
					<div className='flex items-center justify-between mb-[30px] max-[400px]:flex-col max-[400px]:gap-[10px]'>
						<h1 className='text-[rgba(26,26,26,1)] text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px]'>
							Featured Products
						</h1>
						<Link className='flex items-center gap-[5px]'>
							<p className='text-[16px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'>
								View All
							</p>
							<FaArrowRight className='text-[rgba(0,178,7,1)]' />
						</Link>
					</div>
					<div className='grid grid-cols-5 max-[1011px]:grid-cols-4 max-[840px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1'>
						{dataCategories?.products2?.map(card => {
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

export default Products2
