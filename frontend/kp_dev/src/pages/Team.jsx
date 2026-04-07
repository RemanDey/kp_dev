import { useData } from '../hooks/useData'
import { TeamCard } from '../components/TeamCard'
import { Briefcase } from 'lucide-react'

export function Team() {
  const { teamMembers } = useData()

  const groupedByRole = {}
  teamMembers.forEach(member => {
    const role = member.role || 'Member'
    if (!groupedByRole[role]) {
      groupedByRole[role] = []
    }
    groupedByRole[role].push(member)
  })

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h1 className="text-5xl font-bold">Our Team</h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Meet the talented individuals driving innovation in the KP Dev Cell community.
          </p>
        </div>

        {/* Team Members by Role */}
        {Object.entries(groupedByRole).map(([role, members]) => (
          <div key={role} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary-600 dark:text-primary-400">{role}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map(member => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  isAdminMode={false}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-16 border-t border-slate-200 dark:border-dark-border">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{teamMembers.length}</p>
            <p className="text-slate-600 dark:text-slate-400">Total Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{Object.keys(groupedByRole).length}</p>
            <p className="text-slate-600 dark:text-slate-400">Leadership Roles</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">∞</p>
            <p className="text-slate-600 dark:text-slate-400">Potential</p>
          </div>
        </div>
      </div>
    </div>
  )
}
