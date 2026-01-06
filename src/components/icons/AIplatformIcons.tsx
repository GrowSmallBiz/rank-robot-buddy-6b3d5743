import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const GeminiIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <defs>
      <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path 
      d="M12 2L12 22M12 12C12 12 2 9 2 12C2 15 12 12 12 12C12 12 22 15 22 12C22 9 12 12 12 12Z" 
      stroke="url(#geminiGradient)" 
      strokeWidth="2.5" 
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="12" cy="4" r="2" fill="#4285F4" />
    <circle cx="12" cy="20" r="2" fill="#D96570" />
  </svg>
);

export const ChatGPTIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="#10A37F" strokeWidth="2" fill="none" />
    <path 
      d="M8 12C8 9.5 10 8 12 8C14 8 16 9.5 16 12C16 14.5 14 16 12 16" 
      stroke="#10A37F" 
      strokeWidth="2" 
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="12" cy="12" r="2" fill="#10A37F" />
  </svg>
);

export const PerplexityIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 2L4 8V16L12 22L20 16V8L12 2Z" 
      stroke="#20B2AA" 
      strokeWidth="2" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M12 2V22M4 8L20 16M20 8L4 16" 
      stroke="#20B2AA" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const GrokIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path 
      d="M7 12L10 15L17 8" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const CopilotIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <defs>
      <linearGradient id="copilotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BCF2" />
        <stop offset="33%" stopColor="#7FBA00" />
        <stop offset="66%" stopColor="#F25022" />
        <stop offset="100%" stopColor="#FFB900" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" fill="url(#copilotGradient)" />
    <path 
      d="M4 20C4 16 7.5 13 12 13C16.5 13 20 16 20 20" 
      stroke="url(#copilotGradient)" 
      strokeWidth="2.5" 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const GoogleAIIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M21.35 11.1H12.18V13.83H17.64C17.11 16.64 14.79 18.5 12.18 18.5C9.11 18.5 6.55 15.94 6.55 12.87C6.55 9.8 9.11 7.24 12.18 7.24C13.59 7.24 14.87 7.77 15.85 8.65L17.87 6.63C16.36 5.23 14.37 4.37 12.18 4.37C7.52 4.37 3.68 8.21 3.68 12.87C3.68 17.53 7.52 21.37 12.18 21.37C16.84 21.37 20.68 17.53 20.68 12.87C20.68 12.27 20.61 11.68 20.5 11.1H21.35Z" 
      fill="#4285F4"
    />
    <circle cx="12" cy="12.87" r="3" fill="#EA4335" />
  </svg>
);

// Export all icons as a map for easy access
export const AIplatformIconMap = {
  gemini: GeminiIcon,
  chatgpt: ChatGPTIcon,
  perplexity: PerplexityIcon,
  grok: GrokIcon,
  copilot: CopilotIcon,
  googleai: GoogleAIIcon,
};
