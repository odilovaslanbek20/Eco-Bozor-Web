import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
	return (
		<>
			<section className='w-full m-auto bg-[rgba(26,26,26,1)]'>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
					<div className='flex items-start justify-between max-[1021px]:flex-col gap-[112px] max-[1260px]:gap-[80px] max-[1130px]:gap-[50px] py-[60px] border-b-[0.5px] border-[rgba(153,153,153,1)]'>
						<div className='w-[50%] max-[595px]:w-full'>
							<img src='Logo.svg' alt='logoimg' />
							<p className='font-normal my-[16px] text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
								Morbi cursus porttitor enim lobortis molestie. Duis gravida
								turpis dui, eget bibendum magna congue nec.
							</p>
							<div className='flex items-center gap-[16px]'>
								<div className=''>
									<a
										className='text-[#fff] text-[14px] font-["Poppins"] font-medium'
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
										className='text-[#fff] text-[14px] font-["Poppins"] font-medium'
										href='mailto:Proxy@gmail.com'
									>
										Proxy@gmail.com
									</a>
									<p className='w-full h-[2px] bg-[rgba(32,181,38,1)] mt-[2px]'></p>
								</div>
							</div>
						</div>
						<div className='w-full grid grid-cols-4 gap-[30px] max-[644px]:grid-cols-3 max-[492px]:grid-cols-2 max-[334px]:gap-[20px]'>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[#fff]'>
									My Account
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									My Account
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Order History
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Shoping Cart
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Wishlist
								</Link>
							</div>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[#fff]'>
									Helps
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Contact
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Faqs
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Terms & Condition
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Privacy Policy
								</Link>
							</div>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[#fff]'>
									Proxy
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									About
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Shop
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Product
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Track Order
								</Link>
							</div>
							<div className='flex items-start justify-start flex-col'>
								<h2 className='font-medium text-[16px] font-["Poppins"] mb-[15px] text-[#fff]'>
									Categories
								</h2>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Fruit & Vegetables
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Meat & Fish
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Bread & Bakery
								</Link>
								<Link className='font-normal text-[14px] font-["Poppins"] mb-[12px] text-[rgba(153,153,153,1)] transition-all hover:text-[#fff]'>
									Beauty & Health
								</Link>
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

export default Footer
