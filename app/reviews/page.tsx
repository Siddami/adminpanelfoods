import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Search, Filter, Star, MessageCircle } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      customer: "John Doe",
      rating: 5,
      comment:
        "Amazing pizza! Fast delivery and great taste. Will order again.",
      product: "Margherita Pizza",
      date: "2 hours ago",
      status: "published",
    },
    {
      id: 2,
      customer: "Jane Smith",
      rating: 4,
      comment: "Good food but delivery was a bit late. Overall satisfied.",
      product: "Caesar Salad",
      date: "5 hours ago",
      status: "published",
    },
    {
      id: 3,
      customer: "Mike Johnson",
      rating: 2,
      comment: "Food was cold when it arrived. Not happy with the service.",
      product: "Pasta Alfredo",
      date: "1 day ago",
      status: "pending",
    },
    {
      id: 4,
      customer: "Sarah Wilson",
      rating: 5,
      comment: "Excellent service and delicious food. Highly recommend!",
      product: "Chicken Wings",
      date: "2 days ago",
      status: "published",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Reviews
          </h1>
          <p className="text-gray-600 mt-1">
            Manage customer feedback and ratings
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search reviews..." className="pl-10 w-64" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Average Rating", value: "4.2", subtitle: "out of 5 stars" },
          { title: "Total Reviews", value: "1,234", subtitle: "all time" },
          {
            title: "Pending Reviews",
            value: "23",
            subtitle: "awaiting response",
          },
          { title: "This Month", value: "156", subtitle: "new reviews" },
        ].map((stat, index) => (
          <Card key={index} className="p-4 border-0 shadow-sm text-center">
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm font-medium text-gray-700">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.subtitle}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 border-0 shadow-sm">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-teal-100 text-teal-600">
                  {review.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {review.customer}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {review.product} • {review.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-600">
                      ({review.rating}/5)
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{review.comment}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        review.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {review.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                    {review.status === "pending" && (
                      <>
                        <Button variant="outline" size="sm">
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
