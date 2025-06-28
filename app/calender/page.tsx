
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar = () => {
  const events = [
    { time: '09:00 AM', title: 'Staff Meeting', type: 'meeting' },
    { time: '11:30 AM', title: 'Inventory Check', type: 'task' },
    { time: '02:00 PM', title: 'Supplier Call', type: 'call' },
    { time: '04:30 PM', title: 'Kitchen Training', type: 'training' },
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 15;

  return (
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600 mt-1">Schedule and manage restaurant activities</p>
          </div>
          
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">December 2024</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                      day === today
                        ? 'bg-teal-600 text-white font-medium'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Today&#39;s Events</h3>
              <div className="space-y-3">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${
                      event.type === 'meeting' ? 'bg-blue-500' :
                      event.type === 'task' ? 'bg-green-500' :
                      event.type === 'call' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Schedule Staff Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Book Supplier Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Plan Training Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Set Inventory Reminder
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Calendar;
