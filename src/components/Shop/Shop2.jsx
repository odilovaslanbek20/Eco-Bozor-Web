import Cols from '../Cols/Cola'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Barr2 from '../Menu/Barr2'
import Menubar from '../Menu/Menubar'
import Navbar from '../Navbar/Navbar'
import Shop2 from '../ShoppingCards/Shop2'
import HeroShop from '../ShoppingCards/ShopHero'

function Shop3() {
	return (
		<>
			<Header />
			<Navbar />
			<Menubar />
			<Barr2 />
			<HeroShop/>
			<Shop2/>
			<Cols/>
			<Footer />
		</>
	)
}

export default Shop3
