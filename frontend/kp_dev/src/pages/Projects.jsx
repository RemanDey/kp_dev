import { useData } from '../hooks/useData'
import { ProjectCard } from '../components/ProjectCard'
import { Code2 } from 'lucide-react'
import { useState } from 'react'

export function Projects() {
  const { projects } = useData()
  const [filter, setFilter] = useState('All')

  const statuses = ['All', ...new Set(projects.map(p => p.status))]
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.status === filter)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h1 className="text-5xl font-bold">Our Projects</h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of the innovative projects built by our talented team members.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-200 dark:bg-dark-border text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {status} {status !== 'All' && `(${projects.filter(p => p.status === status).length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => {}}
              onDelete={() => {}}
              isAdminMode={false}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-600 dark:text-slate-400">No projects found in this category.</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-slate-200 dark:border-dark-border">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{projects.length}</p>
            <p className="text-slate-600 dark:text-slate-400">Total Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {projects.filter(p => p.status === 'Completed').length}
            </p>
            <p className="text-slate-600 dark:text-slate-400">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {projects.filter(p => p.status === 'In Progress').length}
            </p>
            <p className="text-slate-600 dark:text-slate-400">In Progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}
