import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Book, FileCode, User, Bell, LogOut, Brain } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const navigation = [
    { name: 'Chat', href: '/', icon: MessageSquare },
    { name: 'Prompts', href: '/prompts', icon: Book },
    { name: 'Templates', href: '/templates', icon: FileCode },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0C0C] transition-colors">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-black border-r border-slate-200 dark:border-zinc-800">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-slate-200 dark:border-zinc-800">
            <Brain className="w-8 h-8 text-brand-blue mr-2" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              Arquimedes.AI
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-brand-blue dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="flex items-center p-4 border-t border-slate-200 dark:border-zinc-800">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
              alt={user?.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{user?.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="p-2 ml-auto text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="fixed top-0 right-0 left-64 z-10 h-16 bg-white dark:bg-black border-b border-slate-200 dark:border-zinc-800">
          <div className="flex items-center justify-between px-6 h-full">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
              {navigation.find((item) => item.href === location.pathname)?.name}
            </h2>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button className="p-2 text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
        <main className="pt-16">
          <div className="px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;