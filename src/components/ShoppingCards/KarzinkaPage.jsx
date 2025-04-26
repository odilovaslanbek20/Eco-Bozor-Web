import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

function KarzinkaPage() {
	const [selectedImage, setSelectedImage] = useState('meva3.svg')
  const [count, setCount] = useState(0)
	const images = [
		'meva3.svg',
		'ProductImage.svg',
		'ProductImage1.svg',
		'ProductImage2.svg',
	]

	return (
		<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mt-[24px] max-[1000px]:flex-col flex items-start justify-between gap-[24px]'>
			<div className='w-full flex items-center justify-between max-[650px]:flex-col gap-[20px]'>
				<div className='flex items-center gap-[12px] max-[650px]:w-full max-[650px]:grid max-[650px]:grid-cols-4 flex-col'>
					{images.map((img, index) => (
						<div
							key={index}
							className={`rounded transition-all cursor-pointer ${
								selectedImage === img
									? 'border-1 border-[rgba(0,178,7,1)]'
									: 'border border-[#fff] hover:border-[rgba(0,178,7,1)]'
							}`}
							onClick={() => setSelectedImage(img)}
						>
							<img
								className='w-[80px] h-[90px] max-[418px]:h-auto flex items-center justify-center'
								src={img}
								alt='sabzovat rasmlari'
							/>
						</div>
					))}
				</div>
				<div className='flex items-center justify-center'>
					<img
						className='w-[500px] h-[500px] max-[460px]:h-auto bg-cover'
						src={selectedImage}
						alt='katta sabzovot'
					/>
				</div>
			</div>
			<div className='w-full h-auto'>
				<div className='flex items-center gap-[8px] max-[450px]:flex-col max-[450px]:text-center'>
					<h2 className='text-[36px] leading-[120%] font-["Poppins"] font-semibold text-[rgba(26,26,26,1)]'>
						Chinese Cabbage
					</h2>
					<p className='bg-[rgba(32,181,38,0.2)] rounded text-[14px] font-["Poppins"] font-normal text-[rgba(44,116,47,1)] py-[4px] px-[8px] max-w-[71px]'>
						In Stock
					</p>
				</div>
				<div className='flex items-center gap-[12px] mt-[12px] max-[330px]:flex-col'>
					<div className='flex items-center '>
						<img className='w-[100px]' src='yulduz.svg' alt='yulduz img' />
						<span className='text-[rgba(102,102,102,1)] font-["Poppins"] text-[14px] font-normal px-[4px]'>
							4 Review
						</span>
					</div>
					<p className='text-[14px] text-[rgba(179,179,179,1)] font-["Poppins"] font-medium'>
						{' '}
						•
					</p>
					<div className='flex items-center'>
						<span className='text-[14px] text-[rgba(51,51,51,1)] font-["Poppins"] font-medium'>
							SKU:{' '}
							<span className='text-[rgba(102,102,102,1)] font-normal'>
								2,51,594
							</span>
						</span>
					</div>
				</div>
				<div className='mt-[20px] flex items-center gap-[12px] max-[330px]:justify-center'>
					<div className='flex items-center gap-[4px]'>
						<p
							className='text-[rgba(179,179,179,1)] text-[20px] font-normal font-["Poppins"] line-through
'
						>
							$48.00
						</p>
						<p className='text-[rgba(44,116,47,1)] text-[24px] font-medium font-["Poppins"]'>
							$17.28
						</p>
					</div>
					<div className='w-[74px] h-[27px] flex items-center justify-center bg-[rgba(234,75,72,0.1)] rounded-[30px]'>
						<p className='text-[rgba(234,75,72,1)] text-[14px] font-medium font-["Poppins"]'>
							64% Off
						</p>
					</div>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className='flex items-center justify-between max-[460px]:flex-col gap-[20px] flex-wrap'>
					<div className='flex items-center gap-[8px]'>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
							Brand:
						</p>
						<img src='bariglogo.svg' alt='barig' />
					</div>
					<div className='flex items-center gap-[10px]'>
						<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>Share item:</p>
						<div className='flex items-center gap-[8px]'>
							<div className='group w-[40px] transition-all h-[40px] rounded-full bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer'>
								<FaFacebookF className='text-[#fff] transition-all' />
							</div>
							<div className='group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer'>
								<FaTwitter className='group-hover:text-[#fff] transition-all' />
							</div>
							<div className='group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer'>
								<FaPinterestP className='group-hover:text-[#fff] transition-all' />
							</div>
							<div className='group w-[40px] transition-all h-[40px] rounded-full hover:bg-[rgba(0,178,7,1)] flex items-center justify-center cursor-pointer'>
								<FaInstagram className='group-hover:text-[#fff] transition-all' />
							</div>
						</div>
					</div>
					<p className='text-[14px] max-[460px]:text-center text-[rgba(128,128,128,1)] font-["Poppins"] font-normal '>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className="w-full flex items-center justify-between max-[460px]:flex-wrap gap-[12px]">
           <div className="min-w-[124px] h-[50px] flex items-center justify-around rounded-[30px] bg-[rgba(255,255,255,1)] border border-[rgba(229,229,229,1)]">
						 <div className='w-[34px] h-[34px] cursor-pointer rounded-full bg-[rgba(242,242,242,1)] flex items-center justify-center' onClick={() => setCount(count + 1)}><FaPlus/></div>
						 <p className='text-[16px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>{count}</p>
						 <div className='w-[34px] h-[34px] cursor-pointer rounded-full bg-[rgba(242,242,242,1)] flex items-center justify-center' onClick={() => count === 0 ? setCount(count) : setCount(count - 1)} ><FaMinus/></div>
					 </div>

					 <Link className='w-full max-[460px]:order-3'>
					   <div className="w-full h-[50px] bg-[rgba(0,178,7,1)] rounded-[30px] flex items-center justify-center gap-[16px]">
							  <p className='font-["Poppins"] text-[#fff] text-[16px] font-semibold'>Add to Cart</p>
								<MdOutlineShoppingCart className='text-[#fff] text-[20px]'/>
						 </div>
					 </Link>

					 <div className="min-w-[52px] cursor-pointer max-[460px]:order-2 h-[52px] bg-[rgba(32,181,38,0.1)] rounded-full flex items-center justify-center">
						<FaRegHeart className='text-[20px] text-[rgba(44,116,47,1)] '/>
					 </div>
				</div>
				<hr className='text-[rgba(229,229,229,1)] my-[20px]' />
				<div className="w-full">
           <span className='text-[14px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>Category: <span className='text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] '>Vegetables</span></span>
					 <div className="flex items-center flex-wrap gap-[6px] mt-[12px]">
						 <span className='text-[14px] font-medium font-["Poppins"] text-[rgba(26,26,26,1)]'>Tag:</span>
						 <span className='group transition-all text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] cursor-pointer'>
							Vegetables
							 <div className="w-0 h-[1px] bg-[#000] transition-all group-hover:w-full"></div>
							</span>
						 <span className='group transition-all text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] cursor-pointer'>
							Healthy
							 <div className="w-0 h-[1px] bg-[#000] transition-all group-hover:w-full"></div>
							</span>
						 <span className='group transition-all text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] cursor-pointer'>
							Chinese
							 <div className="w-0 h-[1px] bg-[#000] transition-all group-hover:w-full"></div>
							</span>
						 <span className='group transition-all text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] cursor-pointer'>
							Cabbage
							 <div className="w-0 h-[1px] bg-[#000] transition-all group-hover:w-full"></div>
							</span>
						 <span className='group transition-all text-[14px] font-normal font-["Poppins"] text-[rgba(128,128,128,1)] cursor-pointer'>
							Green Cabbage
							 <div className="w-0 h-[1px] bg-[#000] transition-all group-hover:w-full"></div>
							</span>
					 </div>
				</div>
			</div>
		</section>
	)
}

export default KarzinkaPage
