import SideBar from "../SideBar";
import DasMain from "../../components/LoginedComponents/DasMain";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex overflow-hidden gap-5 px-4 py-5">
      <SideBar />
      <DasMain />
    </div>
  );
}
