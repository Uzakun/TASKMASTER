export interface Campaign {
  id: string;
  name: string;
  type: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: number;
  spent: number;
  conversions: number;
  roas: number;
}

export interface RevenueData {
  month: string;
  amount: number;
}

export interface UserGrowthData {
  month: string;
  users: number;
}

export interface ConversionSourceData {
  name: string;
  value: number;
  color: string;
  percentage: number;
}

export interface MetricData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}
