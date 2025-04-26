import { Link } from 'react-router-dom'
import { GrApple } from 'react-icons/gr'
import { FaGooglePlay } from "react-icons/fa";

function Footer1() {
	return (
		<>
			<section className='w-full m-auto bg-[rgba(242,242,242,1)]'>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
					<div className='flex items-start justify-between max-[1330px]:flex-col gap-[50px] max-[1260px]:gap-[80px] max-[1130px]:gap-[50px] py-[60px] border-b-[0.5px] border-[rgba(153,153,153,1)]'>
						<div className='w-[50%] max-[595px]:w-full'>
							<img src='Logo1.svg' alt='logoimg' />
							<p className='font-normal my-[16px] text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
								Morbi cursus porttitor enim lobortis molestie. Duis gravida
								turpis dui, eget bibendum magna congue nec.
							</p>
							<div className='flex items-center gap-[16px]'>
								<div className=''>
									<a
										className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-medium'
										href='tel:(219) 555-0114'
									>
										(219) 555-0114
									</a>
									<p className='w-full h-[2px] bg-[rgba(32,181,38,1)] mt-[2px]'></p>
								</div>
								<p className='text-[rgba(128,128,128,1)] text-[14px] font-["Poppins"] font-medium'>
									or
								</p>
								<div className=''>
									<a
										className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-medium'
										href='mailto:Proxy@gmail.com'
									>
										Proxy@gmail.com
									</a>
									<p className='w-full h-[2px] bg-[rgba(32,181,38,1)] mt-[2px]'></p>
								</div>
							</div>
						</div>
						<div className='w-full grid grid-cols-5 gap-[30px] max-[870px]:grid-cols-3 max-[492px]:grid-cols-2 max-[334px]:gap-[20px]'>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[rgba(26,26,26,1)]'>
									My Account
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									My Account
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Order History
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Shoping Cart
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Wishlist
								</Link>
							</div>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[rgba(26,26,26,1)]'>
									Helps
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Contact
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Faqs
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Terms & Condition
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Privacy Policy
								</Link>
							</div>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[rgba(26,26,26,1)]'>
									Proxy
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									About
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Shop
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Product
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[rgba(26,26,26,1)]'>
									Track Order
								</Link>
							</div>
							<div className='col-span-2 flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[rgba(26,26,26,1)]'>
									Download Mobile App
								</h2>
								<div className="flex items-center gap-[8px] max-[360px]:w-full max-[360px]:flex-c">
								<Link className='w-full'>
									<div className='px-[10px] flex items-center gap-[6px] max-[360px]:w-full w-[154px] h-[58px] bg-[#fff] justify-center'>
										<GrApple className='text-[25px]' />
										<div className='flex items-start justify-center flex-col w-full'>
											<span className='text-[11px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
												Download on the
											</span>
											<span className='text-[16px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
												App Store
											</span>
										</div>
									</div>
								</Link>
								<Link className='w-full'>
									<div className='px-[10px] flex items-center gap-[6px] max-[360px]:w-full w-[154px] h-[58px] bg-[#fff] justify-center'>
										<FaGooglePlay className='text-[25px]' />
										<div className='flex items-start justify-center flex-col w-full'>
											<span className='text-[11px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
												Download on the
											</span>
											<span className='text-[16px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Google play
											</span>
										</div>
									</div>
								</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='py-[24px] flex items-center gap-[10px] justify-between max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start'>
						<div className=''>
							<p className='text-[rgba(153,153,153,1)] font-normal font-["Poppins"] text-[14px]'>
								Ecobazar eCommerce <span>&copy;2021. All Rights Reserved</span>
							</p>
						</div>
						<div className='flex items-center gap-[8px]'>
							<img src='Method=ApplePay.svg' alt='footerimg' />
							<img src='Method=Visa.svg' alt='footerimg' />
							<img src='Method=Discover.svg' alt='footerimg' />
							<img src='Method=Mastercard.svg' alt='footerimg' />
							<img src='Cart.svg' alt='footerimg' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Footer1
