import React from 'react'
import type { Language } from '../pages/index'

const timeline = [
  {
    year: '2021',
    title: 'Started Coding Journey',
    description: 'At age 11, discovered programming and fell in love with it. Started with Python basics.',
    icon: '🚀',
  },
  {
    year: '2022',
    title: 'First Discord Bot',
    description: 'Created initial Discord bots exploring Discord.js library and bot development concepts.',
    icon: '🤖',
  },
  {
    year: '2023',
    title: 'Production Systems',
    description: 'Built and deployed multiple bot and backend systems with database integration and dashboards.',
    icon: '⭐',
  },
  {
    year: '2023',
    title: 'Full-Stack Development',
    description: 'Mastered React, Node.js, and built multiple full-stack applications with real databases.',
    icon: '🌐',
  },
  {
    year: '2024',
    title: 'Advanced Projects',
    description: 'Explored Android reverse engineering, machine learning (VAE/CNN), firmware analysis, and AI integration.',
    icon: '🔬',
  },
  {
    year: '2025-2026',
    title: 'VNMap SafeSchool Award',
    description: 'Built vnmap-safeschool.net and achieved 2nd Prize at Vietnam Science and Engineering Fair (ViSEF).',
    icon: '🥈',
  },
  {
    year: '2026',
    title: 'Reverse Engineering + Automation',
    description: 'Focused on full reverse engineering of HTTP requests and automation flows for practical tasks.',
    icon: '🕵️',
  },
  {
    year: '2026',
    title: 'Current Focus',
    description: 'Scaling VNMap, learning Arduino deeply, and building reliable software with strong practical impact.',
    icon: '💎',
  },
]

interface TimelineProps {
  lang: Language
}

export default function Timeline({ lang }: TimelineProps) {
  return (
    <section
      id="timeline"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16 text-center">
        {lang === 'vi' ? 'Hành trình của tôi' : 'My Journey'}
      </h2>

      <div className="relative">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className={`${
                    index % 2 === 0 ? 'md:text-right text-left' : 'text-left'
                  }`}
                >
                  <div className="card-glow p-6 rounded-xl backdrop-blur-sm inline-block w-full">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-nature mb-2">{item.description}</p>
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Circle on timeline */}
              <div className="hidden md:flex w-8 justify-center">
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-dark flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
              </div>

              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
