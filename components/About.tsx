import React from 'react'
import type { Language } from '../pages/index'

interface AboutProps {
  lang: Language
}

export default function About({ lang }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold gradient-text mb-12 text-center">
        {lang === 'vi' ? 'Giới thiệu' : 'About Me'}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🎓 {lang === 'vi' ? 'Tôi là ai?' : 'Who Am I?'}</h3>
          <p className="text-nature leading-relaxed">
            {lang === 'vi'
              ? 'Tôi là một coder 14 tuổi tại Việt Nam, rất đam mê xây dựng sản phẩm. Từ lúc biết lập trình, tôi đã theo đuổi từ nền tảng bản đồ đến reverse engineering và backend automation. Hành trình của tôi được dẫn dắt bởi sự tò mò, bền bỉ và tình yêu giải quyết vấn đề bằng code.'
              : 'I\'m a 14-year-old coder from Vietnam with an insatiable passion for building things. Since I discovered programming, I\'ve immersed myself in everything from map platforms to reverse engineering and backend automation. My journey is driven by curiosity, persistence, and a love for solving problems through code.'}
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">💪 {lang === 'vi' ? 'Tôi làm gì' : 'What I Do'}</h3>
          <p className="text-nature leading-relaxed">
            {lang === 'vi'
              ? 'Tôi chuyên về full-stack web, reverse engineering HTTP request, và tự động hóa workflow như homework/task helper. Tôi cũng đang học Arduino và dự án điện tử, đồng thời tiếp tục competitive programming và công cụ nâng cao. Mỗi dự án là một cơ hội để tăng tốc độ, độ ổn định và tác động.'
              : 'I specialize in full-stack web development, reverse engineering HTTP requests, and automation workflows such as homework/task helpers. I also learn Arduino and electronics projects while continuing competitive programming and advanced tooling. Every build is a chance to improve speed, reliability, and impact.'}
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🚀 {lang === 'vi' ? 'Triết lý của tôi' : 'My Philosophy'}</h3>
          <p className="text-nature leading-relaxed">
            {lang === 'vi'
              ? 'Code là nghệ thuật. Mỗi dự án đều dạy tôi điều mới. Tôi tin vào clean code, hiệu quả, và xây dựng ứng dụng có ý nghĩa. Dù là tự động hóa luồng công việc, reverse engineering API hay xây hệ thống bản đồ, tôi đều tiếp cận bằng sự sáng tạo và chất lượng kỹ thuật cao.'
              : 'Code is art. Every project teaches me something new. I believe in writing clean, efficient code and building applications that matter. Whether it\'s automating task flows, reverse engineering APIs, or building map systems, I approach every challenge with creativity and technical excellence.'}
          </p>
        </div>

        <div className="about-card card-glow p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-primary mb-4">🌟 {lang === 'vi' ? 'Thông tin nhanh' : 'Quick Facts'}</h3>
          <ul className="text-nature space-y-2">
            <li>{lang === 'vi' ? '✨ Bắt đầu lập trình từ 11 tuổi' : '✨ Started coding at age 11'}</li>
            <li>{lang === 'vi' ? '🗺️ Xây dựng VNMap SafeSchool (dự án peak)' : '🗺️ Built VNMap SafeSchool (peak project)'}</li>
            <li>{lang === 'vi' ? '🥈 Đạt giải Nhì ViSEF 2025-2026' : '🥈 2nd Prize at ViSEF 2025-2026'}</li>
            <li>{lang === 'vi' ? '💻 Thành thạo Python, JavaScript, C++, TypeScript' : '💻 Fluent in Python, JavaScript, C++, TypeScript'}</li>
            <li>{lang === 'vi' ? '🔐 Tập trung reverse engineering, đặc biệt HTTP requests' : '🔐 Full reverse engineering focus, especially HTTP requests'}</li>
            <li>{lang === 'vi' ? '🔧 Đang học Arduino và hệ thống nhúng' : '🔧 Learning Arduino and embedded workflows'}</li>
            <li>{lang === 'vi' ? '🏆 Competitive programmer với 200+ bài đã giải' : '🏆 Competitive programmer with 200+ solved problems'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
