import React, { useContext } from "react";
import { SideOptionAction } from "../contexts/SideOptionAction";
import { Search, X } from "lucide-react";

export default function SearchBox() {
  const { searchShowing, setSearchShowing } = useContext(SideOptionAction);

  return (
    <div
      className={`fixed w-full h-screen z-50 glass-card ${
        searchShowing ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="w-[95%] md:w-[80%] lg:w-[45%] xl:[40%] 2xl:w-[35%] bg-slate-800 rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Search</h2>
          <button onClick={() => setSearchShowing(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-lg">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
}
