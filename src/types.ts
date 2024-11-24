export interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType;
}

export interface ChartData {
  name: string;
  users: number;
  revenue: number;
  engagement: number;
}