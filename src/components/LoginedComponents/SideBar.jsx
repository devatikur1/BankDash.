import { useContext } from "react";
import { SideOptionAction } from "../../contexts/SideOptionAction";
import fav from "../../assets/fav.png";
import {
  ArrowLeftRight,
  Banknote,
  ChartNoAxesCombined,
  CreditCard,
  Github,
  House,
  Instagram,
  Pointer,
  Settings,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const { DexSidBar } = useContext(SideOptionAction);
  
  return (
    <section className="xl:w-[8%] 2xl:w-auto 2xl:min-w-[15%] xl:h-auto sticky left-0 top-0 2xl:h-full hidden md:flex flex-col gap-12 touch-pan-y overflow-y-auto pr-5">
      <div className="glass-card px-5 rounded-2xl py-5 2xl:pr-10">
        <a
          title="BankDash"
          href="/"
          className="select-none flex justify-start items-center gap-2"
        >
          <img
            className="md:w-[50px] 2xl:w-[50px] drop-shadow-[0_0_20px_#7f5cff99] block"
            src={fav}
            alt="logo"
          />
          <h1 className="font-semibold text-[1.7rem] hidden 2xl:block">
            BankDash.
          </h1>
        </a>
      </div>
      <nav
        ref={DexSidBar}
        className="glass-card rounded-2xl w-full flex flex-col md:justify-center 2xl:justify-normal md:items-center 2xl:items-start gap-4 py-5"
      >
        <div className="DexActive lg:w-[85%] md:mx-5 lg:mx-5" data-type={"overview"}>
          <Link
            to={"/dashboard"}
            className="px-5 py-3 flex justify-start items-end gap-4"
          >
            <House opacity={0.9} size={30} />
            <span className="md:hidden 2xl:flex text-xl opacity-[0.6]">
              Dashboard
            </span>
          </Link>
        </div>
        <div data-type="transactions">
          <Link
            className="px-5 py-3 flex justify-start items-end gap-4"
            href=""
          >
            <ArrowLeftRight opacity={0.9} size={30} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Transactions
            </span>
          </Link>
        </div>
        <div data-type={"Accounts"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <User title={"Accounts"} opacity={0.9} size={30} />
            <span className="md:hidden 2xl:flex text-xl opacity-[0.6]">
              Accounts
            </span>
          </a>
        </div>
        <div data-type={"Investments"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <ChartNoAxesCombined opacity={0.9} size={30} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Investments
            </span>
          </a>
        </div>
        <div data-type={"Credit Cards"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <CreditCard opacity={0.9} size={"30px"} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Credit Cards{" "}
            </span>
          </a>
        </div>
        <div data-type={"Loans"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <Banknote opacity={0.9} size={"30px"} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Loans
            </span>
          </a>
        </div>
        <div data-type={"Services"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <Wrench opacity={0.9} size={"30px"} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Services
            </span>
          </a>
        </div>
        <div data-type={"My Privileges"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <ShieldCheck opacity={0.9} size={"30px"} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              My Privileges
            </span>
          </a>
        </div>
        <div data-type={"Setting"}>
          <a className="px-5 py-3 flex justify-start items-end gap-4" href="">
            <Settings opacity={0.9} size={"30px"} />
            <span className=" md:hidden 2xl:flex text-xl opacity-[0.6]">
              Setting
            </span>
          </a>
        </div>
      </nav>
      <div className="glass-card px-5 rounded-2xl  py-5 flex gap-3 flex-col ">
        <h1 className="md:hidden 2xl:block text-[1.1rem] opacity-[0.8]">
          Creator Social Media Account
        </h1>
        <div className="flex md:flex-col 2xl:flex-row md:gap-6 2xl:gap-4 cursor-pointer">
          <a href="https://github.com/devatikur1">
            <Github color="#f32170" size={40} />
          </a>
          <a href="https://www.instagram.com/devatikur1/">
            <Instagram color="#ff6b08" size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
