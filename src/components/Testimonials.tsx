'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Elena Rodriguez",
    role: "Head of People, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "RecruiterAI has completely transformed how we hire. We're seeing better candidates and spending way less time on admin work.",
    company: "TechFlow"
  },
  {
    name: "David Chen",
    role: "Founder, Startup Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "The automated scheduling alone is worth the price. It's like having a 24/7 coordinator who never makes mistakes.",
    company: "Startup Inc"
  },
  {
    name: "Sarah Johnson",
    role: "Recruiting Manager, BigCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "Finally, a tool that actually understands what we're looking for. The AI matching is surprisingly accurate.",
    company: "BigCorp"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Loved by <span className="text-blue-600">Recruitment Teams</span>
          </h2>
          <p className="text-xl text-gray-600">Join 500+ companies hiring smarter.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Quote size={20} className="text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                  >
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">&ldquo;{t.content}&rdquo;</p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
