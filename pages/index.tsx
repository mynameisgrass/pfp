import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import CurrentProjects from '../components/CurrentProjects'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'

export type Language = 'en' | 'vi'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-lang')
    if (saved === 'en' || saved === 'vi') {
      setLang(saved)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  return (
    <>
      <Head>
        <title>{lang === 'vi' ? '_woospiegrassy_ | Hồ sơ VNMap SafeSchool' : '_woospiegrassy_ | VNMap SafeSchool Portfolio'}</title>
        <meta name="description" content={lang === 'vi' ? 'Hồ sơ của _woospiegrassy_: người tạo VNMap SafeSchool, giải Nhì ViSEF 2025-2026, lập trình full-stack, reverse engineer và học Arduino.' : 'Portfolio of _woospiegrassy_: VNMap SafeSchool creator, ViSEF 2025-2026 2nd Prize, full-stack developer, reverse engineer, and Arduino learner.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E2F1E" />
        <meta property="og:title" content="_woospiegrassy_ | Portfolio" />
        <meta property="og:description" content={lang === 'vi' ? 'Người tạo VNMap SafeSchool và đạt giải ViSEF' : 'VNMap SafeSchool creator and ViSEF award winner portfolio'} />
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-white/25 pointer-events-none" style={{ zIndex: 1 }} />
        
        <Header isScrolled={isScrolled} lang={lang} setLang={setLang} />
        <main className="relative z-10">
          <Hero lang={lang} />
          <About lang={lang} />
          <CurrentProjects lang={lang} />
          <Projects lang={lang} />
          <Skills lang={lang} />
          <Timeline lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer lang={lang} />
      </div>
    </>
  )
}
