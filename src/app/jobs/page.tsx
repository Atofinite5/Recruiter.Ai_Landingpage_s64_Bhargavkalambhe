'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobCard from '@/components/jobs/JobCard'
import JobFilters from '@/components/jobs/JobFilters'
import { jobs, filterJobs } from '@/data/jobs'

export default function JobsPage() {
    const [search, setSearch] = useState('')
    const [department, setDepartment] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')

    const filteredJobs = useMemo(() => {
        return filterJobs({ search, department, location, type })
    }, [search, department, location, type])

    const clearFilters = () => {
        setSearch('')
        setDepartment('')
        setLocation('')
        setType('')
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                <Briefcase size={14} />
                                {jobs.length} Open Positions
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
                                Find Your <span className="text-blue-600">Dream Job</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Join our team of innovators shaping the future of AI-powered recruitment.
                                Explore opportunities across engineering, design, data, and more.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Jobs Section */}
                <section className="py-12 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Filters */}
                        <JobFilters
                            search={search}
                            department={department}
                            location={location}
                            type={type}
                            onSearchChange={setSearch}
                            onDepartmentChange={setDepartment}
                            onLocationChange={setLocation}
                            onTypeChange={setType}
                            onClearFilters={clearFilters}
                            resultCount={filteredJobs.length}
                        />

                        {/* Job Grid */}
                        {filteredJobs.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredJobs.map((job, index) => (
                                    <JobCard key={job.id} job={job} index={index} />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase size={32} className="text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Clear All Filters
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-white/10"
                                style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 2) * 40}%` }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                            >
                                <Sparkles size={40} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Don't see the right fit?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            We're always looking for talented individuals. Send us your resume and we'll reach out when there's a match.
                        </p>
                        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all">
                            Submit Your Resume
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
