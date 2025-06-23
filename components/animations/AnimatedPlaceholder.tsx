
import React from 'react';

interface AnimatedPlaceholderProps {
  title: string;
  isPreview?: boolean;
}

const AnimatedPlaceholder: React.FC<AnimatedPlaceholderProps> = ({ title, isPreview = false }) => {
  const heightClass = isPreview ? 'h-40' : 'h-64 md:h-80 lg:h-96';
  return (
    <div className={`w-full ${heightClass} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 text-center shadow-inner`}>
      <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 004.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M19.8 14.5L14.25 10m-4.5 0L5 14.5m0 0l5.25-4.5M5 14.5L4 13.25M19.8 14.5L20.8 13.25m-10.3 3.5A2.25 2.25 0 0012 19.5v.513c0 .607-.468 1.13-1.052 1.257L9 22.5M12 19.5v.513c0 .607.468 1.13 1.052 1.257L15 22.5m-3-4.5V10.75M9 11.25h6M7.5 15h9"></path></svg>
      <p className="text-sm font-medium text-gray-500">Animation: {title}</p>
      {isPreview && <p className="text-xs text-gray-400 mt-1">(Preview Mode)</p>}
      <p className="text-xs text-gray-400 mt-2">This is a placeholder. A dynamic animation will demonstrate this feature.</p>
    </div>
  );
};

export default AnimatedPlaceholder;
    