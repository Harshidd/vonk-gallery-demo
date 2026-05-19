import React from "react";

interface VonkWordmarkProps {
  className?: string;
}

/**
 * Geometrically balanced, custom-drawn SVG wordmark for VONK.
 * Renders V-O-N-K with parallel diagonals, 45-degree branches, and institutional weight.
 */
export function VonkWordmark({ className = "h-6 w-auto" }: VonkWordmarkProps) {
  return (
    <svg
      viewBox="0 0 152 40"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VONK"
      role="img"
    >
      {/* V - Stark, balanced diagonals */}
      <path d="M 4,4 H 11.5 L 19,27 L 26.5,4 H 34 L 22.5,36 H 15.5 Z" />
      
      {/* O - Bold geometric ring */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 57,4 C 65.284,4 72,11.163 72,20 C 72,28.837 65.284,36 57,36 C 48.716,36 42,28.837 42,20 C 42,11.163 48.716,4 57,4 Z M 57,11.5 C 61.97,11.5 66,15.306 66,20 C 66,24.694 61.97,28.5 57,28.5 C 52.03,28.5 48,24.694 48,20 C 48,15.306 52.03,11.5 57,11.5 Z"
      />
      
      {/* N - Clean double verticals with parallel diagonal intersection */}
      <path d="M 80,4 H 87 L 103,29 V 4 H 110 V 36 H 103 L 87,11 V 36 H 80 Z" />
      
      {/* K - 45-degree branch geometry aligned to spine */}
      <path d="M 118,4 H 125 V 15 L 136,4 H 148 L 132,20 L 148,36 H 136 L 125,25 V 36 H 118 Z" />
    </svg>
  );
}
