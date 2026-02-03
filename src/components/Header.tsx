import React from 'react';

interface HeaderProps {
  currentTime: Date;
}

const Header: React.FC<HeaderProps> = ({ currentTime }) => {
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
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
              <i className="fas fa-wheelchair text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FreeGo</h1>
              <p className="text-sm text-gray-600">智能轮椅助手</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-success-600">
              <i className="fas fa-battery-full text-lg"></i>
              <span className="text-lg font-semibold">85%</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-600">
              <i className="fas fa-wifi text-lg"></i>
              <span className="text-sm">已连接</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm text-gray-600">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;