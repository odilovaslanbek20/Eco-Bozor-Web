import { FaPlay } from "react-icons/fa";

function Vidio() {
	return (
		<>
		  <section className='max-w-[1320px] m-auto max-[1360px]:mx-[20px] flex items-center justify-center'>
				<div className="flex items-center justify-center h-[700px] max-[600px]:h-[500px] flex-col"
				 style={{
					backgroundImage: `url("amaqilar.png")`,
					width: "100%",
					backgroundRepeat: "no-repeat",
					borderRadius: "20px",
					backgroundPositionX: "center" ,
				 }}
				>
				 <span className='text-[rgba(255,255,255,1)] font-["Poppins"] text-[16px] text-center font-normal'>Video</span>
         <h2 className='text-[rgba(255,255,255,1)] font-["Poppins"] mt-[8px] max-w-[490px] text-center text-[36px] font-semibold max-[390px]:text-[30px]'>We’re the Best Organic Farm in the World</h2>
         <div className="flex items-center justify-center mt-[32px] w-[80px] h-[80px] border rounded-full border-[rgba(255,255,255,1)]">
					<FaPlay className='text-[#fff] text-[25px]'/>
				 </div>
				</div>
			</section>
		</>
	)
}

export default Vidio