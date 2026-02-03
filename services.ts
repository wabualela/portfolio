
import { INITIAL_EXPERIENCE_DATA, INITIAL_EDUCATION_DATA } from './translations';

// In a real Laravel app, this would be your API URL
// const API_URL = "https://api.wailbox.com/v1";

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  descEn: string;
  descAr: string;
  views: number; // Simulated analytics data
}

// Simulating a Database State
let mockExperienceDB: Experience[] = INITIAL_EXPERIENCE_DATA.map((item, index) => ({
  ...item,
  id: `exp_${index}`,
  views: Math.floor(Math.random() * 1000) + 500
}));

export const DataService = {
  // 1. GET: Fetch all experience data
  getExperience: async (): Promise<Experience[]> => {
    // REAL WORLD: const res = await fetch(`${API_URL}/experience`); return res.json();
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockExperienceDB]), 600); // Simulate network latency
    });
  },

  // 2. UPDATE: Update a specific record
  updateExperience: async (id: string, data: Partial<Experience>): Promise<Experience> => {
    // REAL WORLD: await fetch(`${API_URL}/experience/${id}`, { method: 'PUT', body: JSON.stringify(data) });
    return new Promise((resolve) => {
      setTimeout(() => {
        mockExperienceDB = mockExperienceDB.map(item => 
          item.id === id ? { ...item, ...data } : item
        );
        resolve(mockExperienceDB.find(i => i.id === id)!);
      }, 500);
    });
  },

  // 3. ANALYTICS: Get dashboard stats
  getStats: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        totalViews: 12450,
        activeSessions: 4,
        serverStatus: 'ONLINE',
        lastDeployment: '2m ago'
      }), 400);
    });
  },

  // 4. AUTH: Mock login
  login: async (password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(password === 'admin'), 800); // Password is "admin"
    });
  }
};
