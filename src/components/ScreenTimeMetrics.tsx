
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Instagram', daily: 45, weekly: 315 },
  { name: 'TikTok', daily: 30, weekly: 210 },
  { name: 'Snapchat', daily: 20, weekly: 140 },
  { name: 'Twitter', daily: 25, weekly: 175 },
];

export const ScreenTimeMetrics = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Screen Time Metrics</h2>
        <p className="text-muted-foreground">Track your app usage</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Daily Usage (minutes)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="daily" fill="#4A6741" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Weekly Usage (minutes)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="weekly" fill="#D4B483" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
