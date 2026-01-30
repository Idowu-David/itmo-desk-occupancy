import desk from "../assets/desk.png";

const Desk = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-green-300 w-[124px] h-[96px] rounded-2xl flex flex-col items-center justify-center">
        <div className="h-14 w-14 bg-white rounded-full border border-black flex flex-col items-center justify-center">
          <img src={desk} className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default Desk;
