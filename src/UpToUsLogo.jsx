import React from 'react';

export default function UpToUsLogo({ className = "w-12 h-12" }) {
  return (
    <svg 
      viewBox="0 0 160 120" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Circle - Red-Orange with UP */}
      <circle 
        cx="50" 
        cy="60" 
        r="50" 
        fill="#FF6B4A" 
      />
      <text 
        x="50" 
        y="72" 
        textAnchor="middle" 
        fill="white" 
        fontFamily="Georgia, serif" 
        fontWeight="bold" 
        fontSize="28"
      >
        UP
      </text>
      
      {/* Right Circle - Blue-Teal with US */}
      <circle 
        cx="110" 
        cy="60" 
        r="50" 
        fill="#4ECDC4" 
      />
      <text 
        x="110" 
        y="72" 
        textAnchor="middle" 
        fill="white" 
        fontFamily="Georgia, serif" 
        fontWeight="bold" 
        fontSize="28"
      >
        US
      </text>
      
      <defs>
        {/* Clip path for intersection - both circles must be present */}
        <clipPath id="overlap-clip">
          <circle cx="50" cy="60" r="50" />
        </clipPath>
      </defs>
      
      {/* Overlapping area - darker blue-grey (lens-shaped intersection) */}
      <circle 
        cx="110" 
        cy="60" 
        r="50" 
        fill="#34495E" 
        clipPath="url(#overlap-clip)"
      />
      
      {/* "to" text in the overlapping area */}
      <text 
        x="80" 
        y="68" 
        textAnchor="middle" 
        fill="white" 
        fontFamily="Arial, sans-serif" 
        fontSize="18"
        fontWeight="normal"
      >
        to
      </text>
    </svg>
  );
}

