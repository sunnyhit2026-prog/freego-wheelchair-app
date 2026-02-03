import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: '开始对话',
      description: '与智能助手聊天，获得陪伴和帮助',
      icon: 'fas fa-comments',
      color: 'bg-green-500',
      action: () => navigate('/chat')
    },
    {
      title: '语音导航',
      description: '告诉我您想去哪里，我来为您规划路线',
      icon: 'fas fa-map-marked-alt',
      color: 'bg-purple-500',
      action: () => navigate('/navigation')
    },
    {
      title: '健康监测',
      description: '查看您的健康数据和运动记录',
      icon: 'fas fa-heartbeat',
      color: 'bg-red-500',
      action: () => navigate('/health')
    },
    {
      title: '紧急求助',
      description: '一键联系家人或医疗服务',
      icon: 'fas fa-phone',
      color: 'bg-orange-500',
      action: () => navigate('/emergency')
    }
  ];

  const weatherInfo = {
    temperature: '22°C',
    condition: '晴朗',
    humidity: '65%',
    wind: '微风'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">欢迎回来！</h1>
          <p className="text-lg text-gray-600 mt-2">今天是美好的一天，让我们一起出发吧</p>
        </div>
        
        <div className="card">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fas fa-sun text-yellow-500 text-2xl"></i>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{weatherInfo.temperature}</div>
              <div className="text-sm text-gray-600">{weatherInfo.condition}</div>
              <div className="text-xs text-gray-500">湿度 {weatherInfo.humidity} · {weatherInfo.wind}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {quickActions.map((action, index) => (
          <div
            key={index}
            onClick={action.action}
            className="card hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center`}>
                <i className={`${action.icon} text-white text-2xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 leading-relaxed">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-route text-blue-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">今日行程</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">上午 10:00</span>
              <span className="text-sm text-gray-800">医院复查</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">下午 15:00</span>
              <span className="text-sm text-gray-800">公园散步</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-battery-three-quarters text-green-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">轮椅状态</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">电量</span>
              <span className="text-green-600 font-semibold">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">续航</span>
              <span className="text-gray-800">约 12 小时</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">状态</span>
              <span className="text-green-600">正常</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-heart text-purple-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">健康提醒</h3>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              <i className="fas fa-pills text-blue-500 mr-2"></i>
              记得服用降压药
            </div>
            <div className="text-sm text-gray-600">
              <i className="fas fa-glass-water text-blue-500 mr-2"></i>
              今日已饮水 6 杯
            </div>
            <div className="text-sm text-gray-600">
              <i className="fas fa-walking text-green-500 mr-2"></i>
              今日活动 45 分钟
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;