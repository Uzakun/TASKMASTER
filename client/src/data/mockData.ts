import { Campaign, RevenueData, UserGrowthData, ConversionSourceData } from '../lib/types';

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Holiday Sale 2024',
    type: 'Search Campaign',
    status: 'Active',
    budget: 15000,
    spent: 12450,
    conversions: 234,
    roas: 3.2
  },
  {
    id: '2',
    name: 'Black Friday Boost',
    type: 'Display Campaign',
    status: 'Paused',
    budget: 25000,
    spent: 18750,
    conversions: 512,
    roas: 2.8
  },
  {
    id: '3',
    name: 'Q1 Brand Awareness',
    type: 'Video Campaign',
    status: 'Active',
    budget: 8500,
    spent: 6200,
    conversions: 89,
    roas: 4.1
  },
  {
    id: '4',
    name: 'Social Media Push',
    type: 'Social Campaign',
    status: 'Completed',
    budget: 12000,
    spent: 11850,
    conversions: 345,
    roas: 2.9
  },
  {
    id: '5',
    name: 'Email Retargeting',
    type: 'Email Campaign',
    status: 'Active',
    budget: 5000,
    spent: 3450,
    conversions: 156,
    roas: 5.2
  },
  {
    id: '6',
    name: 'Summer Launch',
    type: 'Search Campaign',
    status: 'Active',
    budget: 18000,
    spent: 14500,
    conversions: 289,
    roas: 3.8
  },
  {
    id: '7',
    name: 'Mobile App Install',
    type: 'App Campaign',
    status: 'Active',
    budget: 10000,
    spent: 8200,
    conversions: 1250,
    roas: 2.5
  },
  {
    id: '8',
    name: 'Local Business Ads',
    type: 'Local Campaign',
    status: 'Paused',
    budget: 7500,
    spent: 5800,
    conversions: 67,
    roas: 1.9
  },
  {
    id: '9',
    name: 'YouTube Pre-roll',
    type: 'Video Campaign',
    status: 'Active',
    budget: 22000,
    spent: 19500,
    conversions: 445,
    roas: 3.6
  },
  {
    id: '10',
    name: 'Influencer Collab',
    type: 'Social Campaign',
    status: 'Completed',
    budget: 15000,
    spent: 14800,
    conversions: 378,
    roas: 4.2
  },
  {
    id: '11',
    name: 'Back to School',
    type: 'Search Campaign',
    status: 'Active',
    budget: 13500,
    spent: 9200,
    conversions: 198,
    roas: 2.7
  },
  {
    id: '12',
    name: 'Product Launch',
    type: 'Display Campaign',
    status: 'Active',
    budget: 20000,
    spent: 16800,
    conversions: 334,
    roas: 3.4
  },
  {
    id: '13',
    name: 'Newsletter Signup',
    type: 'Email Campaign',
    status: 'Active',
    budget: 3000,
    spent: 2100,
    conversions: 567,
    roas: 6.8
  },
  {
    id: '14',
    name: 'Shopping Campaign',
    type: 'Shopping Campaign',
    status: 'Active',
    budget: 17500,
    spent: 13200,
    conversions: 256,
    roas: 3.1
  },
  {
    id: '15',
    name: 'Brand Protection',
    type: 'Search Campaign',
    status: 'Active',
    budget: 5500,
    spent: 4200,
    conversions: 89,
    roas: 2.3
  }
];

export const mockRevenueData: RevenueData[] = [
  { month: 'Jan', amount: 65000 },
  { month: 'Feb', amount: 78000 },
  { month: 'Mar', amount: 85000 },
  { month: 'Apr', amount: 92000 },
  { month: 'May', amount: 88000 },
  { month: 'Jun', amount: 95000 },
  { month: 'Jul', amount: 102000 },
  { month: 'Aug', amount: 108000 },
  { month: 'Sep', amount: 115000 },
  { month: 'Oct', amount: 125000 },
  { month: 'Nov', amount: 135000 },
  { month: 'Dec', amount: 145000 }
];

export const mockUserGrowthData: UserGrowthData[] = [
  { month: 'Jan', users: 2400 },
  { month: 'Feb', users: 2800 },
  { month: 'Mar', users: 3200 },
  { month: 'Apr', users: 3600 },
  { month: 'May', users: 3100 },
  { month: 'Jun', users: 3800 },
  { month: 'Jul', users: 4200 },
  { month: 'Aug', users: 4600 },
  { month: 'Sep', users: 4800 },
  { month: 'Oct', users: 5200 },
  { month: 'Nov', users: 5600 },
  { month: 'Dec', users: 6000 }
];

export const mockConversionSources: ConversionSourceData[] = [
  { name: 'Organic Search', value: 42, color: '#3b82f6', percentage: 42 },
  { name: 'Paid Social', value: 28, color: '#10b981', percentage: 28 },
  { name: 'Email', value: 18, color: '#8b5cf6', percentage: 18 },
  { name: 'Direct', value: 12, color: '#f59e0b', percentage: 12 }
];
