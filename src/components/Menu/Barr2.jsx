import { GoHome } from 'react-icons/go'
import { FaAngleRight } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

function Barr2() {
	const location = useLocation()
	const currentPage =
		location.pathname.split('/').filter(Boolean).pop() || 'Home'

	return (
		<div className='max-[1360px]:mx-[20px] w-full h-auto py-[20px] flex items-center justify-center'>
			<div className='w-full max-w-[1320px] mx-auto flex items-center gap-2 text-black'>
				<GoHome className='text-[25px]' />
				<FaAngleRight className='text-[15px]' />
				<p className='capitalize'>{currentPage}</p>
			</div>
		</div>
	)
}

export default Barr2
