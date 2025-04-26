import Cards from '../Categories/Cards'
import ProductsSwiper from '../Categories/ProductSwiper'
import ProductsSwiper1 from '../Categories/ProductSwiper1'
import Top from '../Categories/Top'
import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Follow from '../Footer/Follow'
import Footer from '../Footer/Footer'
import Logobar from '../Footer/Logobar'
import Header from '../Header/Header'
import Hero3 from '../Hero/Hero3'
import HeroBar from '../Hero/HeroBar'
import Best from '../Loyout/Best/Best'
import Menubar from '../Menu/Menubar'
import Navbar from '../Navbar/Navbar'

function Home2() {
	return (
		<>
			<Header />
			<Navbar />
			<Menubar />
      <Hero3/>
			<HeroBar />
			<ProductsSwiper />
			<Best />
			<div className="mt-[50px]">
			 <Top/>
			</div>
			<div className='my-[100px] max-[600px]:my-[50px] max-[900px]:my-[70px]'>
				<Cards />
			</div>
       <ProductsSwiper1/>
			<Client />
			<Logobar />
			<Follow />
			<Cols />
			<Footer />
		</>
	)
}

export default Home2
