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

  return (
    <div
      className={`relative inline-block ${disabled ? '' : 'animate-[shine_var(--speed)_linear_infinite]'} ${className}`}
      style={{
        '--speed': animationDuration,
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: disabled ? 'inherit' : 'transparent',
      } as React.CSSProperties}
    >
      {text}
      {/* Fallback color if background-clip: text is not supported */}
      <span className="absolute inset-0 z-[-1] text-inherit opacity-50 select-none">
        {text}
      </span>
    </div>
  )
}
