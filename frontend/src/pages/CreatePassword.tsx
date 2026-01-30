import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    navigate("/password", { state: { email: email } });
  };
  return (
    <div className="bg-white flex flex-col items-center justify-center h-svh lg:w-full">
      <div className="py-4 flex flex-col items-center w-[90%] max-w-md lg:max-w-[798px]">
        <h1 className="text-[50px] font-medium text-center text-[#020617]">
          Create Password
        </h1>
        <p className="text-gray-600 mt-4 text-[18px]">
          Set a password to secure your account
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-row gap-2 justify-center items-center w-full"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email address"
            className="pl-4 rounded-md h-12 border border-[#E2E8F0] flex-1 outline-none transition-all focus:border-[#2C5CC5] focus:ring-1 focus:ring-[#2C5CC5]"
          />
          <button className="bg-[#2C5CC5] text-white rounded-md h-12 px-4">
            Continue
          </button>
        </form>
        <p className="text-[16px] mt-8 text-[#64748B]">
          Can’t remember your password?{" "}
          <Link to="/signup" className="text-[#2C5CC5] underline">
            {" "}
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
