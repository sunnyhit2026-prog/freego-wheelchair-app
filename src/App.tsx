import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NavigationPage from './pages/Navigation';
import Health from './pages/Health';
import Emergency from './pages/Emergency';
import Settings from './pages/Settings';

const App: React.FC = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentTime={currentTime} />
      
      <div className="flex-1 flex">
        <Navigation />
        
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/health" element={<Health />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;