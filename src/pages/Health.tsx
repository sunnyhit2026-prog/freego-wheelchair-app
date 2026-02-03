import React, { useState } from 'react';

const Health: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const healthData = {
    heartRate: { current: 72, normal: '60-100', status: 'normal' },
    bloodPressure: { systolic: 120, diastolic: 80, status: 'normal' },
    steps: { today: 3240, goal: 5000, percentage: 65 },
    activeTime: { today: 45, goal: 60, percentage: 75 }
  };

  const medicationReminders = [
    { name: '降压药', time: '08:00', taken: true },
    { name: '维生素D', time: '12:00', taken: true },
    { name: '钙片', time: '18:00', taken: false }
  ];

  const recentActivities = [
    { time: '09:30', activity: '晨间散步', duration: '20分钟', calories: 45 },
    { time: '14:15', activity: '轮椅运动', duration: '15分钟', calories: 25 },
    { time: '16:45', activity: '��吸练习', duration: '10分钟', calories: 8 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">健康监测</h1>
          <p className="text-lg text-gray-600 mt-1">关注您的健康状况，保持最佳状态</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="today">今天</option>
            <option value="week">本周</option>
            <option value="month">本月</option>
          </select>
          <button className="btn-secondary">
            <i className="fas fa-download mr-2"></i>
            导出报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <i className="fas fa-heartbeat text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">心率</h3>
                <p className="text-sm text-gray-600">正常范围: {healthData.heartRate.normal}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {healthData.heartRate.current}
              <span className="text-lg text-gray-600 ml-1">bpm</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">正常</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <i className="fas fa-tint text-blue-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">血压</h3>
                <p className="text-sm text-gray-600">收缩压/舒张压</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}
              <span className="text-sm text-gray-600 ml-1">mmHg</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">正常</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <i className="fas fa-walking text-green-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">步数</h3>
                <p className="text-sm text-gray-600">目标: {healthData.steps.goal.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {healthData.steps.today.toLocaleString()}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${healthData.steps.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{healthData.steps.percentage}% 完成</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <i className="fas fa-clock text-purple-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">活动时间</h3>
                <p className="text-sm text-gray-600">目标: {healthData.activeTime.goal}分钟</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {healthData.activeTime.today}
              <span className="text-sm text-gray-600 ml-1">分钟</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-purple-500 h-2 rounded-full" 
                style={{ width: `${healthData.activeTime.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{healthData.activeTime.percentage}% 完成</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">用药提醒</h3>
          <div className="space-y-3">
            {medicationReminders.map((med, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    med.taken ? 'bg-green-100' : 'bg-orange-100'
                  }`}>
                    <i className={`fas ${med.taken ? 'fa-check' : 'fa-pills'} ${
                      med.taken ? 'text-green-600' : 'text-orange-600'
                    }`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{med.name}</p>
                    <p className="text-sm text-gray-600">{med.time}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  med.taken 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {med.taken ? '已服用' : '待服用'}
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary w-full mt-4">
            <i className="fas fa-plus mr-2"></i>
            添加用药提醒
          </button>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">今日活动</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-dumbbell text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.activity}</p>
                    <p className="text-sm text-gray-600">{activity.time} · {activity.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{activity.calories} 卡路里</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-secondary w-full mt-4">
            <i className="fas fa-plus mr-2"></i>
            记录活动
          </button>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">健康趋势</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900">心率变化</h4>
            <p className="text-sm text-gray-600 mt-1">过去7天平均: 74 bpm</p>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-arrow-down text-green-500 text-sm mr-1"></i>
              <span className="text-sm text-green-600">稳定下降</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-tint text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900">血压趋势</h4>
            <p className="text-sm text-gray-600 mt-1">过去7天平均: 118/78</p>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-minus text-yellow-500 text-sm mr-1"></i>
              <span className="text-sm text-yellow-600">保持稳定</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-walking text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900">活动水平</h4>
            <p className="text-sm text-gray-600 mt-1">过去7天平均: 3850步</p>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-arrow-up text-green-500 text-sm mr-1"></i>
              <span className="text-sm text-green-600">持续改善</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-bed text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900">睡眠质量</h4>
            <p className="text-sm text-gray-600 mt-1">过去7天平均: 7.2小时</p>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-check text-green-500 text-sm mr-1"></i>
              <span className="text-sm text-green-600">质量良好</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;