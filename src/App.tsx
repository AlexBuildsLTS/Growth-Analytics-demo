import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { MetricCard } from './components/MetricCard';
import { AnalyticsChart } from './components/AnalyticsChart';
import { metrics, chartData } from './data/mockData';
import { BarChart2 } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-200 bg-slate-50 dark:bg-slate-900">
        <nav className="border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <BarChart2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">
                  Growth Analytics
                </span>
              </div>
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
            </div>
          </div>
        </nav>

        <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
          
          <AnalyticsChart data={chartData} />
        </main>
      </div>
    </div>
  );
}

export default App;