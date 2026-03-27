import React from 'react'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold gradient-text">_woospiegrassy_</h1>
        </div>

        <div className="hidden md:flex gap-8">
          {['About', 'Projects', 'Skills', 'Timeline'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="nav-item text-sm font-medium text-txtbody hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mynameisgrass"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item hidden sm:inline-flex px-4 py-2 rounded-lg border border-accent/40 bg-black/20 text-txthead font-semibold hover:bg-black/35 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://discord.com/users/1113641373975990383"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-secondary/40 text-txthead font-semibold transition-all"
          >
            Discord Profile
          </a>
        </div>
      </nav>
    </header>
  )
}
