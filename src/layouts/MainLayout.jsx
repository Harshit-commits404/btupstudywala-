import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { MobileNav } from '../components/common/MobileNav';
import { Footer } from '../components/common/Footer';

export const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 selection:bg-brand-500/20 selection:text-brand-600 dark:selection:text-brand-300 transition-colors duration-200 ${isHome ? 'p-0 pb-0' : 'pb-16 md:pb-0'}`}>
      {!isHome && <Navbar />}
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      {!isHome && <Footer />}
      {!isHome && <MobileNav />}
    </div>
  );
};

export default MainLayout;
