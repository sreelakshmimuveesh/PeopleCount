import StatCard from "../components/ui/StatCard";
import AddCameraModal from "../components/ui/AddCameraModal";
import { TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cameras, setCameras] = useState([
    { id: 1, name: "Entrance 1", location: "Main Gate", st: "Online", in: 420, out: 390, seen: "1 min ago" },
    { id: 2, name: "Lobby", location: "Reception", st: "Online", in: 310, out: 300, seen: "2 min ago" },
    { id: 3, name: "Exit", location: "Back Door", st: "Offline", in: 0, out: 0, seen: "2 hrs ago" },
  ]);

  const handleAddCamera = (newCamera) => {
    setCameras([...cameras, newCamera]);
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome to MeeTech</h1>
        <p className="text-indigo-100 text-lg">Real-time people counting and occupancy management</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Cameras" value={cameras.length.toString()} sub="Configured" />
        <StatCard title="Active Cameras" value={cameras.filter(c => c.st === "Online").length.toString()} sub="Online now" />
        <StatCard title="Today In" value="1,245" sub="Entries" />
        <StatCard title="Today Out" value="1,180" sub="Exits" />
        <StatCard title="Occupancy" value="65" sub="Current inside" />
      </div>

      {/* Analytics placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 lg:col-span-2 shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Day-wise Analytics</h2>
            <TrendingUp className="text-blue-600" size={24} />
          </div>
          <div className="mt-4 h-64 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="mx-auto text-blue-400 mb-2" size={48} />
              <p className="text-blue-600 font-semibold">Chart Loading...</p>
              <p className="text-sm text-blue-500">Analytics dashboard</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Summary</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <span className="text-2xl">📊</span>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Peak hour: 6–7 PM</div>
                <div className="text-xs text-gray-600">125 entries</div>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
              <span className="text-2xl">🎥</span>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Busiest camera: Entrance 1</div>
                <div className="text-xs text-gray-600">420 entries today</div>
              </div>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
              <span className="text-2xl">✓</span>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Alerts today: 0</div>
                <div className="text-xs text-gray-600">System operating normally</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Camera table placeholder */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Active Cameras</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition shadow-md"
          >
            + Add Camera
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-700 bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="py-3 px-4 font-semibold">Camera</th>
                <th className="py-3 px-4 font-semibold">Location</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Today In</th>
                <th className="py-3 px-4 font-semibold">Today Out</th>
                <th className="py-3 px-4 font-semibold">Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {cameras.map((r) => (
                <tr key={r.id} className="border-b hover:bg-blue-50 transition">
                  <td className="py-3 px-4 font-semibold text-gray-900">{r.name}</td>
                  <td className="py-3 px-4 text-gray-600">{r.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        r.st === "Online"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {r.st === "Online" ? "🟢 Online" : "🔴 Offline"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">{r.in}</td>
                  <td className="py-3 px-4 text-red-600 font-semibold">{r.out}</td>
                  <td className="py-3 px-4 text-gray-500">{r.seen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Camera Modal */}
      <AddCameraModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCamera}
      />
    </div>
  );
}
