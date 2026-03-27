import React, { useState } from 'react'
import type { Language } from '../pages/index'

const projects = [
  {
    title: 'VNMap SafeSchool',
    description: 'Vietnamese new map platform at vnmap-safeschool.net for education and location intelligence workflows.',
    image: '🗺️',
    tech: ['Next.js', 'Node.js', 'GeoJSON', 'Mapping APIs', 'Data Visualization'],
    impact: '2nd Prize - Vietnam Science and Engineering Fair (ViSEF 2025-2026)',
    status: 'Peak Project',
    url: 'https://vnmap-safeschool.net',
  },
  {
    title: 'Majo.exe (Grassbot1)',
    description: 'Production Discord bot with 150+ commands, monorepo architecture, and integrated dashboard',
    image: '🤖',
    tech: ['TypeScript', 'Discord.js', 'Next.js', 'PostgreSQL', 'Prisma', 'Docker'],
    impact: 'Managing servers for millions of users',
    status: 'Production',
  },
  {
    title: 'Discord Music Bot',
    description: 'Feature-rich music bot with Lavalink support, web dashboard, and SQLite database',
    image: '🎵',
    tech: ['Node.js', 'Discord.js v14', 'Next.js', 'Lavalink'],
    impact: '5.0.0 Beta Release',
    status: 'Active',
  },
  {
    title: 'Full-Stack Web Application',
    description: 'Complete React frontend with Express backend, JWT auth, and file upload functionality',
    image: '🌐',
    tech: ['React 18', 'Express', 'Node.js', 'SQLite', 'JWT'],
    impact: 'Production-ready web application',
    status: 'Deployed',
  },
  {
    title: 'Android Firmware Analysis Suite',
    description: 'Advanced tools for extracting, decrypting, and analyzing Android firmware',
    image: '🔐',
    tech: ['Python', 'Binary Analysis', 'Cryptography'],
    impact: 'Reverse engineering Android systems',
    status: 'Active Development',
  },
  {
    title: 'Vietnamese Map API Backend',
    description: 'Express API serving Vietnamese province and commune geographic data for map products.',
    image: '📍',
    tech: ['Node.js', 'Express', 'GeoJSON'],
    impact: 'Core backend for VNMap ecosystem',
    status: 'Live',
    url: 'https://vnmap-safeschool.net',
  },
  {
    title: 'Game Collection Archive',
    description: '40+ HTML5 games and Flash games with Ruffle emulator integration',
    image: '🎮',
    tech: ['HTML5', 'JavaScript', 'Ruffle', 'WebGL'],
    impact: 'Preserved gaming classics',
    status: 'Maintained',
  },
  {
    title: 'Competitive Programming Solutions',
    description: '200+ solved problems in Python and C++, comprehensive algorithm implementations',
    image: '🏆',
    tech: ['Python', 'C++', 'Algorithms', 'Data Structures'],
    impact: 'Strong competitive programming foundation',
    status: 'Ongoing',
  },
  {
    title: 'Machine Learning Projects',
    description: 'VAE and CNN implementations for MNIST, deep learning with TensorFlow',
    image: '🧠',
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'Neural Networks'],
    impact: 'AI/ML exploration and implementation',
    status: 'Learning',
  },
]

interface ProjectsProps {
  lang: Language
}

export default function Projects({ lang }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <section
      id="projects"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
        {lang === 'vi' ? 'Dự án nổi bật' : 'Featured Projects'}
      </h2>
      <p className="text-center text-nature/80 mb-12 font-medium">
        {lang === 'vi'
          ? 'Peak: VNMap SafeSchool • Giải Nhì ViSEF 2025-2026 • 200+ file Python • 75+ bài C++'
          : 'Peak: VNMap SafeSchool • ViSEF 2025-2026 2nd Prize • 200+ Python files • 75+ C++ solutions'}
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(index)}
            className="project-card card-glow card-hover p-6 rounded-xl backdrop-blur-sm cursor-pointer"
          >
            <div className="text-5xl mb-4">{project.image}</div>
            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
            <p className="text-nature text-sm mb-4">{project.description}</p>

            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-nature/70">{project.impact}</span>
              <span className="px-2 py-1 rounded text-xs bg-secondary/20 text-secondary font-semibold">
                {project.status}
              </span>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex mt-4 text-xs px-3 py-1 rounded-md bg-dark text-txthead hover:bg-darker transition-colors"
              >
                {lang === 'vi' ? 'Mở dự án' : 'Open Project'}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Detailed project view */}
      {selectedProject !== null && (
        <div className="mt-16 p-8 rounded-xl card-glow backdrop-blur-sm">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            {projects[selectedProject].title}
          </h3>
          <p className="text-nature mb-6 leading-relaxed">
            {projects[selectedProject].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>
          {projects[selectedProject].url && (
            <a
              href={projects[selectedProject].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-txthead font-semibold hover:opacity-90 transition-opacity"
            >
              {lang === 'vi' ? 'Truy cap' : 'Visit'} {projects[selectedProject].title}
            </a>
          )}
        </div>
      )}
    </section>
  )
}
