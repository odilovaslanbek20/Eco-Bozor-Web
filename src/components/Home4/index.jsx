import ProductsSwiper from '../Categories/ProductSwiper'
import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1'
import Hero4 from '../Hero/Hero4'
import HeroBar from '../Hero/HeroBar'
import Latest from '../Latest/Latest'
import Menubar3 from '../Menu/Menubar3'
import Navbar from '../Navbar/Navbar'
import Milk from './Milk'
import Month from './Month'
import Products4 from './Populiar'
import Vidio from './Vidio'

function Home4() {
	return (
		<>
			<Header1 />
			<Navbar />
			<Menubar3 />
			<Hero4/>
			<HeroBar/>
			<Products4 />
			<div className="my-[50px]">
			<Milk/>
			</div>
			<Month/>
			<ProductsSwiper />
			<Client/>
			<div className="mt-[30px]">
			<Vidio/>
			</div>
			<div className='my-[60px]'>
				<Latest />
			</div>
			<Cols />
			<Footer />
		</>
	)
}

export default Home4
