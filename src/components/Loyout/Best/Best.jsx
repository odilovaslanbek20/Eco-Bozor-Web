import { HiOutlineShoppingBag } from 'react-icons/hi'
import { LuHeart } from 'react-icons/lu'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

function Best() {
	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
				<div className='grid grid-cols-4 gap-[10px] max-[1150px]:grid-cols-3 max-[640px]:gap-0 max-[640px]:gap-y-[20px] max-[870px]:grid-cols-2'>
					<div className='max-[640px]:col-span-2'>
						<span className='text-[18px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
							Hot Deals
						</span>
						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva1.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Green Apple
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva2.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Indian Malta
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva3.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Green Lettuce
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='max-[640px]:col-span-2'>
						<span className='text-[18px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
							Best Seller
						</span>
						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva4.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Eggplant
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva5.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Red Capsicum
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva6.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Red Tomatos
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='max-[870px]:col-span-2'>
						<span className='text-[18px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
							Top Rated
						</span>
						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva7.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Big Potatos
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva8.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Corn
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='group mt-[16px] hover:border-[rgba(44,116,47,1)] hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] flex items-center cursor-pointer gap-[12px] p-[5px] bg-[rgba(255,255,255,1)] border border-[rgba(230,230,230,1)]'>
							<img
								className='w-[100px] h-[100px]'
								src='meva9.svg'
								alt='meva img'
							/>
							<div className='flex items-start justify-start flex-col'>
								<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(77,77,77,1)]'>
									Fresh cauliflower
								</span>
								<span className='group-hover:hidden text-[rgba(26,26,26,1)] text-[16px] font-["Poppins"] font-medium'>
									$14.99
								</span>
								<img
									className='group-hover:hidden w-[80px]'
									src='yulduz.svg'
									alt='yulduz img'
								/>
								<div className='group-hover:block hidden transition-all mt-[5px]'>
									<div className='flex items-center gap-[12px] transition-all'>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<HiOutlineShoppingBag className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<MdOutlineRemoveRedEye className='text-[20px]' />
										</div>
										<div className='w-[40px] h-[40px] hover:bg-[rgba(0,178,7,1)] rounded-full flex items-center justify-center border border-[#dedddd] hover:text-[#fff]'>
											<LuHeart className='text-[20px]' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='max-[1150px]:col-span-3 '>
						<div
							className='bg-center bg-cover'
							style={{
								backgroundImage: `url("/Bannar.svg")`,
								width: '100%',
								height: '100%',
							}}
						>
							<div className='max-w-full flex items-center justify-start flex-col py-[32px]'>
								<span className='text-[12px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)] uppercase text-center'>
									HOt Sale
								</span>
								<span className='text-[rgba(26,26,26,1)] text-center leading-[120%] text-[32px] font-normal font-["Poppins"]'>
									<span className='font-semibold'>Save 37%</span> <br className='max-[1150px]:hidden'/> on Every Order
								</span>
								<Link to="/shopping" className='mt-[20px]'>
									<div className='w-[162px] h-[45px] rounded-full bg-[rgba(255,255,255,1)] flex items-center justify-center gap-[2px]'>
										<span className='text-[14px] font-["Poppins"] font-semibold text-[rgba(0,178,7,1)]'>
											Shop Now
										</span>
										<FaArrowRight className='text-[rgba(0,178,7,1)]' />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Best
