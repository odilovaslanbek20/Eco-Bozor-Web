import Cards from '../Categories/Cards'
import Categories from '../Categories/Categories'
import Hot from '../Categories/Hot'
import Products from '../Categories/Products'
import Products2 from '../Categories/Products2'
import Chegirma from '../Chegirma/Chegirma'
import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Follow from '../Footer/Follow'
import Footer from '../Footer/Footer'
import Logobar from '../Footer/Logobar'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import HeroBar from '../Hero/HeroBar'
import Latest from '../Latest/Latest'
import Menubar from '../Menu/Menubar'
import Navbar from '../Navbar/Navbar'

function Home() {
	return (
		<>
		  <Header/>
     <Navbar/>
     <Menubar/>
		 <Hero/>
		 <HeroBar/>
		 <Categories/>
		 <Products/>
		 <Cards/>
		 <Hot/>
		 <Chegirma/>
		 <Products2/>
		 <Latest/>
		 <Client/>
		 <Logobar/>
		 <Follow/>
		 <Cols/>
     <Footer/>
		</>
	)
}

export default Home