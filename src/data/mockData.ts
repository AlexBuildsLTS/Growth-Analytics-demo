import { ChartData, MetricCard } from '../types';
import { Users, DollarSign, BarChart2, TrendingUp } from 'lucide-react';

export const metrics: MetricCard[] = [
  {
    title: 'Total Users',
    value: '24.7K',
    change: 12.5,
    icon: Users,
  },
  {
    title: 'Revenue',
    value: '$48.2K',
    change: 8.2,
    icon: DollarSign,
  },
  {
    title: 'Engagement Rate',
    value: '22.3%',
    change: -3.1,
    icon: BarChart2,
  },
  {
    title: 'Growth Rate',
    value: '18.6%',
    change: 4.3,
    icon: TrendingUp,
  },
];

export const chartData: ChartData[] = [
  { name: 'Jan', users: 4000, revenue: 2400, engagement: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398, engagement: 2210 },
  { name: 'Mar', users: 2000, revenue: 9800, engagement: 2290 },
  { name: 'Apr', users: 2780, revenue: 3908, engagement: 2000 },
  { name: 'May', users: 1890, revenue: 4800, engagement: 2181 },
  { name: 'Jun', users: 2390, revenue: 3800, engagement: 2500 },
  { name: 'Jul', users: 3490, revenue: 4300, engagement: 2100 },
];