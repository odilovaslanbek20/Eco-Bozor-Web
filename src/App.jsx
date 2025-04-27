import { Route, Routes } from 'react-router-dom'
import Login from './pages/admin/Login'
import Register from './pages/admin/Register'
import HomePage from './pages/home'
import Dashboard from './pages/admin/Dashboard'
import OrderPage from './pages/admin/Order'
import Details from './pages/admin/Details'
import List from './pages/about/Wishlist'
import Harid from './pages/about/Shopping'
import Check from './pages/about/Checkout'
import NotPage from './pages/notfound'
import FaqsCards from './pages/about/Faqs'
import Parametr from './pages/admin/Settings'
import Aloqa from './pages/contact'
import AboutPages from './pages/about/About'
import LayoutPage from './pages/loyout/Layout'
import HomePage2 from './pages/Home2'
import HomePage4 from './pages/Home2/home4'
import HomePage5 from './pages/Home2/home5'
import Harid2 from './pages/about/Shop2'
import Harid4 from './pages/about/Shopp3'
import Shop6 from './components/Shop/Karzinka'
import Data from './pages/about/ModalData'
import BlogPage from './pages/Blog/Index'
import BlogPage1 from './pages/Blog/Index1'
import ModalPage from './pages/Modal/Index'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/data' element={<Data />} />
				<Route path='/home2' element={<HomePage2 />} />
				<Route path='/home4' element={<HomePage4 />} />
				<Route path='/home5' element={<HomePage5 />} />
				<Route path='/about' element={<AboutPages />} />
				<Route path='/register' element={<Register />} />
				<Route path='/layout' element={<LayoutPage/>} />
				<Route path='/login' element={<Login />} />
				<Route path='/wishlist' element={<List />} />
				<Route path='/shopping' element={<Harid />} />
				<Route path='/vegetables' element={<Harid2 />} />
				<Route path='/shop2' element={<Harid4 />} />
				<Route path='/shopDetails' element={<Shop6 />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/history' element={<OrderPage />} />
				<Route path='/details' element={<Details />} />
				<Route path='/checkout' element={<Check />} />
				<Route path='/faqs' element={<FaqsCards />} />
				<Route path='/settings' element={<Parametr />} />
				<Route path='/contact' element={<Aloqa />} />
				<Route path='/popup' element={<ModalPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/blogList' element={<BlogPage1 />} />
				<Route path='*' element={<NotPage />} />
			</Routes>
		</>
	)
}

export default App
