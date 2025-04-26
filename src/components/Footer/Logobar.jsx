import { Link } from 'react-router-dom'

function Logobar() {
	return (
		<>
		  <div className="max-w-[1320px] m-auto max-[1360px]:mx-[20px] grid grid-cols-11 items-center max-[500px]:py-[30px] py-[60px] gap-[20px] max-[1000px]:grid-cols-9 max-[700px]:grid-cols-7 max-[500px]:grid-cols-5 max-[500px]:gap-[10px]">
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip.svg" alt="logo" />
				</Link>
				 <div className="w-[32px] h-[1px] rotate-[90deg] bg-[rgba(230,230,230,1)]"></div>
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip1.svg" alt="logo" />
				</Link>
				 <div className="w-[32px] h-[1px] rotate-[90deg] bg-[rgba(230,230,230,1)]"></div>
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip2.svg" alt="logo" />
				</Link>
				 <div className="w-[32px] max-[500px]:hidden h-[1px] rotate-[90deg] bg-[rgba(230,230,230,1)]"></div>
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip3.svg" alt="logo" />
				</Link>
				 <div className="w-[32px] max-[700px]:hidden max-[500px]:block h-[1px] rotate-[90deg] bg-[rgba(230,230,230,1)]"></div>
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip4.svg" alt="logo" />
				</Link>
				 <div className="w-[32px] max-[1000px]:hidden max-[700px]:block h-[1px] rotate-[90deg] bg-[rgba(230,230,230,1)]"></div>
				<Link className='flex items-center justify-start'>
				  <img className='w-[100px]' src="logotip5.svg" alt="logo" />
				</Link>
			</div>
		</>
	)
}

export default Logobar