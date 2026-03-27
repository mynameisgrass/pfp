import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      platform: 'Discord',
      handle: '1113641373975990383',
      icon: '💬',
      link: 'https://discord.com/users/1113641373975990383',
    },
    {
      platform: 'GitHub',
      handle: 'mynameisgrass',
      icon: '🐙',
      link: 'https://github.com/mynameisgrass',
    },
    {
      platform: 'Personal Email',
      handle: 'hailongn789@gmail.com',
      icon: '📧',
      link: 'mailto:hailongn789@gmail.com',
    },
    {
      platform: 'School / Work Email',
      handle: 'k26longnh1@ntthnue.edu.vn',
      icon: '🏫',
      link: 'mailto:k26longnh1@ntthnue.edu.vn',
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold gradient-text mb-12 text-center">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="contact-content">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Let&apos;s Build Something Amazing
          </h3>
          <p className="text-nature mb-8 leading-relaxed">
            Whether you want to discuss a new project, collaborate on something cool, or just chat
            about coding, I&apos;m always open to connecting with fellow developers and enthusiasts.
            Feel free to reach out!
          </p>

          <div className="space-y-6">
            {contactLinks.map((item, index) => (
              <div
                key={index}
                className="card-glow p-4 rounded-lg backdrop-blur-sm hover:bg-primary/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-primary">{item.platform}</p>
                    <a
                      href={item.link}
                      target={item.link?.startsWith('http') ? '_blank' : undefined}
                      rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-nature hover:text-secondary transition-colors font-medium"
                    >
                      {item.handle}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="card-glow p-8 rounded-xl backdrop-blur-sm space-y-6">
            <div>
              <label className="block text-sm font-medium text-nature mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/70 border border-primary/30 text-nature placeholder-nature/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nature mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/70 border border-primary/30 text-nature placeholder-nature/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-nature mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/70 border border-primary/30 text-nature placeholder-nature/50 focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all"
            >
              Send Message
            </button>

            {submitted && (
              <div className="success-message text-center text-green-400 font-semibold">
                ✨ Message received! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
