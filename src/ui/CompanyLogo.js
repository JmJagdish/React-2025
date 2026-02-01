import React from 'react'

const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
        <span className="text-white text-4xl font-bold">J</span>
      </div>
      <div className="leading-tight">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-400">J</span>
          <span className="text-white">Dine</span>
        </h1>
        <p className="text-white text-sm tracking-wide">Food Ordering App</p>
      </div>
    </div>
  );
};

export default CompanyLogo;