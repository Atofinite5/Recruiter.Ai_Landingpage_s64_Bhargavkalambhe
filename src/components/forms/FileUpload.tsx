'use client'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileUploadProps {
    onFileSelect: (file: File | null) => void
    currentFile: File | null
    accept?: Record<string, string[]>
    maxSize?: number
    label?: string
}

export default function FileUpload({
    onFileSelect,
    currentFile,
    accept = { 'application/pdf': ['.pdf'], 'application/msword': ['.doc'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] },
    maxSize = 5 * 1024 * 1024, // 5MB
    label = 'Resume/CV'
}: FileUploadProps) {
    const [error, setError] = useState<string | null>(null)

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
        setError(null)

        if (rejectedFiles.length > 0) {
            const rejection = rejectedFiles[0]
            if (rejection.errors[0]?.code === 'file-too-large') {
                setError('File is too large. Maximum size is 5MB.')
            } else if (rejection.errors[0]?.code === 'file-invalid-type') {
                setError('Invalid file type. Please upload a PDF, DOC, or DOCX file.')
            } else {
                setError('Unable to upload file. Please try again.')
            }
            return
        }

        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0])
        }
    }, [onFileSelect])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxSize,
        multiple: false,
    })

    const removeFile = () => {
        onFileSelect(null)
        setError(null)
    }

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' bytes'
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
    }

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{label} *</label>

            <AnimatePresence mode="wait">
                {currentFile ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <File size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{currentFile.name}</p>
                                <p className="text-sm text-gray-500">{formatFileSize(currentFile.size)}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={20} className="text-green-600" />
                            <button
                                type="button"
                                onClick={removeFile}
                                className="p-1.5 hover:bg-green-100 rounded-lg transition-colors"
                            >
                                <X size={18} className="text-gray-500" />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${isDragActive
                                    ? 'border-blue-500 bg-blue-50'
                                    : error
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50/50'
                                }`}
                        >
                            <input {...getInputProps()} />
                            <div className={`w-12 h-12 ${isDragActive ? 'bg-blue-100' : 'bg-gray-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <Upload size={24} className={isDragActive ? 'text-blue-600' : 'text-gray-400'} />
                            </div>
                            {isDragActive ? (
                                <p className="text-blue-600 font-medium">Drop your file here...</p>
                            ) : (
                                <>
                                    <p className="text-gray-600 mb-1">
                                        <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-sm text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 text-sm"
                >
                    <AlertCircle size={16} />
                    {error}
                </motion.div>
            )}
        </div>
    )
}
