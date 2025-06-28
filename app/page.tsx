import React from 'react';
import { MetricWidgets } from './components/MetricWidgets';
import { UserTable } from './components/UserTable';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Calendar, Filter, Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Hi Admin, Welcome back to FoodAdmin Dashboard!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Filter Periods</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <MetricWidgets />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1 */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Order Analytics
            </h3>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          <div className="h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart Component Placeholder</p>
          </div>
        </Card>

        {/* Chart 2 */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h3>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart Component Placeholder</p>
          </div>
        </Card>
      </div>

      {/* User Table */}
      <UserTable />

      {/* Recent Activity */}
      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              action: "New order received",
              user: "John Doe",
              time: "2 minutes ago",
              type: "order",
            },
            {
              action: "Customer registered",
              user: "Jane Smith",
              time: "5 minutes ago",
              type: "user",
            },
            {
              action: "Review submitted",
              user: "Mike Johnson",
              time: "12 minutes ago",
              type: "review",
            },
            {
              action: "Payment completed",
              user: "Sarah Wilson",
              time: "18 minutes ago",
              type: "payment",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "order"
                      ? "bg-blue-500"
                      : activity.type === "user"
                      ? "bg-green-500"
                      : activity.type === "review"
                      ? "bg-yellow-500"
                      : "bg-teal-500"
                  }`}
                />
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">by {activity.user}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
