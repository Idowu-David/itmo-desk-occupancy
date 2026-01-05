const Signup = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-svh">
      <div className="py-4 flex flex-col items-center w-11/12">
        <h1 className="text-[50px] font-medium text-center text-[#020617]">
          Welcome Back!
        </h1>
        <p className="text-gray-600 mt-4 text-xl">
          Please log in to continue
        </p>
        <div className="space-y-5 w-full mt-14">
          <button className="bg-[#F1F5F9] py-3 w-full text-center rounded-md font-semibold">
            Continue with Google
          </button>
          <button className="bg-[#F1F5F9] py-3 w-full text-center rounded-md font-semibold">
            Continue with Linkedln
          </button>
        </div>
        <p className="text-center font-bold text-xl my-6">OR</p>
        <form className="flex flex-row gap-1 w-[98px] justify-center items-center min-h-20">
          <input
            placeholder="Enter your email address"
            className="pl-4 rounded-md h-12 border border-[#E2E8F0]"
          />
          <button className="bg-[#2C5CC5] text-white rounded-md h-12 px-4">
            Continue
          </button>
        </form>
        <p className="text-lg mt-10 text-[#64748B]">
          Don't have an account?
          <span className="text-[#2C5CC5]"> Sign up</span>
        </p>
      </div>
    </div>
  );
};

//* Main content */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 0px;
// gap: 40px;

// position: absolute;
// width: 328px;
// height: 512px;
// left: calc(50% - 328px/2);
// top: calc(50% - 512px/2);



// background: #2C5CC5;
// /* shadows/shadow-lg

// Utility for controlling the box shadow of an element

// https://tailwindcss.com/docs/box-shadow
// */
// box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);
// border-radius: 6px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

/* buttons */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 0px;
// gap: 16px;

// width: 328px;
// height: 112px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;

export default Signup;
