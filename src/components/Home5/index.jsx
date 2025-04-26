import Cards from '../Categories/Cards'
import Products2 from '../Categories/Products2'
import Top from '../Categories/Top'
import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Footer from '../Footer/Footer'
import Logobar from '../Footer/Logobar'
import Header2 from '../Header/Header2'
import Hero4 from '../Hero/Hero4'
import HeroBar from '../Hero/HeroBar'
import Latest from '../Latest/Latest'
import Best from '../Loyout/Best/Best'
import Menubar from '../Menu/Menubar'
import Navbar from '../Navbar/Navbar'
import Order from './Orders'
import Taplikn from './Taplink'

function Home5() {
	return (
		<>
			<Header2/>
			<Navbar />
			<Menubar />
			<Hero4/>
			<HeroBar/>
			<Products2/>
			<div className="mt-[50px]">
			 <Top/>
			</div>
			<div className="my-[50px]">
			<Order/>
			</div>
			<div className="my-[60px]">
			<Cards/>
			</div>
			<Products2/>
			<div className="">
				<Best />
			</div>
			<div className='my-[60px]'>
				<Latest />
			</div>
			<Client/>
			<div className="br-[rgba(255,255,255,1)] pb-[50px]">
			<Logobar/>
			<Taplikn/>
			</div>
			<Footer />
		</>
	)
}

export default Home5
