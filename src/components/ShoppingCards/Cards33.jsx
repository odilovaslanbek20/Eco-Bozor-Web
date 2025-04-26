import { useState } from "react";
import Cols from '../Cols/Cola';
import Information from '../Information/Index';
import Information1 from '../Information/index1';
import Information2 from '../Information/index2';

function Cards33() {
	const [activeTab, setActiveTab] = useState("description");

	const tabs = [
		{ id: "description", label: "Descriptions" },
		{ id: "additional", label: "Additional Information" },
		{ id: "feedback", label: "Customer Feedback" },
	];

	return (
		<section className='my-[50px] max-w-[1320px] max-[1360px]:mx-[20px] m-auto'>
			<div className="flex items-center justify-center flex-wrap max-[580px]:gap-[20px]">
				{tabs.map((tab) => (
					<div
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className="group cursor-pointer px-[16px]"
					>
						<span
							className={`font-["Poppins"] font-medium text-[16px] ${
								activeTab === tab.id
									? "text-[rgba(32,181,38,1)]"
									: "text-[rgba(26,26,26,1)]"
							}`}
						>
							{tab.label}
						</span>
						<div
							className={`transition-all h-[2px] mt-[16px] ${
								activeTab === tab.id
									? "w-full bg-[rgba(32,181,38,1)]"
									: "w-0 group-hover:w-full bg-[rgba(32,181,38,1)]"
							}`}
						></div>
					</div>
				))}
			</div>

			<hr className='text-[rgba(229,229,229,1)]' />

			<div className="mt-6">
				{activeTab === "description" && <Information />}
				{activeTab === "additional" && <Information1 />}
				{activeTab === "feedback" && <Information2 />}
			</div>
		</section>
	);
}

export default Cards33;
