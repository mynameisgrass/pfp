import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>_woospiegrassy_ | VNMap SafeSchool Portfolio</title>
        <meta name="description" content="Portfolio of _woospiegrassy_: VNMap SafeSchool creator, ViSEF 2025-2026 2nd Prize, full-stack developer, reverse engineer, and Arduino learner." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E2F1E" />
        <meta property="og:title" content="_woospiegrassy_ | Portfolio" />
        <meta property="og:description" content="VNMap SafeSchool creator and ViSEF award winner portfolio" />
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-white/35 pointer-events-none" style={{ zIndex: 1 }} />
        
        <Header isScrolled={isScrolled} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
