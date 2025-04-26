import { CiLocationOn } from 'react-icons/ci'
import { FaChevronLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
	const [isLangOpen, setIsLangOpen] = useState(false)
	const [selectedLang, setSelectedLang] = useState('Eng')

	const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
	const [selectedCurrency, setSelectedCurrency] = useState('USD')

	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'ru', label: 'Русский' },
		{ code: 'uz', label: "O'zbek" },
	]

	const currencies = [
		{ code: 'usd', label: 'USD' },
		{ code: 'eur', label: 'EUR' },
		{ code: 'uzs', label: 'UZS' },
	]

	const toggleLangDropdown = () => {
		setIsLangOpen(!isLangOpen)
		setIsCurrencyOpen(false)
	}

	const toggleCurrencyDropdown = () => {
		setIsCurrencyOpen(!isCurrencyOpen)
		setIsLangOpen(false)
	}

	const handleLanguageSelect = lang => {
		setSelectedLang(lang)
		setIsLangOpen(false)
	}

	const handleCurrencySelect = currency => {
		setSelectedCurrency(currency)
		setIsCurrencyOpen(false)
	}

	return (
		<>
			<section className='w-full border-b-1 border-[rgba(230,230,230,1)]'>
				<div className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] py-[12px] flex items-center justify-between max-[630px]:flex-col max-[630px]:gap-[5px]'>
					<div className=''>
						<div className='flex items-center gap-[2px]'>
							<CiLocationOn className='text-[18px]' />
							<p className='text-[12px] text-[rgba(102,102,102,1)] font-normal font-["Poppins"]'>
								Store Location: Lincoln- 344, Illinois, Chicago, USA
							</p>
						</div>
					</div>

					<div className='flex items-center gap-[20px]'>
						<div className='flex items-center gap-[20px] relative'>

							<div className='relative group'>
								<div
									onClick={toggleLangDropdown}
									className='flex items-center gap-[2px] cursor-pointer'
								>
									<div className='font-["Poppins"] font-normal text-[12px] text-[rgba(153,153,153,1)] group-hover:text-[#00B207]'>
										{selectedLang}
									</div>
									<FaChevronLeft
										className={`text-[12px] text-[rgba(153,153,153,1)] rotate-[270deg] group-hover:text-[#00B207] transition-transform ${
											isLangOpen ? 'rotate-[90deg]' : 'rotate-[270deg]'
										}`}
									/>
								</div>

								{isLangOpen && (
									<div className='absolute top-[30px] left-0 bg-white rounded shadow-md border border-gray-200 w-[100px] z-10'>
										{languages.map(lang => (
											<div
												key={lang.code}
												onClick={() => handleLanguageSelect(lang.label)}
												className="px-3 py-2 text-[12px] hover:bg-[#00B207] hover:text-white transition-all cursor-pointer font-['Poppins']"
											>
												{lang.label}
											</div>
										))}
									</div>
								)}
							</div>

							<div className='relative group'>
								<div
									onClick={toggleCurrencyDropdown}
									className='flex items-center gap-[2px] cursor-pointer'
								>
									<div className='font-["Poppins"] font-normal text-[12px] text-[rgba(153,153,153,1)] group-hover:text-[#00B207]'>
										{selectedCurrency}
									</div>
									<FaChevronLeft
										className={`text-[12px] text-[rgba(153,153,153,1)] rotate-[270deg] group-hover:text-[#00B207] transition-transform ${
											isCurrencyOpen ? 'rotate-[90deg]' : 'rotate-[270deg]'
										}`}
									/>
								</div>

								{isCurrencyOpen && (
									<div className='absolute top-[30px] left-0 bg-white rounded shadow-md border border-gray-200 w-[100px] z-10'>
										{currencies.map(currency => (
											<div
												key={currency.code}
												onClick={() => handleCurrencySelect(currency.label)}
												className="px-3 py-2 text-[12px] hover:bg-[#00B207] hover:text-white transition-all cursor-pointer font-['Poppins']"
											>
												{currency.label}
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<hr className='h-[20px] w-[1px] bg-[#cbcaca]' />

						<div className=''>
							<div className='flex items-center gap-[5px]'>
								<Link
									to='/login'
									className='font-["Poppins"] text-[12px] font-normal text-[rgba(102,102,102,1)]'
								>
									Sign In
								</Link>
								<div className='bg-[rgba(102,102,102,1)] w-[1px] h-[16px] rotate-[20deg] text-[12px] font-normal font-["Poppins"]'></div>
								<Link
									to='/register'
									className='font-["Poppins"] text-[12px] font-normal text-[rgba(102,102,102,1)]'
								>
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Header
