import { Link } from 'react-router-dom'
import { ArrowRight, Code, Users, Zap, Trophy } from 'lucide-react'
import { useData } from '../hooks/useData'

export function Home() {
  const { teamMembers, projects } = useData()
  const featuredProjects = projects.slice(0, 3)
  const leaders = teamMembers.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              KP <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Dev Cell</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Building tomorrow's technology today. We are a community of developers, designers, and innovators working together to create impactful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/team"
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                Meet the Team <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 bg-slate-200 dark:bg-dark-border text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Build', description: 'Creating scalable, production-grade applications' },
              { icon: Users, title: 'Collaborate', description: 'Working together to solve complex problems' },
              { icon: Zap, title: 'Innovate', description: 'Pushing boundaries with emerging technologies' },
              { icon: Trophy, title: 'Deliver', description: 'Ships projects that make a real impact' },
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-dark-bg rounded-lg p-6 border border-slate-200 dark:border-dark-border hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-dark-surface rounded-lg border border-slate-200 dark:border-dark-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Core Team</h2>
            <Link to="/team" className="text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              See All {teamMembers.length} Members <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((member) => (
              <div key={member.id} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-100 to-primary-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Join us at our next event or reach out to collaborate on exciting projects.
          </p>
          <button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}
