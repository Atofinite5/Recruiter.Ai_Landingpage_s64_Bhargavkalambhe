'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Search, BarChart3, Calendar } from 'lucide-react'

const steps = [
  {
    title: "Sourcing",
    nodeTitle: "Smart Screening",
    nodeDesc: "Screen 250+ applications in minutes.",
    startNode: "Remote Screening",
    endNode: "Score > 80%",
    icon: Search,
    accentColor: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600"
  },
  {
    title: "Evaluation",
    nodeTitle: "Precision Matching",
    nodeDesc: "Identify top talent instantly.",
    startNode: "Qualified",
    endNode: "Score > 80%",
    icon: BarChart3,
    accentColor: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600"
  },
  {
    title: "Interview",
    nodeTitle: "Automated Scheduling",
    nodeDesc: "Zero email back-and-forth.",
    startNode: "Top Candidate",
    endNode: "Interview Scheduled",
    icon: Calendar,
    accentColor: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600"
  }
]

export default function Flowcharts() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Zap size={14} />
            How It Works
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            AI Recruiting Software That Works<br />
            <span className="text-blue-600">Like Your Own HR Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visual automated workflows that scale with your needs. Customize every step.
          </p>
        </motion.div>

        {/* Flowchart Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines between cards (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-[15%] h-0.5 bg-gradient-to-r from-emerald-300 via-blue-300 to-blue-300 -translate-y-8" />
          <div className="hidden md:block absolute top-1/2 right-1/3 w-[15%] h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-purple-300 -translate-y-8" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Step Label */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm mb-6 shadow-lg bg-gradient-to-r ${step.accentColor}`}>
                <step.icon size={16} />
                {step.title}
              </div>

              {/* Flowchart Card */}
              <div className={`${step.bgColor} border ${step.borderColor} rounded-3xl p-8 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.accentColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

                {/* Flow nodes */}
                <div className="space-y-4 relative z-10">
                  <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-center shadow-sm group-hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium">{step.startNode}</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                      className={`w-10 h-10 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}
                    >
                      <ArrowDown size={18} className={step.textColor} />
                    </motion.div>
                  </div>

                  <div className={`bg-gradient-to-r ${step.accentColor} rounded-xl px-5 py-3 text-center shadow-lg`}>
                    <span className="text-white font-semibold">{step.endNode}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.nodeTitle}</h3>
                <p className="text-gray-600">{step.nodeDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
