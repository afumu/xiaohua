
import React, { useState, useEffect, useMemo } from 'react';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullCard, setShowFullCard] = useState(false);

  const recipient = "小花";
  const sender = "你的好朋友";

  // 预设的10条温馨祝福语
  const messages = useMemo(() => [
    `亲爱的小花：\n\n2025年的第一场雪或许还没落下，但我的祝福已经提前抵达。愿这个圣诞节，你的世界被星光铺满，温暖如初。圣诞快乐！`,
    `致小花：\n\n愿你在2025年的冬日里，拥有一炉炭火的温暖，一角星空的灿烂。愿所有的美好都如期而至，愿你永远像花儿一样绽放。圣诞快乐！`,
    `小花，圣诞快乐！\n\n在这个特别的2025圣诞季，愿麋鹿带走你的烦恼，铃儿响叮当敲开你的幸福之门。愿你每一天都充满惊喜与欢笑。`,
    `亲爱的小花：\n\n圣诞树上挂满的小灯泡，是我为你点燃的祈愿。愿你在即将到来的2026年里，勇敢去爱，热烈生活，万事胜意！`,
    `致最特别的小花：\n\n冬至已过，春归有期。在这充满魔法的圣诞夜，愿你的心窗始终明亮，愿你被这个世界温柔以待。圣诞快乐，岁岁平安。`,
    `小花：\n\n愿这封跨越时空的电子信笺，能为你带去2025年冬日里最暖的一抹红。愿你圣诞快乐，新年更有新气象！`,
    `亲爱的小花：\n\n无论窗外是否有雪，我的心里始终为你留了一片纯净的白。愿你在这个圣诞节，收到的不仅是礼物，更有久违的感动与安宁。`,
    `致小花：\n\n愿2025年的圣诞钟声，为你敲响健康、喜乐与自由。愿你在追梦的路上，偶尔停下脚步，感受这人间最纯粹的节日温暖。`,
    `小花：\n\n这就是为你准备的圣诞惊喜。愿你的口袋里总有糖果，眼里总有星河。2025圣诞快乐，我的朋友！`,
    `亲爱的小花：\n\n岁末将至，敬颂冬绥。愿你在忙碌的生活中，依然保持对美好的感知力。圣诞快乐，愿新的一年万事顺遂，平安喜乐。`
  ], []);

  // 随机选择一条祝福语
  const randomMessage = useMemo(() => {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowFullCard(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-[#050a14] overflow-hidden">
      <Snowfall />
      
      {/* 装饰性背景光晕 */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      {!showFullCard ? (
        <div className="flex flex-col items-center z-10 space-y-12">
          <div className="text-center">
             <h1 className="text-3xl md:text-4xl text-white/80 font-light tracking-[0.5em] mb-4 uppercase">You've Got Mail</h1>
             <p className="text-red-500/80 handwriting text-2xl animate-bounce">点击信封开启 2025 的惊喜</p>
          </div>
          
          <div className="envelope-wrapper">
            <div 
              className={`envelope ${isOpen ? 'open' : ''}`} 
              onClick={() => setIsOpen(true)}
            >
              <div className="card-preview font-serif italic">
                A 2025 Christmas Wish for {recipient}...
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-[10] pointer-events-none">
                <div className="w-12 h-12 bg-yellow-600 rounded-full border-4 border-yellow-700 shadow-xl flex items-center justify-center">
                  <span className="text-white text-xl">❀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg z-10 animate-fade-in relative">
          {/* 贺卡主体 */}
          <div className="glass-card rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10">
            
            {/* 闪烁效果 */}
            <div className="sparkle w-2 h-2 top-10 left-10" style={{ animationDelay: '0.2s' }}></div>
            <div className="sparkle w-1 h-1 top-20 right-20" style={{ animationDelay: '0.8s' }}></div>
            <div className="sparkle w-3 h-3 bottom-40 left-20" style={{ animationDelay: '1.2s' }}></div>
            <div className="sparkle w-2 h-2 top-1/2 right-10" style={{ animationDelay: '0.5s' }}></div>

            <header className="relative mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-red-600 text-xs tracking-[0.4em] uppercase font-bold">Volume 2025</span>
                <span className="text-gray-600 text-xs tracking-widest">★ ★ ★ ★ ★</span>
              </div>
              <h2 className="text-4xl font-bold text-white chinese-fancy tracking-wider">致 {recipient}</h2>
              <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-red-600 to-transparent"></div>
            </header>

            <main className="relative mb-12">
              <div className="absolute -left-6 top-0 text-6xl text-white/5 font-serif">“</div>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed handwriting tracking-wide whitespace-pre-line relative z-10">
                {randomMessage}
              </p>
              <div className="absolute -right-6 bottom-0 text-6xl text-white/5 font-serif">”</div>
            </main>

            <footer className="flex justify-between items-end border-t border-white/5 pt-8">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">Location</p>
                <p className="text-xs text-gray-400">Somewhere Under the Stars</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs italic mb-2 font-serif tracking-widest">Always yours,</p>
                <p className="text-4xl font-bold text-red-500 chinese-fancy hover:text-red-400 transition-colors cursor-default drop-shadow-lg">
                  {sender}
                </p>
                <p className="text-[9px] text-gray-600 tracking-[0.1em] mt-1 uppercase">December 2025</p>
              </div>
            </footer>

            {/* 背景中的圣诞树轮廓 */}
            <div className="absolute -bottom-20 -left-20 opacity-[0.05] pointer-events-none transform -rotate-12">
              <svg width="400" height="400" viewBox="0 0 100 100">
                <path d="M50 10 L80 80 L20 80 Z" fill="white" />
                <circle cx="50" cy="15" r="5" fill="white" />
              </svg>
            </div>
          </div>

          <div className="mt-8 text-center flex flex-col items-center gap-4">
             <button 
               onClick={() => {window.location.reload();}}
               className="bg-white/5 hover:bg-white/10 text-white/60 hover:text-white px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase transition-all border border-white/10"
             >
               换一张祝福语 ↺
             </button>
             <button 
               onClick={() => {setShowFullCard(false); setIsOpen(false);}}
               className="text-gray-600 hover:text-gray-400 text-[10px] tracking-[0.3em] uppercase transition-all"
             >
               ← 重新收起信封
             </button>
          </div>
        </div>
      )}

      {/* 底部装饰性版权 */}
      <footer className="absolute bottom-6 flex flex-col items-center space-y-2 opacity-30">
        <div className="w-1 h-8 bg-gradient-to-b from-transparent to-gray-500"></div>
        <p className="text-[9px] tracking-[0.8em] text-gray-500 uppercase">Dedicated to Xiao Hua · 2025</p>
      </footer>
    </div>
  );
};

export default App;
