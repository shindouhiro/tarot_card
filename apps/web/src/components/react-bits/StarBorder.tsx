import React from 'react'

interface StarBorderProps {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
  color?: string
  speed?: string
  [key: string]: any
}

export function StarBorder({
  as: Component = "button",
  className = "",
  children,
  color = "white",
  speed = "4s",
  ...props
}: StarBorderProps) {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[32px] p-[1px] ${className}`}
      {...props}
    >
      <div
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 50%, ${color} 100%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-[31px] bg-tarot-dark px-8 py-4 backdrop-blur-3xl">
        {children}
      </div>
    </Component>
  )
}
