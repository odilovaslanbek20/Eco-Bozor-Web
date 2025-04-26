import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { FaCaretRight } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaRegUser } from 'react-icons/fa'

function Menubar3() {
	const [menu, setMenu] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)

	const toggleDropdown = menu => {
		setActiveDropdown(activeDropdown === menu ? null : menu)
	}

	const dropdownData = {
		Home: [
			{ label: 'Home', to: '/' },
			{ label: 'Layout', to: '/layout' },
			{ label: 'Home 2', to: '/home2' },
			{ label: 'Home 4', to: '/home4' },
			{ label: 'Home 5', to: '/home5' },
		],
		Shop: [
			{ label: 'Shopping', to: '/shopping' },
			{ label: 'Vegetables', to: '/vegetables' },
			{ label: 'Shopping 2', to: '/shop2' },
		],
		Page: [
			{ label: 'Page 1', to: '/page1' },
			{ label: 'Page 2', to: '/page2' },
			{ label: 'Page 3', to: '/page3' },
		],
		Blog: [
			{ label: 'Blog 1', to: '/blog1' },
			{ label: 'Blog 2', to: '/blog2' },
			{ label: 'Blog 3', to: '/blog3' },
			{ label: 'Blog 4', to: '/blog4' },
		],
	}

	const renderDropdown = menu => {
		const items = dropdownData[menu] || []
		return (
			<div className='flex items-start justify-start flex-col border border-[rgba(153,153,153,1)] rounded p-[10px] bg-[#000000] min-w-[100px] absolute z-10'>
				{items.map((item, index) => (
					<div className='group transition-all' key={index}>
						<Link
							to={item.to}
							className='text-[rgba(153,153,153,1)] text-[15px] font-["Poppins"] font-medium cursor-pointer'
						>
							{item.label}
						</Link>
						<div className='group-hover:w-full transition-all h-[1px] bg-[rgba(153,153,153,1)] w-0'></div>
					</div>
				))}
			</div>
		)
	}

	return (
		<section className='bg-[rgba(242,242,242,1)]'>
			<div className='max-w-[1320px] flex items-center gap-[25px] max-[600px]:py-[20px] m-auto max-[1360px]:mx-[20px]'>
				<div className='min-w-[312px] cursor-pointer h-full max-[600px]:hidden bg-[rgba(0,178,7,1)] flex items-center'>
					<div className='bg-[rgba(0,178,7,1)] min-w-[64px] h-[64px] flex items-center justify-center'>
						<FaBars className='text-[30px] text-[#fff]' />
					</div>
					<div className='flex items-center justify-between gap-[20px] w-full px-[16px]'>
						<span className='text-[rgba(255,255,255,1)] font-["Poppins"] text-[16px] font-medium'>
							All Categories
						</span>
						<FaCaretRight className='text-[#fff] rotate-[90deg]' />
					</div>
				</div>
				<nav className='flex items-center justify-between w-full'>
					<FaBars
						onClick={() => setMenu(true)}
						className='text-[25px] text-[#3b3b3b] min-[1010px]:hidden'
					/>
					<div
						className={`${
							menu ? 'max-[1010px]:left-0' : 'max-[1010px]:left-[-100%]'
						} max-[1010]:left-[-100%] flex gap-[20px] relative max-[1010px]:flex-col max-[1010px]:justify-start max-[1010px]:fixed max-[1010px]:w-[300px] max-[1010px]:h-screen max-[1010px]:bg-[#000]/70 max-[1010px]:backdrop-blur-2xl max-[1010px]:px-[30px] max-[1010px]:p-[40px] max-[1010px]:z-[9999] max-[1010px]:top-0 max-[1010px]:transition-all max-[1010px]:items-start`}
					>
						<FaXmark
							onClick={() => setMenu(false)}
							className='text-[25px] max-[1010px]:top-[15px] max-[1010px]:right-[18px] max-[1010px]:absolute text-[#d5d5d5] min-[1010px]:hidden'
						/>
						{['Home', 'Shop', 'Page', 'Blog'].map((menu, i) => (
							<div className='relative' key={i}>
								<div
									onClick={() => toggleDropdown(menu)}
									className='cursor-pointer flex items-center gap-[3px]'
								>
									<span className='text-[14px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'>
										{menu}
									</span>
									<IoMdArrowDropdown
										className={`${
											activeDropdown === menu ? 'rotate-[180deg]' : 'rotate-0'
										} text-[rgba(0,178,7,1)] transition-all text-[20px]`}
									/>
								</div>
								{activeDropdown === menu && renderDropdown(menu)}
							</div>
						))}

						<Link
							to='/about'
							className='text-[14px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'
						>
							About Us
						</Link>
						<Link
							to='/contact'
							className='text-[14px] font-medium font-["Poppins"] text-[rgba(0,178,7,1)]'
						>
							Contact
						</Link>
					</div>

					<div className='flex items-center gap-[24px]'>
						<a href="tel:(219) 555-0114" className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>(219) 555-0114</a>
					</div>
				</nav>
			</div>
		</section>
	)
}

export default Menubar3
