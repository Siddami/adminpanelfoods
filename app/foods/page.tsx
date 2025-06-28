import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Search, Filter, Plus, Edit, Trash2, Eye } from "lucide-react";

const Foods = () => {
  const foods = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      price: "$18.99",
      status: "available",
      orders: 234,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "Salad",
      price: "$12.99",
      status: "available",
      orders: 186,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      category: "Pasta",
      price: "$16.99",
      status: "unavailable",
      orders: 156,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Chicken Wings",
      category: "Appetizer",
      price: "$14.99",
      status: "available",
      orders: 298,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300&h=200&fit=crop",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "available"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Foods
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your menu items and pricing
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search foods..." className="pl-10 w-64" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Food
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <Card
            key={food.id}
            className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-200 relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Food Image</span>
              </div>
              <Badge
                className={`absolute top-2 right-2 ${getStatusColor(
                  food.status
                )} border-0`}
              >
                {food.status}
              </Badge>
            </div>

            <div className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900">{food.name}</h3>
                <p className="text-sm text-gray-500">{food.category}</p>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-teal-600">
                  {food.price}
                </span>
                <div className="text-sm text-gray-500">
                  ⭐ {food.rating} ({food.orders} orders)
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-0 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Food Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Pizza", count: 12 },
            { name: "Pasta", count: 8 },
            { name: "Salad", count: 6 },
            { name: "Appetizer", count: 10 },
            { name: "Dessert", count: 5 },
            { name: "Beverage", count: 7 },
          ].map((category, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">{category.name}</p>
              <p className="text-sm text-gray-500">{category.count} items</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Foods;
