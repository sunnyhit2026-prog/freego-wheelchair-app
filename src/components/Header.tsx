import React from 'react';

interface HeaderProps {
  currentTime: Date;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentTime, onMenuToggle }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-3 md:px-6 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={onMenuToggle}
            className="md:hidden w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>

          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-600 rounded-lg md:rounded-xl flex items-center justify-center">
              <i className="fas fa-wheelchair text-white text-sm md:text-xl"></i>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">FreeGo</h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">智能轮椅助手</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-1 md:space-x-2 text-success-600">
              <i className="fas fa-battery-full text-sm md:text-lg"></i>
              <span className="text-sm md:text-lg font-semibold">85%</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-primary-600">
              <i className="fas fa-wifi text-sm md:text-lg"></i>
              <span className="text-xs md:text-sm">已连接</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-lg md:text-2xl font-bold text-gray-900">
              {formatTime(currentTime)}
            </div>
            <div className="text-xs md:text-sm text-gray-600 hidden sm:block">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;