import { useState, useEffect } from 'react'
import { useData } from '../hooks/useData'
import { TeamCard } from '../components/TeamCard'
import { ProjectCard } from '../components/ProjectCard'
import { Modal, Input, Textarea, Button } from '../components/UI'
import { Lock, LogOut, Plus } from 'lucide-react'

export function Admin() {
  const { teamMembers, projects, adminPassword, addTeamMember, updateTeamMember, deleteTeamMember, addProject, updateProject, deleteProject } = useData()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [activeTab, setActiveTab] = useState('team')
  const [editingTeam, setEditingTeam] = useState(null)
  const [editingProject, setEditingProject] = useState(null)
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const [teamForm, setTeamForm] = useState({ name: '', role: '', bio: '', image: '' })
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    status: 'In Progress',
    image: ''
  })

  useEffect(() => {
    const savedAuth = localStorage.getItem('kpdev_admin_auth')
    if (savedAuth) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    
    if (password === adminPassword) {
      setIsAuthenticated(true)
      localStorage.setItem('kpdev_admin_auth', 'true')
      setPassword('')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('kpdev_admin_auth')
  }

  // Team Management
  const handleTeamSubmit = (e) => {
    e.preventDefault()
    if (!teamForm.name || !teamForm.role) {
      alert('Please fill in all required fields')
      return
    }

    if (editingTeam) {
      updateTeamMember(editingTeam.id, teamForm)
    } else {
      addTeamMember(teamForm)
    }

    setTeamForm({ name: '', role: '', bio: '', image: '' })
    setEditingTeam(null)
    setIsTeamModalOpen(false)
  }

  const editTeam = (member) => {
    setEditingTeam(member)
    setTeamForm({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image
    })
    setIsTeamModalOpen(true)
  }

  const deleteTeam = (id) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      deleteTeamMember(id)
    }
  }

  // Project Management
  const handleProjectSubmit = (e) => {
    e.preventDefault()
    if (!projectForm.title || !projectForm.description) {
      alert('Please fill in all required fields')
      return
    }

    const technologies = projectForm.technologies.split(',').map(t => t.trim()).filter(t => t)

    const projectData = {
      ...projectForm,
      technologies
    }

    if (editingProject) {
      updateProject(editingProject.id, projectData)
    } else {
      addProject(projectData)
    }

    setProjectForm({ title: '', description: '', technologies: '', link: '', status: 'In Progress', image: '' })
    setEditingProject(null)
    setIsProjectModalOpen(false)
  }

  const editProject = (proj) => {
    setEditingProject(proj)
    setProjectForm({
      title: proj.title,
      description: proj.description,
      technologies: proj.technologies.join(', '),
      link: proj.link,
      status: proj.status,
      image: proj.image
    })
    setIsProjectModalOpen(true)
  }

  const deleteProj = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-dark-surface rounded-lg border border-slate-200 dark:border-dark-border p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <h1 className="text-2xl font-bold">Admin Login</h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="Enter admin password"
                />
              </div>

              {error && <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>}

              <Button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Login
              </Button>
            </form>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-6">
              Default password: devtech123
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-dark-border">
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'team'
                ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Team Members ({teamMembers.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Projects ({projects.length})
          </button>
        </div>

        {/* Team Management */}
        {activeTab === 'team' && (
          <div>
            <button
              onClick={() => {
                setEditingTeam(null)
                setTeamForm({ name: '', role: '', bio: '', image: '' })
                setIsTeamModalOpen(true)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors mb-6"
            >
              <Plus size={20} />
              Add Team Member
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map(member => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onEdit={editTeam}
                  onDelete={deleteTeam}
                  isAdminMode={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Management */}
        {activeTab === 'projects' && (
          <div>
            <button
              onClick={() => {
                setEditingProject(null)
                setProjectForm({ title: '', description: '', technologies: '', link: '', status: 'In Progress', image: '' })
                setIsProjectModalOpen(true)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors mb-6"
            >
              <Plus size={20} />
              Add Project
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={editProject}
                  onDelete={deleteProj}
                  isAdminMode={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Team Modal */}
        <Modal
          isOpen={isTeamModalOpen}
          onClose={() => {
            setIsTeamModalOpen(false)
            setEditingTeam(null)
          }}
          title={editingTeam ? 'Edit Team Member' : 'Add Team Member'}
        >
          <form onSubmit={handleTeamSubmit} className="space-y-4">
            <Input
              label="Name *"
              value={teamForm.name}
              onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
              placeholder="Full name"
            />
            <Input
              label="Role *"
              value={teamForm.role}
              onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
              placeholder="e.g., President, Tech Lead"
            />
            <Textarea
              label="Bio"
              value={teamForm.bio}
              onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
              placeholder="Brief bio"
              rows={3}
            />
            <Input
              label="Image URL"
              value={teamForm.image}
              onChange={(e) => setTeamForm({ ...teamForm, image: e.target.value })}
              placeholder="https://..."
            />
            <div className="flex gap-3 justify-end pt-4">
              <Button
                variant="secondary"
                onClick={() => {
                  setIsTeamModalOpen(false)
                  setEditingTeam(null)
                }}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {editingTeam ? 'Update' : 'Add'} Member
              </Button>
            </div>
          </form>
        </Modal>

        {/* Project Modal */}
        <Modal
          isOpen={isProjectModalOpen}
          onClose={() => {
            setIsProjectModalOpen(false)
            setEditingProject(null)
          }}
          title={editingProject ? 'Edit Project' : 'Add Project'}
        >
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <Input
              label="Title *"
              value={projectForm.title}
              onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
              placeholder="Project name"
            />
            <Textarea
              label="Description *"
              value={projectForm.description}
              onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
              placeholder="Project description"
              rows={3}
            />
            <Input
              label="Technologies (comma-separated)"
              value={projectForm.technologies}
              onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
              placeholder="React, Node.js, MongoDB"
            />
            <Input
              label="Project Link"
              value={projectForm.link}
              onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
              placeholder="https://github.com/..."
            />
            <Input
              label="Image URL"
              value={projectForm.image}
              onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
              placeholder="https://..."
            />
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">Status</label>
              <select
                value={projectForm.status}
                onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="flex gap-3 justify-end pt-4">
              <Button
                variant="secondary"
                onClick={() => {
                  setIsProjectModalOpen(false)
                  setEditingProject(null)
                }}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {editingProject ? 'Update' : 'Add'} Project
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}
