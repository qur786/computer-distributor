import BackgroundImage from "./computers-bg-removed.png";

export function HomePage(): JSX.Element {
  return (
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
  );
}
