import React, { useState, useEffect } from 'react';

const RetroTaskbar = () => {
  const [binaryCodes, setBinaryCodes] = useState([]);

  // Generate random binary codes that float around
  useEffect(() => {
    const generateBinary = () => {
      const codes = [];
      for (let i = 0; i < 8; i++) {
        codes.push({
          id: i,
          value: Math.random().toString(2).substring(2, 10),
          top: Math.random() * 100,
          left: Math.random() * 100,
          speed: 0.5 + Math.random() * 2
        });
      }
      setBinaryCodes(codes);
    };

    generateBinary();

    const interval = setInterval(() => {
      setBinaryCodes(prev => 
        prev.map(code => ({
          ...code,
          top: (code.top + code.speed) % 100,
          left: (code.left + code.speed * 0.5) % 100
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 bg-[#3B5998] border-t-2 border-[#133783] flex items-center px-4 font-mono text-white text-sm overflow-hidden">
      {/* Pixelated face avatar */}
      <div className="mr-4 flex-shrink-0">
        <div className="w-8 h-8 bg-gray-300 relative overflow-hidden">
          {/* Pixelated face using grid */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i}
                className={`${i % 5 === 0 ? 'bg-[#3B5998]' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating binary codes in background */}
      {binaryCodes.map(code => (
        <div 
          key={code.id}
          className="absolute text-xs opacity-40 pointer-events-none"
          style={{
            top: `${code.top}%`,
            left: `${code.left}%`,
            animation: `float ${5 + code.speed}s linear infinite`
          }}
        >
          {code.value}
        </div>
      ))}

      {/* Taskbar navigation items */}
      <nav className="flex space-x-6">
        {['home', 'search', 'global', 'social', 'net', 'invite', 'faq', 'logout'].map(item => (
          <a 
            key={item}
            href="#"
            className="hover:underline hover:text-yellow-200 uppercase tracking-tight"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-5px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(5px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default RetroTaskbar;