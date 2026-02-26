import React from 'react';

const UserTable = ({ users, onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">ID</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">User</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-indigo-50/30 transition-colors group">
              <td className="px-6 py-4 font-mono text-sm text-slate-400 group-hover:text-indigo-600">#{user.id}</td>
              <td className="px-6 py-4">
                <span className="font-semibold text-slate-700">{user.name}</span>
              </td>
              <td className="px-6 py-4 text-slate-500 text-sm">{user.email}</td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-4">
                  <button onClick={() => onView(user)} className="text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors">View</button>
                  <button onClick={() => onEdit(user)} className="text-amber-500 hover:text-amber-600 font-medium text-sm transition-colors">Update</button>
                  <button onClick={() => onDelete(user.id)} className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;