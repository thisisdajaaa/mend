import React from "react";

const ScanEngineItem = ({ color, letter, name }) => {
  return (
    <div className="bg-white p-2 rounded border flex items-center">
      <div
        className={`w-6 h-6 rounded ${color} mr-2 flex items-center justify-center text-white text-xs`}
      >
        {letter}
      </div>
      <span className="text-sm">{name}</span>
      <input type="checkbox" className="ml-auto" defaultChecked />
    </div>
  );
};

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-white p-3 rounded border">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-900 text-white p-3 text-sm flex items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4">Dashboard Overview</div>
      </div>

      <div className="p-4">
        <div className="mb-4 p-2 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-700 font-medium">
            Filter by scan engine
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <ScanEngineItem color="bg-blue-500" letter="R" name="Renovate" />
            <ScanEngineItem color="bg-purple-500" letter="S" name="SCA" />
            <ScanEngineItem color="bg-green-500" letter="S" name="SAST" />
            <ScanEngineItem color="bg-yellow-500" letter="C" name="Container" />
            <ScanEngineItem color="bg-pink-500" letter="AI" name="AI" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Projects" value="48" />
          <StatCard label="Issues" value="1.3K" />
          <StatCard label="Scans" value="24.3K" />
          <StatCard label="Avg. Artifacts" value="12" />
        </div>

        <div className="mt-4 bg-white p-3 rounded border">
          <div className="text-xs text-gray-500">Findings</div>
          <div className="text-xl font-semibold">4K</div>
          <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-500" style={{ width: "35%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
