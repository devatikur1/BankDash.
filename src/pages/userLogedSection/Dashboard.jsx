import SideBar from "../../components/LoginedComponents/SideBar";
import DasMain from "../../components/LoginedComponents/DasMain";
import { useContext } from "react";
import { SideOptionAction } from "../../contexts/SideOptionAction";

export default function Dashboard() {

  const { searchShowing } = useContext(SideOptionAction);

  return (
    <>
      <div
        className={`fixed w-full h-screen z-50 glass-card ${
          searchShowing ? "flex" : "hidden"
        } justify-center items-center`}
      >
        <div className="w-[95%] md:w-[80%] lg:w-[45%] xl:[40%] 2xl:w-[35%] bg-[#f32170]">
          Atikur
        </div>
      </div>
      <div className="w-full h-screen flex overflow-hidden gap-5 px-4 py-5">
        <SideBar />
        <DasMain />
      </div>
    </>
  );
}
