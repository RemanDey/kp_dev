import { Github, Linkedin, Twitter } from 'lucide-react'

export function TeamCard({ member, onEdit, onDelete, isAdminMode }) {
  const getSocialIcon = (social) => {
    switch (social) {
      case 'github':
        return <Github size={18} />
      case 'linkedin':
        return <Linkedin size={18} />
      case 'twitter':
        return <Twitter size={18} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white dark:bg-dark-surface rounded-lg border border-slate-200 dark:border-dark-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{member.name}</h3>
        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{member.bio}</p>
        
        {member.socials && Object.entries(member.socials).length > 0 && (
          <div className="flex gap-3 mb-4">
            {Object.entries(member.socials).map(([social, link]) => (
              <a
                key={social}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {getSocialIcon(social)}
              </a>
            ))}
          </div>
        )}

        {isAdminMode && (
          <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-dark-border">
            <button
              onClick={() => onEdit(member)}
              className="flex-1 px-3 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(member.id)}
              className="flex-1 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
