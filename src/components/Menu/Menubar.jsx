import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from "react-icons/fa6";

function Menubar() {
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
			{ label: 'Blog', to: '/blog' },
			{ label: 'Blog List', to: '/blogList' },
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
		<section className='bg-[rgba(51,51,51,1)]'>
			<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] py-[24px]'>
				<nav className='flex items-center justify-between'>
					<FaBars onClick={() => setMenu(true)} className='text-[20px] text-[#d5d5d5] min-[680px]:hidden' />
						<div className={`${menu ? "max-[680px]:left-0" : "max-[680px]:left-[-100%]"} max-[680]:left-[-100%] flex gap-[20px] relative max-[680px]:flex-col max-[680px]:justify-start max-[680px]:fixed max-[680px]:w-[300px] max-[680px]:h-screen max-[680px]:z-50 max-[680px]:bg-[#000]/70 max-[680px]:backdrop-blur-2xl max-[680px]:px-[30px] max-[680px]:p-[40px]  max-[680px]:top-0 max-[680px]:transition-all max-[680px]:items-start`}>
						 <FaXmark onClick={() => setMenu(false)} className='text-[25px] max-[680px]:top-[15px] max-[680px]:right-[18px] max-[680px]:absolute text-[#d5d5d5] min-[680px]:hidden'/>
							{['Home', 'Shop', 'Page', 'Blog'].map((menu, i) => (
								<div className='relative' key={i}>
									<div
										onClick={() => toggleDropdown(menu)}
										className='cursor-pointer flex items-center gap-[3px]'
									>
										<span className='text-[14px] font-medium font-["Poppins"] text-[#d5d5d5]'>
											{menu}
										</span>
										<IoMdArrowDropdown
											className={`${
												activeDropdown === menu ? 'rotate-[180deg]' : 'rotate-0'
											} text-[#fff] transition-all text-[20px]`}
										/>
									</div>
									{activeDropdown === menu && renderDropdown(menu)}
								</div>
							))}

							<Link to="/about" className='text-[14px] font-medium font-["Poppins"] text-[#d5d5d5]'>
								About Us
							</Link>
							<Link to="/contact" className='text-[14px] font-medium font-["Poppins"] text-[#d5d5d5]'>
								Contact
							</Link>
						</div>

					<div className='flex items-center gap-[3px]'>
						<FiPhoneCall className='text-[18px] text-white' />
						<a
							className='text-white text-[14px] font-["Poppins"] font-medium'
							href='tel:(219) 555-0114'
						>
							(219) 555-0114
						</a>
					</div>
				</nav>
			</div>
		</section>
	)
}

export default Menubar
