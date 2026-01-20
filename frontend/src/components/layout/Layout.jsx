import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-gray-950 text-white">
            <div className="h-16 px-5 flex items-center border-b border-white/10">
              <div className="text-sm font-semibold">MeeTech</div>
            </div>
            <div className="p-3 space-y-2 text-sm">
              <NavLink to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10">Dashboard</NavLink>
              <NavLink to="/cameras" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10">Cameras</NavLink>
              <NavLink to="/analytics" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10">Analytics</NavLink>
              <NavLink to="/settings" onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10">Settings</NavLink>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <Topbar onOpenMobile={() => setOpen(true)} />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
