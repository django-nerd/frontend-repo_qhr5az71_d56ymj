import { useState, useEffect } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashLinkClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onHashLinkClick)
    return () => document.removeEventListener('click', onHashLinkClick)
  }, [])

  const projects = [
    {
      title: 'TaskFlow - MERN Todo App',
      description:
        'A clean task manager with JWT auth, CRUD tasks, filters, and responsive UI. Built to practice full-stack patterns and REST API design.',
      tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
      live: '#',
      code: '#',
    },
    {
      title: 'DevNotes - Markdown Notes',
      description:
        'Lightweight notes app with live Markdown preview and local persistence. Focused on React hooks and component architecture.',
      tags: ['React', 'Tailwind', 'LocalStorage'],
      live: '#',
      code: '#',
    },
    {
      title: 'ShopLite API',
      description:
        'RESTful API for a mini e-commerce flow: products, cart, orders. Emphasis on Express middlewares and MongoDB schemas.',
      tags: ['Express', 'MongoDB', 'REST'],
      live: '#',
      code: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" id="home">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">
              S
            </div>
            <span className="font-semibold text-gray-900">Saikumar Dusa</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-gray-900 text-gray-600">About</a>
            <a href="#skills" className="hover:text-gray-900 text-gray-600">Skills</a>
            <a href="#projects" className="hover:text-gray-900 text-gray-600">Projects</a>
            <a href="#contact" className="hover:text-gray-900 text-gray-600">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Hire Me
            </a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 text-gray-700">
            <span className="sr-only">Toggle Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
              <a href="#about" className="text-gray-700">About</a>
              <a href="#skills" className="text-gray-700">Skills</a>
              <a href="#projects" className="text-gray-700">Projects</a>
              <a href="#contact" className="text-gray-700">Contact</a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">MERN Stack Developer</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">Hi, I’m Saikumar Dusa</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              An aspiring full‑stack developer with a focus on building clean, usable web apps with MongoDB, Express, React, and Node.js. I’m just getting started and actively building real projects to grow my skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md">View Projects</a>
              <a href="#contact" className="border border-gray-300 hover:border-gray-400 text-gray-800 px-5 py-2.5 rounded-md">Get in Touch</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">GitHub</a>
              <span>•</span>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
              <span>•</span>
              <a href="mailto:saikumardusa@example.com" className="hover:text-gray-900">Email</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6">
                <div className="grid grid-cols-2 gap-4">
                  {['MongoDB','Express','React','Node.js'].map((skill) => (
                    <div key={skill} className="border border-gray-200 rounded-lg p-4">
                      <p className="font-semibold text-gray-800">{skill}</p>
                      <p className="text-xs text-gray-500 mt-1">Foundations</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500">Learning: TypeScript, Redux, Testing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I’m a self‑taught developer at the beginning of my career. While I don’t have professional experience yet, I’ve been consistently learning and building projects that mirror real‑world scenarios: authentication, CRUD operations, clean UI, and deploy‑ready structures. I love solving problems, writing readable code, and shipping small improvements every day.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-gray-800">What I’m focusing on</p>
            <p className="text-gray-600 mt-1 text-sm">Deepening MERN stack skills, API design, state management, and deployment workflows.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <p className="font-semibold text-gray-800">What you can expect</p>
            <p className="text-gray-600 mt-1 text-sm">Clear communication, eagerness to learn, and delivering features with attention to detail.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
              { name: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
              { name: 'Database', items: ['MongoDB', 'Mongoose'] },
              { name: 'Tools', items: ['Git & GitHub', 'Postman', 'VS Code'] },
              { name: 'Practices', items: ['Clean Code', 'Responsive UI', 'Auth & CRUD'] },
              { name: 'Learning', items: ['TypeScript', 'Redux Toolkit', 'Testing'] },
            ].map((group) => (
              <div key={group.name} className="p-5 bg-white border rounded-xl">
                <p className="font-semibold text-gray-800">{group.name}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Projects</h2>
          <a href="#contact" className="text-blue-600 hover:text-blue-700 text-sm">Open to collaborate →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href={p.live} className="text-blue-600 hover:text-blue-700">Live</a>
                  <span className="text-gray-300">|</span>
                  <a href={p.code} className="text-gray-700 hover:text-gray-900">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Have an opportunity or want to build something together? I’m available for internships, entry‑level roles, and freelance work.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <form
              className="p-6 bg-white border rounded-xl"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const name = form.name.value
                const email = form.email.value
                const message = form.message.value
                window.location.href = `mailto:saikumardusa@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
                  name,
                )}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`
              }}
            >
              <div className="grid gap-4">
                <input name="name" placeholder="Your name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" required />
                <input name="email" type="email" placeholder="Your email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" required />
                <textarea name="message" rows="5" placeholder="Message" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" required />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Send</button>
              </div>
            </form>
            <div className="p-6 bg-white border rounded-xl">
              <p className="font-semibold text-gray-800">Quick Links</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a className="text-blue-600 hover:text-blue-700" href="https://github.com/" target="_blank" rel="noreferrer">GitHub Profile</a>
                <a className="text-blue-600 hover:text-blue-700" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-blue-600 hover:text-blue-700" href="mailto:saikumardusa@example.com">Email: saikumardusa@example.com</a>
                <span className="text-gray-600">Location: India (Open to Remote)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Saikumar Dusa. All rights reserved.</p>
          <p>Built with React and Tailwind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
