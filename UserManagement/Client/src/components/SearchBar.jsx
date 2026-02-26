import React from 'react';

const SearchBar = ({ searchId, setSearchId }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-400 group-focus-within:text-indigo-500 transition-colors">🔍</span>
      </div>
      <input
        type="text"
        placeholder="Search by ID..."
        className="block w-full pl-10 pr-3 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400
                   focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;