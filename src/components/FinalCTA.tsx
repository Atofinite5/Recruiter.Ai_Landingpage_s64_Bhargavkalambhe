'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Clock, Users } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-900/95 via-blue-950/95 to-gray-900/95 text-white relative overflow-hidden">
      {/* Animated Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-blob animation-delay-4000" />
      </div>

      {/* Sparkle decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Sparkles size={20} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium mb-6 border border-white/10">
            Start your free trial today
          </span>

          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Ready to transform <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">your hiring process?</span>
          </h2>

          <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of modern recruiting teams who are hiring faster and better with RecruiterAI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-500 flex items-center gap-3 text-lg hover:scale-105">
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            Get Started Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg">
            Schedule a Demo
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Shield size={18} className="text-green-400" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Clock size={18} className="text-blue-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Users size={18} className="text-purple-400" />
            <span>5,000+ teams</span>
          </div>
        </motion.div>

        <p className="text-sm text-blue-200/50">
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
