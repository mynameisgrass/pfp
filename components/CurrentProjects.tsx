import React from 'react'
import type { Language } from '../pages/index'

interface CurrentProjectsProps {
  lang: Language
}

const workingProjects = [
  {
    name: 'casio.grassist.me',
    url: 'https://casio.grassist.me',
    descriptionEn: 'Casio hacking utilities / calculator',
    descriptionVi: 'Bo cong cu hack Casio / may tinh',
  },
  {
    name: 'calc.grassist.me',
    url: 'https://calc.grassist.me',
    descriptionEn: 'Universal calculator for quick everyday calculations',
    descriptionVi: 'May tinh da nang cho cac phep tinh nhanh',
  },
  {
    name: 'sgame.grassist.me',
    url: 'https://sgame.grassist.me',
    descriptionEn: 'A bunch of static games in one place',
    descriptionVi: 'Bo suu tap nhieu game tinh',
  },
  {
    name: 'vnmap-safeschool.net',
    url: 'https://vnmap-safeschool.net',
    descriptionEn: 'New Vietnamese map',
    descriptionVi: 'BDHCVN MOI',
  },
]

export default function CurrentProjects({ lang }: CurrentProjectsProps) {
  return (
    <section id="current-projects" className="py-20 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-6 md:p-8 border border-accent/30">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          {lang === 'vi' ? 'Dự án đang làm' : 'Current Working Projects'}
        </h2>
        <p className="text-nature/80 mb-6">
          {lang === 'vi'
            ? 'Danh sách URL các dự án mình đang phát triển.'
            : 'A quick list of URLs for projects I am actively building.'}
        </p>

        <nav aria-label="Current project links" className="space-y-4">
          {workingProjects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-accent/30 bg-black/20 p-4 hover:bg-black/30 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-accent">{project.name}</span>
                <span className="text-txtbody">
                  {lang === 'vi' ? project.descriptionVi : project.descriptionEn}
                </span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
