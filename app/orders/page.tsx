import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Eye, Filter, Search } from "lucide-react";
import { Input } from "../components/ui/input";

const Orders = () => {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      items: 3,
      total: "$45.99",
      status: "delivered",
      time: "2 hours ago",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      items: 2,
      total: "$32.50",
      status: "preparing",
      time: "1 hour ago",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      items: 5,
      total: "$78.25",
      status: "pending",
      time: "30 minutes ago",
    },
    {
      id: "#ORD-004",
      customer: "Sarah Wilson",
      items: 1,
      total: "$15.99",
      status: "delivered",
      time: "3 hours ago",
    },
    {
      id: "#ORD-005",
      customer: "Tom Brown",
      items: 4,
      total: "$56.80",
      status: "preparing",
      time: "45 minutes ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "preparing":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Order List
          </h1>
          <p className="text-gray-600 mt-1">Manage all customer orders</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search orders..." className="pl-10 w-64" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card className="p-6 border-0 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Customer
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Items
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Total
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Time
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{order.customer}</td>
                  <td className="py-4 px-4 text-gray-700">
                    {order.items} items
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {order.total}
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      className={`${getStatusColor(order.status)} border-0`}
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{order.time}</td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Orders;
