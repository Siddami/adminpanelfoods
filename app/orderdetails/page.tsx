import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";

const OrderDetail = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Button>
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Order #ORD-001
          </h1>
          <p className="text-gray-600 mt-1">Order details and status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Order Items</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Margherita Pizza",
                  quantity: 2,
                  price: "$18.99",
                  total: "$37.98",
                },
                {
                  name: "Caesar Salad",
                  quantity: 1,
                  price: "$8.99",
                  total: "$8.99",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} × {item.price}
                    </p>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.total}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>$46.97</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
            <div className="space-y-4">
              {[
                { status: "Order Placed", time: "2:30 PM", completed: true },
                { status: "Order Confirmed", time: "2:32 PM", completed: true },
                { status: "Preparing", time: "2:35 PM", completed: true },
                {
                  status: "Out for Delivery",
                  time: "3:15 PM",
                  completed: false,
                },
                { status: "Delivered", time: "Pending", completed: false },
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        step.completed ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.status}
                    </p>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Customer Info</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">john.doe@email.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  123 Main St, Apt 4B
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Order Status</h3>
            <div className="space-y-4">
              <Badge className="bg-yellow-100 text-yellow-800 border-0">
                Preparing
              </Badge>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                Estimated delivery: 30-45 mins
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Update Status
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Customer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
