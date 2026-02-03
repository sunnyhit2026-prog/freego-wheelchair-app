import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const settingsTabs = [
    { id: 'general', label: '通用设置', icon: 'fas fa-cog' },
    { id: 'wheelchair', label: '轮椅设置', icon: 'fas fa-wheelchair' },
    { id: 'voice', label: '语音设置', icon: 'fas fa-microphone' },
    { id: 'safety', label: '安全设置', icon: 'fas fa-shield-alt' },
    { id: 'account', label: '账户设置', icon: 'fas fa-user' }
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">显示设置</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">字体大小</p>
              <p className="text-sm text-gray-600">调整界面文字大小</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>小</option>
              <option>标准</option>
              <option selected>大</option>
              <option>特大</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">夜间模式</p>
              <p className="text-sm text-gray-600">降低屏幕亮度，保护视力</p>
            </div>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">屏幕亮度</p>
              <p className="text-sm text-gray-600">调整屏幕亮度</p>
            </div>
            <input type="range" min="10" max="100" defaultValue="80" className="w-32" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">语言和地区</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">系统语言</p>
              <p className="text-sm text-gray-600">选择界面显示语言</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option selected>简体中文</option>
              <option>繁体中文</option>
              <option>English</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">时区</p>
              <p className="text-sm text-gray-600">设置当前时区</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option selected>北京时间 (UTC+8)</option>
              <option>上海时间 (UTC+8)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWheelchairSettings = () => (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">驾驶设置</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">最大速度</p>
              <p className="text-sm text-gray-600">设置轮椅最大行驶速度</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>慢速 (5km/h)</option>
              <option selected>标准 (8km/h)</option>
              <option>快速 (12km/h)</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">自动驾驶</p>
              <p className="text-sm text-gray-600">启用智能自动驾驶功能</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">避障灵敏度</p>
              <p className="text-sm text-gray-600">调整障碍物检测灵敏度</p>
            </div>
            <input type="range" min="1" max="10" defaultValue="7" className="w-32" />
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">舒适度设置</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">座椅加热</p>
              <p className="text-sm text-gray-600">启用座椅加热功能</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">按摩功能</p>
              <p className="text-sm text-gray-600">启用背部按摩功能</p>
            </div>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">座椅角度</p>
              <p className="text-sm text-gray-600">调整座椅倾斜角度</p>
            </div>
            <input type="range" min="0" max="45" defaultValue="15" className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderVoiceSettings = () => (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">语音助手</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">语音唤醒</p>
              <p className="text-sm text-gray-600">说"小悦"唤醒语音助手</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">语音速度</p>
              <p className="text-sm text-gray-600">调整语音播报速度</p>
            </div>
            <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-32" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">音量</p>
              <p className="text-sm text-gray-600">调整语音音量大小</p>
            </div>
            <input type="range" min="0" max="100" defaultValue="80" className="w-32" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">语音类型</p>
              <p className="text-sm text-gray-600">选择语音助手声音</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option selected>温柔女声</option>
              <option>亲切男声</option>
              <option>活泼女声</option>
              <option>沉稳男声</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">语音识别</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">方言识别</p>
              <p className="text-sm text-gray-600">支持方言语音识别</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">噪音过滤</p>
              <p className="text-sm text-gray-600">过滤环境噪音干扰</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSafetySettings = () => (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">紧急功能</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">跌倒检测</p>
              <p className="text-sm text-gray-600">自动检测跌倒并报警</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">位置共享</p>
              <p className="text-sm text-gray-600">与紧急联系人共享位置</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">健康监测报警</p>
              <p className="text-sm text-gray-600">异常健康数据自动报警</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">隐私设置</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">数据收集</p>
              <p className="text-sm text-gray-600">允许收集使用数据以改善服务</p>
            </div>
            <button className="w-12 h-6 bg-primary-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">语音录音</p>
              <p className="text-sm text-gray-600">保存语音对话记录</p>
            </div>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">个人资料</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-gray-500 text-2xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">张老先生</h4>
              <p className="text-gray-600">75岁 · 北京市朝阳区</p>
              <button className="text-primary-600 hover:text-primary-700 text-sm mt-1">更换头像</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <input type="text" defaultValue="张老先生" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">年龄</label>
              <input type="number" defaultValue="75" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">电话</label>
              <input type="tel" defaultValue="138****8888" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">血型</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option selected>A型</option>
                <option>B型</option>
                <option>AB型</option>
                <option>O型</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">系统信息</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">应用版本</span>
            <span className="text-gray-900">v2.1.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">系统版本</span>
            <span className="text-gray-900">Android 12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">设备型号</span>
            <span className="text-gray-900">FreeGo Pro Max</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">序列号</span>
            <span className="text-gray-900">FG2024001234</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <button className="btn-secondary w-full">
            <i className="fas fa-download mr-2"></i>
            检查更新
          </button>
          <button className="btn-secondary w-full">
            <i className="fas fa-life-ring mr-2"></i>
            技术支持
          </button>
          <button className="text-red-600 hover:text-red-700 w-full py-2">
            <i className="fas fa-sign-out-alt mr-2"></i>
            退出登录
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'wheelchair': return renderWheelchairSettings();
      case 'voice': return renderVoiceSettings();
      case 'safety': return renderSafetySettings();
      case 'account': return renderAccountSettings();
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">系统设置</h1>
          <p className="text-lg text-gray-600 mt-1">个性化您的FreeGo智能轮椅体验</p>
        </div>
        
        <button className="btn-primary">
          <i className="fas fa-save mr-2"></i>
          保存设置
        </button>
      </div>

      <div className="flex space-x-6">
        <div className="w-64">
          <div className="card p-0">
            <div className="space-y-1">
              {settingsTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <i className={`${tab.icon} text-lg`}></i>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;