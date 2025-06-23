
export interface NavItem {
  name: string;
  path: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional: for simple icons
  link: string;
  details?: string[]; // For more detailed explanations on feature pages
  animationComponent?: React.FC<{ isPreview?: boolean }>; // Component for animated demonstration
}

// Example types for animated components
export interface AnimatedCandidate {
  id: string;
  name: string;
  source?: string;
  score?: number | string;
  status?: string;
  resumeLink?: boolean;
  imported?: boolean;
}

export interface AnimatedMessage {
  id: string;
  sender: 'user' | 'recruiter' | 'ai';
  text: string;
  timestamp?: string;
}