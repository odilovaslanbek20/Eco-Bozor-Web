function HeroBar() {
	return (
		<>
		  <div className="max-w-[1320px] mx-auto max-[1360px]:mx-[20px] mt-5 bg-[rgba(255,255,255,1)] shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] rounded-[8px] py-[44px] px-[40px] mb-[60px] grid grid-cols-4 gap-[15px] items-start max-[1180px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-[25px] max-[640px]:px-[20px]">
         <div className="group cursor-pointer flex items-center gap-[16px] flex-col justify-center">
					 <div className="flex items-center gap-[16px] max-[365px]:flex-col justify-center">
					 <img src="Mashina.svg" alt="mashina img" />
					 <div className="">
						 <h2 className='text-[rgba(26,26,26,1)] text-[16px] font-semibold font-["Poppins"] max-[365px]:text-center mb-[5px]'>Free Shipping</h2>
						 <p className='text-[rgba(153,153,153,1)] text-[14px] font-["Poppins"] max-[365px]:text-center font-normal'>Free shipping on all your order</p>
					 </div>
					 </div>
					 <div className="group-hover:w-[100%] transition-all w-[0] h-[2px] bg-[rgba(0,178,7,1)]"></div>
				 </div>

				 <div className="group cursor-pointer flex items-center justify-center gap-[16px] flex-col">
					 <div className="flex items-center justify-center gap-[16px] max-[365px]:flex-col">
					 <img src="quloqchin.svg" alt="mashina img" />
					 <div className="">
						 <h2 className='text-[rgba(26,26,26,1)] text-[16px] font-semibold font-["Poppins"] max-[365px]:text-center mb-[5px]'>Customer Support 24/7</h2>
						 <p className='text-[rgba(153,153,153,1)] text-[14px] font-["Poppins"] max-[365px]:text-center font-normal'>Instant access to Support</p>
					 </div>
					 </div>
					 <div className="group-hover:w-[100%] transition-all w-[0] h-[2px] bg-[rgba(0,178,7,1)]"></div>
				 </div>

				 <div className="group cursor-pointer flex items-center gap-[16px] flex-col justify-center">
					 <div className="flex items-center gap-[16px] max-[365px]:flex-col justify-center">
					 <img src="sumka.svg" alt="mashina img" />
					 <div className="">
						 <h2 className='text-[rgba(26,26,26,1)] text-[16px] font-semibold font-["Poppins"] max-[365px]:text-center mb-[5px]'>100% Secure Payment</h2>
						 <p className='text-[rgba(153,153,153,1)] text-[14px] font-["Poppins"] max-[365px]:text-center font-normal'>We ensure your money is save</p>
					 </div>
					 </div>
					 <div className="group-hover:w-[100%] transition-all w-[0] h-[2px] bg-[rgba(0,178,7,1)]"></div>
				 </div>

				 <div className="group cursor-pointer flex items-center gap-[16px] flex-col justify-center">
					 <div className="flex items-center gap-[16px] max-[365px]:flex-col justify-center">
					 <img src="kubik.svg" alt="mashina img" />
					 <div className="">
						 <h2 className='text-[rgba(26,26,26,1)] text-[16px] font-semibold font-["Poppins"] max-[365px]:text-center mb-[5px]'>Money-Back Guarantee</h2>
						 <p className='text-[rgba(153,153,153,1)] text-[14px] font-["Poppins"] max-[365px]:text-center font-normal'>30 Days Money-Back Guarantee</p>
					 </div>
					 </div>
					 <div className="group-hover:w-[100%] transition-all w-[0] h-[2px] bg-[rgba(0,178,7,1)]"></div>
				 </div>
			</div>
		</>
	)
}

export default HeroBar