import SideBar from "../../components/LoginedComponents/SideBar";
import Main from "../../components/LoginedComponents/Main";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex overflow-hidden gap-5 px-4 py-5">
      <SideBar />
      <Main pageTitle={"Overview"} />
    </div>
  );
}
