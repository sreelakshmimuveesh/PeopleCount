import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const hourlyData = [
  { time: "08:00", in: 45, out: 32, occupancy: 13 },
  { time: "09:00", in: 78, out: 52, occupancy: 39 },
  { time: "10:00", in: 92, out: 68, occupancy: 63 },
  { time: "11:00", in: 105, out: 81, occupancy: 87 },
  { time: "12:00", in: 98, out: 120, occupancy: 65 },
  { time: "13:00", in: 67, out: 85, occupancy: 47 },
  { time: "14:00", in: 82, out: 71, occupancy: 58 },
  { time: "15:00", in: 96, out: 78, occupancy: 76 },
  { time: "16:00", in: 110, out: 92, occupancy: 94 },
  { time: "17:00", in: 125, out: 105, occupancy: 114 },
  { time: "18:00", in: 118, out: 110, occupancy: 122 },
  { time: "19:00", in: 102, out: 115, occupancy: 109 },
  { time: "20:00", in: 85, out: 98, occupancy: 96 },
];

const dailyData = [
  { day: "Mon", in: 1205, out: 1190 },
  { day: "Tue", in: 1320, out: 1305 },
  { day: "Wed", in: 1245, out: 1180 },
  { day: "Thu", in: 1410, out: 1395 },
  { day: "Fri", in: 1560, out: 1520 },
  { day: "Sat", in: 980, out: 950 },
  { day: "Sun", in: 750, out: 745 },
];

export default function Analytics() {
  const [view, setView] = useState("hourly");

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-lg border border-gray-200 p-1 flex gap-1">
          <button
            onClick={() => setView("hourly")}
            className={`px-4 py-2 text-sm rounded transition ${
              view === "hourly"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Hourly
          </button>
          <button
            onClick={() => setView("daily")}
            className={`px-4 py-2 text-sm rounded transition ${
              view === "daily"
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Daily
          </button>
        </div>
      </div>

      {/* Line Chart - In/Out over time */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="font-semibold text-lg mb-4">Entry & Exit Count</div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={view === "hourly" ? hourlyData : dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={view === "hourly" ? "time" : "day"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="in"
              stroke="#10b981"
              strokeWidth={2}
              name="Entries"
              dot={{ fill: "#10b981", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="out"
              stroke="#ef4444"
              strokeWidth={2}
              name="Exits"
              dot={{ fill: "#ef4444", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - Occupancy */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="font-semibold text-lg mb-4">Building Occupancy</div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={view === "hourly" ? hourlyData : dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={view === "hourly" ? "time" : "day"} />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="occupancy"
              fill="#3b82f6"
              name="Occupancy"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Total Entries Today</div>
          <div className="mt-2 text-3xl font-bold text-green-600">1,245</div>
          <div className="mt-1 text-xs text-gray-400">↑ 12% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Total Exits Today</div>
          <div className="mt-2 text-3xl font-bold text-red-600">1,180</div>
          <div className="mt-1 text-xs text-gray-400">↑ 8% from yesterday</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="text-sm text-gray-500">Peak Hour</div>
          <div className="mt-2 text-3xl font-bold text-blue-600">18:00</div>
          <div className="mt-1 text-xs text-gray-400">125 entries recorded</div>
        </div>
      </div>
    </div>
  );
}
