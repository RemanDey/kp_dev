import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="text-lg font-bold">KP Dev Cell</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building the future of technology through collaboration and innovation.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Column 3 - Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-dark-border flex items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-dark-border flex items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-dark-border flex items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-dark-border flex items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-dark-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {currentYear} KP Dev Cell. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
