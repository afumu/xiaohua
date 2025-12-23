
import React, { useMemo } from 'react';

const Snowfall: React.FC = () => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 12 + 8}s`,
      delay: `${Math.random() * 10}s`,
      size: `${Math.random() * 15 + 5}px`,
      opacity: Math.random() * 0.6 + 0.2,
      blur: i % 5 === 0 ? '2px' : '0px', // 每5片雪花有一片模糊，增加深度感
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map(snow => (
        <div
          key={snow.id}
          className="snowflake"
          style={{
            left: snow.left,
            animationDuration: snow.duration,
            animationDelay: snow.delay,
            fontSize: snow.size,
            opacity: snow.opacity,
            filter: `blur(${snow.blur})`,
            textShadow: '0 0 5px rgba(255,255,255,0.8)'
          }}
        >
          {/* Use snow.id instead of i as i is not defined in this scope */}
          {snow.id % 2 === 0 ? '❄' : '❅'}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;