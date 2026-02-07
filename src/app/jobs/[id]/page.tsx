'use client'
import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    MapPin, DollarSign, Clock, Calendar, Briefcase,
    ArrowLeft, CheckCircle, Building, Users, Share2,
    Bookmark, ArrowRight
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getJobById, jobs } from '@/data/jobs'

interface Props {
    params: Promise<{ id: string }>
}

export default function JobDetailPage({ params }: Props) {
    const { id } = use(params)
    const job = getJobById(id)

    if (!job) {
        notFound()
    }

    const formatSalary = (min: number, max: number) => {
        return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`
    }

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    // Get related jobs from same department
    const relatedJobs = jobs
        .filter(j => j.department === job.department && j.id !== job.id)
        .slice(0, 2)

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white">
                {/* Header */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-6">
                        <Link
                            href="/jobs"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Back to all jobs
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {job.department}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                        {job.type}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                                    {job.title}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} className="text-gray-400" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <DollarSign size={18} className="text-gray-400" />
                                        {formatSalary(job.salary.min, job.salary.max)} / year
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} className="text-gray-400" />
                                        Posted {formatDate(job.postedDate)}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                    <Bookmark size={20} className="text-gray-600" />
                                </button>
                                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                    <Share2 size={20} className="text-gray-600" />
                                </button>
                                <Link
                                    href={`/apply/${job.id}`}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                                >
                                    Apply Now
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-10">
                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About this role</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {job.description}
                                    </p>
                                </motion.div>

                                {/* Responsibilities */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                                    <ul className="space-y-3">
                                        {job.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Requirements */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                                    <ul className="space-y-3">
                                        {job.requirements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <CheckCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Benefits */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {job.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <CheckCircle size={16} className="text-blue-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Apply Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24"
                                >
                                    <h3 className="font-bold text-gray-900 mb-4">Ready to apply?</h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        Application takes about 5-10 minutes. Have your resume ready!
                                    </p>
                                    <Link
                                        href={`/apply/${job.id}`}
                                        className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all"
                                    >
                                        Apply for this Position
                                    </Link>
                                    <p className="text-xs text-gray-500 text-center mt-4">
                                        Closes {formatDate(job.closingDate)}
                                    </p>
                                </motion.div>

                                {/* Company Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6"
                                >
                                    <h3 className="font-bold text-gray-900 mb-4">About RecruiterAI</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        We're building the future of AI-powered recruitment, helping companies find the best talent faster.
                                    </p>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Building size={16} />
                                            Series B Startup
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Users size={16} />
                                            100-200 employees
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <MapPin size={16} />
                                            San Francisco (HQ)
                                        </div>
                                    </div>
                                    <Link href="/about" className="text-blue-600 text-sm font-medium mt-4 inline-block hover:underline">
                                        Learn more about us →
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Jobs */}
                {relatedJobs.length > 0 && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Roles in {job.department}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {relatedJobs.map((relatedJob) => (
                                    <Link
                                        key={relatedJob.id}
                                        href={`/jobs/${relatedJob.id}`}
                                        className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="font-bold text-gray-900">{relatedJob.title}</h3>
                                                <p className="text-gray-600 text-sm">{relatedJob.location}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                {relatedJob.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-2">{relatedJob.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    )
}
