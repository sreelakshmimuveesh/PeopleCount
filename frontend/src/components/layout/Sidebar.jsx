import { NavLink } from "react-router-dom";
import { LayoutDashboard, Camera, BarChart3, Settings } from "lucide-react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/cameras", label: "Cameras", icon: Camera },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col bg-gray-950 text-white">
      <div className="h-16 px-5 flex items-center border-b border-white/10">
        <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center font-bold">
          M
        </div>
        <div className="ml-3">
          <div className="text-sm font-semibold leading-4">Admin</div>
          
        </div>
      </div>

      <nav className="p-3 space-y-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive ? "bg-white/10" : "hover:bg-white/5 text-white/80"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 text-xs text-white/50 border-t border-white/10">
        v1.0 • Admin Dashboard
      </div>
    </aside>
  );
}
