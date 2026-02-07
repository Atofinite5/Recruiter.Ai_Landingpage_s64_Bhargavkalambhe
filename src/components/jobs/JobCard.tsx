'use client'
import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { Job } from '@/data/jobs'

interface JobCardProps {
    job: Job
    index?: number
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
    const formatSalary = (min: number, max: number) => {
        const formatNum = (n: number) => n >= 1000 ? `${n / 1000}k` : n
        return `$${formatNum(min)} - $${formatNum(max)}`
    }

    const typeColors: Record<string, string> = {
        'Full-time': 'bg-green-100 text-green-700',
        'Part-time': 'bg-yellow-100 text-yellow-700',
        'Contract': 'bg-orange-100 text-orange-700',
        'Remote': 'bg-blue-100 text-blue-700',
    }

    const departmentColors: Record<string, string> = {
        'Engineering': 'from-blue-500 to-indigo-500',
        'Design': 'from-pink-500 to-rose-500',
        'Data': 'from-purple-500 to-violet-500',
        'Human Resources': 'from-teal-500 to-cyan-500',
        'Customer Success': 'from-green-500 to-emerald-500',
        'Marketing': 'from-orange-500 to-amber-500',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            {/* Top accent bar */}
            <div className={`h-1 bg-gradient-to-r ${departmentColors[job.department] || 'from-blue-500 to-blue-600'}`} />

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className="text-sm text-gray-500 font-medium">{job.department}</span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-1">
                            {job.title}
                        </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[job.type]}`}>
                        {job.type}
                    </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-gray-400" />
                        {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <DollarSign size={16} className="text-gray-400" />
                        {formatSalary(job.salary.min, job.salary.max)}
                    </div>
                </div>

                {/* Description preview */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                    {job.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href={`/jobs/${job.id}`}
                        className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl text-center transition-colors text-sm"
                    >
                        View Details
                    </Link>
                    <Link
                        href={`/apply/${job.id}`}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-xl text-center transition-all text-sm flex items-center justify-center gap-1 group/btn"
                    >
                        Apply
                        <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
