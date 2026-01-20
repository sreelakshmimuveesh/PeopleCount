import { Users, Camera, LogIn, LogOut, TrendingUp } from "lucide-react";

const iconMap = {
  "Total Cameras": Camera,
  "Active Cameras": Camera,
  "Today In": LogIn,
  "Today Out": LogOut,
  "Occupancy": Users,
};

const colorMap = {
  "Total Cameras": "from-purple-500 to-purple-600",
  "Active Cameras": "from-green-500 to-green-600",
  "Today In": "from-blue-500 to-blue-600",
  "Today Out": "from-red-500 to-red-600",
  "Occupancy": "from-orange-500 to-orange-600",
};

export default function StatCard({ title, value, sub }) {
  const Icon = iconMap[title] || Users;
  const gradient = colorMap[title] || "from-gray-500 to-gray-600";

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-white/80 font-medium">{title}</div>
          <div className="mt-2 text-3xl font-bold">{value}</div>
          {sub ? <div className="mt-2 text-xs text-white/70">{sub}</div> : null}
        </div>
        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
}
