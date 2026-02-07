'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Zap, Search, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Platform', href: '/#platform' },
  { name: 'Why RecruiterAI', href: '/#why' },
  { name: 'Resources', href: '/#resources' },
  { name: 'About', href: '/about' },
  { name: 'Jobs', href: '/jobs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-sm border-b border-gray-100'
        : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-2xl font-bold text-blue-600 tracking-tight">recruiter<span className="text-blue-500">ai</span></span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isActive(link.href)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:border-gray-400 hover:text-gray-900 transition-all">
            Sign In
          </button>
          <Link
            href="/jobs"
            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all"
          >
            Request a demo
          </Link>
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t bg-white overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-sm font-medium transition-colors ${isActive(link.href) ? 'text-blue-600' : 'text-gray-700'
                }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <button className="block w-full text-left text-sm text-gray-700 font-medium">Sign In</button>
          <Link
            href="/jobs"
            className="block w-full text-center px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
