
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Download, TrendingUp, TrendingDown } from 'lucide-react';

const Analytics = () => {
  return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Track performance and insights</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Total Revenue', value: '$12,345', change: '+12.5%', trend: 'up' },
            { title: 'Total Orders', value: '1,234', change: '+8.2%', trend: 'up' },
            { title: 'Avg Order Value', value: '$45.67', change: '-2.1%', trend: 'down' },
            { title: 'Customer Growth', value: '234', change: '+15.3%', trend: 'up' },
          ].map((metric, index) => (
            <Card key={index} className="p-6 border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {metric.change}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
            <div className="h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Revenue Chart Placeholder</p>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Order Distribution</h3>
            <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Orders Chart Placeholder</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Products</h3>
            <div className="space-y-3">
              {[
                { name: 'Margherita Pizza', orders: 234, revenue: '$2,345' },
                { name: 'Caesar Salad', orders: 186, revenue: '$1,674' },
                { name: 'Pasta Alfredo', orders: 156, revenue: '$1,872' },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.orders} orders</p>
                  </div>
                  <span className="font-medium text-green-600">{product.revenue}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Peak Hours</h3>
            <div className="space-y-3">
              {[
                { time: '12:00 PM - 1:00 PM', orders: 89 },
                { time: '7:00 PM - 8:00 PM', orders: 76 },
                { time: '6:00 PM - 7:00 PM', orders: 68 },
              ].map((hour, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="text-gray-700">{hour.time}</span>
                  <span className="font-medium text-gray-900">{hour.orders} orders</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Customer Segments</h3>
            <div className="space-y-3">
              {[
                { segment: 'Regular Customers', count: 567, percentage: 45 },
                { segment: 'New Customers', count: 234, percentage: 20 },
                { segment: 'VIP Customers', count: 89, percentage: 35 },
              ].map((segment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{segment.segment}</span>
                    <span className="font-medium">{segment.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-teal-600 h-2 rounded-full" 
                      style={{ width: `${segment.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
  );
};

export default Analytics;
