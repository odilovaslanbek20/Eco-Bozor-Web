import { Link, useLocation } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdOutlineSettings } from 'react-icons/md'
import { IoLogInOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'
import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import * as React from 'react'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const steps = ['Login', 'Shipping', 'Payment', 'Review'];

function OrderDetails() {
	const location = useLocation()
	const currentPath = location.pathname
	const [modal, setModal] = useState(false)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


	const getLinkClass = path => `
    group flex items-center gap-[10px] w-full px-[20px] py-[16px] border-l-4
    ${
			currentPath === path
				? 'bg-[rgba(237,242,238,1)] border-[rgba(32,181,38,1)]'
				: 'hover:bg-[rgba(237,242,238,1)] hover:border-[rgba(32,181,38,1)] border-transparent'
		}
  `

	const getIconClass = path =>
		currentPath === path
			? 'text-[20px] text-[rgba(26,26,26,1)]'
			: 'text-[20px] text-[rgba(102,102,102,1)] group-hover:text-[rgba(26,26,26,1)]'

	const getTextClass = path =>
		`text-[16px] font-normal font-["Poppins"] leading-[150%] ${
			currentPath === path
				? 'text-[rgba(26,26,26,1)]'
				: 'text-[rgba(102,102,102,1)] group-hover:text-[rgba(26,26,26,1)]'
		}`

	return (
		<section className='max-w-[1320px] mt-[20px] mb-[80px] m-auto max-[1360px]:mx-[20px]'>
			<div className='flex items-start gap-[24px] max-[770px]:flex-col'>
				<div className='hidden max-[770px]:flex items-center justify-between w-full px-5 py-4'>
					<h2 className='text-[20px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
						Navigation
					</h2>
					<FaBars onClick={() => setModal(true)} className='text-[22px]' />
				</div>
				<div
					className={`min-w-[312px] max-[1050px]:min-w-[250px] max-[981px]:min-w-[200px] h-auto border border-[rgba(230,230,230,1)] rounded-[8px] max-[770px]:fixed max-[770px]:top-0 ${
						modal ? 'max-[770px]:left-0' : 'max-[770px]:left-[-100%]'
					} max-[770px]:bg-[#fff] max-[770px]:p-[20px] max-[770px]:w-[300px] max-[770px]:h-screen max-[770px]:rounded-none transition-all`}
				>
					<h2 className='text-[20px] max-[770px]:hidden w-full px-[20px] py-[16px] text-[rgba(26,26,26,1)] font-medium font-["Poppins"]'>
						Navigation
					</h2>

					<FaXmark
						onClick={() => setModal(false)}
						className='text-[25px] absolute top-[10px] right-[15px]'
					/>
					<div className='mt-[30px]'>
						<Link to='/dashboard' className={getLinkClass('/dashboard')}>
							<MdDashboard className={getIconClass('/dashboard')} />
							<p className={getTextClass('/dashboard')}>Dashboard</p>
						</Link>

						<Link to='/history' className={getLinkClass('/history')}>
							<RiHistoryFill className={getIconClass('/history')} />
							<p className={getTextClass('/history')}>Order History</p>
						</Link>

						<Link to='/wishlist' className={getLinkClass('/wishlist')}>
							<FaRegHeart className={getIconClass('/wishlist')} />
							<p className={getTextClass('/wishlist')}>Wishlist</p>
						</Link>

						<Link className={getLinkClass('/cart')}>
							<HiOutlineShoppingBag className={getIconClass('/cart')} />
							<p className={getTextClass('/cart')}>Shopping Cart</p>
						</Link>

						<Link to='/settings' className={getLinkClass('/settings')}>
							<MdOutlineSettings className={getIconClass('/settings')} />
							<p className={getTextClass('/settings')}>Settings</p>
						</Link>

						<Link className={getLinkClass('/logout')}>
							<IoLogInOutline className={getIconClass('/logout')} />
							<p className={getTextClass('/logout')}>Log-out</p>
						</Link>
					</div>
				</div>

				<div className='w-full border border-[rgba(230,230,230,1)] rounded-[8px]'>
					<div className='w-full flex items-center justify-between px-[24px] py-[19px] border-b border-[rgba(230,230,230,1)]'>
						<h2 className='text-[20px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>
							Order Details
						</h2>
						<span
							className='text-[16px] font-medium cursor-pointer font-["Poppins"] text-[rgba(0,178,7,1)]'
							onClick={() => window.history.back()}
						>
							Back to List
						</span>
					</div>
					<div className='py-[19px]'>
						<div className='grid grid-cols-3 max-[1106px]:grid-cols-1 gap-[24px] mt-[24px] max-[430px]:mt-[0px] mb-[40px] mx-[24px]'>
							<div className='col-span-2 max-[600px]:col-span-1 max-[600px]:flex-col flex items-start rounded-[8px] border border-[rgba(230,230,230,1)]'>
								<div className='border-r max-[600px]:border-none max-[600px]:w-full border-[rgba(230,230,230,1)] h-full'>
									<div className='border-b px-[20px] py-[18px] border-[rgba(230,230,230,1)] mb-[12px]'>
										<span className='text-[rgba(153,153,153,1)] text-[14px] font-medium font-["Poppins"]'>
											Billing Address
										</span>
									</div>
									<span className='text-[14px]  px-[20px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
										Dainne Russell
									</span>
									<p className='text-[14px] mt-[8px] mb-[36px] px-[20px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
										4140 Parker Rd. Allentown, New Mexico 31134
									</p>
									<div className='px-[20px] mb-[12px]'>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											Email
										</span>
										<br />
										<a
											className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'
											href='mailto:dainne.ressell@gmail.com'
										>
											dainne.ressell@gmail.com
										</a>
									</div>
									<div className='px-[20px] mb-[18px]'>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											Phone
										</span>
										<br />
										<a
											className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'
											href='tel:(671) 555-0110'
										>
											(671) 555-0110
										</a>
									</div>
								</div>
								<div className=' max-[600px]:w-full h-full max-[600px]:border-t border-[rgba(230,230,230,1)]'>
									<div className='border-b px-[20px] py-[18px] border-[rgba(230,230,230,1)] mb-[12px]'>
										<span className='text-[rgba(153,153,153,1)] text-[14px] font-medium font-["Poppins"]'>
											Shipping Address
										</span>
									</div>
									<span className='text-[14px]  px-[20px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
										Dainne Russell
									</span>
									<p className='text-[14px] mt-[8px] mb-[36px] px-[20px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
										4140 Parker Rd. Allentown, New Mexico 31134
									</p>
									<div className='px-[20px] mb-[12px]'>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											Email
										</span>
										<br />
										<a
											className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'
											href='mailto:dainne.ressell@gmail.com'
										>
											dainne.ressell@gmail.com
										</a>
									</div>
									<div className='px-[20px] mb-[18px]'>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											Phone
										</span>
										<br />
										<a
											className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'
											href='tel:(671) 555-0110'
										>
											(671) 555-0110
										</a>
									</div>
								</div>
							</div>
							<div className='border max-[600px]:max-w-full  border-[rgba(230,230,230,1)] max-w-[288px] py-[18px] rounded-[8px]'>
								<div className='flex items-center gap-[20px] px-[20px] pb-[19px] border-b border-[rgba(230,230,230,1)]'>
									<div className=''>
										<span className='text-[rgba(153,153,153,1)] font-medium font-["Poppins"] text-[12px]'>
											Order ID:
										</span>
										<br />
										<span className='text-[14px] text-[rgba(26,26,26,1)] font-normal font-["Poppins"]'>
											#4152
										</span>
									</div>
									<hr className='bg-[rgba(230,230,230,1)] h-[40px] w-[2px]' />
									<div className=''>
										<span className='text-[rgba(153,153,153,1)] font-medium font-["Poppins"] text-[12px]'>
											Payment Method:
										</span>
										<br />
										<span className='text-[14px] text-[rgba(26,26,26,1)] font-normal font-["Poppins"]'>
											Paypal
										</span>
									</div>
								</div>
								<div className='flex items-center justify-between mx-[20px] pt-[18px] pb-[10px] border-b border-[rgba(153,153,153,1)]'>
									<span className='text-[rgba(102,102,102,1)] text-[14px] font-normal font-["Poppins"]'>
										Subtotal:
									</span>
									<span className='text-[14px] text-[rgba(26,26,26,1)] font-["Poppins"] font-medium'>
										$365.00
									</span>
								</div>
								<div className='flex items-center justify-between mx-[20px] pt-[18px] pb-[10px] border-b border-[rgba(153,153,153,1)]'>
									<span className='text-[rgba(102,102,102,1)] text-[14px] font-normal font-["Poppins"]'>
										Discount:
									</span>
									<span className='text-[14px] text-[rgba(26,26,26,1)] font-["Poppins"] font-medium'>
										20%
									</span>
								</div>
								<div className='flex items-center justify-between mx-[20px] pt-[18px] pb-[10px] border-b border-[rgba(153,153,153,1)]'>
									<span className='text-[rgba(102,102,102,1)] text-[14px] font-normal font-["Poppins"]'>
										Shipping:
									</span>
									<span className='text-[14px] text-[rgba(26,26,26,1)] font-["Poppins"] font-medium'>
										Free
									</span>
								</div>
								<div className='flex items-center justify-between mx-[20px] pt-[18px] pb-[10px]'>
									<span className='text-[18px] text-[rgba(26,26,26,1)] font-["Poppins"] font-normal'>
										Total:
									</span>
									<span className='text-[18px] text-[rgba(44,116,47,1)] font-["Poppins"] font-semibold'>
										$84.00
									</span>
								</div>
							</div>
						</div>

						<div className=''>
							<Box sx={{ width: '100%', p: 2 }}>
								<Stepper
									activeStep={1}
									orientation={isMobile ? 'vertical' : 'horizontal'}
									alternativeLabel={!isMobile}
								>
									{steps.map((label, index) => (
										<Step key={index}>
											<StepLabel>{label}</StepLabel>
										</Step>
									))}
								</Stepper>
							</Box>
							<div className='mt-[40px]'>
								<div className='hidden sm:grid grid-cols-5 gap-[20px] py-[12px] w-full px-[24px] bg-[rgba(242,242,242,1)]'>
									<span className='col-span-2'>Product</span>
									<span>Price</span>
									<span>Quantity</span>
									<span>Subtotal</span>
								</div>
								{[
									{
										name: 'Red Capsicum',
										img: 'meva9.svg',
										price: 14,
										quantity: 5,
									},
									{
										name: 'Green Capsicum',
										img: 'meva10.svg',
										price: 14,
										quantity: 2,
									},
									{
										name: 'Green Chili',
										img: 'meva5.svg',
										price: 26,
										quantity: 10,
									},
								].map((item, index) => (
									<div
										key={index}
										className='grid grid-cols-5 sm:grid-cols-5 max-sm:grid-cols-1 gap-[20px] items-center my-[16px] border-b border-[rgba(230,230,230,1)] mx-[20px] px-[10px] py-[10px]'
									>
										<div className='flex items-center col-span-2 max-sm:col-span-1 gap-[10px]'>
											<img
												className='w-[70px] h-[70px]'
												src={item.img}
												alt={item.name}
											/>
											<span className="text-[rgba(26,26,26,1)] text-[14px] font-['Poppins'] font-normal">
												{item.name}
											</span>
										</div>
										<div className="text-[rgba(26,26,26,1)] text-[14px] font-['Poppins'] font-normal max-sm:text-center">
											${item.price.toFixed(2)}
										</div>
										<div className="text-[rgba(26,26,26,1)] text-[14px] font-['Poppins'] font-normal max-sm:text-center">
											x{item.quantity}
										</div>
										<div className="text-[rgba(26,26,26,1)] text-[14px] font-['Poppins'] font-normal max-sm:text-center">
											${(item.price * item.quantity).toFixed(2)}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OrderDetails
