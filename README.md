# Food Admin Panel

A modern, responsive admin dashboard for managing food items, built with **Next.js 15**, **React**, and **Tailwind CSS**.

---

## Features

- **Dashboard Overview**:

  - Metric widgets for quick stats
  - Order analytics and revenue charts
  - Recent activity feed

- **User Management**:

  - User table with sorting and filtering

- **Sidebar Navigation**:

  - Collapsible sidebar with keyboard shortcuts
  - Responsive design: sidebar drawer on mobile, fixed on desktop
  - Menu highlighting for active routes

- **Header Bar**:

  - Search input
  - Notification and user icons
  - Greeting for the admin

- **Custom UI Components**:

  - Cards, buttons, tooltips, and more
  - Chart tooltips and legends

- **404 Not Found Page**:

  - Custom error page with helpful navigation

---

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/) (for charts)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📝 Setup & Usage

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## Challenges Faced

- **Sidebar Layout:**  
  Ensuring the sidebar does not overlap the main content, especially with fixed positioning and responsive design. Required careful use of Tailwind’s flex/grid utilities and conditional margins.

- **TypeScript & Recharts:**  
  Typing Recharts payloads and custom tooltip/legend components was tricky due to the library’s loose types.

- **Global Styles:**  
  Some global CSS (like `#root` styles) conflicted with the dashboard layout and needed to be adjusted or removed.

- **Next.js App Directory:**  
  Handling client/server component boundaries, especially for context and hooks, required using `"use client"` and correct imports.

---

## Future Improvements

- Add authentication and user roles
- Connect to a real backend/API
- Add more charts and analytics
- Improve accessibility and keyboard navigation
- Add tests and CI/CD

---

## Author

- **Abdulkareem Yetunde Siddiqat[https://www.github.com/siddami]**

---

### License

This project is for educational/demo purposes.
