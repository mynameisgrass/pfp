import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold gradient-text mb-12 text-center">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🎓 Who Am I?</h3>
          <p className="text-nature leading-relaxed">
            I&apos;m a 14-year-old coder from Vietnam with an insatiable passion for building
            things. Since I discovered programming, I&apos;ve immersed myself in everything from
            map platforms to reverse engineering and backend automation. My journey is driven by
            curiosity, persistence, and a love for solving problems through code.
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">💪 What I Do</h3>
          <p className="text-nature leading-relaxed">
            I specialize in full-stack web development, reverse engineering HTTP requests,
            and automation workflows such as homework/task helpers. I also learn Arduino
            and electronics projects while continuing competitive programming and advanced tooling.
            Every build is a chance to improve speed, reliability, and impact.
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🚀 My Philosophy</h3>
          <p className="text-nature leading-relaxed">
            Code is art. Every project teaches me something new. I believe in writing clean,
            efficient code and building applications that matter. Whether it&apos;s automating
            task flows, reverse engineering APIs, or building map systems, I approach every
            challenge with
            creativity and technical excellence.
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🌟 Quick Facts</h3>
          <ul className="text-nature space-y-2">
            <li>✨ Started coding at age 11</li>
            <li>🗺️ Built VNMap SafeSchool (peak project)</li>
            <li>🥈 2nd Prize at ViSEF 2025-2026</li>
            <li>💻 Fluent in Python, JavaScript, C++, TypeScript</li>
            <li>🔐 Full reverse engineering focus, especially HTTP requests</li>
            <li>🔧 Learning Arduino and embedded workflows</li>
            <li>🏆 Competitive programmer with 200+ solved problems</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
