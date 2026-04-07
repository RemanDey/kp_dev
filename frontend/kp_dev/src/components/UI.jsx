import { useState } from 'react'
import { X } from 'lucide-react'

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-dark-surface rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-dark-border rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export function FormField({ label, error, children }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">{label}</label>}
      {children}
      {error && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{error}</p>}
    </div>
  )
}

export function Input({ label, error, ...props }) {
  return (
    <FormField label={label} error={error}>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
      />
    </FormField>
  )
}

export function Textarea({ label, error, ...props }) {
  return (
    <FormField label={label} error={error}>
      <textarea
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
      />
    </FormField>
  )
}

export function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-slate-200 dark:bg-dark-border text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
