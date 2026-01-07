import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white flex flex-col items-center justify-center h-svh lg:w-full">
      <div className="py-4 flex flex-col items-center w-[90%] max-w-md">
        {/* add max-w */}
        <h1 className="text-[50px] font-medium text-center text-[#020617]">
          Enter Password
        </h1>
        <p className="text-gray-600 mt-4 text-[18px] mb-10">
          Please type your password to continue
        </p>

        <div className="w-full max-w-md">
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Password
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-1 -top-6 text-sm font-medium text-gray-600 hover:text-[#2C5CC5]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            <div className="flex flex-col gap-8">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-4 py-3 border border-black rounded-md focus:outline-none focus:border-[#2C5CC5] focus:ring-1 focus:ring-[#2C5CC5]"
              />
              <button className="bg-[#2C5CC5] text-white rounded-md py-[14px] w-full hover:bg-[#5781dd]">
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 hover:text-black flex w-full mt-2">
          <Link to="/">← Back to email</Link>
        </div>
        <p className="text-[16px] mt-8 text-[#64748B]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#2C5CC5] underline">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
