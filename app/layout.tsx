import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { Button } from "./components/ui/button";
import { Search, Bell, User } from "lucide-react";
import { Input } from "./components/ui/input";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Admin Panel",
  authors: [
    {
      name: "Sid",
    },
  ],
  keywords: ["Next.js", "Tailwind CSS", "Admin Panel", "Food"],
  creator: "Sid",
  description: "A simple admin panel for managing food items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-gray-50 justify-between">
            <AppSidebar />

            <div className="overflow-auto flex-1 flex flex-col lg:ml-[18rem]">
              {/* Header */}
              <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="lg:hidden" />
                  <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search here"
                      className="pl-10 bg-gray-50 border-0 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                  <div className="text-sm">
                    <p className="font-medium">Hello, Admin</p>
                  </div>
                </div>
              </header>
              {/* Main Content */}
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
