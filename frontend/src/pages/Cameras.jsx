import { useState } from "react";
import AddCameraModal from "../components/ui/AddCameraModal";
import { Trash2, Edit, Eye, Wifi, WifiOff } from "lucide-react";

export default function Cameras() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [cameras, setCameras] = useState([
    {
      id: 1,
      name: "Entrance 1",
      location: "Main Gate",
      ipAddress: "192.168.1.100",
      resolution: "1080p",
      frameRate: "30",
      manufacturer: "Hikvision",
      modelNumber: "DS-2CD2143G0-I",
      st: "Online",
      in: 420,
      out: 390,
      seen: "1 min ago",
    },
    {
      id: 2,
      name: "Lobby",
      location: "Reception",
      ipAddress: "192.168.1.101",
      resolution: "2MP",
      frameRate: "25",
      manufacturer: "Dahua",
      modelNumber: "IPC-HDBW2433E",
      st: "Online",
      in: 310,
      out: 300,
      seen: "2 min ago",
    },
    {
      id: 3,
      name: "Exit",
      location: "Back Door",
      ipAddress: "192.168.1.102",
      resolution: "1080p",
      frameRate: "30",
      manufacturer: "Uniview",
      modelNumber: "IPC322SR-DVS28",
      st: "Offline",
      in: 0,
      out: 0,
      seen: "2 hrs ago",
    },
  ]);

  const handleAddCamera = (newCamera) => {
    setCameras([...cameras, newCamera]);
  };

  const handleDeleteCamera = (id) => {
    if (confirm("Are you sure you want to delete this camera?")) {
      setCameras(cameras.filter((c) => c.id !== id));
    }
  };

  const handleEditCamera = (id) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Camera Management</h1>
            <p className="text-blue-100">Configure, monitor, and manage all your CCTV cameras</p>
          </div>
          <button
            onClick={() => {
              setEditingId(null);
              setIsModalOpen(true);
            }}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            + Add New Camera
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="text-sm text-blue-100 font-medium">Total Cameras</div>
          <div className="mt-2 text-3xl font-bold">{cameras.length}</div>
          <div className="mt-1 text-xs text-blue-100">Configured</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="text-sm text-green-100 font-medium">Online</div>
          <div className="mt-2 text-3xl font-bold">{cameras.filter((c) => c.st === "Online").length}</div>
          <div className="mt-1 text-xs text-green-100">Active now</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-5 text-white shadow-lg">
          <div className="text-sm text-red-100 font-medium">Offline</div>
          <div className="mt-2 text-3xl font-bold">{cameras.filter((c) => c.st === "Offline").length}</div>
          <div className="mt-1 text-xs text-red-100">Needs attention</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="text-sm text-purple-100 font-medium">Total Entries</div>
          <div className="mt-2 text-3xl font-bold">{cameras.reduce((sum, c) => sum + c.in, 0)}</div>
          <div className="mt-1 text-xs text-purple-100">Today</div>
        </div>
      </div>

      {/* Cameras Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">All Cameras</h2>
          <p className="text-sm text-gray-600 mt-1">Manage and monitor your camera network</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Camera Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">IP Address</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Resolution</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Today In/Out</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cameras.map((camera) => (
                <tr key={camera.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{camera.name}</div>
                    <div className="text-xs text-gray-500">{camera.manufacturer}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{camera.location}</td>
                  <td className="px-6 py-4">
                    <code className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700">
                      {camera.ipAddress}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{camera.resolution}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {camera.st === "Online" ? (
                        <>
                          <Wifi size={16} className="text-green-600" />
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Online
                          </span>
                        </>
                      ) : (
                        <>
                          <WifiOff size={16} className="text-red-600" />
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                            Offline
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                        ↓ {camera.in}
                      </span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                        ↑ {camera.out}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditCamera(camera.id)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                        title="Edit Camera"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteCamera(camera.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition"
                        title="Delete Camera"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="View Details">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {cameras.length === 0 && (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Cameras Added Yet</h3>
            <p className="text-gray-600 mb-6">Add your first camera to start monitoring</p>
            <button
              onClick={() => {
                setEditingId(null);
                setIsModalOpen(true);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Your First Camera
            </button>
          </div>
        )}
      </div>

      {/* Camera Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{camera.name}</h3>
                <p className="text-sm text-gray-600">{camera.location}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  camera.st === "Online"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {camera.st}
              </span>
            </div>

            <div className="space-y-3 text-sm mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">IP Address:</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">{camera.ipAddress}</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Resolution:</span>
                <span className="font-semibold text-gray-900">{camera.resolution}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frame Rate:</span>
                <span className="font-semibold text-gray-900">{camera.frameRate} FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Model:</span>
                <span className="text-xs text-gray-700">{camera.modelNumber}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-600">{camera.in}</div>
                <div className="text-xs text-gray-600">Entries</div>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-600">{camera.out}</div>
                <div className="text-xs text-gray-600">Exits</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEditCamera(camera.id)}
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCamera(camera.id)}
                className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-200 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Camera Modal */}
      <AddCameraModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingId(null);
        }}
        onAdd={handleAddCamera}
      />
    </div>
  );
}
