import React from "react";

const ClientLogos = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {/* In a real app, you'd use actual logo images */}
          <div className="h-8 opacity-60 text-gray-500 font-bold">
            Microsoft
          </div>
          <div className="h-8 opacity-60 text-gray-500 font-bold">Google</div>
          <div className="h-8 opacity-60 text-gray-500 font-bold">Vodafone</div>
          <div className="h-8 opacity-60 text-gray-500 font-bold">Yahoo!</div>
          <div className="h-8 opacity-60 text-gray-500 font-bold">Siemens</div>
          <div className="h-8 opacity-60 text-gray-500 font-bold">Comcast</div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
