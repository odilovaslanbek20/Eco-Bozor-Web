import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaPlus, FaMinus } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ModalData = () => {
  const [selectedImage, setSelectedImage] = useState('meva3.svg')
  const [count, setCount] = useState(0)

  const images = ['meva3.svg', 'ProductImage.svg', 'ProductImage1.svg', 'ProductImage2.svg']

  const handleImageSelect = (img) => {
    setSelectedImage(img)
  }

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0))
  }

  return (
    <section className="bg-black/60 w-full min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all shadow-md active:scale-95 mb-6"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="font-medium font-poppins">Back</span>
        </button>

        {/* Modal content */}
        <div className="bg-white p-6 rounded-lg flex flex-col lg:flex-row gap-8 shadow-md">
          {/* Left side: images */}
          <div className="flex flex-col lg:w-1/2 gap-4">
            <div className="flex gap-4 overflow-x-auto">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Product Thumbnail"
                  onClick={() => handleImageSelect(img)}
                  className={`w-20 h-24 object-cover rounded-md cursor-pointer border-2 transition-all ${
                    selectedImage === img ? 'border-green-600' : 'border-transparent hover:border-green-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <img src={selectedImage} alt="Selected" className="w-[400px] h-[400px] object-contain" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center flex-wrap gap-3">
                <h2 className="text-2xl font-semibold font-poppins text-gray-900">Chinese Cabbage</h2>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">In Stock</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap mt-2 text-sm text-gray-500">
                <img src="yulduz.svg" alt="Rating" className="w-24" />
                <span>4 Reviews</span>
                <span>•</span>
                <span>SKU: 2,51,594</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="line-through text-gray-400">$48.00</span>
              <span className="text-green-700 font-semibold">$17.28</span>
              <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full">64% Off</span>
            </div>

            <p className="text-gray-500 text-sm">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh
              diam, blandit vel consequat nec, ultrices et ipsum.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">Brand:</span>
                <img src="bariglogo.svg" alt="Brand Logo" />
              </div>

              <div className="flex items-center flex-wrap gap-2">
                <span className="text-sm font-medium text-gray-800">Share:</span>
                <div className="flex gap-2">
                  <FaFacebookF className="w-8 h-8 p-2 bg-green-600 text-white rounded-full cursor-pointer" />
                  <FaTwitter className="w-8 h-8 p-2 hover:bg-green-600 hover:text-white rounded-full cursor-pointer" />
                  <FaPinterestP className="w-8 h-8 p-2 hover:bg-green-600 hover:text-white rounded-full cursor-pointer" />
                  <FaInstagram className="w-8 h-8 p-2 hover:bg-green-600 hover:text-white rounded-full cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 max-[510px]:flex-col w-full">
              <div className="flex items-center border max-[510px]:w-full max-[510px]:justify-between rounded-full overflow-hidden">
                <button onClick={handleDecrement} className="w-10 h-10 flex justify-center items-center bg-gray-100">
                  <FaMinus />
                </button>
                <span className="px-4">{count}</span>
                <button onClick={handleIncrement} className="w-10 h-10 flex justify-center items-center bg-gray-100">
                  <FaPlus />
                </button>
              </div>

              <Link to="/cart" className="flex-1 max-[510px]:w-full">
                <div className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition-all">
                  <span className="font-semibold">Add to Cart</span>
                  <MdOutlineShoppingCart className="text-xl" />
                </div>
              </Link>

              <div className="w-12 h-12 flex max-[510px]:w-full items-center justify-center bg-green-100 text-green-600 rounded-full cursor-pointer">
                <FaRegHeart className="text-xl" />
              </div>
            </div>

            <div className="pt-4 border-t text-sm text-gray-600">
              <p>
                Category: <span className="text-gray-500">Vegetables</span>
              </p>
              <div className="flex gap-2 flex-wrap mt-2">
                {['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green Cabbage'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="cursor-pointer hover:underline transition-all text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalData
