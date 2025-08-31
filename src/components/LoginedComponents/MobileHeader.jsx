import { useContext } from "react";
import { SideOptionAction } from "../../contexts/SideOptionAction";
import fav from "../../assets/fav.png";
import {
  ArrowLeftRight,
  Banknote,
  BellDot,
  ChartNoAxesCombined,
  CreditCard,
  Github,
  House,
  Instagram,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  User,
  Wrench,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const { MobiSearchAction, sideBarShowing, setSideBarShowing, PhoneSidBar } =
    useContext(SideOptionAction);
  return (
    <>
      <div
        className={`${
          sideBarShowing ? "translate-y-0" : "translate-y-full"
        } fixed top-0 left-0 right-0 bottom-0 z-40 w-full h-full bg-slate-800 flex md:hidden flex-col justify-between gap-10 px-5 py-7 touch-pan-y overflow-auto`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <a
              title="BankDash"
              href="/"
              className="select-none flex justify-start items-center gap-2"
            >
              <img
                className="w-[50px] drop-shadow-[0_0_20px_#7f5cff99] block"
                src={fav}
                alt="logo"
              />
              {/* <h1 className="font-semibold text-[1.7rem] block">BankDash.</h1> */}
            </a>
            <button
              ref={MobiSearchAction}
              style={{
                background: "linear-gradient(to right, #f32170, #ff6b08)",
              }}
              className="flex justify-center items-center gap-2 rounded-2xl text-white px-2 py-0 h-[25px] mr-8"
            >
              <Search size={15} />
              <kbd className="text-[0.8rem]">Search</kbd>
            </button>
            <button onClick={() => setSideBarShowing(false)}>
              <X />
            </button>
          </div>
          <hr />
          <nav ref={PhoneSidBar} className="w-full flex flex-col gap-4">
            <div data-type={"overview"} className="activeThis">
              <Link
                to={"/dashboard"}
                className="px-0 paddingRight py-3 flex justify-start items-end gap-4"
              >
                <House opacity={0.9} size={30} />
                <span className="flex text-xl opacity-[0.6]">Dashboard</span>
              </Link>
            </div>
            <div data-type="transactions">
              <Link
                to={"/transactions"}
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
              >
                <ArrowLeftRight opacity={0.9} size={30} />
                <span className="flex text-xl opacity-[0.6]">Transactions</span>
              </Link>
            </div>
            <div data-type={"Accounts"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <User title={"Accounts"} opacity={0.9} size={30} />
                <span className="flex text-xl opacity-[0.6]">Accounts</span>
              </a>
            </div>
            <div data-type={"Investments"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <ChartNoAxesCombined opacity={0.9} size={30} />
                <span className="flex text-xl opacity-[0.6]">Investments</span>
              </a>
            </div>
            <div data-type={"Credit Cards"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <CreditCard opacity={0.9} size={"30px"} />
                <span className="flex text-xl opacity-[0.6]">
                  Credit Cards{" "}
                </span>
              </a>
            </div>
            <div data-type={"Loans"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <Banknote opacity={0.9} size={"30px"} />
                <span className="flex text-xl opacity-[0.6]">Loans</span>
              </a>
            </div>
            <div data-type={"Services"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <Wrench opacity={0.9} size={"30px"} />
                <span className="flex text-xl opacity-[0.6]">Services</span>
              </a>
            </div>
            <div data-type={"My Privileges"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <ShieldCheck opacity={0.9} size={"30px"} />
                <span className="flex text-xl opacity-[0.6]">
                  My Privileges
                </span>
              </a>
            </div>
            <div data-type={"Setting"}>
              <a
                className="px-0 py-3 paddingRight flex justify-start items-end gap-4"
                href=""
              >
                <Settings opacity={0.9} size={"30px"} />
                <span className="flex text-xl opacity-[0.6]">Setting</span>
              </a>
            </div>
          </nav>
        </div>

        <hr />

        <div className="flex flex-col items-center gap-8 justify-between">
          <div className="flex gap-6 cursor-pointer">
            <a href="https://github.com/devatikur1">
              <Github color="#f32170" size={40} />
            </a>
            <a href="https://www.instagram.com/devatikur1/">
              <Instagram color="#ff6b08" size={40} />
            </a>
          </div>
          <div className="flex gap-3 items-center justify-between w-full">
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
        </div>
      </div>

      <div className="sticky w-full glass-card px-6 flex md:hidden justify-between items-center rounded-2xl overflow-hidden py-6">
        <div className="flex justify-center items-center h-full gap-3">
          <a
            title="BankDash"
            href="/"
            className="select-none flex justify-start items-center gap-2"
          >
            <img
              className="w-[40px] drop-shadow-[0_0_20px_#7f5cff99] block"
              src={fav}
              alt="logo"
            />
          </a>
        </div>
        <div className="text-[1.35rem] font-semibold text_glow">Overview</div>
        <button onClick={() => setSideBarShowing(true)}>
          <Menu />
        </button>
      </div>
    </>
  );
}
