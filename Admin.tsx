
import React, { useState, useEffect } from 'react';
import { 
  Terminal, X, Activity, Database, Lock, Save, RefreshCw, Server
} from 'lucide-react';
import { DataService, Experience } from './services';

interface AdminProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Dashboard State
  const [stats, setStats] = useState<any>(null);
  const [data, setData] = useState<Experience[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await DataService.login(password);
    if (success) {
      setIsAuthenticated(true);
      loadDashboardData();
    } else {
      setError('ACCESS_DENIED: Invalid Credentials');
    }
    setLoading(false);
  };

  const loadDashboardData = async () => {
    const [statsData, expData] = await Promise.all([
      DataService.getStats(),
      DataService.getExperience()
    ]);
    setStats(statsData);
    setData(expData);
  };

  const handleSave = async (id: string, newData: Partial<Experience>) => {
    setLoading(true);
    await DataService.updateExperience(id, newData);
    await loadDashboardData();
    setEditingId(null);
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white"><X /></button>
        <div className="w-full max-w-md border border-white/20 p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
          <div className="flex items-center gap-3 mb-8 text-white">
            <Lock size={20} />
            <h2 className="text-xl font-bold tracking-widest">SECURE_LOGIN</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors"
                autoFocus
              />
            </div>
            {error && <div className="text-red-500 text-xs font-mono">{error}</div>}
            <button 
              disabled={loading}
              className="w-full border border-white/20 py-3 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50"
            >
              {loading ? 'AUTHENTICATING...' : 'ENTER_SYSTEM'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">
      {/* Admin Header */}
      <div className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 z-10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Server size={18} className="text-green-500" />
          <span className="font-bold tracking-widest">SYSTEM_ADMIN</span>
        </div>
        <button onClick={onClose} className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-red-500 transition-colors">
          <X size={14} /> Close Connection
        </button>
      </div>

      <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto pb-20">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats && Object.entries(stats).map(([key, value]: any) => (
            <div key={key} className="border border-white/10 p-4">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{key}</div>
              <div className="text-2xl font-bold">{value}</div>
            </div>
          ))}
        </div>

        {/* Content Management */}
        <div className="border border-white/10 p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Database size={20} />
              <h3 className="text-xl font-bold">EXPERIENCE_DATA</h3>
            </div>
            <button onClick={loadDashboardData} className="p-2 hover:bg-white/10 rounded-full"><RefreshCw size={16} /></button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-xs text-white/40 uppercase tracking-wider">
                  <th className="py-4 font-normal">Company</th>
                  <th className="py-4 font-normal">Role</th>
                  <th className="py-4 font-normal text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-4 font-mono text-white/80">{item.company}</td>
                    <td className="py-4 pr-4 text-white/60">
                      {editingId === item.id ? (
                        <input 
                          defaultValue={item.role}
                          className="bg-black border-b border-white/50 focus:outline-none py-1 w-full"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSave(item.id, { role: e.currentTarget.value });
                          }}
                        />
                      ) : item.role}
                    </td>
                    <td className="py-4 text-right">
                      {editingId === item.id ? (
                        <span className="text-xs text-green-500 animate-pulse">Press Enter to Save</span>
                      ) : (
                        <button 
                          onClick={() => setEditingId(item.id)}
                          className="text-xs border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors"
                        >
                          EDIT
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
