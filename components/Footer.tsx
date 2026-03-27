import React from 'react'
import type { Language } from '../pages/index'

interface FooterProps {
  lang: Language
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-nature/70 mb-4">
          {lang === 'vi' ? 'Tao boi' : 'Crafted by'} <span className="text-primary font-bold">_woospiegrassy_</span>
        </p>
        <p className="text-sm text-nature/50">
          {lang === 'vi'
              ? `© ${currentYear} woospiegrassy. Bảo lưu mọi quyền. | Xây dựng với React, Next.js & Tailwind CSS`
            : `© ${currentYear} woospiegrassy. All rights reserved. | Made with React, Next.js & Tailwind CSS`}
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/mynameisgrass" target="_blank" rel="noopener noreferrer" className="text-nature/70 hover:text-secondary transition-colors">
            GitHub
          </a>
          <a href="https://discord.com/users/1113641373975990383" target="_blank" rel="noopener noreferrer" className="text-nature/70 hover:text-secondary transition-colors">
            Discord
          </a>
          <a href="mailto:hailongn789@gmail.com" className="text-nature/70 hover:text-secondary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
