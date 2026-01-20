import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import logo from "../../assets/WHITE_LOGO.png";

export default function Topbar({ onOpenMobile }) {
  const [range, setRange] = useState("7d");

  return (
    <header className="h-16 bg-gradient-to-r from-blue-600 to-blue-800 border-b border-blue-900 flex items-center justify-between px-4 md:px-6 shadow-lg">
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMobile}
          className="md:hidden p-2 rounded-lg hover:bg-blue-700 text-white"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <img src={logo} alt="MeeTech Logo" className="h-12 object-contain" />
      </div>

      <div className="flex items-center gap-3">
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="text-sm border border-blue-400 rounded-lg px-3 py-2 bg-blue-50 text-gray-900 font-medium"
        >
          <option value="1d">Today</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
        </select>

        <button className="p-2 rounded-lg hover:bg-blue-700 text-white transition" aria-label="Alerts">
          <Bell size={20} />
        </button>

        <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm font-bold shadow-md">
          MT
        </div>
      </div>
    </header>
  );
}
