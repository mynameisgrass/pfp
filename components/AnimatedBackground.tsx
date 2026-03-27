import React from 'react'

export default function AnimatedBackground() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Fallback gradient if image doesn't load */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #E0F6F1 40%, #90EE90 100%)',
          opacity: 0,
        }}
      />
    </div>
  )
}
