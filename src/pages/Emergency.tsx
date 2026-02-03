import React, { useState } from 'react';

const Emergency: React.FC = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const emergencyContacts = [
    { name: '家人 - 张女士', phone: '138****8888', relation: '女儿', priority: 1 },
    { name: '家庭医生 - 李医生', phone: '139****9999', relation: '主治医师', priority: 2 },
    { name: '社区医院', phone: '010-12345678', relation: '急诊科', priority: 3 },
    { name: '120急救', phone: '120', relation: '紧急医疗', priority: 4 }
  ];

  const quickActions = [
    {
      title: '医疗急救',
      description: '身体不适或突发疾病',
      icon: 'fas fa-ambulance',
      color: 'bg-red-500',
      action: () => handleEmergencyCall('medical')
    },
    {
      title: '跌倒求助',
      description: '轮椅翻倒或跌倒无法起身',
      icon: 'fas fa-exclamation-triangle',
      color: 'bg-orange-500',
      action: () => handleEmergencyCall('fall')
    },
    {
      title: '迷路求助',
      description: '找不到回家的路',
      icon: 'fas fa-map-marked-alt',
      color: 'bg-blue-500',
      action: () => handleEmergencyCall('lost')
    },
    {
      title: '设备故障',
      description: '轮椅无法正常工作',
      icon: 'fas fa-tools',
      color: 'bg-purple-500',
      action: () => handleEmergencyCall('malfunction')
    }
  ];

  const handleEmergencyCall = (type: string) => {
    setIsEmergencyActive(true);
    setCountdown(10);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsEmergencyActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelEmergency = () => {
    setIsEmergencyActive(false);
    setCountdown(0);
  };

  return (
    <div className="space-y-6">
      {isEmergencyActive && (
        <div className="fixed inset-0 bg-red-600 bg-opacity-95 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-phone text-red-600 text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">正在拨打紧急电话</h2>
            <div className="text-6xl font-bold text-red-600 mb-4">{countdown}</div>
            <p className="text-gray-600 mb-6">将在 {countdown} 秒后自动拨打急救电话</p>
            <button
              onClick={cancelEmergency}
              className="btn-secondary w-full text-lg py-4"
            >
              取消呼叫
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">紧急求助</h1>
          <p className="text-lg text-gray-600 mt-1">遇到紧急情况时，快速获得帮助</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-green-600">
            <i className="fas fa-shield-alt text-lg"></i>
            <span className="font-medium">安全模式已启用</span>
          </div>
          <button className="btn-secondary">
            <i className="fas fa-cog mr-2"></i>
            设置
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {quickActions.map((action, index) => (
          <div
            key={index}
            onClick={action.action}
            className="card hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 border-2 border-transparent hover:border-red-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center`}>
                <i className={`${action.icon} text-white text-2xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{action.title}</h3>
                <p className="text-gray-600 mt-1">{action.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-center py-3 bg-gray-50 rounded-lg">
              <span className="text-lg font-medium text-gray-700">点击求助</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">紧急联系人</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{contact.priority}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{contact.phone}</span>
                  <button className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                    <i className="fas fa-phone text-green-600"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-secondary w-full mt-4">
            <i className="fas fa-plus mr-2"></i>
            添加联系人
          </button>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">个人信息</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">基本信息</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">姓名:</span>
                  <span className="text-gray-900">张老先生</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">年龄:</span>
                  <span className="text-gray-900">75岁</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">血型:</span>
                  <span className="text-gray-900">A型</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">身份证:</span>
                  <span className="text-gray-900">110***********1234</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">医疗信息</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">过敏史:</span>
                  <span className="text-gray-900">青霉素</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">慢性病:</span>
                  <span className="text-gray-900">高血压、糖尿病</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">常用药:</span>
                  <span className="text-gray-900">降压药、胰岛素</span>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full">
              <i className="fas fa-edit mr-2"></i>
              编辑信息
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">安全功能</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-map-marker-alt text-green-600 text-2xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">位置共享</h4>
            <p className="text-sm text-gray-600 mb-3">实时位置已共享给紧急联系人</p>
            <div className="flex items-center justify-center">
              <button className="w-12 h-6 bg-green-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-bell text-blue-600 text-2xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">跌倒检测</h4>
            <p className="text-sm text-gray-600 mb-3">自动检测跌倒并发送警报</p>
            <div className="flex items-center justify-center">
              <button className="w-12 h-6 bg-blue-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-heartbeat text-purple-600 text-2xl"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">健康监测</h4>
            <p className="text-sm text-gray-600 mb-3">异常健康数据自动报警</p>
            <div className="flex items-center justify-center">
              <button className="w-12 h-6 bg-purple-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;