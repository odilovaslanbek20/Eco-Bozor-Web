function Information1() {
	return (
		<section className="max-w-[1320px] mx-auto my-8 flex max-[1000px]:flex-col max-[1000px]:gap-[50px] max-[1100px]:gap-[100px] max-[1200px]:gap-[200px] items-start justify-between gap-[271px] ">
			<div className="w-full w-[513px]">
				<div className="space-y-3">
					{[
						{ label: 'Weight', value: '03' },
						{ label: 'Color', value: 'Green' },
						{ label: 'Type', value: 'Organic' },
						{ label: 'Category', value: 'Vegetables' },
						{ label: 'Stock Status', value: 'Available (5,413)' },
					].map((item, idx) => (
						<div className='flex items-center gap-[30px]' key={idx}>
							<span className="text-sm font-poppins text-[#1A1A1A] font-normal">
								{item.label}:
							</span>
							<p className="text-sm font-poppins text-[#666666] font-normal">
								{item.value}
							</p>
						</div>
					))}
				</div>
				<div className="mt-4 flex flex-wrap items-center gap-2">
					<span className="text-sm font-poppins font-normal text-[#1A1A1A]">
						Tag:
					</span>
					{['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green Cabbage'].map((tag, idx) => (
						<span
							key={idx}
							className="group relative cursor-pointer text-sm font-poppins font-normal text-[#808080] transition-all"
						>
							{tag}
							<div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></div>
						</span>
					))}
				</div>
			</div>
			<div className="w-full">
				<iframe
					className="w-full h-[250px] md:h-[350px] lg:w-[536px] lg:h-[300px] rounded-md"
					src="https://www.youtube.com/embed/kixnrl8UUwQ?si=DSUDog-fu-RJhDyr"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>

				<div className="mt-5 flex flex-wrap gap-5 border border-[#E5E5E5] rounded-md p-5">
					{[1, 2].map((_, idx) => (
						<div key={idx} className="flex items-center gap-3 w-full md:w-auto">
							<img src={idx === 0 ? 'tag.svg' : 'tag1.svg'} alt="tag img" className="w-8 h-8" />
							<div>
								<span className="text-sm font-poppins font-medium text-[#1A1A1A]">
									64% Discount
								</span>
								<p className="text-xs font-poppins text-[#808080] mt-1">
									Save your 64% money with us
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Information1
