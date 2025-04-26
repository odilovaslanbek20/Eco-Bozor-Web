import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="max-w-[520px] max-[560px]:mx-[15px] max-[500px]:my-[30px] mx-auto p-6 bg-white rounded-2xl shadow-md my-[60px]">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[rgba(0,178,7,1)] text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Log in
        </button>
      </form>
			<div className="flex items-center justify-center gap-[5px] mt-[24px]">
				<p className='text-[14px] text-[rgba(102,102,102,1)] font-normal font-["Poppins]'>Don’t have account?</p>
				<Link to="/register" className='text-[14px] text-[rgba(26,26,26,1)] font-medium font-["Poppins]'>Register</Link>
			</div>
    </div>
  );
}

export default SignIn;
