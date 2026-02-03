import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '您好！我是您的智能助手小悦，很高兴为您服务。今天感觉怎么样？',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputText('');
      
      setTimeout(() => {
        const responses = [
          '我理解您的感受，让我们聊聊别的话题吧。',
          '今天天气不错，要不要出去走走？',
          '您说得对，我会记住这个信息的。',
          '有什么我可以帮助您的吗？',
          '听起来很有趣，能告诉我更多吗？'
        ];
        
        const response: Message = {
          id: messages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: 'assistant',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputText('刚才说的话已经转换成文字了');
      }, 3000);
    }
  };

  const quickReplies = [
    '我想聊天',
    '今天天气怎么样？',
    '播放音乐',
    '我想去公园',
    '帮我打电话',
    '我有点累了'
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">语音助手</h1>
          <p className="text-base md:text-lg text-gray-600 mt-1">随时与我聊天，我会陪伴您</p>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="btn-secondary text-sm md:text-base">
            <i className="fas fa-volume-up mr-1 md:mr-2"></i>
            <span className="hidden sm:inline">语音播报</span>
            <span className="sm:hidden">播报</span>
          </button>
          <button className="btn-secondary text-sm md:text-base">
            <i className="fas fa-cog mr-1 md:mr-2"></i>
            设置
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mb-16 md:mb-0">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-4 overflow-hidden">
            <div className="h-full overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-lg leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 flex items-center space-x-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="输入您想说的话..."
                  className="flex-1 text-lg px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  onClick={handleVoiceInput}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'} text-xl`}></i>
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                发送
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">快速回复</h3>
            <div className="space-y-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(reply)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 border border-gray-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          <div className="card mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">语音设置</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">语音速度</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  defaultValue="1"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">音量</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="80"
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">自动播报</span>
                <button className="w-12 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;