function Our() {
	const teamMembers = [
		{
			id: 1,
			name: 'Jenny Wilson',
			position: 'Ceo & Founder',
			image: 'bobo.jpg',
		},
		{
			id: 2,
			name: 'Jane Cooper',
			position: 'Worker',
			image: 'oka2.png',
		},
		{
			id: 3,
			name: 'Cody Fisher',
			position: 'Security Guard',
			image: 'akalar.svg',
		},
		{
			id: 4,
			name: 'Robert Fox',
			position: 'Senior Farmer Manager',
			image: 'oka1.png',
		},
	]

	return (
		<>
			<section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px]'>
				<div className='flex items-center justify-center flex-col'>
					<span className='text-[rgba(0,178,7,1)] text-center text-[14px] font-["Poppins"] font-medium'>
						Team
					</span>
					<h2 className='text-[rgba(26,26,26,1)] max-[345px]:text-[25px] text-center text-[36px] font-semibold font-["Poppins"] leading-[120%]'>
						Our Professional Members
					</h2>
				</div>

				<div className='grid grid-cols-4 gap-[24px] max-[400px]:grid-cols-1 max-[1090px]:grid-cols-3 max-[835px]:grid-cols-2 mt-[30px]'>
					{teamMembers.map(member => (
						<div
							key={member.id}
							className='hover:border-none transition-all hover:shadow-[0px_20px_48px_0px_rgba(0,38,3,0.08)] border border-[rgba(230,230,230,1)]'
						>
							<img
								className='w-full h-[280px] object-cover'
								src={member.image}
								alt={member.name}
							/>
							<div className='px-[20px] py-[16px] max-[600px]:px-[15px] max-[600px]:py-[10px]'>
								<span className='text-[rgba(26,26,26,1)] text-[18px] font-["Poppins"] font-medium max-[500px]:text-[16px]'>
									{member.name}
								</span>
								<p className='text-[14px] font-["Poppins"] font-normal text-[rgba(128,128,128,1)] max-[500px]:text-[12px]'>
									{member.position}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Our
