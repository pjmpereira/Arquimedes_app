import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { Github, Twitter, Brain } from 'lucide-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0C0C] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-center">
          <Brain className="w-12 h-12 text-brand-blue" />
        </div>
        <h1 className="mt-2 text-center text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
          Arquimedes.AI
        </h1>
        <h2 className="mt-6 text-center text-3xl font-bold text-slate-900 dark:text-white">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-black px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-white dark:bg-black px-3 py-2 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue dark:text-white"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-blue-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-zinc-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-black text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-zinc-900">
                <Github className="h-5 w-5" />
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-zinc-900">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-brand-blue hover:text-blue-500"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;