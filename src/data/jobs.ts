export interface Job {
    id: string
    title: string
    department: string
    location: string
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
    salary: {
        min: number
        max: number
        currency: string
    }
    description: string
    requirements: string[]
    responsibilities: string[]
    benefits: string[]
    postedDate: string
    closingDate: string
}

export const jobs: Job[] = [
    {
        id: 'senior-frontend-engineer',
        title: 'Senior Frontend Engineer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: { min: 150000, max: 200000, currency: 'USD' },
        description: 'We are looking for a Senior Frontend Engineer to join our growing team. You will be responsible for building and maintaining our web applications using React and Next.js.',
        requirements: [
            '5+ years of experience with React and TypeScript',
            'Strong understanding of modern CSS and responsive design',
            'Experience with Next.js and server-side rendering',
            'Familiarity with testing frameworks like Jest and Cypress',
            'Excellent communication and collaboration skills'
        ],
        responsibilities: [
            'Build and maintain high-quality web applications',
            'Collaborate with designers and product managers',
            'Mentor junior developers and conduct code reviews',
            'Optimize applications for performance and accessibility',
            'Contribute to technical architecture decisions'
        ],
        benefits: [
            'Competitive salary and equity package',
            'Health, dental, and vision insurance',
            'Unlimited PTO policy',
            'Remote-friendly work environment',
            'Professional development budget'
        ],
        postedDate: '2026-02-01',
        closingDate: '2026-03-01'
    },
    {
        id: 'product-designer',
        title: 'Product Designer',
        department: 'Design',
        location: 'New York, NY',
        type: 'Full-time',
        salary: { min: 120000, max: 160000, currency: 'USD' },
        description: 'Join our design team to create beautiful, intuitive user experiences. You will work closely with product and engineering to shape the future of our platform.',
        requirements: [
            '4+ years of product design experience',
            'Proficiency in Figma and design systems',
            'Strong portfolio demonstrating UX thinking',
            'Experience with user research and testing',
            'Understanding of accessibility standards'
        ],
        responsibilities: [
            'Design end-to-end user experiences',
            'Create wireframes, prototypes, and high-fidelity mockups',
            'Conduct user research and usability testing',
            'Maintain and evolve our design system',
            'Present designs to stakeholders'
        ],
        benefits: [
            'Competitive salary and equity',
            'Comprehensive health benefits',
            'Flexible work schedule',
            'Design tools and software provided',
            'Annual conference budget'
        ],
        postedDate: '2026-02-03',
        closingDate: '2026-03-15'
    },
    {
        id: 'backend-engineer',
        title: 'Backend Engineer',
        department: 'Engineering',
        location: 'Austin, TX',
        type: 'Remote',
        salary: { min: 130000, max: 180000, currency: 'USD' },
        description: 'We need a talented Backend Engineer to build scalable APIs and services. You will work on our core platform infrastructure using Node.js and PostgreSQL.',
        requirements: [
            '4+ years of backend development experience',
            'Strong experience with Node.js and TypeScript',
            'Experience with PostgreSQL or similar databases',
            'Understanding of RESTful API design',
            'Knowledge of cloud services (AWS/GCP)'
        ],
        responsibilities: [
            'Design and implement RESTful APIs',
            'Optimize database queries and performance',
            'Build scalable microservices architecture',
            'Implement security best practices',
            'Write comprehensive tests and documentation'
        ],
        benefits: [
            'Fully remote position',
            'Competitive compensation',
            'Home office setup allowance',
            'Health and wellness benefits',
            'Stock options'
        ],
        postedDate: '2026-02-05',
        closingDate: '2026-03-20'
    },
    {
        id: 'recruiter-specialist',
        title: 'Talent Acquisition Specialist',
        department: 'Human Resources',
        location: 'Chicago, IL',
        type: 'Full-time',
        salary: { min: 70000, max: 95000, currency: 'USD' },
        description: 'Help us find and attract top talent! As a Talent Acquisition Specialist, you will manage the full recruitment lifecycle and build relationships with candidates.',
        requirements: [
            '3+ years of recruiting experience',
            'Experience with ATS systems',
            'Strong negotiation and communication skills',
            'Track record of meeting hiring goals',
            'Knowledge of employment laws'
        ],
        responsibilities: [
            'Source and screen candidates',
            'Conduct initial interviews',
            'Coordinate hiring process with managers',
            'Manage candidate experience',
            'Build talent pipeline'
        ],
        benefits: [
            'Base salary plus bonuses',
            'Medical and dental coverage',
            'Career growth opportunities',
            '401(k) matching',
            'Paid parental leave'
        ],
        postedDate: '2026-01-28',
        closingDate: '2026-02-28'
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        department: 'Data',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: { min: 140000, max: 190000, currency: 'USD' },
        description: 'Join our data team to build ML models that power our AI-driven recruitment platform. You will analyze data and develop algorithms to improve candidate matching.',
        requirements: [
            'Masters or PhD in Computer Science, Statistics, or related field',
            'Strong programming skills in Python',
            'Experience with ML frameworks (TensorFlow, PyTorch)',
            'Understanding of NLP techniques',
            'Experience with SQL and data visualization'
        ],
        responsibilities: [
            'Develop and deploy ML models',
            'Analyze large datasets for insights',
            'Improve candidate matching algorithms',
            'Collaborate with engineering on model integration',
            'Present findings to stakeholders'
        ],
        benefits: [
            'Top-tier compensation',
            'Research publication opportunities',
            'Conference attendance',
            'Premium healthcare',
            'Equity participation'
        ],
        postedDate: '2026-02-04',
        closingDate: '2026-03-10'
    },
    {
        id: 'customer-success-manager',
        title: 'Customer Success Manager',
        department: 'Customer Success',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: { min: 80000, max: 110000, currency: 'USD' },
        description: 'Be the voice of our customers! Help our clients succeed with the RecruiterAI platform by providing exceptional support and strategic guidance.',
        requirements: [
            '3+ years in customer success or account management',
            'Experience with SaaS products',
            'Strong presentation and communication skills',
            'Data-driven approach to problem solving',
            'Technical aptitude'
        ],
        responsibilities: [
            'Onboard new customers',
            'Conduct regular check-ins and QBRs',
            'Identify upsell opportunities',
            'Resolve customer issues',
            'Gather and share customer feedback'
        ],
        benefits: [
            'Salary plus commission',
            'Health benefits',
            'Professional development',
            'Flexible PTO',
            'Team events'
        ],
        postedDate: '2026-02-02',
        closingDate: '2026-02-25'
    },
    {
        id: 'marketing-manager',
        title: 'Marketing Manager',
        department: 'Marketing',
        location: 'Los Angeles, CA',
        type: 'Full-time',
        salary: { min: 100000, max: 140000, currency: 'USD' },
        description: 'Drive our marketing strategy and help RecruiterAI become the go-to platform for AI-powered recruitment. You will lead campaigns across digital and traditional channels.',
        requirements: [
            '5+ years of B2B marketing experience',
            'Experience with marketing automation tools',
            'Strong analytical and project management skills',
            'Content marketing expertise',
            'Budget management experience'
        ],
        responsibilities: [
            'Develop and execute marketing strategy',
            'Manage multi-channel campaigns',
            'Oversee content creation',
            'Track and report on KPIs',
            'Manage marketing budget'
        ],
        benefits: [
            'Competitive salary',
            'Performance bonuses',
            'Comprehensive benefits',
            'Remote work options',
            'Learning stipend'
        ],
        postedDate: '2026-01-30',
        closingDate: '2026-02-28'
    },
    {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Denver, CO',
        type: 'Remote',
        salary: { min: 135000, max: 175000, currency: 'USD' },
        description: 'Build and maintain our cloud infrastructure. You will work on CI/CD pipelines, monitoring, and ensuring our platform runs reliably at scale.',
        requirements: [
            '4+ years of DevOps experience',
            'Strong experience with AWS or GCP',
            'Proficiency with Docker and Kubernetes',
            'Experience with Infrastructure as Code (Terraform)',
            'Knowledge of monitoring tools (Datadog, Prometheus)'
        ],
        responsibilities: [
            'Manage cloud infrastructure',
            'Build and maintain CI/CD pipelines',
            'Implement monitoring and alerting',
            'Ensure system security and compliance',
            'Optimize costs and performance'
        ],
        benefits: [
            'Fully remote',
            'Competitive pay',
            'Equity options',
            'Health coverage',
            'Learning budget'
        ],
        postedDate: '2026-02-06',
        closingDate: '2026-03-15'
    }
]

export const departments = [...new Set(jobs.map(job => job.department))]
export const locations = [...new Set(jobs.map(job => job.location))]
export const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'] as const

export function getJobById(id: string): Job | undefined {
    return jobs.find(job => job.id === id)
}

export function filterJobs(filters: {
    search?: string
    department?: string
    location?: string
    type?: string
}): Job[] {
    return jobs.filter(job => {
        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            if (!job.title.toLowerCase().includes(searchLower) &&
                !job.description.toLowerCase().includes(searchLower)) {
                return false
            }
        }
        if (filters.department && job.department !== filters.department) return false
        if (filters.location && job.location !== filters.location) return false
        if (filters.type && job.type !== filters.type) return false
        return true
    })
}
