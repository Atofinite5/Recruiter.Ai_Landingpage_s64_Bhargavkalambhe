'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How does the AI matching actually work?",
    answer: "Our AI analyzes thousands of data points from candidate profiles and your job descriptions to identify the best matches based on skills, experience, and cultural fit. It learns from your feedback to improve over time."
  },
  {
    question: "Can I integrate RecruiterAI with my existing ATS?",
    answer: "Yes! We offer seamless integrations with popular ATS platforms including Greenhouse, Lever, Workday, and many more. Our API also allows for custom integrations."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption, are SOC 2 Type II certified, and comply with GDPR and CCPA regulations. Your data is never shared with third parties."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email support for all plans, with dedicated account managers and priority phone support for Enterprise customers. We also offer comprehensive onboarding and training."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about RecruiterAI.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${openIndex === i
                ? 'border-blue-200 shadow-lg'
                : 'border-gray-100 hover:border-blue-100 hover:shadow-md'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === i ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-500'
                    }`}
                >
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
