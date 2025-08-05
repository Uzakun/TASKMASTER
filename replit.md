# ADmyBRAND Insights Analytics Dashboard

## Overview

This is a full-stack analytics dashboard application built with React, TypeScript, and Express.js. The project implements a modern analytics interface with interactive charts, data tables, and real-time metrics visualization for marketing campaign management. The application features a comprehensive UI component system using shadcn/ui and Radix UI primitives, with support for both light and dark themes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA mode using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **UI Framework**: shadcn/ui component system built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming support
- **Charts**: Recharts library for data visualization components (line charts, bar charts, donut charts)
- **Data Tables**: TanStack Table for advanced table functionality with sorting, filtering, and pagination

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Development**: tsx for TypeScript execution in development mode
- **Build Process**: esbuild for production bundling with ESM output format
- **API Structure**: RESTful API endpoints with `/api` prefix routing
- **Error Handling**: Centralized error handling middleware with status code management
- **Logging**: Custom request logging middleware for API endpoints

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Schema Definition**: Shared schema definitions with Zod validation integration
- **Mock Data**: Development mock data system for campaigns, revenue, and user growth metrics

### Authentication and Authorization
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development
- **User Management**: Basic user schema with username/password authentication structure

### Component Architecture
- **Design System**: Consistent component library with variant-based styling using class-variance-authority
- **Theme System**: Comprehensive light/dark mode support with CSS custom properties
- **Responsive Design**: Mobile-first responsive components with custom mobile detection hooks
- **Loading States**: Skeleton loading components and loading state management throughout the UI
- **Interactive Elements**: Real-time data updates with simulated metrics changes

### Development Tooling
- **Build System**: Vite with React plugin for fast development and hot module replacement
- **Type Safety**: Strict TypeScript configuration with path mapping for clean imports
- **Code Quality**: ESLint integration for code quality enforcement
- **Development Environment**: Custom Vite plugins for Replit integration and error handling

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography

### Data Visualization
- **Recharts**: React charting library built on D3 for responsive data visualization
- **TanStack Table**: Headless table library for advanced data table functionality
- **Embla Carousel**: Carousel component for content sliding functionality

### Development & Build Tools
- **Vite**: Fast build tool and development server with React support
- **esbuild**: JavaScript/TypeScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **tsx**: TypeScript execution engine for development runtime

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx & tailwind-merge**: Conditional class name utilities for dynamic styling
- **class-variance-authority**: Type-safe variant API for component styling
- **nanoid**: Unique ID generation for client-side identifiers