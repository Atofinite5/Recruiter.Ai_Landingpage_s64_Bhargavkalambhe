'use client'

const logos = [
    { name: 'AngelList', color: '#808080' },
    { name: 'Monster', color: '#9333EA' },
    { name: 'ZipRecruiter', color: '#10B981' },
    { name: 'Behance', color: '#3B82F6' },
    { name: 'LinkedIn', color: '#0A66C2' },
    { name: 'Indeed', color: '#2164F3' },
    { name: 'Glassdoor', color: '#0CAA41' },
    { name: 'Naukri.com', color: '#6366F1' },
    { name: 'Instahyre', color: '#F59E0B' },
    { name: 'Wellfound', color: '#1E293B' },
]

export default function LogoMarquee() {
    return (
        <section className="relative py-12 bg-white overflow-hidden">
            {/* Wavy Line Decoration (Top Left) */}
            <div className="absolute top-0 left-0 w-full pointer-events-none">
                <svg
                    className="absolute top-4 left-0"
                    width="400"
                    height="60"
                    viewBox="0 0 400 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 30 Q 100 10, 200 30 T 400 30"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            {/* Marquee Container */}
            <div className="relative overflow-hidden">
                {/* Fade Masks (Left & Right) */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Scrolling Logos - RIGHT TO LEFT */}
                <div className="flex gap-12 animate-marquee-rtl hover:[animation-play-state:paused]">
                    {/* First Set */}
                    {logos.map((logo, index) => (
                        <LogoItem key={`first-${index}`} logo={logo} />
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {logos.map((logo, index) => (
                        <LogoItem key={`second-${index}`} logo={logo} />
                    ))}
                </div>
            </div>
        </section>
    )
}

// Logo Item Component
interface LogoItemProps {
    logo: {
        name: string
        color: string
    }
}

function LogoItem({ logo }: LogoItemProps) {
    return (
        <div className="flex-shrink-0 px-8 py-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer min-w-[180px] flex items-center justify-center">
            <span
                className="text-xl font-bold whitespace-nowrap"
                style={{ color: logo.color }}
            >
                {logo.name}
            </span>
        </div>
    )
}
