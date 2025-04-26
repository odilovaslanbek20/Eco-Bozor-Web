import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import dataCategories from './category'

function Papuliar() {
	return (
		<>
		  <section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] mb-[50px]'>
				<div className="">
					<div className="flex items-center justify-center flex-col mb-[30px]">
					<span className='text-[rgba(0,178,7,1)] uppercase text-[14px] font-medium'>Category</span>
					<h1 className='text-[rgba(26,26,26,1)] text-[32px] font-["Poppins"] font-semibold max-[520px]:text-[30px] max-[470px]:text-[25px] text-center'>Shop by Top Categories</h1>
					</div>
					<div className="grid grid-cols-6 gap-[24px] max-[1180px]:gap-[20px] max-[360px]:gap-[15px] max-[1154px]:grid-cols-5 max-[965px]:grid-cols-4 max-[760px]:grid-cols-3 max-[551px]:grid-cols-2">
						{dataCategories?.categories?.map((card) => {
							return (
								<div key={card?.id} className="group border-1 cursor-pointer transition-all hover:shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] hover:border-[rgba(44,116,47,1)] border-[rgba(230,230,230,1)] flex items-center justify-center flex-col rounded-[5px] pt-[16px] pb-[24px] px-[5px]">
                   <img className='mb-[16px]' src={card?.images} alt="cards img" />
									 <h2 className='text-center group-hover:text-[rgba(44,116,47,1)] text-[rgba(26,26,26,1)] max-[400px]:text-[16px] max-[345px]:text-[14px] text-[18px] font-["Poppins"] font-medium'>{card?.title}</h2>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}

export default Papuliar