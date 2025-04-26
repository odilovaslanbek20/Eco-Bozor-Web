import { HiMiniXMark } from 'react-icons/hi2'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Shopping() {
	const [count, setCount] = useState(0)
	const [count1, setCount1] = useState(0)

	return (
		<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mt-[40px] mb-[80px]'>
			<h2 className='text-center font-semibold text-[32px] font-["Poppins"] mb-[32px] text-[rgba(26,26,26,1)]'>
				My Shopping Cart
			</h2>
			<div className='grid grid-cols-3 gap-[24px]'>
				<div className='w-full col-span-2 max-[1200px]:col-span-3'>
					<div className='border border-[rgba(230,230,230,1)] rounded-[8px] overflow-x-auto '>
						<div className='border-b border-[rgba(230,230,230,1)] grid grid-cols-5 min-w-[800px] py-[16px] px-[20px]'>
							<span className='col-span-2'>Product</span>
							<span>Price</span>
							<span>Quantity</span>
							<span>Subtotal</span>
						</div>

						<div className='my-[11px] mx-[20px] max-[800px]:min-w-[800px] grid grid-cols-5 items-center border-b border-[rgba(230,230,230,1)] gap-y-4 w-full'>
							<div className='flex items-center gap-[12px] col-span-2 '>
								<img className='w-[100px] h-[100px]' src='meva9.svg' alt='' />
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									Green Capsicum
								</span>
							</div>
							<div className='max-[768px]:flex max-[768px]:justify-between'>
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									$14.00
								</span>
							</div>
							<div className='max-[768px]:flex max-[768px]:justify-between'>
								<div className='border border-[rgba(230,230,230,1)] rounded-[40px] w-[124px] h-[50px] flex items-center justify-around text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									<div
										onClick={() => setCount(count + 1)}
										className='cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(26,26,26,1)]/20'
									>
										<FaPlus />
									</div>
									<div>{count}</div>
									<div
										onClick={() => {
											count === 0 ? count : setCount(count - 1)
										}}
										className='cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(26,26,26,1)]/20'
									>
										<FaMinus />
									</div>
								</div>
							</div>
							<div className='flex items-center justify-between max-[768px]:justify-start max-[768px]:gap-4'>
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									$70.00
								</span>
								<div className='w-[24px] h-[24px] rounded-full border flex items-center justify-center'>
									<HiMiniXMark className='text-[20px]' />
								</div>
							</div>
						</div>

						<div className='my-[11px] mx-[20px] max-[800px]:min-w-[800px] grid grid-cols-5 items-center border-b border-[rgba(230,230,230,1)] gap-y-4 w-full'>
							<div className='flex items-center gap-[12px] col-span-2 '>
								<img className='w-[100px] h-[100px]' src='meva9.svg' alt='' />
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									Green Capsicum
								</span>
							</div>
							<div className='max-[768px]:flex max-[768px]:justify-between'>
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									$14.00
								</span>
							</div>
							<div className='max-[768px]:flex max-[768px]:justify-between'>
								<div className='border border-[rgba(230,230,230,1)] rounded-[40px] w-[124px] h-[50px] flex items-center justify-around text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									<div
										onClick={() => setCount1(count1 + 1)}
										className='cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(26,26,26,1)]/20'
									>
										<FaPlus />
									</div>
									<div>{count1}</div>
									<div
										onClick={() => {
											count1 === 0 ? count1 : setCount1(count1 - 1)
										}}
										className='cursor-pointer flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(26,26,26,1)]/20'
									>
										<FaMinus />
									</div>
								</div>
							</div>
							<div className='flex items-center justify-between max-[768px]:justify-start max-[768px]:gap-4'>
								<span className='text-[16px] font-["Poppins"] text-[rgba(26,26,26,1)] font-normal'>
									$70.00
								</span>
								<div className='w-[24px] h-[24px] rounded-full border flex items-center justify-center'>
									<HiMiniXMark className='text-[20px]' />
								</div>
							</div>
						</div>

						<div className="w-full min-w-[800px] flex items-center justify-between gap-[20px] border-t border-[rgba(230,230,230,1)] py-[16px] px-[20px]">
							<Link>
							  <div className='w-[168px] h-[46px] rounded-[40px] border border-[#d2d2d2] flex items-center justify-center text-[rgba(77,77,77,1)] text-[14px] font-["Poppins"] font-semibold'>
								Return to shop
								</div>
							</Link>

							<Link>
							  <div className='w-[168px] h-[46px] rounded-[40px] border border-[#d2d2d2] flex items-center justify-center bg-[rgba(242,242,242,1)] text-[rgba(77,77,77,1)] text-[14px] font-["Poppins"] font-semibold'>
								Update Cart
								</div>
							</Link>
						</div>
					</div>

					<div className='border border-[rgba(230,230,230,1)] mt-[24px] p-[20px] flex items-center max-[630px]:flex-col gap-[24px]'>
						<span className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium text-center max-[630px]:text-left'>
							Coupon Code
						</span>
						<form className='w-full h-[52px] bg-[#f8f5f5] rounded-full flex items-center justify-between border border-[rgba(230,230,230,1)] max-[500px]:flex-col max-[500px]:h-auto max-[500px]:rounded-none gap-[12px]'>
							<input
								className='flex  px-[20px] text-[16px] font-["Poppins"] font-normal outline-none max-[500px]:w-full max-[500px]:border-none max-[500px]:h-[50px] max-[500px]:rounded max-[450px]:border'
								type='text'
								placeholder='Enter code'
							/>
							<button
								className='w-[162px] h-full rounded-full bg-[rgba(51,51,51,1)] text-[16px] font-semibold font-["Poppins"] text-white max-[500px]:w-full max-[500px]:h-[50px] max-[500px]:rounded-none'
								type='submit'
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className='w-full max-[1200px]:col-span-2 max-[650px]:col-span-3 border border-[rgba(230,230,230,1)] rounded-[8px] p-[24px]'>
					<h2 className='text-[20px] font-medium text-[rgba(26,26,26,1)] font-["Poppins"]'>
						Cart Total
					</h2>
					<div className='w-full'>
						<div className='flex items-center justify-between border-b border-[rgba(229,229,229,1)] py-[12px]'>
							<p className='text-[14px] font-["Poppins"] text-[rgba(77,77,77,1)] font-normal'>
								Subtotal:
							</p>
							<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
								$84.00
							</span>
						</div>
						<div className='flex items-center justify-between border-b border-[rgba(229,229,229,1)] py-[12px]'>
							<p className='text-[14px] font-["Poppins"] text-[rgba(77,77,77,1)] font-normal'>
								Shipping:
							</p>
							<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
								Free
							</span>
						</div>
						<div className='flex items-center justify-between py-[12px]'>
							<p className='text-[14px] font-["Poppins"] text-[rgba(77,77,77,1)] font-normal'>
								Total:
							</p>
							<span className='text-[16px] font-["Poppins"] font-semibold text-[rgba(26,26,26,1)]'>
								$84.00
							</span>
						</div>
						<button className='bg-[rgba(0,178,7,1)] w-full py-[16px] rounded-[30px] mt-[20px]'>
							<p className='text-[16px] font-["Poppins"] font-semibold text-[rgba(255,255,255,1)]'>
								Proceed to checkout
							</p>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Shopping
