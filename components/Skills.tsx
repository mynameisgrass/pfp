import React from 'react'

const skills = {
  'Frontend Development': {
    items: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    level: 'Expert',
    icon: '🎨',
  },
  'Backend Development': {
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'SQLite', 'Prisma ORM'],
    level: 'Expert',
    icon: '⚙️',
  },
  'Reverse Engineering & Automation': {
    items: ['HTTP Request Reverse Engineering', 'API Workflow Analysis', 'Task Automation', 'Python Scripting', 'Web Scraping'],
    level: 'Advanced',
    icon: '🕵️',
  },
  'Discord Bot Development': {
    items: ['Discord.js', 'Slash Commands', 'Database Integration', 'Web Dashboards', 'Lavalink'],
    level: 'Advanced',
    icon: '🤖',
  },
  'Competitive Programming': {
    items: ['Algorithms', 'Data Structures', 'Dynamic Programming', 'Graph Theory', 'Problem Solving'],
    level: 'Advanced',
    icon: '🏆',
  },
  'Systems & Security': {
    items: ['Android Reverse Engineering', 'Binary Analysis', 'Firmware Extraction', 'Cryptography'],
    level: 'Intermediate',
    icon: '🔐',
  },
  'AI & Machine Learning': {
    items: ['TensorFlow', 'Neural Networks', 'VAE', 'CNN', 'Deep Learning', 'Google Gemini API'],
    level: 'Intermediate',
    icon: '🧠',
  },
  'Arduino & Embedded': {
    items: ['Arduino IDE', 'Sensor Integration', 'Serial Communication', 'Microcontroller Basics'],
    level: 'Intermediate',
    icon: '🔧',
  },
}

const programmingLanguages = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'Python', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'Java', level: 70 },
  { name: 'SQL', level: 85 },
  { name: 'HTML/CSS', level: 90 },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold gradient-text mb-12 text-center">
        Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {Object.entries(skills).map(([category, data], index) => (
          <div
            key={index}
            className="skill-card card-glow p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{data.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-primary">{category}</h3>
                <span className="text-sm text-nature/70">{data.level}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.items.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card-glow p-8 rounded-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-primary mb-8">Programming Languages</h3>
        <div className="space-y-6">
          {programmingLanguages.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-nature">{lang.name}</span>
                <span className="text-primary font-bold">{lang.level}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3 border border-primary/30 overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
