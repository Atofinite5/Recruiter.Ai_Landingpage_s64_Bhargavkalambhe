'use client'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { departments, locations, jobTypes } from '@/data/jobs'

interface JobFiltersProps {
    search: string
    department: string
    location: string
    type: string
    onSearchChange: (value: string) => void
    onDepartmentChange: (value: string) => void
    onLocationChange: (value: string) => void
    onTypeChange: (value: string) => void
    onClearFilters: () => void
    resultCount: number
}

export default function JobFilters({
    search,
    department,
    location,
    type,
    onSearchChange,
    onDepartmentChange,
    onLocationChange,
    onTypeChange,
    onClearFilters,
    resultCount
}: JobFiltersProps) {
    const hasFilters = search || department || location || type

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search jobs by title or keyword..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Filter dropdowns */}
            <div className="flex flex-wrap gap-4 mb-4">
                <select
                    value={department}
                    onChange={(e) => onDepartmentChange(e.target.value)}
                    className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 min-w-[160px]"
                >
                    <option value="">All Departments</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>

                <select
                    value={location}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 min-w-[180px]"
                >
                    <option value="">All Locations</option>
                    {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                <select
                    value={type}
                    onChange={(e) => onTypeChange(e.target.value)}
                    className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 min-w-[140px]"
                >
                    <option value="">All Types</option>
                    {jobTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>

                {hasFilters && (
                    <button
                        onClick={onClearFilters}
                        className="px-4 py-2.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                    >
                        <X size={18} />
                        Clear Filters
                    </button>
                )}
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                    Showing <span className="font-semibold text-gray-900">{resultCount}</span> {resultCount === 1 ? 'position' : 'positions'}
                </span>
                {hasFilters && (
                    <span className="flex items-center gap-1">
                        <SlidersHorizontal size={14} />
                        Filters applied
                    </span>
                )}
            </div>
        </div>
    )
}
