import { useState, useEffect } from 'react';
import { TrendingUp, Users, Target, DollarSign, BarChart3, Clock } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { RevenueLineChart } from '../components/charts/RevenueLineChart';
import { UsersBarChart } from '../components/charts/UsersBarChart';
import { ConversionsDonutChart } from '../components/charts/ConversionsDonutChart';
import { CampaignDataTable } from '../components/CampaignDataTable';
import { ThemeToggle } from '../components/ThemeToggle';
import { 
  mockCampaigns, 
  mockRevenueData, 
  mockUserGrowthData, 
  mockConversionSources 
} from '../data/mockData';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('2 minutes ago');
  const [totalRevenue, setTotalRevenue] = useState(1234567);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        const variation = Math.floor(Math.random() * 10000) - 5000;
        setTotalRevenue(prev => Math.max(0, prev + variation));
        setLastUpdated('Just now');
        
        setTimeout(() => {
          setLastUpdated('1 minute ago');
        }, 60000);
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const metrics = [
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign
    },
    {
      title: 'Active Campaigns',
      value: '24',
      change: '+3',
      isPositive: true,
      icon: Target
    },
    {
      title: 'Total Users',
      value: '45,678',
      change: '+8.2%',
      isPositive: true,
      icon: Users
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: '-0.3%',
      isPositive: false,
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">ADmyBRAND Insights</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-6">
        {/* Date Range and Last Updated */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Date Range:</span>
            <div className="flex items-center space-x-2 px-3 py-2 border rounded-md bg-background">
              <span className="text-sm">Jan 1, 2024</span>
              <span className="text-muted-foreground">-</span>
              <span className="text-sm">Dec 31, 2024</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={metric.icon}
              isLoading={isLoading}
            />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueLineChart data={mockRevenueData} isLoading={isLoading} />
          </div>
          <ConversionsDonutChart data={mockConversionSources} isLoading={isLoading} />
        </div>

        <UsersBarChart data={mockUserGrowthData} isLoading={isLoading} />

        {/* Campaign Data Table */}
        <CampaignDataTable data={mockCampaigns} isLoading={isLoading} />
      </main>
    </div>
  );
}
