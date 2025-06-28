"use client";

import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowUpRight, ArrowDownRight, CreditCard, Download, Plus } from 'lucide-react';

const Wallet = () => {
  const transactions = [
    { id: 1, type: 'income', description: 'Order Payment #ORD-001', amount: '+$45.99', date: '2 hours ago', status: 'completed' },
    { id: 2, type: 'expense', description: 'Supplier Payment - Fresh Ingredients', amount: '-$234.50', date: '5 hours ago', status: 'completed' },
    { id: 3, type: 'income', description: 'Order Payment #ORD-002', amount: '+$32.50', date: '1 day ago', status: 'completed' },
    { id: 4, type: 'expense', description: 'Equipment Maintenance', amount: '-$150.00', date: '2 days ago', status: 'pending' },
    { id: 5, type: 'income', description: 'Order Payment #ORD-003', amount: '+$78.25', date: '3 days ago', status: 'completed' },
  ];

  return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Wallet</h1>
            <p className="text-gray-600 mt-1">Manage finances and transactions</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Total Balance</h3>
              <CreditCard className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold mb-2">$12,345.67</p>
            <p className="text-teal-100 text-sm">Available balance</p>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Total Income</h3>
              <ArrowUpRight className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">$8,456.78</p>
            <p className="text-green-600 text-sm">+12.5% from last month</p>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Total Expenses</h3>
              <ArrowDownRight className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">$3,234.56</p>
            <p className="text-red-600 text-sm">+8.2% from last month</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'income' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount}
                      </p>
                      <p className={`text-xs ${
                        transaction.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Transfer Funds
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Pay Supplier
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Request Payment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Reports
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">**** 4532</p>
                      <p className="text-sm text-gray-500">Primary</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Wallet;
