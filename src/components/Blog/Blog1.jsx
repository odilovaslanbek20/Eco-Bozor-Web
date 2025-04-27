import { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { CiUser, CiHome } from 'react-icons/ci'
import { TfiComment } from 'react-icons/tfi'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Blog1() {
	const [modal3, setModal3] = useState(false)

	const categories = [
		'Healthy',
		'Low fat',
		'Vegetarian',
		'Kid foods',
		'Vitamins',
		'Bread',
		'Meat',
		'Snacks',
		'Tiffin',
		'Launch',
		'Dinner',
		'Breackfast',
		'Fruit',
	]

	return (
		<>
			<section className='max-[1360px]:mx-[20px] my-[50px] max-w-[1320px] m-auto'>
				<div className='flex items-start gap-[24px] max-[768px]:flex-col'>
					<div className='max-[768px]:order-2 w-full'>
						<img className='w-full' src='ImageLimon.png' alt='limon' />
						<div className='py-[24px] max-[400px]:flex max-[400px]:items-center max-[400px]:justify-center max-[400px]:flex-col'>
							<span className='flex flex-wrap items-center max-[420px]:justify-center gap-[16px] mb-[8px]'>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<CiHome className='text-[20px] rotate-[-20deg]' />
									Food
								</p>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<CiUser className='text-[20px]' />
									By Admin
								</p>
								<p className='flex items-center gap-[4px] text-[14px] text-[rgba(77,77,77,1)] font-normal font-["Poppins"]'>
									<TfiComment />
									65 Comments
								</p>
							</span>

							<p className='text-[rgba(26,26,26,1)] max-[420px]:text-center max-[420px]:text-[20px] hover:text-[rgba(44,116,47,1)] text-[32px] font-medium font-["Poppins"] max-[910px]:text-[25px]'>
								Maecenas tempor urna sed quam mollis, a placerat dui fringill
								Suspendisse.
							</p>
						</div>
						<div className='my-[24px] flex items-center max-[490px]:justify-center flex-wrap gap-[30px] justify-between'>
							<div className='flex items-center gap-[12px]'>
								<img
									className='w-[50px] h-[50px] rounded-full'
									src='amaki.png'
									alt=''
								/>
								<div className=''>
									<h2 className='text-[16px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
										Cameron Williamson
									</h2>
									<p className='text-[14px] mt-[5px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)]'>
										4 April, 2021 • 6 min read
									</p>
								</div>
							</div>
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
						<hr className='my-[20px] text-[rgba(229,229,229,1)]' />
						<div className=''>
							<h2 className='text-[20px] mb-[16px] max-[768px]:text-center font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
								Maecenas lacinia felis nec placerat sollicitudin. Quisque
								placerat dolor at scelerisque imperdiet. Phasellus tristique
								felis dolor.
							</h2>
							<p className='text-[18px]  max-[768px]:text-[16px] max-[768px]:text-center font-["Poppins"] text-[rgba(128,128,128,1)] font-normal'>
								Maecenas elementum in risus sed condimentum. Duis convallis ante
								ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi
								faucibus vitae orci at euismod. Integer auctor augue in erat
								vehicula, quis fermentum ex finibus.
							</p>

							<p className='text-[18px]  max-[768px]:text-[16px] max-[768px]:text-center mt-[24px] font-["Poppins"] text-[rgba(128,128,128,1)] font-normal'>
								Mauris pretium elit a dui pulvinar, in ornare sapien euismod.
								Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed
								ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo,
								at fermentum turpis. Sed molestie, ligula ut molestie ultrices,
								tellus ligula viverra neque, malesuada consectetur diam sapien
								volutpat risus. Quisque eget tortor lobortis, facilisis metus
								eu, elementum est. Nunc sit amet erat quis ex convallis
								suscipit. ur ridiculus mus.
							</p>
						</div>
						<div className='flex flex-wrap items-center w-full gap-[24px] py-[24px]'>
							<img
								className='block w-full max-w-[424px] flex-shrink-0 object-cover'
								src='zardoli.png'
								alt='zardoli'
							/>
							<img
								className='block w-full max-w-[424px] flex-shrink-0 object-cover'
								src='zardoli.png'
								alt='zardoli'
							/>
						</div>

						<p className='text-[18px] max-[768px]:text-[16px] max-[768px]:text-center font-["Poppins"] text-[rgba(128,128,128,1)] font-normal'>
							Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate
							quis vehicula ut, vestibulum ut mauris. Nullam non felis varius
							dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem
							sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel
							luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper
							nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu
							nec faucibus ultricies.
						</p>
						<div className=''>
							<h2 className='text-[24px] font-["Poppins"] font-medium mb-[16px] mt-[40px] text-[rgba(26,26,26,1)]'>
								Leave a Comment
							</h2>
							<form className='grid grid-cols-2 gap-[16px]'>
								<label className='col-span-1 max-[950px]:col-span-2' htmlFor=''>
									<p className='text-[14px] font-["Poppins"] font-normal mb-[5px] text-[rgba(26,26,26,1)]'>
										Full Name
									</p>
									<input
										className='text-[16px] font-["Poppins"] font-normal py-[14px] px-[16px] outline-none w-full border border-[rgba(230,230,230,1)] text-[rgba(102,102,102,1)]'
										type='text'
										placeholder='Zakir Hossen'
									/>
								</label>
								<label className='col-span-1 max-[950px]:col-span-2' htmlFor=''>
									<p className='text-[14px] font-["Poppins"] font-normal mb-[5px] text-[rgba(26,26,26,1)]'>
										Email
									</p>
									<input
										className='text-[16px] font-["Poppins"] font-normal py-[14px] px-[16px] outline-none w-full border border-[rgba(230,230,230,1)] text-[rgba(102,102,102,1)]'
										type='email'
										placeholder='zakirsoft.20@g|'
									/>
								</label>
								<label className='col-span-2' htmlFor=''>
									<p className='text-[14px] font-["Poppins"] font-normal mb-[5px] text-[rgba(26,26,26,1)]'>
										Message
									</p>
									<input
										className='text-[16px] font-["Poppins"] h-[80px] font-normal py-[14px] px-[16px] outline-none w-full border border-[rgba(230,230,230,1)] text-[rgba(102,102,102,1)]'
										type='text'
										placeholder='Write your comment here…'
									/>
								</label>
								<label className='col-span-2 flex gap-[12px]' htmlFor=''>
									<input
										className='w-[20px] h-[20x] outline-none'
										type='checkbox'
									/>
									<p className='text-[14px] font-["Poppins"] font-normal mb-[5px] text-[rgba(26,26,26,1)]'>
										Save my name and email in this browser for the next time I
										comment.
									</p>
								</label>
								<button className='w-[211px] h-[51px] mt-[10px] bg-[rgba(0,178,7,1)] rounded-[40px] text-[16px] font-["Poppins"] text-[rgba(255,255,255,1)]'>
									Post Comments
								</button>
							</form>
						</div>
						<div className='my-[40px]'>
							<div className=''>
								<h2 className='text-[24px] mb-[24px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium'>
									Comments
								</h2>
								<div className='flex items-start gap-[12px]'>
									<img
										className='w-[40px] h-[40px] rounded-full'
										src='amaqilar.png'
										alt='amaqi'
									/>
									<div className=''>
										<p className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Annette Black
										</p>
										<p className='font-["Poppins"] text-[14px] text-[rgba(102,102,102,1)] font-normal'>
											In a nisi commodo, porttitor ligula consequat, tincidunt
											dui. Nulla volutpat, metus eu aliquam malesuada, elit
											libero venenatis urna, consequat maximus arcu diam non
											diam.
										</p>
									</div>
								</div>
								<hr className='my-[20px] text-[rgba(230,230,230,1)]' />
								<div className='flex items-start gap-[12px]'>
									<img
										className='w-[40px] h-[40px] rounded-full'
										src='amaqilar.png'
										alt='amaqi'
									/>
									<div className=''>
										<p className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Devon Lane
										</p>
										<p className='font-["Poppins"] text-[14px] text-[rgba(102,102,102,1)] font-normal'>
											Quisque eget tortor lobortis, facilisis metus eu,
											elementum est. Nunc sit amet erat quis ex convallis
											suscipit. Nam hendrerit, velit ut aliquam euismod, nibh
											tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed
											scelerisque, est eget aliquam venenatis, est sem tempor
											eros.
										</p>
									</div>
								</div>
								<hr className='my-[20px] text-[rgba(230,230,230,1)]' />
								<div className='flex items-start gap-[12px]'>
									<img
										className='w-[40px] h-[40px] rounded-full'
										src='amaqilar.png'
										alt='amaqi'
									/>
									<div className=''>
										<p className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Jacob Jones
										</p>
										<p className='font-["Poppins"] text-[14px] text-[rgba(102,102,102,1)] font-normal'>
											Vestibulum ante ipsum primis in faucibus orci luctus et
											ultrices posuere cubilia curae.
										</p>
									</div>
								</div>
								<hr className='my-[20px] text-[rgba(230,230,230,1)]' />
								<div className='flex items-start gap-[12px]'>
									<img
										className='w-[40px] h-[40px] rounded-full'
										src='amaqilar.png'
										alt='amaqi'
									/>
									<div className=''>
										<p className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Jane Cooper
										</p>
										<p className='font-["Poppins"] text-[14px] text-[rgba(102,102,102,1)] font-normal'>
											Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh
											bibendum elit, a volutpat arcu dui nec orci. Aenean dui
											odio, ullamcorper quis turpis ac, volutpat imperdiet ex.
										</p>
									</div>
								</div>
								<hr className='my-[20px] text-[rgba(230,230,230,1)]' />
								<div className='flex items-start gap-[12px]'>
									<img
										className='w-[40px] h-[40px] rounded-full'
										src='amaqilar.png'
										alt='amaqi'
									/>
									<div className=''>
										<p className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Darrell Steward
										</p>
										<p className='font-["Poppins"] text-[14px] text-[rgba(102,102,102,1)] font-normal'>
											Nulla molestie interdum ultricies.
										</p>
									</div>
								</div>
								<Link>
									<div className='w-[138px] h-[45px] mt-[40px] border-2 rounded-[30px] flex items-center justify-center border-[rgba(0,178,7,1)]'>
										<p className='text-[14px] font-["Poppins"] font-semibold text-[rgba(0,178,7,1)]'>
											Load More
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='min-w-[424px] max-[470px]:min-w-[100%] max-[768px]:order-1 max-[768px]:w-full  max-[980px]:min-w-[350px]'>
						<div className='mb-[28px]'>
							<form className='border py-[14px] px-[16px] rounded border-[rgba(230,230,230,1)]'>
								<input
									className='text-[14px] font-["Poppins"] text-[rgba(153,153,153,1)]'
									type='text'
									placeholder='Search...'
								/>
							</form>
						</div>
						<hr className='text-[rgba(230,230,230,1)]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Top Categories
							</h2>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Fresh Fruit
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									(134)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Vegetables
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(150)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Cooking
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(54)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Snacks
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(47)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Beverages
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(43)
								</span>
							</div>

							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Beauty & Health
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(38)
								</span>
							</div>
							<div className='flex items-center justify-between mb-[16px]'>
								<span className='font-["Poppins"] text-[14px] text-[rgba(26,26,26,1)] font-normal'>
									Bread & Bakery
								</span>
								<span className='font-["Poppins"] text-[14px] text-[rgba(128,128,128,1)] font-normal'>
									{' '}
									(15)
								</span>
							</div>
						</div>
						<div className='w-full'>
							<div
								onClick={() => setModal3(!modal3)}
								className='cursor-pointer my-[20px] border-t  border-[#dad8d8] py-[20px] flex items-center justify-between w-full'
							>
								<span className='text-[20px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
									Popular Tag
								</span>
								<FaAngleLeft
									className={`${
										modal3 ? 'rotate-90' : '-rotate-90'
									} text-[20px] transition-transform duration-300`}
								/>
							</div>
							{modal3 && (
								<div className='flex items-start flex-wrap gap-[8px]'>
									{categories?.map((text, index) => (
										<div
											key={index}
											tabIndex={0}
											className='bg-[rgba(242,242,242,1)] cursor-pointer group transition-all hover:bg-[rgba(0,178,7,1)] focus:bg-[rgba(0,178,7,1)] rounded-[30px]'
										>
											<p className='group-hover:text-[#fff] group-focus:text-[#fff] py-[6px] px-[16px] text-[14px] font-["Poppins"] font-normal text-[rgba(26,26,26,1)]'>
												{text}
											</p>
										</div>
									))}
								</div>
							)}
						</div>
						<hr className='text-[rgba(230,230,230,1)] my-[20px]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Our Gallery
							</h2>
							<div className='grid grid-cols-4 max-[450px]:grid-cols-3 max-[390px]:grid-cols-2 gap-[8px]'>
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
								<img className='w-full' src='gallery.png' alt='galeriy' />
							</div>
						</div>
						<hr className='text-[rgba(230,230,230,1)] my-[20px]' />
						<div className=''>
							<h2 className='text-[20px] font-["Poppins"] text-[rgba(26,26,26,1)] font-medium my-[20px]'>
								Recently Added
							</h2>
							<div className=''>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Curabitur porttitor orci eget nequ accumsan.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Donec mattis arcu faucibus suscipit viverra.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
								<div className='w-full flex items-center gap-[12px] mb-[16px]'>
									<img src='Image.png' alt='' />
									<div className='w-full'>
										<h2 className='text-[16px] max-[360px]:text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>
											Quisque posuere tempus rutrum. Integer velit ex.
										</h2>
										<span className='text-[14px] font-["Poppins"] font-normal text-[rgba(102,102,102,1)]'>
											📅 Apr 25, 2021
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Blog1
