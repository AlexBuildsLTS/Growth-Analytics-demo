import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { MetricCard as MetricCardType } from '../types';

export const MetricCard: React.FC<MetricCardType> = ({ title, value, change, icon: Icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {Math.abs(change)}%
        </span>
      </div>
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>
      <p className="text-2xl font-semibold mt-1 text-slate-900 dark:text-white">{value}</p>
    </div>
  );
};