export default function Popup() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-2xl shadow-2xl relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
        >
          &times;
        </button>

        <div className="md:w-1/2 w-full bg-green-100 flex items-center justify-center p-4">
          <img
            src="BG.png" 
            alt="Basket"
            className="object-cover rounded-lg max-h-60 md:max-h-full"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 text-center mb-4 text-sm md:text-base">
            Subscribe to our newsletter and Save your <span className="text-orange-500 font-semibold">20% money</span> with discount code today.
          </p>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-md md:rounded-l-md md:rounded-none border border-gray-300 focus:outline-none mb-2 md:mb-0"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md md:rounded-r-md md:rounded-none hover:bg-green-600">
              Subscribe
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <input type="checkbox" id="dontShow" className="mr-2" />
            <label htmlFor="dontShow" className="text-xs text-gray-500">
              Do not show this window
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
