'use client'
import { motion } from 'framer-motion'
import { Linkedin, Globe, Briefcase, Search, Building2, Zap, ArrowRight } from 'lucide-react'

const platforms = [
  { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-500 to-blue-600' },
  { name: 'Indeed', icon: Search, color: 'from-purple-500 to-indigo-500' },
  { name: 'Glassdoor', icon: Building2, color: 'from-green-500 to-emerald-500' },
  { name: 'ZipRecruiter', icon: Briefcase, color: 'from-orange-500 to-amber-500' },
  { name: 'Monster', icon: Globe, color: 'from-pink-500 to-rose-500' },
]

export default function HubSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Great companies <br />hire with <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RecruiterAI</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Seamlessly integrate with your favorite job platforms and ATS systems. All your recruiting tools in one place.
          </p>
          <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            Read customer stories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Right Content - Hub Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Outer orbit ring */}
          <div className="absolute w-[420px] h-[420px] border border-blue-100 rounded-full animate-[spin_40s_linear_infinite]" />

          {/* Middle orbit ring */}
          <div className="absolute w-[320px] h-[320px] border border-blue-200/60 rounded-full" />

          {/* Inner orbit ring */}
          <div className="absolute w-[200px] h-[200px] border border-blue-300/40 rounded-full" />

          {/* Center Hub */}
          <motion.div
            className="relative z-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
            animate={{
              boxShadow: ['0 0 30px rgba(59, 130, 246, 0.3)', '0 0 50px rgba(139, 92, 246, 0.4)', '0 0 30px rgba(59, 130, 246, 0.3)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap size={48} className="text-white" />
          </motion.div>

          {/* Orbiting Platform Icons */}
          {platforms.map((platform, index) => {
            const angle = (index * 72 - 90) * (Math.PI / 180)
            const radius = 175
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={platform.name}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${x}px - 32px)`,
                  top: `calc(50% + ${y}px - 32px)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.15 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}>
                  <platform.icon size={28} className="text-white" />
                </div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-600">
                  {platform.name}
                </div>
              </motion.div>
            )
          })}

          {/* Connection lines from platforms to hub */}
          <svg className="absolute w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {platforms.map((_, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180)
              const outerRadius = 175
              const innerRadius = 70
              const x1 = 50 + (Math.cos(angle) * outerRadius / 2.5)
              const y1 = 50 + (Math.sin(angle) * outerRadius / 2.5)
              const x2 = 50 + (Math.cos(angle) * innerRadius / 2.5)
              const y2 = 50 + (Math.sin(angle) * innerRadius / 2.5)

              return (
                <motion.line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              )
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
