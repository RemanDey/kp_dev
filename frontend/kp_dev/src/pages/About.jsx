import { Info, Target, Users, Goal } from 'lucide-react'

export function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Info className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h1 className="text-5xl font-bold">About KP Dev Cell</h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Building a community of creators, innovators, and problem-solvers
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission */}
          <section className="bg-white dark:bg-dark-surface rounded-lg p-8 border border-slate-200 dark:border-dark-border">
            <div className="flex items-start gap-4 mb-4">
              <Target className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To foster a thriving community of developers, designers, and tech enthusiasts who collaborate to create innovative solutions and drive technological advancement. We believe in learning through doing, mentoring through sharing, and building through community.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-white dark:bg-dark-surface rounded-lg p-8 border border-slate-200 dark:border-dark-border">
            <div className="flex items-start gap-4 mb-4">
              <Goal className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To become a beacon of technical excellence and innovation within our institution and beyond. We envision a ecosystem where ideas flourish, collaborations thrive, and every member has the opportunity to grow and make an impact.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="bg-white dark:bg-dark-surface rounded-lg p-8 border border-slate-200 dark:border-dark-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Collaboration', desc: 'We believe in the power of teamwork and shared knowledge' },
                { title: 'Innovation', desc: 'We embrace new ideas and technologies to solve real problems' },
                { title: 'Excellence', desc: 'We strive for high quality in everything we do' },
                { title: 'Inclusion', desc: 'Everyone is welcome to learn, contribute, and grow' },
                { title: 'Impact', desc: 'We focus on building things that matter and make a difference' },
                { title: 'Continuous Learning', desc: 'We foster a culture of growth and skill development' },
              ].map((value, i) => (
                <div key={i} className="border border-slate-200 dark:border-dark-border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* History */}
          <section className="bg-slate-50 dark:bg-dark-surface rounded-lg p-8 border border-slate-200 dark:border-dark-border">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                KP Dev Cell was founded with a simple vision: to create a space where passionate developers and designers can come together, learn, and build amazing things.
              </p>
              <p>
                Starting from a small group of enthusiasts, we've grown into a vibrant community that organizes workshops, hackathons, and collaborative projects. Our members have gone on to work at leading tech companies, start their own ventures, and make significant contributions to open-source projects.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in technology, while maintaining our core commitment to education, collaboration, and community.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="mb-6 text-primary-50">
              Want to join us or collaborate on a project? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                Join Our Community
              </button>
              <button className="px-6 py-2 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border-2 border-white">
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
