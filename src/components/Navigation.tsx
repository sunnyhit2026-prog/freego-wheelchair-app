import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, onClose }) => {
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

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Desktop sidebar */}
      <nav className="hidden md:block w-64 bg-white shadow-sm border-r border-gray-200 p-4">
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

      {/* Mobile sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-wheelchair text-white text-lg"></i>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">FreeGo</h2>
                <p className="text-xs text-gray-600">智能轮椅助手</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`nav-item w-full text-left ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    location.pathname === item.path
                      ? 'bg-primary-100'
                      : 'bg-gray-100'
                  }`}>
                    <i className={`${item.icon} text-lg ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : item.color
                    }`}></i>
                  </div>
                  <span className={`text-base font-medium ${
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
        </div>
      </nav>

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-30">
        <div className="grid grid-cols-6 gap-1 p-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600'
              }`}
            >
              <i className={`${item.icon} text-lg mb-1`}></i>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;