import { Link, useLocation } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa6'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdOutlineSettings } from 'react-icons/md'
import { IoLogInOutline } from 'react-icons/io5'
import userData from './user'
import { FaBars } from 'react-icons/fa6'
import { useState } from 'react'
import { FaXmark } from "react-icons/fa6";

function Order() {
	const location = useLocation()
	const currentPath = location.pathname
	const [modal, setModal] = useState(false)

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
				<div className={`min-w-[312px] max-[1050px]:min-w-[250px] max-[981px]:min-w-[200px] h-auto border border-[rgba(230,230,230,1)] rounded-[8px] max-[770px]:fixed max-[770px]:top-0 ${modal ? "max-[770px]:left-0" : "max-[770px]:left-[-100%]"} max-[770px]:bg-[#fff] max-[770px]:p-[20px] max-[770px]:w-[300px] max-[770px]:h-screen max-[770px]:rounded-none transition-all`}>
					<h2 className='text-[20px] max-[770px]:hidden w-full px-[20px] py-[16px] text-[rgba(26,26,26,1)] font-medium font-["Poppins"]'>
						Navigation
					</h2>

					<FaXmark onClick={() => setModal(false)} className='text-[25px] min-[770px]:hidden absolute top-[10px] right-[15px]'/>
					<div className='mt-[30px]'>
						<Link to='/dashboard' className={getLinkClass('/dashboard')}>
							<MdDashboard className={getIconClass('/dashboard')} />
							<p className={getTextClass('/dashboard')}>Dashboard</p>
						</Link>

						<Link
							to='/history'
							className={getLinkClass('/history')}
						>
							<RiHistoryFill className={getIconClass('/history')} />
							<p className={getTextClass('/history')}>Order History</p>
						</Link>

						<Link to="/wishlist" className={getLinkClass('/wishlist')}>
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
					<div className='grid grid-cols-2 gap-[24px] max-[550px]:grid-cols-1'>

						<div className='border border-[rgba(230,230,230,1)] col-span-2 max-[550px]:col-span-1 bg-white w-full px-[24px] py-[16px] max-[330px]:px-[15px] rounded-[8px]'>
							<div className='flex items-center justify-between gap-[40px] max-[350px]:gap-[20px] mb-4'>
								<h2 className='text-[20px] font-medium font-["Poppins"] max-[410px]:text-center'>
									Recent Order History
								</h2>
							</div>
							<div className='overflow-x-auto h-[742px] max-[914px]:hidden'>
								<table className='min-w-full text-left'>
									<thead className="bg-[rgba(242,242,242,1)] text-gray-700 text-[14px] font-medium font-['Poppins']">
										<tr>
											<th className='px-4 py-2'>ID</th>
											<th className='px-4 py-2'>Date</th>
											<th className='px-4 py-2'>Total</th>
											<th className='px-4 py-2'>Status</th>
											<th className='px-4 py-2'>Actions</th>
										</tr>
									</thead>
									<tbody className="text-[14px] text-gray-600 font-['Poppins']">
										{userData?.map(user => (
											<tr key={user?.id} className='border-b'>
												<td className='px-4 py-3'># {user?.id}</td>
												<td className='px-4 py-3'>{user?.date}</td>
												<td className='px-4 py-3'>{user?.total}</td>
												<td className='px-4 py-3 text-yellow-600'>
													{user?.status}
												</td>
												<td className='px-4 py-3 text-blue-600 cursor-pointer hover:underline'>
													<Link to="/details">View Details</Link>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<div className='max-[914px]:block hidden space-y-4 overflow-auto h-[500px]'>
								{userData?.map(user => (
									<div
										key={user?.id}
										className='bg-white shadow p-4 rounded-lg border'
									>
										<p className='text-gray-700 font-semibold'># {user?.id}</p>
										<p>
											<span className='font-medium'>Date:</span> {user?.date}
										</p>
										<p>
											<span className='font-medium'>Total:</span> {user?.total}
										</p>
										<p className='text-yellow-600'>
											<span className='font-medium text-gray-600'>Status:</span>
											{user?.status}
										</p>
										<Link
										  to="/details"
											className='text-blue-600 hover:underline text-sm mt-2 inline-block'
										>
											View Details
										</Link>
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

export default Order
