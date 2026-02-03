import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const [currentLocation] = useState('北京市朝阳区建国门外大街1号');

  const commonDestinations = [
    { name: '北京协和医院', address: '东城区帅府园1号', distance: '2.3公里', time: '8分钟' },
    { name: '朝阳公园', address: '朝阳区朝阳公园南路1号', distance: '1.8公里', time: '6分钟' },
    { name: '国贸商城', address: '朝阳区建国门外大街1号', distance: '0.5公里', time: '2分钟' },
    { name: '家乐福超市', address: '朝阳区光华路甲8号', distance: '1.2公里', time: '4分钟' }
  ];

  const handleStartNavigation = (dest?: string) => {
    const target = dest || destination;
    if (target) {
      setIsNavigating(true);
      setTimeout(() => {
        setIsNavigating(false);
      }, 3000);
    }
  };

  const handleVoiceInput = () => {
    setTimeout(() => {
      setDestination('北京协和医院');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">智能导航</h1>
          <p className="text-lg text-gray-600 mt-1">告诉我您想去哪里，我来规划最佳路线</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="btn-secondary">
            <i className="fas fa-history mr-2"></i>
            历史记录
          </button>
          <button className="btn-secondary">
            <i className="fas fa-bookmark mr-2"></i>
            收藏地点
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">目的地搜索</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">当前位置</p>
                  <p className="text-gray-900">{currentLocation}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="flex-1 flex items-center space-x-3">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="请输入目的地..."
                    className="flex-1 text-lg px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    onClick={handleVoiceInput}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <i className="fas fa-microphone text-gray-600"></i>
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => handleStartNavigation()}
                disabled={!destination || isNavigating}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isNavigating ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    正在规划路线...
                  </>
                ) : (
                  <>
                    <i className="fas fa-route mr-2"></i>
                    开始导航
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">常用目的地</h3>
            <div className="grid grid-cols-2 gap-4">
              {commonDestinations.map((dest, index) => (
                <div
                  key={index}
                  onClick={() => handleStartNavigation(dest.name)}
                  className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{dest.name}</h4>
                    <span className="text-sm text-primary-600 font-medium">{dest.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{dest.address}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {dest.distance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">导航设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">避开拥堵</span>
                <button className="w-12 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">语音提示</span>
                <button className="w-12 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">无障碍路线</span>
                <button className="w-12 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">行驶速度</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>慢速 (5km/h)</option>
                  <option>标准 (8km/h)</option>
                  <option>快速 (12km/h)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">轮椅状态</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">自动驾驶</span>
                <span className="text-green-600 font-semibold">已启用</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">避障系统</span>
                <span className="text-green-600 font-semibold">正常</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">GPS信号</span>
                <span className="text-green-600 font-semibold">强</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">电池电量</span>
                <span className="text-green-600 font-semibold">85%</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">紧急功能</h3>
            <div className="space-y-3">
              <button className="btn-danger w-full">
                <i className="fas fa-stop mr-2"></i>
                紧急停止
              </button>
              <button className="btn-secondary w-full">
                <i className="fas fa-home mr-2"></i>
                返回家中
              </button>
              <button className="btn-secondary w-full">
                <i className="fas fa-phone mr-2"></i>
                呼叫帮助
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;