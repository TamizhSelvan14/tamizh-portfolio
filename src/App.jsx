import React, { useState } from 'react'
import avatarUrl from './assets/2.1.png'
import iconurl  from '../public/tamizh_icon.png'


function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src={iconurl} alt="Avatar" className="w-9 h-9 rounded-2xl" />
            <span className="text-lg font-semibold tracking-tight">Tamizh Selvan</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition">Education</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
          </nav>
          <div className="md:hidden">
            <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="p-2 rounded-xl border border-slate-800 hover:bg-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800">
          <div className="container py-4 grid gap-2 text-sm">
            <a href="#about" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>About</a>
            <a href="#skills" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>Skills</a>
            <a href="#experience" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>Experience</a>
            <a href="#projects" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#education" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>Education</a>
            <a href="#contact" className="py-2 hover:text-cyan-300" onClick={()=>setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

// function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 pointer-events-none" />
//       <div className="container pt-16 pb-14 sm:pt-24 sm:pb-20">
//         <div className="grid lg:grid-cols-3 gap-10 items-center">
//           <div className="lg:col-span-2 space-y-6">
//             <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
//               Software Engineer • Go, Microservices & Cloud
//             </h1>
//             <p className="text-slate-300 max-w-2xl">
//               Detail-oriented and self-motivated graduate student at San José State University seeking a Software Engineering Internship for Summer 2026. I build reliable, scalable backend systems and APIs.
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <a href="/resume.pdf" className="link-primary">Download Résumé</a>
//               <a href="mailto:tamizhselvangrad0168@gmail.com" className="link-ghost">Email</a>
//               <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="link-ghost">LinkedIn</a>
//               <a href="https://github.com/" target="_blank" rel="noreferrer" className="link-ghost">GitHub</a>
//             </div>
//           </div>
//           <div className="lg:justify-self-end">
//             <img src={avatarUrl} alt="Avatar" className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl shadow-2xl ring-1 ring-white/10" />
//             <div className="mt-4 text-sm text-slate-400">
//               San Jose, CA • +1 (408) 591-1647
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 pointer-events-none" />
      <div className="container pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Software Engineer
              </h1>
              <p className="text-cyan-400 text-lg mt-2">
                Backend • Cloud • Distributed Systems
              </p>
              <p className="text-slate-300 max-w-2xl mt-4">
                Detail-oriented and self-motivated graduate student at San José State University seeking a Software Engineering Internship for Summer 2026. I build reliable, scalable backend systems and APIs.
              </p>

            <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" className="link-primary" target="_blank" rel="noreferrer">Download Résumé</a>
            <a href="mailto:tamizhselvangrad0168@gmail.com" className="link-ghost">Email</a>
              <a href="https://www.linkedin.com/in/tamizh-selvan-tech//" target="_blank" rel="noreferrer" className="link-ghost">LinkedIn</a>
              <a href="https://github.com/TamizhSelvan14" target="_blank" rel="noreferrer" className="link-ghost">GitHub</a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <img src={avatarUrl} alt="Avatar" className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl shadow-2xl ring-1 ring-white/10" />
            <div className="mt-4 text-sm text-slate-400">
              San Jose, CA • +1 (408) 591-1647
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function Skills() {
  return (
    <section id="skills" className="container py-12 sm:py-16 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Go</span><span className="badge">C++</span><span className="badge">Java</span><span className="badge">Kotlin</span><span className="badge">Node.js</span>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Databases</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">PostgreSQL</span><span className="badge">MySQL</span><span className="badge">MongoDB</span><span className="badge">Redis</span><span className="badge">Elasticsearch</span><span className="badge">DocumentDB</span>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Frameworks & Tech</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">REST</span><span className="badge">gRPC</span><span className="badge">AWS</span><span className="badge">Docker</span><span className="badge">Kubernetes</span><span className="badge">Linux</span>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">VS Code</span><span className="badge">IntelliJ</span><span className="badge">Sublime</span><span className="badge">Git/GitHub</span><span className="badge">Jira</span><span className="badge">Confluence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="container py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">About</h2>
      <p className="text-slate-300 leading-relaxed max-w-3xl mt-4">
        I am a detail-oriented and self-motivated graduate student at San José State University with over 4 years of professional experience in software development. 
        I specialize in designing and building robust backend systems and have hands-on expertise with Golang, gRPC, PostgreSQL, and cloud technologies. 
        During my career, I have successfully developed scalable microservices, optimized APIs, and deployed production-grade applications using Docker and Kubernetes on AWS. 
        I am seeking a Software Engineering Internship for Summer 2026 where I can contribute to building high-performance software while continuing to grow as a developer.
      </p>
    </section>
  )
}


function Experience() {
  const jobs = [
    {
      role: 'Software Engineer',
      company: 'Shuru (Remote)',
      dates: 'Apr 2025 – Jul 2025',
      bullets: [
        'Migrated core payment services from Java to Go to improve performance, scalability, and maintainability.',
        'Optimized APIs in new services, significantly improving response times and overall efficiency.',
        'Decoupled tightly coupled services & databases, enabling modular architecture and independent deployments.',
      ]
    },
    {
      role: 'Software Development Engineer',
      company: 'Wiz Freight (Chennai, India)',
      dates: 'Sep 2022 – Apr 2025',
      bullets: [
        'Designed and implemented a Go microservices architecture using gRPC & PostgreSQL; reduced response time on high-traffic pages.',
        'Integrated third-party APIs to cut manual workload by 60% and improve operational efficiency.',
        'Built robust RESTful APIs in collaboration with frontend team; improved frontend performance by 30%.',
        'Resolved critical production issues in shipment tracking, reducing customer complaints by 40% and maintaining 99.9% uptime.',
        'Built a Kotlin-based PDF documentation service to automate shipping documents, reducing workload by 70%.',
      ]
    },
    {
      role: 'Software Engineer Intern (Co-op)',
      company: 'Nokia Networks (Bengaluru, India)',
      dates: 'Aug 2021 – May 2022',
      bullets: [
        'Developed and executed automated test cases across features using virtualized & containerized environments; cut testing time by 40%.',
        'Deployed containerized VMs, reducing environment setup time by 60% and improving product quality by 30%.',
      ]
    },
  ]
  return (
    <section id="experience" className="container py-12 sm:py-16 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {jobs.map((j, i) => (
          <article key={i} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{j.role} — {j.company}</h3>
              <span className="text-sm text-slate-400">{j.dates}</span>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
              {j.bullets.map((b, k) => <li key={k}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    { name: 'Real-Time Chat Application', desc: 'Room-based chat with Socket.io enabling real-time, bidirectional communication and instant updates.', link: '' },
    { name: 'AGRO — Mobile App for Farmers', desc: 'AI-powered Android app enabling farmers to sell directly to consumers with pricing recommendations and CV-based quality assessment (Firebase + Android Studio).', link: '' },
  ]
  return (
    <section id="projects" className="container py-12 sm:py-16 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <article key={i} className="card">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            {p.link && <a className="inline-block mt-2 underline hover:text-cyan-300" href={p.link} target="_blank" rel="noreferrer">View</a>}
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  const schools = [
    { title: 'M.S. in Computer Software Engineering — San José State University', dates: 'Aug 2025 – May 2027', notes: 'Relevant coursework: Cloud Technologies, Software Systems Engineering, Enterprise Software Platforms.' },
    { title: 'Integrated B.Tech + M.Tech in Software Engineering — VIT, Vellore', dates: 'Aug 2017 – May 2022 • GPA: 8.36/10', notes: 'Relevant coursework: Data Structures, Computer Architecture, DBMS, OS, Computer Networks, Web Technologies.' },
  ]
  return (
    <section id="education" className="container py-12 sm:py-16 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {schools.map((s, i) => (
          <div key={i} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{s.title}</h3>
              <span className="text-sm text-slate-400">{s.dates}</span>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{s.notes}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container py-12 sm:py-16 border-t border-slate-800">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-300">I’m open to Software Engineering internships for Summer 2026 and backend roles.</p>
          <ul className="mt-4 text-slate-300">
            <li><strong>Email:</strong> <a className="underline hover:text-cyan-300" href="mailto:tamizhselvangrad0168@gmail.com">tamizhselvangrad0168@gmail.com</a></li>
            <li><strong>Phone:</strong> <a className="underline hover:text-cyan-300" href="tel:+14085911647">+1 (408) 591-1647</a></li>
            <li><strong>Location:</strong> San Jose, CA 95112</li>
          </ul>
        </div>
        <form className="card space-y-4" onSubmit={(e)=>{e.preventDefault(); window.location.href='mailto:tamizhselvangrad0168@gmail.com?subject=Hello%20Tamizh&body='+encodeURIComponent(document.getElementById('msg').value);}}>
          <label className="block text-sm">Quick message</label>
          <textarea id="msg" className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-slate-100" rows={5} placeholder="Drop me a line…"></textarea>
          <button className="link-primary">Send via Email</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Tamizh Selvan.
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
