import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { ChartData } from '../types';

interface AnalyticsChartProps {
  data: ChartData[];
}

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Growth Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="engagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
          <XAxis dataKey="name" className="text-slate-600 dark:text-slate-400" />
          <YAxis className="text-slate-600 dark:text-slate-400" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#3B82F6"
            fillOpacity={1}
            fill="url(#users)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#revenue)"
          />
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#6366F1"
            fillOpacity={1}
            fill="url(#engagement)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};