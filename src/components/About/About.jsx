import Client from '../Client /Client'
import Cols from '../Cols/Cola'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1'
import Barr from '../Menu/Barr'
import Menubar1 from '../Menu/Menubar1'
import Navbar from '../Navbar/Navbar'
import Our1 from '../Our/Our1'
import AboutCards2 from './AboutCards'
import AboutCards from './AboutPages'

function About() {
	return (
		<>
			<Header1 />
			<Navbar />
			<Menubar1 />
			<Barr />
			<AboutCards />
			<div className="my-[80px]">
			<AboutCards2/>
			</div>
			<div className="pt-[60px] pb-[50px] bg-[#f7f7f7]">
			<Our1/>
			</div>
			<div className="mt-[-60px]">
			<Client/>
			</div>
			<Cols/>
			<Footer />
		</>
	)
}

export default About
