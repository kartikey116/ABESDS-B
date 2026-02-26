import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';

const App = () => {
  const [users, setUsers] = useState([
    { id: '102', name: 'Amit Singh', email: 'amit@example.com' },
    { id: '104', name: 'Rahul Kart', email: 'rahul@example.com' },
  ]);

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchId, setSearchId] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingId) {
      setUsers(users.map(u => u.id === editingId ? { ...formData, id: u.id } : u));
      setEditingId(null);
    } else {
      const newUser = { ...formData, id: Math.floor(Math.random() * 900 + 100).toString() };
      setUsers([...users, newUser]);
    }
    setFormData({ name: '', email: '' });
  };

  const filteredUsers = users.filter(u => u.id.includes(searchId));

  return (
    <div className="min-h-screen bg-[#fcfdfe] p-6 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1e293b] mb-12 tracking-tight">User Managment System</h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Control Panel */}
          <div className="w-full lg:w-[380px] space-y-8">
            
            {/* Form Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-50">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                {editingId ? 'Edit User' : 'Add New User'}
              </h2>
              <form onSubmit={handleSave} className="space-y-5">
                <input 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]">
                  {editingId ? 'Save Changes' : 'Add User'}
                </button>
              </form>
            </div>

            {/* Search Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col gap-4">
               <SearchBar searchId={searchId} setSearchId={setSearchId} />
               <button 
                  onClick={() => setEditingId(null)}
                  className="w-full py-3 bg-[#1d4ed8] text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <span>+</span> Add New User
               </button>
            </div>
          </div>

          {/* Right Side: Table Display */}
          <div className="flex-1 w-full">
            <UserTable 
              users={filteredUsers} 
              onEdit={(u) => { setEditingId(u.id); setFormData({name: u.name, email: u.email}); }} 
              onDelete={(id) => setUsers(users.filter(u => u.id !== id))} 
              onView={(u) => alert(`Viewing: ${u.name}`)}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;