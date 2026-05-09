import React from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`

  if (disabled) {
    return <span className={className}>{text}</span>
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Base text layer - will inherit parent text color or bg-clip-text */}
      <span className="relative z-0">
        {text}
      </span>
      {/* Shine overlay layer */}
      <span
        className="absolute inset-0 z-10 pointer-events-none animate-[shine_var(--speed)_linear_infinite] select-none"
        style={{
          '--speed': animationDuration,
          backgroundImage: 'linear-gradient(120deg, transparent 35%, rgba(255, 255, 255, 0.8) 50%, transparent 65%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        } as React.CSSProperties}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  )
}
