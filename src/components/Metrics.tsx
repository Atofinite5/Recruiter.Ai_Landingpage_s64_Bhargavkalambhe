'use client'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Clock, TrendingUp } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const metrics = [
  {
    icon: Clock,
    value: 40,
    suffix: "%",
    label: "Time Saved",
    description: "Automate screening and scheduling to free up your team's valuable time.",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: CheckCircle2,
    value: 2,
    suffix: "x",
    label: "Quality of Hires",
    description: "AI-driven matching ensures you only interview the most relevant candidates.",
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: TrendingUp,
    value: 60,
    suffix: "%",
    label: "Faster Time-to-Hire",
    description: "Reduce your hiring cycle significantly with automated workflows.",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-50 to-teal-50"
  }
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Proven Results
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              The RecruiterAI <span className="text-blue-600">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results that transform your recruitment process from day one.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`group relative bg-gradient-to-br ${metric.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

              <div className="relative text-center">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <metric.icon size={28} className="text-white" />
                </div>

                <div className={`text-6xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-3`}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
                </div>

                <div className="text-xl font-semibold text-gray-900 mb-3">{metric.label}</div>

                <p className="text-gray-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
