"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { ShoppingBag, Truck, XCircle, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

interface MetricData {
  id: string;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
  color: string;
  bgColor: string;
  prefix?: string;
}

const metrics: MetricData[] = [
  {
    id: 'orders',
    title: 'Total Orders',
    value: 75,
    change: 3,
    changeType: 'increase',
    icon: ShoppingBag,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'delivered',
    title: 'Total Delivered',
    value: 357,
    change: 5,
    changeType: 'increase',
    icon: Truck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'cancelled',
    title: 'Total Cancelled',
    value: 65,
    change: 2,
    changeType: 'decrease',
    icon: XCircle,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 128,
    change: 12,
    changeType: 'increase',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    prefix: '$',
  },
];

function AnimatedCounter({ value, prefix = '' }: { value: number; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setDisplayValue(Math.floor(current));

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl font-bold">
      {prefix}{displayValue.toLocaleString()}
    </span>
  );
}

export function MetricWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.changeType === 'increase' ? TrendingUp : TrendingDown;
        const trendColor = metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600';
        
        return (
          <Card key={metric.id} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} />
                  <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
                  <div className="flex items-center gap-1">
                    <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                    <span className={`text-sm font-medium ${trendColor}`}>
                      {metric.change}%
                    </span>
                    <span className="text-sm text-gray-500">vs last month</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
