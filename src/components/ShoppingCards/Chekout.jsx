function Checkout() {
	return (
		<>
			<section className='max-w-[1320px] my-[32px] mb-[80px] m-auto max-[1360px]:mx-[20px] grid grid-cols-3 max-[1020px]:grid-cols-4 gap-[20px] max-[700px]:grid-cols-1'>
				<div className='col-span-2'>
					<h2 className='text-[24px] mb-[32px] font-medium text-[rgba(26,26,26,1)] font-["Poppins"]'>
						Billing Information
					</h2>
					<form className='w-full grid grid-cols-3 gap-[16px]'>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								First name
							</p>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								type='text'
							/>
						</label>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Last name
							</p>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								type='text'
							/>
						</label>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Company Name
							</p>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								type='text'
							/>
						</label>
						<label className='col-span-3 max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Street Address
							</p>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								type='email'
							/>
						</label>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Country / Region
							</p>
							<select
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
							>
								<option selected hidden disabled>
									Select your country
								</option>
								<option value='Uzbekistan'>Uzbekistan</option>
								<option value='Russia'>Russia</option>
								<option value='England'>England</option>
							</select>
						</label>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								States
							</p>
							<select
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
							>
								<option disabled hidden selected>
									Select a state
								</option>
								<option value='Sherobod'>Sherobod</option>
								<option value='Toshkent'>Toshkent</option>
								<option value='Nukus'>Nukus</option>
							</select>
						</label>
						<label className='max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Zip Code
							</p>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								type='text'
							/>
						</label>
						<div className='grid grid-cols-2 col-span-3 gap-[16px] max-[1020px]:col-span-4'>
							<label className='max-[1020px]:col-span-4' htmlFor=''>
								<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
									Email
								</p>
								<input
									className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
									placeholder='Your first name'
									type='email'
								/>
							</label>
							<label className='max-[1020px]:col-span-4' htmlFor=''>
								<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
									Phone
								</p>
								<input
									className='border border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
									placeholder='Your first name'
									type='phone'
								/>
							</label>
						</div>
						<label
							htmlFor='max-[1020px]:col-span-4'
							className='flex items-center gap-[6px] max-[1020px]:col-span-4 mt-[20px] mb-[32px]'
						>
							<input
								className='border border-[rgba(230,230,230,1)] rounded-[6px] py-[14px]'
								placeholder='Your first name'
								type='checkbox'
							/>
							<p className='text-[14px] font-["Poppins"] text-[rgba(77,77,77,1)] font-normal'>
								Ship to a different address
							</p>
						</label>
						<label className='col-span-3 max-[1020px]:col-span-4' htmlFor=''>
							<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"] mb-[8px]'>
								Order Notes
							</p>
							<textarea
								className='border min-h-[100px] border-[rgba(230,230,230,1)] rounded-[6px] px-[16px] py-[14px] w-full'
								placeholder='Your first name'
								name=''
								id=''
							></textarea>
						</label>
					</form>
				</div>

				<div className='min-w-[424px] max-h-[580px] max-[350px]:max-h-[630px] max-[1020px]:col-span-2 max-[1030]:min-w-[250px] max-[1360px]:min-w-full border border-[rgba(230,230,230,1)] rounded-[8px] p-[24px]'>
					<h2 className='text-[20px] font-medium text-[rgba(26,26,26,1)] font-["Poppins"]'>
						Order Summery
					</h2>
					<div className='w-full'>
						<div className=''>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-[6px] max-[350px]:flex-col max-[350px]:items-start'>
									<img
										className='w-[60px] h-[60px]'
										src='meva9.svg'
										alt='meva img'
									/>
									<span className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-normal'>
										Green Capsicum x5
									</span>
								</div>
								<span className='text-[rgba(26,26,26,1)] text-[14px] font-medium font-["Poppins"]'>
									$70.00
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-[6px] max-[350px]:flex-col max-[350px]:items-start'>
									<img
										className='w-[60px] h-[60px]'
										src='meva9.svg'
										alt='meva img'
									/>
									<span className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-normal'>
										Red Capsicum x1
									</span>
								</div>
								<span className='text-[rgba(26,26,26,1)] text-[14px] font-medium font-["Poppins"]'>
									$14.00
								</span>
							</div>
						</div>
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
						<h2 className='text-[20px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)] my-[16px]'>
							Payment Method
						</h2>
						<form className='space-y-3'>
							<label className='flex items-center gap-2' htmlFor='cod'>
								<input
									id='cod'
									type='radio'
									name='payment'
									className='w-5 h-5 accent-green-600'
								/>
								<p>Cash on Delivery</p>
							</label>

							<label className='flex items-center gap-2' htmlFor='paypal'>
								<input
									id='paypal'
									type='radio'
									name='payment'
									className='w-5 h-5 accent-green-600'
								/>
								<p>Paypal</p>
							</label>

							<label className='flex items-center gap-2' htmlFor='amazon'>
								<input
									id='amazon'
									type='radio'
									name='payment'
									className='w-5 h-5 accent-green-600'
								/>
								<p>Amazon Pay</p>
							</label>
						</form>

						<button className='bg-[rgba(0,178,7,1)] w-full py-[16px] rounded-[30px] mt-[20px]'>
							<p className='text-[16px] font-["Poppins"] font-semibold text-[rgba(255,255,255,1)]'>
								Place Order
							</p>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Checkout
