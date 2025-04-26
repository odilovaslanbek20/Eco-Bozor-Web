import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function Information() {
	const arr = [
		'100 g of fresh leaves provides.',
		'Aliquam ac est at augue volutpat elementum.',
		'Quisque nec enim eget sapien molestie.',
		'Proin convallis odio volutpat finibus posuere.',
	]
	return (
		<>
			<section className='max-w-[1320px] max-[900px]:flex-col m-auto my-[32px] flex items-start max-[1100px]:gap-[50px] gap-[136px]'>
				<div className='max-[900px]:order-2'>
					<p className='text-[14px] font-["Poppins"] font-normal leading-[150%] text-[rgba(128,128,128,1)]'>
						Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
						posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
						vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
						porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
						Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
						Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
						scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
						commodo quis, egestas elementum leo. Donec convallis mollis enim.
						Aliquam id mi quam. Phasellus nec fringilla elit.
					</p>

					<p className='text-[14px] mt-[15px] font-["Poppins"] font-normal leading-[150%] text-[rgba(128,128,128,1)]'>
						Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
						iaculis, metus faucibus elementum tincidunt, turpis mi viverra
						velit, pellentesque tristique neque mi eget nulla. Proin luctus
						elementum neque et pharetra.{' '}
					</p>

					<div className='mt-[10px]'>
						{arr?.map((text, index) => (
							<FormGroup key={index}>
								<FormControlLabel
									className='text-[rgba(128,128,128,1)] text-[14px] font-["Poppins"] font-normal'
									control={<Checkbox defaultChecked />}
									label={text}
								/>
							</FormGroup>
						))}
					</div>

					<p className='text-[14px] mt-[15px] font-["Poppins"] font-normal leading-[150%] text-[rgba(128,128,128,1)]'>
						Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
						blandit eros non turpis lobortis iaculis at ut massa.{' '}
					</p>
				</div>
				<div className='max-[900px]:order-1 w-full'>
					<iframe
						className='w-[536px] max-[900px]:w-full max-[900px]:h-[380px] max-[990px]:w-[450px] h-[300px]'
						src='https://www.youtube.com/embed/kixnrl8UUwQ?si=DSUDog-fu-RJhDyr'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
					<div className="border flex-wrap mt-[20px] border-[rgba(229,229,229,1)] flex items-center gap-[22px] py-[24px] px-[20px] rounded-[6px]">
						<div className="flex items-center gap-[12px]">
							<img className='w-[32px] h-[32px]' src="tag.svg" alt="tag img" />
							<div className="">
								<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>64% Discount</span>
								<p className='text-[13px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)] mt-[6px]'>Save your 64% money with us</p>
							</div>
						</div>
						<div className="flex items-center gap-[12px]">
							<img className='w-[32px] h-[32px]' src="tag1.svg" alt="tag img" />
							<div className="">
								<span className='text-[14px] font-["Poppins"] font-medium text-[rgba(26,26,26,1)]'>64% Discount</span>
								<p className='text-[13px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)] mt-[6px]'>Save your 64% money with us</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Information
