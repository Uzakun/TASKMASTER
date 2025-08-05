import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "ADmyBRAND Insights API is running" });
});

// Mock data endpoints for the dashboard
app.get("/api/campaigns", (req, res) => {
  const mockCampaigns = [
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
    // Add more campaigns as needed
  ];
  res.json(mockCampaigns);
});

app.get("/api/revenue", (req, res) => {
  const mockRevenue = [
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
  res.json(mockRevenue);
});

app.get("/api/users", (req, res) => {
  const mockUsers = [
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
  res.json(mockUsers);
});

export default app;