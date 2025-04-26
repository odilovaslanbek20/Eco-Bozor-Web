import Order from '../Account/History'
import Cols from '../Cols/Cola'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1'
import Barr from '../Menu/Barr'
import Menubar1 from '../Menu/Menubar1'
import Navbar from '../Navbar/Navbar'

function Index3() {
	return (
		<>
			<Header1 />
			<Navbar />
			<Menubar1 />
			<Barr />
			<Order />
			<Cols/>
			<Footer />
		</>
	)
}

export default Index3
