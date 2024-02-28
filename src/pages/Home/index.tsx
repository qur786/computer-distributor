import BackgroundImage from "./computers-bg-removed.png";
import BackgroundImage2 from "./computers-bg-removed2.png";

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen w-full flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <h6 className="text-6xl md:mt-12 md:ml-12 font-bold text-[#212b36] text-center">
            Shop your new Device with{" "}
            <span className="text-[#fa541c]">Computer Distributer</span>
          </h6>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={BackgroundImage} alt="store" />
        </div>
      </div>
      <div className="h-screen md:w-full w-[90%] rounded-xl bg-slate-100 py-4 box-border flex flex-col md:gap-8">
        <div className="h-1/2 md:h-4/6 flex flex-col justify-center items-center">
          <img
            src={BackgroundImage2}
            alt="store"
            className="h-full object-contain"
          />
        </div>
        <div className="h-1/2 md:h-2/6 flex flex-col items-center justify-between">
          <p className="text-sm font-bold text-center">NEW START</p>
          <h5 className="text-[#fa541c] font-semibold text-6xl text-center">
            Computer Distributer
          </h5>
          <p className="text-center">
            Modern ui kit to save your time, boost your creativity.
            <br />
            Neat and super stylish layout ready to help with your projects
          </p>
        </div>
      </div>
    </div>
  );
}
