import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { FaXmark } from 'react-icons/fa6'
import { HiOutlineXMark } from 'react-icons/hi2'
import { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";

function Navbar1() {
	const [modal, setModal] = useState(false)

	return (
		<>
			<header className='border-b py-[24px] border-[rgba(230,230,230,1)] '>
				<div className="max-w-[1320px] m-auto max-[1360px]:mx-[20px] ">
				<div className='flex items-center justify-between gap-[20px] max-[1010px]:flex-col max-[400px]:gap-[10px]'>
					<Link to='/'>
						<img className='min-w-[183px]' src='Logo1.svg' alt='web logotip' />
					</Link>

					<form className='w-[498px] max-[981px]:max-w-[498px] max-[540px]:w-full h-[45px] pl-[16px] border border-[rgba(230,230,230,1)] rounded-[6px] flex items-center justify-between'>
						<div className='flex items-center gap-[8px] w-full'>
							<IoSearch />
							<input
								className='text-[15px] font-normal font-["Poppins"] outline-none w-full'
								type='text'
								placeholder='Search'
							/>
						</div>
						<button className='w-[98px] h-[45px] rounded-r-[6px] bg-[rgba(0,178,7,1)] text-[14px] font-["Poppins] font-semibold text-[#fff]'>
							Search
						</button>
					</form>

				  <a href="tel:(219) 555-0114" className="flex items-center gap-[12px]">
						<FiPhoneCall className='text-[30px]'/>
						<div className="flex items-start justify-center flex-col">
						<span className='text-[14px] text-[rgba(153,153,153,1)] font-normal font-["Poppins"]'>Customer Services</span>
						<span className='text-[rgba(26,26,26,1)] text-[20px] font-medium font-["Poppins"]'>(219) 555-0114</span>
						</div>
					</a>

				</div>
				</div>
			</header>

			{modal && (
				<div className='w-full h-screen bg-[#000000]/60 fixed z-50 top-0 right-0 transition-all'>
				<div className='w-[456px] max-[480px]:w-full h-screen transition-all bg-[rgba(255,255,255,1)] fixed top-0 right-0 p-[40px] max-[370px]:p-[20px]'>
					<div className='flex items-center justify-between'>
						<h2 className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
							Shopping Card (2)
						</h2>
						<FaXmark onClick={() => setModal(false)} className='text-[25px]' />
					</div>
					<div className='flex items-center justify-between mt-[12px] border-b border-[rgba(230,230,230,1)]'>
						<div className='flex items-center'>
							<img
								className='w-[120px] h-[100px]'
								src='meva2.svg'
								alt='meva img'
							/>
							<div className=''>
								<span className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-normal'>Fresh Indian Orange</span>
								<p className='text-[rgba(128,128,128,1)] text-[14px] font-["Poppins"] font-normal'>
									1 kg x <span className='text-[15px] font-["Poppins"] text-[rgba(26,26,26,1)] font-semibold'>12.00</span>
								</p>
							</div>
						</div>
						<div className='w-[25px] h-[25px] rounded-full border flex items-center justify-center'>
							<HiOutlineXMark className='text-[20px]' />
						</div>
					</div>
					<div className='flex items-center justify-between mt-[12px] border-b border-[rgba(230,230,230,1)]'>
						<div className='flex items-center'>
							<img
								className='w-[120px] h-[100px]'
								src='meva1.svg'
								alt='meva img'
							/>
							<div className=''>
								<span className='text-[rgba(128,128,128,1)] text-[14px] font-["Poppins"] font-normal'>Green Apple</span>
								<p className='text-[rgba(26,26,26,1)] text-[14px] font-["Poppins"] font-normal'>
									1 kg x <span className='text-[15px] font-["Poppins"] text-[rgba(26,26,26,1)] font-semibold'>14.00</span>
								</p>
							</div>
						</div>
						<div className='w-[25px] h-[25px] rounded-full border flex items-center justify-center'>
							<HiOutlineXMark className='text-[20px]' />
						</div>
					</div>
				</div>
			</div>
			)}
		</>
	)
}

export default Navbar1
