import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Chat from './pages/Chat';
import PromptDirectory from './pages/PromptDirectory';
import TemplateBuilder from './pages/TemplateBuilder';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/prompts" element={<PromptDirectory />} />
          <Route path="/templates" element={<TemplateBuilder />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;