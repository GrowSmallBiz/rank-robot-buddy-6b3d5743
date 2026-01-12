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
    {/* Four-pointed star shape */}
    <path 
      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" 
      fill="url(#geminiGradient)"
    />
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
    {/* OpenAI spiral/flower icon */}
    <path 
      d="M22.2819 9.8211C22.5844 8.89526 22.6485 7.90593 22.4677 6.94736C22.2869 5.98879 21.8676 5.09425 21.2518 4.34865C20.4198 3.34015 19.2714 2.63997 17.9914 2.36203C16.7114 2.08408 15.3737 2.24467 14.1964 2.8177C13.5242 2.21975 12.7099 1.79872 11.8303 1.59408C10.9507 1.38944 10.0336 1.40792 9.16299 1.64781C8.29242 1.88771 7.49596 2.34119 6.84756 2.96619C6.19916 3.59119 5.71912 4.36747 5.44929 5.22649C4.46824 5.42652 3.55694 5.87141 2.80096 6.52049C2.04497 7.16956 1.46991 7.99902 1.12986 8.93072C0.744679 10.0017 0.684476 11.1642 0.957083 12.2694C1.22969 13.3746 1.82259 14.3727 2.66229 15.1406C2.35979 16.0665 2.29571 17.0558 2.47651 18.0144C2.6573 18.973 3.07661 19.8675 3.69241 20.6131C4.52477 21.6209 5.67316 22.3203 6.95302 22.5975C8.23287 22.8746 9.57037 22.7133 10.7471 22.1397C11.4195 22.7386 12.2344 23.1601 13.1147 23.3647C13.9949 23.5692 14.9127 23.5501 15.7836 23.3092C16.6545 23.0683 17.4508 22.6136 18.0988 21.9873C18.7468 21.361 19.2261 20.5834 19.4949 19.7233C20.4759 19.5233 21.3872 19.0784 22.1432 18.4293C22.8992 17.7803 23.4742 16.9508 23.8143 16.0191C24.1995 14.9481 24.2597 13.7856 23.9871 12.6804C23.7145 11.5752 23.1216 10.5771 22.2819 9.80949V9.8211Z" 
      fill="#10A37F"
    />
    <path 
      d="M10.4374 18.7503V14.0625L6.37451 11.7188V15.0469C6.37451 15.2344 6.46826 15.4219 6.60889 15.5156L10.4374 18.7503Z" 
      fill="white"
    />
    <path 
      d="M12 11.2969L16.0629 8.95312L12 6.60938L7.93701 8.95312L12 11.2969Z" 
      fill="white"
    />
    <path 
      d="M12.5627 14.0625V18.7503L16.3912 15.5156C16.5318 15.4219 16.6256 15.2344 16.6256 15.0469V11.7188L12.5627 14.0625Z" 
      fill="white"
    />
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
    {/* Perplexity geometric pattern */}
    <path 
      d="M12 2L12 8M12 16V22M12 12L6 6M12 12L18 6M12 12L6 18M12 12L18 18" 
      stroke="#20B2AA" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" fill="#20B2AA" />
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
    {/* Grok stylized X/checkmark */}
    <path 
      d="M4 4L11 12L4 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M13 12L20 4" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M13 12L20 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
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
      <linearGradient id="copilotGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#05B3F0" />
        <stop offset="100%" stopColor="#7B83EB" />
      </linearGradient>
      <linearGradient id="copilotGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7B83EB" />
        <stop offset="100%" stopColor="#05B3F0" />
      </linearGradient>
    </defs>
    {/* Copilot abstract shape */}
    <path 
      d="M12 3C7.02944 3 3 7.02944 3 12C3 14.5 4 16.5 5.5 18L12 12V3Z" 
      fill="url(#copilotGradient1)"
    />
    <path 
      d="M12 3C16.9706 3 21 7.02944 21 12C21 14.5 20 16.5 18.5 18L12 12V3Z" 
      fill="url(#copilotGradient2)"
    />
    <path 
      d="M5.5 18C7 19.5 9.5 21 12 21C14.5 21 17 19.5 18.5 18L12 12L5.5 18Z" 
      fill="#05B3F0"
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
    {/* Google G logo */}
    <path 
      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" 
      fill="#FFC107"
    />
    <path 
      d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" 
      fill="#FF3D00"
    />
    <path 
      d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.0011 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" 
      fill="#4CAF50"
    />
    <path 
      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" 
      fill="#1976D2"
    />
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
