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
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const sidebarMenuItems = [
    {
      type: "overview",
      label: "Dashboard",
      icon: <House opacity={0.9} size={30} />,
      to: "/dashboard",
    },
    {
      type: "transactions",
      label: "Transactions",
      icon: <ArrowLeftRight opacity={0.9} size={30} />,
      to: "/transactions",
    },
    {
      type: "Accounts",
      label: "Accounts",
      icon: <User opacity={0.9} size={30} />,
      to: "/accounts",
    },
    {
      type: "Investments",
      label: "Investments",
      icon: <ChartNoAxesCombined opacity={0.9} size={30} />,
      to: "/investments",
    },
    {
      type: "Credit Cards",
      label: "Credit Cards",
      icon: <CreditCard opacity={0.9} size={30} />,
      to: "/credit-cards",
    },
    {
      type: "Loans",
      label: "Loans",
      icon: <Banknote opacity={0.9} size={30} />,
      to: "/loans",
    },
    {
      type: "Services",
      label: "Services",
      icon: <Wrench opacity={0.9} size={30} />,
      to: "/services",
    },
    {
      type: "My Privileges",
      label: "My Privileges",
      icon: <ShieldCheck opacity={0.9} size={30} />,
      to: "/my-privileges",
    },
    {
      type: "Setting",
      label: "Setting",
      icon: <Settings opacity={0.9} size={30} />,
      to: "/settings",
    },
  ];

  return (
    <section className="xl:w-[10%] 2xl:w-auto 2xl:min-w-[18%] xl:h-auto sticky left-0 top-0 2xl:h-full hidden md:flex flex-col gap-12 touch-pan-y overflow-y-auto pr-5">
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
      <nav className="glass-card rounded-2xl w-full flex flex-col md:justify-center 2xl:justify-normal md:items-center 2xl:items-start gap-4 py-5 px-2">
        {sidebarMenuItems.map((item) => (
          <NavLink
            key={item.type}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "DexActive rounded-[5px] w-full lg:rounded-[8px] lg:px-4 xl:w-full"
                : "xl:w-full"
            }
          >
            <div className="flex md:justify-center gap-5 lg:justify-normal px-3 py-3">
              {item.icon}
              <span className="md:hidden 2xl:flex text-xl opacity-[0.6]">
                {item.label}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
      <div className="glass-card px-5 rounded-2xl  py-5 flex gap-3 flex-col ">
        <h1 className="md:hidden 2xl:block text-[1.1rem] opacity-[0.8]">
          Creator Social Media Account
        </h1>
        <div className="flex md:flex-col md:justify-center md:items-center 2xl:flex-row md:gap-6 2xl:gap-4 cursor-pointer">
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
