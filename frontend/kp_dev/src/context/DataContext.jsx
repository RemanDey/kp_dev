import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

const initialTeamMembers = [
  {
    id: 1,
    name: 'Rishab Kumar',
    role: 'President',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rishab',
    bio: 'Leading the Dev Cell with vision and passion',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Vice President',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    bio: 'Driving technical excellence',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Tech Lead',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    bio: 'Architecting scalable solutions',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: 4,
    name: 'Neha Singh',
    role: 'Design Lead',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    bio: 'Creating beautiful user experiences',
    socials: {
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: 5,
    name: 'Karan Verma',
    role: 'Event Lead',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan',
    bio: 'Organizing amazing community events',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: 6,
    name: 'Aisha Khan',
    role: 'Content Lead',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
    bio: 'Sharing knowledge and insights',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    }
  },
]

const initialProjects = [
  {
    id: 1,
    title: 'AI Code Assistant',
    description: 'An intelligent tool that helps developers write better code with AI-powered suggestions.',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
    link: 'https://github.com',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Community Platform',
    description: 'A collaborative platform for developers to share projects, ideas, and collaborate.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    link: 'https://github.com',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'DevOps Dashboard',
    description: 'Real-time monitoring and management dashboard for CI/CD pipelines.',
    technologies: ['Vue.js', 'Docker', 'Kubernetes', 'Prometheus'],
    link: 'https://github.com',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Mobile App Framework',
    description: 'Cross-platform mobile development framework with excellent developer experience.',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    link: 'https://github.com',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Data Visualization Engine',
    description: 'Powerful library for creating interactive data visualizations.',
    technologies: ['D3.js', 'Vue.js', 'WebGL'],
    link: 'https://github.com',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70e504b9?w=500&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Security Framework',
    description: 'Comprehensive security testing and deployment framework.',
    technologies: ['Go', 'Rust', 'OSINT Tools'],
    link: 'https://github.com',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1555949519-2f4ac1354675?w=500&h=300&fit=crop'
  },
]

export function DataProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState([])
  const [projects, setProjects] = useState([])
  const [adminPassword, setAdminPassword] = useState('devtech123')
  const [isLoadedFromStorage, setIsLoadedFromStorage] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    const storedTeam = localStorage.getItem('kpdev_team')
    const storedProjects = localStorage.getItem('kpdev_projects')

    setTeamMembers(storedTeam ? JSON.parse(storedTeam) : initialTeamMembers)
    setProjects(storedProjects ? JSON.parse(storedProjects) : initialProjects)
    setIsLoadedFromStorage(true)
  }, [])

  // Save to localStorage when data changes
  useEffect(() => {
    if (isLoadedFromStorage) {
      localStorage.setItem('kpdev_team', JSON.stringify(teamMembers))
    }
  }, [teamMembers, isLoadedFromStorage])

  useEffect(() => {
    if (isLoadedFromStorage) {
      localStorage.setItem('kpdev_projects', JSON.stringify(projects))
    }
  }, [projects, isLoadedFromStorage])

  const addTeamMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now(),
    }
    setTeamMembers([...teamMembers, newMember])
  }

  const updateTeamMember = (id, updatedMember) => {
    setTeamMembers(teamMembers.map(m => m.id === id ? { ...m, ...updatedMember } : m))
  }

  const deleteTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id))
  }

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p))
  }

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  return (
    <DataContext.Provider value={{
      teamMembers,
      projects,
      adminPassword,
      setAdminPassword,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addProject,
      updateProject,
      deleteProject,
    }}>
      {children}
    </DataContext.Provider>
  )
}
