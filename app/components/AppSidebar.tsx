"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Star,
  UtensilsCrossed,
  Calendar,
  MessageSquare,
  Wallet,
  Settings,
} from 'lucide-react';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Orders', url: '/orders', icon: ShoppingBag },
  { title: 'Customers', url: '/customers', icon: Users },
  { title: 'Analytics', url: '/analytics', icon: BarChart3 },
  { title: 'Reviews', url: '/reviews', icon: Star },
  { title: 'Foods', url: '/foods', icon: UtensilsCrossed },
  { title: 'Calendar', url: '/calendar', icon: Calendar },
  { title: 'Chat', url: '/chat', icon: MessageSquare },
  { title: 'Wallet', url: '/wallet', icon: Wallet },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const currentPath = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className="w-74 border-r border-gray-200 bg-white">
      <SidebarContent className="p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-teal-600">FoodAdmin</h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          active
                            ? 'bg-teal-50 text-teal-700 border-r-2 border-teal-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
