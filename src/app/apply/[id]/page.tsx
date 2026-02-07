'use client'
import { useState, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    ArrowLeft, ArrowRight, Check, User, FileText,
    MessageSquare, Send, CheckCircle, Briefcase, Loader2
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FileUpload from '@/components/forms/FileUpload'
import { getJobById } from '@/data/jobs'

interface Props {
    params: Promise<{ id: string }>
}

const steps = [
    { id: 1, name: 'Personal Info', icon: User },
    { id: 2, name: 'Resume', icon: FileText },
    { id: 3, name: 'Cover Letter', icon: MessageSquare },
    { id: 4, name: 'Review', icon: Send },
]

export default function ApplicationPage({ params }: Props) {
    const { id } = use(params)
    const job = getJobById(id)

    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedIn: '',
        portfolio: '',
        resume: null as File | null,
        coverLetter: '',
        heardFrom: '',
        startDate: '',
        additionalInfo: '',
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    if (!job) {
        notFound()
    }

    const updateFormData = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {}

        if (step === 1) {
            if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
            if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
            if (!formData.email.trim()) newErrors.email = 'Email is required'
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        }

        if (step === 2) {
            if (!formData.resume) newErrors.resume = 'Resume is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4))
        }
    }

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) return

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white flex items-center justify-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto px-6 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
                        <p className="text-gray-600 mb-8">
                            Thank you for applying to <strong>{job.title}</strong>. We've received your application and will review it shortly. You'll hear from us within 5-7 business days.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/jobs"
                                className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Browse More Jobs
                            </Link>
                            <Link
                                href="/"
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white py-12">
                <div className="max-w-3xl mx-auto px-6">
                    {/* Header */}
                    <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to job details
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Briefcase size={20} className="text-blue-600" />
                            </div>
                            <span className="text-gray-600">Applying for</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                        <p className="text-gray-600">{job.location} • {job.department}</p>
                    </motion.div>

                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${currentStep > step.id
                                            ? 'bg-green-500 text-white'
                                            : currentStep === step.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-400'
                                        }`}>
                                        {currentStep > step.id ? <Check size={18} /> : step.id}
                                    </div>
                                    <span className={`ml-2 hidden sm:block font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                                        }`}>
                                        {step.name}
                                    </span>
                                    {index < steps.length - 1 && (
                                        <div className={`w-12 sm:w-24 h-1 mx-2 rounded-full ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                                            }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Personal Info */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">Personal Information</h2>
                                        <p className="text-gray-600">Tell us about yourself</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => updateFormData('firstName', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                    }`}
                                                placeholder="John"
                                            />
                                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) => updateFormData('lastName', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                    }`}
                                                placeholder="Doe"
                                            />
                                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => updateFormData('email', e.target.value)}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                            placeholder="john.doe@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData('phone', e.target.value)}
                                            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                                }`}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (optional)</label>
                                            <input
                                                type="url"
                                                value={formData.linkedIn}
                                                onChange={(e) => updateFormData('linkedIn', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="linkedin.com/in/johndoe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio (optional)</label>
                                            <input
                                                type="url"
                                                value={formData.portfolio}
                                                onChange={(e) => updateFormData('portfolio', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="johndoe.com"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Resume */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Your Resume</h2>
                                        <p className="text-gray-600">Share your experience and qualifications</p>
                                    </div>

                                    <FileUpload
                                        onFileSelect={(file) => updateFormData('resume', file)}
                                        currentFile={formData.resume}
                                    />
                                    {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                                        <select
                                            value={formData.heardFrom}
                                            onChange={(e) => updateFormData('heardFrom', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select an option</option>
                                            <option value="linkedin">LinkedIn</option>
                                            <option value="indeed">Indeed</option>
                                            <option value="referral">Employee Referral</option>
                                            <option value="company-website">Company Website</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Earliest Start Date</label>
                                        <input
                                            type="date"
                                            value={formData.startDate}
                                            onChange={(e) => updateFormData('startDate', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Cover Letter */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">Cover Letter</h2>
                                        <p className="text-gray-600">Tell us why you're interested in this role (optional)</p>
                                    </div>

                                    <div>
                                        <textarea
                                            value={formData.coverLetter}
                                            onChange={(e) => updateFormData('coverLetter', e.target.value)}
                                            rows={8}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            placeholder="Dear Hiring Manager,

I am excited to apply for the position of..."
                                        />
                                        <p className="text-sm text-gray-500 mt-2">{formData.coverLetter.length} / 2000 characters</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Anything else you'd like us to know?</label>
                                        <textarea
                                            value={formData.additionalInfo}
                                            onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            placeholder="Optional additional information..."
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Review */}
                            {currentStep === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">Review Your Application</h2>
                                        <p className="text-gray-600">Make sure everything looks good before submitting</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                                <div><span className="text-gray-500">Name:</span> {formData.firstName} {formData.lastName}</div>
                                                <div><span className="text-gray-500">Email:</span> {formData.email}</div>
                                                <div><span className="text-gray-500">Phone:</span> {formData.phone}</div>
                                                {formData.linkedIn && <div><span className="text-gray-500">LinkedIn:</span> {formData.linkedIn}</div>}
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-4">
                                            <h3 className="font-semibold text-gray-900 mb-3">Documents</h3>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <FileText size={20} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{formData.resume?.name}</p>
                                                    <p className="text-sm text-gray-500">Resume</p>
                                                </div>
                                            </div>
                                        </div>

                                        {formData.coverLetter && (
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <h3 className="font-semibold text-gray-900 mb-3">Cover Letter</h3>
                                                <p className="text-sm text-gray-600 line-clamp-3">{formData.coverLetter}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                                        <p className="text-sm text-blue-700">
                                            By submitting this application, you agree to our privacy policy and consent to RecruiterAI processing your personal data for recruitment purposes.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                            {currentStep > 1 ? (
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors flex items-center gap-2"
                                >
                                    <ArrowLeft size={18} />
                                    Previous
                                </button>
                            ) : (
                                <div />
                            )}

                            {currentStep < 4 ? (
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    Next Step
                                    <ArrowRight size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
