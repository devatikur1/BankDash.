import { BellDot, Search, Settings } from "lucide-react";
import { useContext } from "react";
import { SideOptionAction } from "../../contexts/SideOptionAction";

export default function Header() {
  const { DexSearchAction } = useContext(SideOptionAction);
  const IsWin = navigator.platform.includes("Win");

  return (
    <section className="w-full glass-card px-5 hidden md:flex justify-between items-center rounded-2xl overflow-hidden py-6">
      <div className="text-2xl font-semibold text_glow">Overview</div>
      <div className="flex gap-3 items-center">
        <button
          ref={DexSearchAction}
          style={{ background: "linear-gradient(to right, #f32170, #ff6b08)" }}
          className="flex justify-center items-center gap-2 rounded-2xl text-white px-2 py-0 h-[25px] mr-8"
        >
          <Search size={15} />
          <kbd className="text-[0.8rem]">{IsWin ? "Ctrl+F" : "⌘+F"}</kbd>
        </button>
        <a
          href="#"
          style={{ background: "#f32170" }}
          className="flex justify-center items-center gap-2 rounded-2xl text-white p-2"
        >
          <Settings />
        </a>
        <a
          href="#"
          style={{ background: "#ff6b08" }}
          className="flex justify-center items-center gap-2 rounded-2xl text-white p-2"
        >
          <BellDot />
        </a>
        <a
          className="w-[40px] h-[40px] rounded-full overflow-hidden object-cover"
          href="#"
        >
          <img
            className="w-full h-full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F534%2F006%2Foriginal%2Fsocial-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg&f=1&nofb=1&ipt=2bca2ddb480e36ded0b2d64106de642c3f1ebb6516e0aac33885973a7bd0a352"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
