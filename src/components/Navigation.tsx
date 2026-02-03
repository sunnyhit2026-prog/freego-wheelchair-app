import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'fas fa-home', label: '首页', color: 'text-blue-600' },
    { path: '/chat', icon: 'fas fa-comments', label: '语音助手', color: 'text-green-600' },
    { path: '/navigation', icon: 'fas fa-map-marked-alt', label: '导航', color: 'text-purple-600' },
    { path: '/health', icon: 'fas fa-heartbeat', label: '健康', color: 'text-red-600' },
    { path: '/emergency', icon: 'fas fa-phone', label: '紧急求助', color: 'text-orange-600' },
    { path: '/settings', icon: 'fas fa-cog', label: '设置', color: 'text-gray-600' }
  ];

  return (
    <nav className="w-64 bg-white shadow-sm border-r border-gray-200 p-4">
      <div className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`nav-item w-full text-left ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                location.pathname === item.path 
                  ? 'bg-primary-100' 
                  : 'bg-gray-100'
              }`}>
                <i className={`${item.icon} text-xl ${
                  location.pathname === item.path 
                    ? 'text-primary-600' 
                    : item.color
                }`}></i>
              </div>
              <span className={`text-lg font-medium ${
                location.pathname === item.path 
                  ? 'text-primary-700' 
                  : 'text-gray-700'
              }`}>
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;