
import React, { useState, useEffect, useMemo } from 'react';
import Snowfall from './components/Snowfall.tsx';

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