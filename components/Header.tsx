import React, { Dispatch, SetStateAction, useState } from 'react'
import type { Language } from '../pages/index'

interface HeaderProps {
  isScrolled: boolean
  lang: Language
  setLang: Dispatch<SetStateAction<Language>>
}

export default function Header({ isScrolled, lang, setLang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { id: 'about', en: 'About', vi: 'Giới thiệu' },
    { id: 'current-projects', en: 'Now Building', vi: 'Đang làm' },
    { id: 'projects', en: 'Projects', vi: 'Dự án' },
    { id: 'skills', en: 'Skills', vi: 'Kỹ năng' },
    { id: 'timeline', en: 'Timeline', vi: 'Hành trình' },
    { id: 'contact', en: 'Contact', vi: 'Liên hệ' },
  ]

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/85 backdrop-blur-md border-b border-accent/30 shadow-lg'
          : 'bg-dark/70 backdrop-blur-sm border-b border-accent/20'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-xl md:text-2xl font-bold gradient-text">_woospiegrassy_</h1>
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-item text-sm font-medium text-txtbody hover:text-accent transition-colors"
            >
              {lang === 'vi' ? item.vi : item.en}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:inline-flex items-center rounded-lg border border-accent/40 bg-black/20 p-1">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-xs font-semibold rounded ${lang === 'en' ? 'bg-accent text-dark' : 'text-txtbody'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-2 py-1 text-xs font-semibold rounded ${lang === 'vi' ? 'bg-accent text-dark' : 'text-txtbody'}`}
            >
              VI
            </button>
          </div>
          <a
            href="https://github.com/mynameisgrass"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item hidden md:inline-flex px-4 py-2 rounded-lg border border-accent/40 bg-black/20 text-txthead font-semibold hover:bg-black/35 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://discord.com/users/1113641373975990383"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item px-3 md:px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-secondary/40 text-txthead text-sm md:text-base font-semibold transition-all"
          >
            {lang === 'vi' ? 'Discord' : 'Discord'}
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-accent/40 text-txthead"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-accent/20 bg-dark/95 backdrop-blur-md px-4 py-3 space-y-2">
          <div className="flex items-center gap-2 pb-2">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-xs font-semibold rounded ${lang === 'en' ? 'bg-accent text-dark' : 'text-txtbody border border-accent/30'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-2 py-1 text-xs font-semibold rounded ${lang === 'vi' ? 'bg-accent text-dark' : 'text-txtbody border border-accent/30'}`}
            >
              VI
            </button>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-3 py-2 rounded-lg text-txtbody hover:bg-black/20"
            >
              {lang === 'vi' ? item.vi : item.en}
            </button>
          ))}
          <a
            href="https://github.com/mynameisgrass"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-lg text-txtbody hover:bg-black/20"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  )
}
