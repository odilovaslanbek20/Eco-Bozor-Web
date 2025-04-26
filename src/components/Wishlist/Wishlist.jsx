import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

function Wishlist() {
	return (
		<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mt-[40px] mb-[80px]'>
			<h2 className='text-center font-semibold text-[32px] font-["Poppins"] mb-[32px] text-[rgba(26,26,26,1)]'>
				My Wishlist
			</h2>
			<div className='border border-[rgba(230,230,230,1)] rounded-[8px]'>
				<table className='w-full border-collapse'>
					<thead>
						<tr className='bg-[#f2f2f2] text-left text-[16px] text-[#1a1a1a] font-semibold font-["Poppins"]'>
							<th className='p-4'>Product</th>
							<th className='p-4'>Price</th>
							<th className='p-4'>Stock Status</th>
							<th className='p-4'>Action</th>
							<th className='p-4'></th>
						</tr>
					</thead>
					<tbody>
						<tr className='group border-b border-[rgba(230,230,230,1)] hover:bg-[rgba(250,250,250,1)] transition'>
							<td className='p-4 flex items-center gap-[20px]'>
								<img
									className='w-[80px] h-[80px] object-cover rounded'
									src='meva3.svg'
									alt='Green Capsicum'
								/>
								<p className='text-[16px] font-medium text-[#1a1a1a] font-["Poppins"]'>
									Green Capsicum
								</p>
							</td>
							<td className='p-4 text-[16px] font-["Poppins"] text-[#333]'>
								<span className='text-[#00b207] font-semibold'>$14.99</span>{' '}
								<span className='line-through text-gray-400'>$20.99</span>
							</td>
							<td className='p-4'>
								<span className='bg-[rgba(32,181,38,0.2)] text-[rgba(44,116,47,1)] text-[14px] font-["Poppins"] px-[12px] py-[6px] rounded'>
									In Stock
								</span>
							</td>
							<td className='p-4'>
								<Link className='group w-[146px] h-[46px] rounded-[30px] flex items-center justify-center bg-[rgba(0,178,7,1)] hover:bg-[rgba(242,242,242,1)] transition'>
									<span className='text-[14px] font-semibold text-white group-hover:text-black font-["Poppins"]'>
										Add To Cart
									</span>
								</Link>
							</td>
							<td>
							<div className="w-[25px] h-[25px] rounded-full border flex items-center justify-center">
								  <HiOutlineXMark className='text-[20px]'/>
								</div>
							</td>
						</tr>

						<tr className='group border-b border-[rgba(230,230,230,1)] hover:bg-[rgba(250,250,250,1)] transition'>
							<td className='p-4 flex items-center gap-[20px]'>
								<img
									className='w-[80px] h-[80px] object-cover rounded'
									src='meva3.svg'
									alt='Green Capsicum'
								/>
								<p className='text-[16px] font-medium text-[#1a1a1a] font-["Poppins"]'>
									Green Capsicum
								</p>
							</td>
							<td className='p-4 text-[16px] font-["Poppins"] text-[#333]'>
								<span className='text-[#00b207] font-semibold'>$14.99</span>{' '}
								<span className='line-through text-gray-400'>$20.99</span>
							</td>
							<td className='p-4'>
								<span className='bg-[rgba(32,181,38,0.2)] text-[rgba(44,116,47,1)] text-[14px] font-["Poppins"] px-[12px] py-[6px] rounded'>
									In Stock
								</span>
							</td>
							<td className='p-4'>
								<Link className='group w-[146px] h-[46px] rounded-[30px] flex items-center justify-center bg-[rgba(0,178,7,1)] hover:bg-[rgba(242,242,242,1)] transition'>
									<span className='text-[14px] font-semibold text-white group-hover:text-black font-["Poppins"]'>
										Add To Cart
									</span>
								</Link>
							</td>
							<td>
							<div className="w-[25px] h-[25px] rounded-full border flex items-center justify-center">
								  <HiOutlineXMark className='text-[20px]'/>
								</div>
							</td>
						</tr>

						<tr className='group border-b border-[rgba(230,230,230,1)] hover:bg-[rgba(250,250,250,1)] transition'>
							<td className='p-4 flex items-center gap-[20px]'>
								<img
									className='w-[80px] h-[80px] object-cover rounded'
									src='meva3.svg'
									alt='Green Capsicum'
								/>
								<p className='text-[16px] font-medium text-[#1a1a1a] font-["Poppins"]'>
									Green Capsicum
								</p>
							</td>
							<td className='p-4 text-[16px] font-["Poppins"] text-[#333]'>
								<span className='text-[#00b207] font-semibold'>$14.99</span>
								<span className='line-through text-gray-400'>$20.99</span>
							</td>
							<td className='p-4'>
								<span className='bg-[rgba(32,181,38,0.2)] text-[rgba(44,116,47,1)] text-[14px] font-["Poppins"] px-[12px] py-[6px] rounded'>
									In Stock
								</span>
							</td>
							<td className='p-4'>
								<Link className='group w-[146px] h-[46px] rounded-[30px] flex items-center justify-center bg-[rgba(0,178,7,1)] hover:bg-[rgba(242,242,242,1)] transition'>
									<span className='text-[14px] font-semibold text-white group-hover:text-black font-["Poppins"]'>
										Add To Cart
									</span>
								</Link>
							</td>
							<td>
							<div className="w-[25px] h-[25px] rounded-full border flex items-center justify-center">
								  <HiOutlineXMark className='text-[20px]'/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div className='flex items-center gap-[10px] p-[24px]'>
					<p className='text-[rgba(26,26,26,1)] text-[14px] font-normal font-["Poppins"]'>
						Share:
					</p>
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
			</div>
		</section>
	)
}

export default Wishlist
