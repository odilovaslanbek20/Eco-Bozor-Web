import Cards from '../Categories/Cards'
import Papuliar from '../Categories/Populiar'
import Products1 from '../Categories/PopuliarProduct'
import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Cols1 from '../Cols/Cols1'
import Footer1 from '../Footer/Footer1'
import Logobar from '../Footer/Logobar'
import Header2 from '../Header/Header2'
import Hero2 from '../Hero/Hero2'
import HeroBar from '../Hero/HeroBar'
import Menubar2 from '../Menu/Menubar2'
import Navbar1 from '../Navbar/Navbar1'
import Bgcards from '../Our/Bgcards'
import Our from '../Our/Our'
import Best from './Best/Best'

function Loyout() {
	return (
		<div>
			<Header2/>
			<Navbar1 />
			<Menubar2/>
			<div className="my-[24px]">
				<Hero2 />
			</div>
			<HeroBar/>
			<div className="my-[80px]">
				<Cards />
			</div>
			<div className="mb-[80px]">
				<Papuliar />
			</div>
			<div className="mt-10">
				<Products1 />
			</div>
			<div className="">
				<Best />
			</div>
			<div className="">
				<Bgcards />
			</div>
			<div className="">
				<Our />
			</div>
			<div className="">
				<Client />
			</div>
			<div className="max-w-[1320px] m-auto my-[80px] px-[20px] border border-[rgba(230,230,230,1)]">
				<Logobar />
			</div>
			<Cols1/>
			<div className="">
				<Footer1 />
			</div>
		</div>
	)
}

export default Loyout