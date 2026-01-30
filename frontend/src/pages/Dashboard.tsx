import union from "../assets/Union.png";
import desk from "../assets/desk.png";
import Desk from "../components/Desk";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-svh bg-[#F7F9FA]">
      <nav className="bg-red-400 h-[80px] w-full mb-9 text-center">
        <img src={union} alt="" />
      </nav>

      <div className="flex flex-col px-6 max-w-md flex-1 gap-6 lg:">
        <div className="bg-green-400 h-36 flex flex-col justify-center items-center w-full">
          <p className="text-3xl text-center font-semibold leading-[50px] text-[#020617]">
            WELCOME TO ITMO WORSKSPACE BOOKING PAGE!
          </p>
        </div>
        <main className="w-full flex-1 mb-8 border rounded-[30px] p-5">
          <div className="flex flex-col justify-center font-bold text-xl mb-5 gap-2">
            <div className="flex gap-3">
              <p className="w-[42px] h-7 bg-[#16A34A33] rounded-md text-center">
                3
              </p>
              Workspaces available
            </div>
            <div className="flex gap-3">
              <p className="w-[42px] h-7 bg-[#EDD0D0] rounded-md text-center">
                5
              </p>
              Workspaces unavailable
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
