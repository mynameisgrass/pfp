import React from 'react'
import type { Language } from '../pages/index'

interface HeroProps {
  lang: Language
}

export default function Hero({ lang }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/15 rounded-full filter blur-3xl animate-pulse" />

      <div className="relative text-center z-10">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold gradient-text mb-4 leading-tight">
            {lang === 'vi' ? 'Xin chào, mình là' : 'Hey, I\'m'}
            <br />
            woospiegrassy
          </h1>
          <p className="text-xl md:text-3xl text-txthead glow font-semibold">
            {lang === 'vi' ? '14 tuổi • bắt đầu lập trình từ năm 11 tuổi' : '14-year-old builder • started coding at 11'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 px-2">
          <p className="text-base sm:text-lg text-nature leading-relaxed font-medium">
            {lang === 'vi'
              ? 'Lập trình viên Full-Stack | Reverse Engineer (HTTP request và automation) |'
              : 'Full-Stack Developer | Reverse Engineer (HTTP requests & automation) |'}
            <br />
            {lang === 'vi'
              ? 'Người học Arduino | Competitive Programmer | Người xây dựng VNMap'
              : 'Arduino Learner | Competitive Programmer | VNMap Builder'}
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all"
          >
            {lang === 'vi' ? 'Xem dự án' : 'View My Work'}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 font-bold transition-all"
          >
            {lang === 'vi' ? 'Liên hệ' : 'Contact Me'}
          </button>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <a
            href="https://discord.com/users/1113641373975990383"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nature hover:text-secondary transition-colors text-sm font-semibold"
          >
            Discord
          </a>
          <a
            href="https://github.com/mynameisgrass"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nature hover:text-secondary transition-colors text-sm font-semibold"
          >
            GitHub
          </a>
          <a
            href="mailto:hailongn789@gmail.com"
            className="text-nature hover:text-secondary transition-colors text-sm font-semibold"
          >
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
