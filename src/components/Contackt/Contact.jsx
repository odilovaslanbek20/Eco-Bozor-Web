import { GrLocation } from 'react-icons/gr'
import { MdOutlineMail } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Contact() {
	return (
		<>
			<section className='w-full'>
				<div className='max-w-[1320px] my-[80px] max-[730px]:my-[40px] m-auto max-[730px]:flex-col max-[1360px]:mx-[20px] flex items-start gap-[24px]'>
					<div
						className='w-[372px] max-[730px]:w-full col-span-1 p-[24px] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)]
 rounded-[8px] flex max-[650px]:mb-[30px] items-center justify-center flex-col'
					>
						<Link>
							<div className='w-full p-[24px] border-b border-[rgba(230,230,230,1)] flex items-center justify-center flex-col'>
								<GrLocation className='text-[30px] text-[rgba(44,116,47,1)]' />
								<span className='text-center mt-[20px] text-[16px] font-["Poppins"] leading-[170%] text-[rgba(51,51,51,1)] font-normal'>
									2715 Ash Dr. San Jose, South Dakota 83475
								</span>
							</div>
						</Link>
						<Link>
							<div className='w-full p-[24px] border-b border-[rgba(230,230,230,1)] flex items-center justify-center flex-col'>
								<MdOutlineMail className='text-[35px] text-[rgba(44,116,47,1)]' />
								<span className='text-center mt-[20px] leading-[170%] text-[16px] font-["Poppins"] text-[rgba(51,51,51,1)] font-normal'>
									Proxy@gmail.com Help.proxy@gmail.com
								</span>
							</div>
						</Link>
						<Link>
							<div className='w-full p-[24px] flex items-center justify-center flex-col'>
								<BiPhoneCall className='text-[35px] mb-[20px] text-[rgba(44,116,47,1)]' />
								<a
									className='text-[rgba(51,51,51,1)] text-[16px] font-["Poppins"] font-normal'
									href='tel:(219) 555-0114'
								>
									(219) 555-0114
								</a>
								<a
									className='text-[rgba(51,51,51,1)] text-[16px] font-["Poppins"] font-normal'
									href='tel:(164) 333-0487'
								>
									(164) 333-0487
								</a>
							</div>
						</Link>
					</div>
					<div className='col-span-2 max-[730px]:col-span-1 max-[730px]:max-w-[100%] w-[984px] py-[44px] max-[470px]:px-[20px] px-[50px] h-auto bg-[rgba(255,255,255,1)] shadow-[0px_0px_56px_0px_rgba(0,38,3,0.08)] rounded-[8px]'>
						<h2 className='text-[20px] text-[rgba(26,26,26,1)] max-[470px]:text-center font-["Poppins"] font-semibold'>
							Just Say Hello!
						</h2>
						<p className='text-[rgba(128,128,128,1)] max-[470px]:text-center max-w-[480px] mt-[8px] mb-[24px] text-[14px] font-normal font-["Poppins"]'>
							Do you fancy saying hi to me or you want to get started with your
							project and you need my help? Feel free to contact me.
						</p>
						<div className=''>
							<form className='grid grid-cols-2 gap-[24px]'>
								<input
									className='border col-span-1 max-[880px]:col-span-2 border-[rgba(230,230,230,1)] py-[14px] px-[16px] rounded-[6px]'
									type='text'
									placeholder='Template Cookie'
								/>
								<input
									className='border col-span-1 max-[880px]:col-span-2 border-[rgba(230,230,230,1)] py-[14px] px-[16px] rounded-[6px]'
									type='text'
									placeholder='Template Cookie'
								/>
								<input
									className='border col-span-2 max-[880px]:col-span-2 border-[rgba(230,230,230,1)] py-[14px] px-[16px] rounded-[6px]'
									type='text'
									placeholder='Hello|'
								/>
								<textarea
									className='border h-[84px] col-span-2 border-[rgba(230,230,230,1)] py-[14px] px-[16px] rounded-[6px]'
									type='text'
									placeholder='Subjects'
								/>
								<button className='py-[16px] col-span-1 max-[880px]:col-span-2 px-[40px] text-[16px] font-["Poppins"] text-[rgba(255,255,255,1)] bg-[rgba(0,178,7,1)] rounded-[40px]'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='w-full h-[400px]'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.4078002837565!2d69.19300746668318!3d41.275681399621604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a20a5500d3f%3A0xdc06fc192fd19e70!2z0YPQu9C40YbQsCDQl9Cw0YDQs9Cw0YDQu9C40LogNjAsIDEwMDEyMywg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1745312774029!5m2!1sru!2s'
						allowfullscreen=''
						className='w-full h-full'
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</section>
		</>
	)
}

export default Contact
