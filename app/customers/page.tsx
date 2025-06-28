
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Search, Filter, UserPlus, Mail, Phone } from 'lucide-react';

const Customers = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john.doe@email.com', phone: '+1 (555) 123-4567', orders: 24, spent: '$456.78', joined: 'Jan 2024' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com', phone: '+1 (555) 234-5678', orders: 18, spent: '$324.50', joined: 'Feb 2024' },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@email.com', phone: '+1 (555) 345-6789', orders: 31, spent: '$678.90', joined: 'Dec 2023' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.w@email.com', phone: '+1 (555) 456-7890', orders: 12, spent: '$234.25', joined: 'Mar 2024' },
    { id: 5, name: 'Tom Brown', email: 'tom.brown@email.com', phone: '+1 (555) 567-8901', orders: 27, spent: '$543.67', joined: 'Jan 2024' },
  ];

  return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Customers</h1>
            <p className="text-gray-600 mt-1">Manage customer information and relationships</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search customers..." className="pl-10 w-64" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <Card key={customer.id} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-teal-100 text-teal-600">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{customer.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{customer.email}</p>
                  <p className="text-sm text-gray-500">{customer.phone}</p>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{customer.orders}</p>
                  <p className="text-xs text-gray-500">Orders</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{customer.spent}</p>
                  <p className="text-xs text-gray-500">Spent</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{customer.joined}</p>
                  <p className="text-xs text-gray-500">Joined</p>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default Customers;
