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
import { Eye, EyeOff } from 'lucide-react'

function Settings() {
	const location = useLocation()
	const currentPath = location.pathname
	const [modal, setModal] = useState(false)

	const [showCurrent, setShowCurrent] = useState(false)
	const [showNew, setShowNew] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)

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
						className='text-[25px] min-[770px]:hidden absolute top-[10px] right-[15px]'
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

				<div className='w-full'>
					<div className='w-full border mb-[24px] border-[rgba(230,230,230,1)] rounded-[8px]'>
						<div className='py-[16px] px-[20px] w-full border border-[rgba(230,230,230,1)]'>
							<h2 className='text-[rgba(26,26,26,1)] text-[16px] font-medium font-["Poppins"]'>Account Settings</h2>
						</div>
						<div className='w-full p-[24px] grid grid-cols-3 max-[980px]:grid-cols-1  gap-[30px]'>
							<div className='col-span-2 max-[980px]:col-span-1 max-[980px]:row-start-2'>
								<form>
									<label htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											First namex
										</p>
										<input
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='Dianne'
										/>
									</label>
									<label htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Last Name
										</p>
										<input
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='Russell'
										/>
									</label>
									<label htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Email
										</p>
										<input
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='email'
											placeholder='dianne.russell@gmail.com'
										/>
									</label>
									<label htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Phone Number
										</p>
										<input
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='tel'
											placeholder='(603) 555-0123'
										/>
									</label>
									<button className='w-[170px max-[500px]:w-full max-[500px]:col-span-4 rounded-[40px] bg-[rgba(0,178,7,1)] px-[32px] py-[14px] text-[rgba(255,255,255,1)] text-[14px] font-semibold font-["Poppins"] mt-[10px]'>
										Save Changes
									</button>
								</form>
							</div>
							<div className='flex items-center justify-center max-[980px]:row-start-1 flex-col gap-[20px]'>
								<img src='brat.png' alt='' />
									<Link>
									<div className='w-[180px] flex items-center justify-center border-2 border-[rgba(0,178,7,1)] py-[14px] px-[32px] rounded-[40px]'>
										<p className='text-[rgba(0,178,7,1)] text-[14px] font-semibold font-["Poppins"]'>
											Chose Image
										</p>
									</div>
									</Link>
							</div>
						</div>
					</div>

					<div className='w-full border mb-[24px] border-[rgba(230,230,230,1)] rounded-[8px]'>
						<div className='py-[16px] px-[20px] w-full border border-[rgba(230,230,230,1)]'>
							<h2 className='text-[rgba(26,26,26,1)] text-[16px] font-medium font-["Poppins"]'>Billing Address</h2>
						</div>
						<div className='w-full p-[24px]'>
							<div className='w-full'>
								<form className='grid grid-cols-3 gap-[20px]'>
									<label className='max-[890px]:col-span-4' htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											First namex
										</p>
										<input
											className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='Dianne'
										/>
									</label>
									<label className='max-[890px]:col-span-4' htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Last Name
										</p>
										<input
											className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='Russell'
										/>
									</label>
									<label className='max-[890px]:col-span-4' htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Company Name
										</p>
										<input
											className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='Zakirsoft'
										/>
									</label>
									<label
										className='col-span-3 max-[890px]:col-span-4'
										htmlFor=''
									>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Street Address
										</p>
										<input
											className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='4140 Par|'
										/>
									</label>
									<label className='max-[890px]:col-span-4' htmlFor=''>
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
									<label className='max-[890px]:col-span-4' htmlFor=''>
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
									<label className='max-[890px]:col-span-4' htmlFor=''>
										<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
											Zip Code
										</p>
										<input
											className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type='text'
											placeholder='20033'
										/>
									</label>
									<div className='col-span-3 max-[890px]:col-span-4 flex items-center max-[890px]:flex-col gap-[20px]'>
										<label className='w-full max-[890px]:col-span-4' htmlFor=''>
											<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
												Email
											</p>
											<input
												className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
												type='email'
												placeholder='dianne.russell@gmail.com'
											/>
										</label>
										<label className='w-full max-[890px]:col-span-4' htmlFor=''>
											<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
												Phone Number
											</p>
											<input
												className='max-[450px]:py-[10px] py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
												type='tel'
												placeholder='(603) 555-0123'
											/>
										</label>
									</div>
									<button className='w-[170px] max-[500px]:w-full max-[500px]:col-span-4 rounded-[40px] bg-[rgba(0,178,7,1)] px-[32px] py-[14px] text-[rgba(255,255,255,1)] text-[14px] font-semibold font-["Poppins"] mt-[10px]'>
										Save Changes
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className='w-full border mb-[24px] border-[rgba(230,230,230,1)] rounded-[8px]'>
						<div className='py-[16px] mb-[24px] px-[20px] w-full border-b border-[rgba(230,230,230,1)]'>
							<h2 className='text-[rgba(26,26,26,1)] text-[16px] font-medium font-["Poppins"]'>Billing Address</h2>
						</div>
						<form className='m-[24px]'>
							<label className='col-span-4' htmlFor='current-password'>
								<div className='relative'>
									<input
										id='current-password'
										className='max-[450px]:py-[10px] mb-[16px] flex items-center  py-[14px] px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
										type={showCurrent ? 'text' : 'password'}
										placeholder='••••••••'
									/>
									<span
										onClick={() => setShowCurrent(!showCurrent)}
										className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500'
									>
										{showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
									</span>
								</div>
							</label>

							<div className='flex items-center col-span-4 max-[500px]:flex-col max-[500px]:gap-0 gap-[20px]'>
								<label className='col-span-2 w-full' htmlFor='new-password'>
									<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
										New Password
									</p>
									<div className='relative'>
										<input
											id='new-password'
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] flex items-center  px-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type={showNew ? 'text' : 'password'}
											placeholder='••••••••'
										/>
										<span
											onClick={() => setShowNew(!showNew)}
											className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500'
										>
											{showNew ? <EyeOff size={18} /> : <Eye size={18} />}
										</span>
									</div>
								</label>

								<label className='col-span-2 w-full' htmlFor='confirm-password'>
									<p className='text-[14px] mb-[6px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
										Confirm Password
									</p>
									<div className='relative'>
										<input
											id='confirm-password'
											className='max-[450px]:py-[10px] mb-[16px] py-[14px] px-[16px] flex items-center border border-[rgba(230,230,230,1)] rounded-[6px] w-[100%]'
											type={showConfirm ? 'text' : 'password'}
											placeholder='••••••••'
										/>
										<span
											onClick={() => setShowConfirm(!showConfirm)}
											className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500'
										>
											{showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
										</span>
									</div>
								</label>
							</div>

							<button className='w-[170px] max-[500px]:w-full rounded-[40px] bg-[rgba(0,178,7,1)] px-[32px] py-[14px] text-[rgba(255,255,255,1)] text-[14px] font-semibold font-["Poppins"] mt-[10px]'>
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Settings
