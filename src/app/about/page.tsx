'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
    Target, Heart, Lightbulb, Users, Globe, Zap,
    ArrowRight, Sparkles, Award, TrendingUp
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const values = [
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'We push boundaries and embrace new technologies to solve recruitment challenges.',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        icon: Heart,
        title: 'People Centered',
        description: 'Every decision we make puts candidates and recruiters at the center.',
        color: 'from-pink-400 to-rose-500'
    },
    {
        icon: Target,
        title: 'Results Driven',
        description: 'We measure success by the outcomes we deliver for our customers.',
        color: 'from-blue-400 to-indigo-500'
    },
    {
        icon: Globe,
        title: 'Diversity & Inclusion',
        description: 'Building diverse teams and creating equal opportunities for all.',
        color: 'from-green-400 to-emerald-500'
    },
]

const team = [
    {
        name: 'Sarah Chen',
        role: 'CEO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
        bio: 'Former VP of Engineering at LinkedIn'
    },
    {
        name: 'Marcus Johnson',
        role: 'CTO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
        bio: 'Ex-Google AI Research Lead'
    },
    {
        name: 'Elena Rodriguez',
        role: 'VP of Product',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
        bio: 'Previously at Workday & Greenhouse'
    },
    {
        name: 'David Park',
        role: 'VP of Engineering',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        bio: 'Built teams at Stripe & Dropbox'
    },
    {
        name: 'Aisha Patel',
        role: 'Head of AI Research',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        bio: 'PhD Stanford, NLP Expert'
    },
    {
        name: 'James Wilson',
        role: 'VP of Sales',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
        bio: 'Scaled revenue at HubSpot'
    },
]

const stats = [
    { value: '5,000+', label: 'Companies Hiring' },
    { value: '2M+', label: 'Candidates Matched' },
    { value: '150+', label: 'Team Members' },
    { value: '$50M', label: 'Series B Raised' },
]

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-b from-blue-50/70 via-white to-white overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                <Sparkles size={14} />
                                About RecruiterAI
                            </span>
                            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                                Making Hiring <br />
                                <span className="text-blue-600">Human Again</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We believe AI should amplify human judgment, not replace it. Our mission is to help companies find great talent faster while giving every candidate a fair chance.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 border-y border-gray-100 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        RecruiterAI was founded in 2022 by Sarah Chen and Marcus Johnson, who experienced firsthand the frustrations of modern hiring. Sarah, as a VP at LinkedIn, saw how recruiters drowned in applications. Marcus, leading AI research at Google, knew there had to be a better way.
                                    </p>
                                    <p>
                                        They combined their expertise to build an AI that doesn't just automate—it understands. Our technology reads between the lines of resumes, identifies potential hidden in unconventional backgrounds, and helps humans make better decisions.
                                    </p>
                                    <p>
                                        Today, over 5,000 companies trust RecruiterAI to transform their hiring process, from fast-growing startups to Fortune 500 enterprises.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                                    <Award size={48} className="mb-6 text-white/80" />
                                    <h3 className="text-2xl font-bold mb-4">Award Winning Platform</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <TrendingUp size={18} />
                                            Forbes AI 50 - 2025
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <TrendingUp size={18} />
                                            G2 Leader in Recruiting Software
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <TrendingUp size={18} />
                                            Best HR Tech Innovation - SHRM
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Values</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <value.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-serif text-gray-900 mb-4">Meet the Team</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                World-class talent building the future of recruitment
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member, i) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group text-center"
                                >
                                    <div className="relative mb-4 inline-block">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-40 h-40 rounded-full object-cover mx-auto ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                                    <p className="text-gray-500 text-sm">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section className="py-24 bg-gray-900 text-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-serif mb-6">Life at RecruiterAI</h2>
                                <p className="text-blue-100 text-lg mb-8">
                                    We're building something special, and we want you to be part of it. Our culture is built on trust, transparency, and the belief that great work happens when people feel valued.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <Zap size={16} />
                                        </div>
                                        <span>Remote-first, async-friendly</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                            <Users size={16} />
                                        </div>
                                        <span>Diverse team from 20+ countries</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                            <Heart size={16} />
                                        </div>
                                        <span>Unlimited PTO & wellness benefits</span>
                                    </div>
                                </div>
                                <Link
                                    href="/jobs"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all"
                                >
                                    View Open Positions
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                                    alt="Team collaboration"
                                    className="rounded-2xl object-cover w-full h-40"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                                    alt="Office culture"
                                    className="rounded-2xl object-cover w-full h-40 mt-8"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                                    alt="Team meeting"
                                    className="rounded-2xl object-cover w-full h-40"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop"
                                    alt="Modern office"
                                    className="rounded-2xl object-cover w-full h-40 mt-8"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
