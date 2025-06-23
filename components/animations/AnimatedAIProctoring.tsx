
import React, { useState, useEffect } from 'react';
import { EyeIcon, MicrophoneIcon, ShieldCheckIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

interface AnimatedAIProctoringProps {
  isPreview?: boolean;
}

const proctoringEvents = [
  { id: 'eye', icon: EyeIcon, text: 'Eye tracking active', color: 'text-blue-500' },
  { id: 'mic', icon: MicrophoneIcon, text: 'Voice analysis enabled', color: 'text-green-500' },
  { id: 'screen', icon: ComputerDesktopIcon, text: 'Screenshare monitoring', color: 'text-indigo-500' },
  { id: 'anomaly', icon: ShieldCheckIcon, text: 'Potential anomaly detected: Unusual background noise', color: 'text-red-500', isAlert: true },
  { id: 'focus', icon: EyeIcon, text: 'Candidate looking away frequently', color: 'text-yellow-500', isAlert: true },
];

const AnimatedAIProctoring: React.FC<AnimatedAIProctoringProps> = ({ isPreview = false }) => {
  const [activeEventIndex, setActiveEventIndex] = useState(-1);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    if (isPreview) {
        setActiveEventIndex(2); // Show a couple of active items
        if (proctoringEvents[3]) {
             setAlerts([proctoringEvents[3].text]);
        }
        return;
    }

    const intervalId = window.setInterval(() => {
      setActiveEventIndex(prev => {
        const nextIndex = (prev + 1) % proctoringEvents.length;
        if (proctoringEvents[nextIndex].isAlert) {
            setAlerts(a => [...a.slice(-2), proctoringEvents[nextIndex].text]); // Keep last 3 alerts
        }
        return nextIndex;
      });
    }, 2000); // Cycle through events every 2 seconds

    return () => window.clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPreview]); // Removed alerts from dependency array to avoid re-triggering interval on alert change

  const currentEvent = activeEventIndex !== -1 && proctoringEvents[activeEventIndex] ? proctoringEvents[activeEventIndex] : null;
  const CurrentIcon = currentEvent ? currentEvent.icon : ShieldCheckIcon;
  const currentText = currentEvent ? currentEvent.text : "Proctoring Initialized";
  const currentColor = currentEvent ? currentEvent.color : "text-gray-500";
  
  const statusText = isPreview ? "Proctoring Active" : "Live Proctoring Feed";

  if (isPreview) {
    return (
      <div className="w-full h-40 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-2 text-center shadow-inner overflow-hidden">
        <ShieldCheckIcon className="w-8 h-8 text-brandOrange-DEFAULT mb-1" />
        <p className="text-xs font-semibold text-brandGray-dark">AI Proctoring</p>
        <div className="flex space-x-1 mt-1">
            {proctoringEvents[0] && React.createElement(proctoringEvents[0].icon, { className: `w-4 h-4 ${proctoringEvents[0].color}` })}
            {proctoringEvents[1] && React.createElement(proctoringEvents[1].icon, { className: `w-4 h-4 ${proctoringEvents[1].color}` })}
            {proctoringEvents[2] && React.createElement(proctoringEvents[2].icon, { className: `w-4 h-4 ${proctoringEvents[2].color}` })}
        </div>
        {alerts.length > 0 && <p className="text-xxs text-red-500 mt-0.5 truncate">{alerts[0]}</p>}
        <p className="text-xxs text-gray-500 mt-0.5">{statusText}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-gray-200 min-h-[350px] flex flex-col">
      <div className="flex items-center mb-4">
        <ShieldCheckIcon className="w-8 h-8 text-brandOrange-DEFAULT mr-3" />
        <h3 className="text-lg font-semibold text-brandGray-dark">Advanced AI Proctoring</h3>
      </div>

      {/* Mock Candidate Video Feed */}
      <div className="relative w-full aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
        <img src={`https://picsum.photos/seed/${activeEventIndex}/400/225`} alt="Candidate Feed" className="object-cover w-full h-full rounded-lg opacity-70"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30">
            <CurrentIcon className={`w-12 h-12 mb-2 ${currentColor}`} />
            <p className={`text-sm font-medium text-white text-center ${currentEvent?.isAlert ? 'animate-pulse' : ''}`}>{currentText}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 rounded-md mb-3 text-sm">
        <p className="font-semibold text-brandGray-dark">Proctoring Status:</p>
        <div className="flex items-center space-x-4 mt-2">
            {proctoringEvents.slice(0,3).map(event => ( 
                <div key={event.id} className={`flex items-center text-xs ${currentEvent && event.id === currentEvent.id && !currentEvent.isAlert ? event.color : 'text-gray-500'}`}>
                    <event.icon className={`w-4 h-4 mr-1 ${currentEvent && event.id === currentEvent.id && !currentEvent.isAlert ? 'animate-ping opacity-75 absolute' : ''}`} />
                    <event.icon className={`w-4 h-4 mr-1 relative`} /> 
                    <span>{event.text.split(' ')[0]} {event.text.split(' ')[1]}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-md text-sm">
        <p className="font-semibold text-red-700">Alert Log:</p>
        {alerts.length > 0 ? (
          <ul className="list-disc list-inside text-red-600 mt-1 space-y-0.5 max-h-20 overflow-y-auto">
            {alerts.slice().reverse().map((alert, i) => <li key={i} className="text-xs">{alert}</li>)}
          </ul>
        ) : (
          <p className="text-xs text-gray-500 mt-1">No critical alerts yet.</p>
        )}
      </div>
       {alerts.length === 0 && activeEventIndex === proctoringEvents.length -1 && !isPreview && ( 
         <button 
            onClick={() => { setActiveEventIndex(-1); setAlerts([]); }}
            className="mt-4 w-full bg-brandOrange-DEFAULT text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brandOrange-dark transition duration-150"
          >
           Restart Proctoring Demo
          </button>
      )}
    </div>
  );
};

export default AnimatedAIProctoring;
