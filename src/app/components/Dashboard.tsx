import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  FileText, 
  MessageSquare, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Award,
  Target,
  Clock,
  CheckCircle2
} from 'lucide-react';
import type { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function Dashboard({ onNavigate, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-gray-900">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600">Here's your career progress overview</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">CV Score</span>
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl mb-1">78/100</div>
            <Progress value={78} className="h-2" />
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Jobs Applied</span>
              <Briefcase className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl mb-1">12</div>
            <p className="text-sm text-gray-500">3 pending responses</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Skills Learning</span>
              <BookOpen className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl mb-1">5</div>
            <p className="text-sm text-gray-500">2 in progress</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Badges Earned</span>
              <Award className="w-4 h-4 text-orange-600" />
            </div>
            <div className="text-2xl mb-1">8</div>
            <p className="text-sm text-gray-500">Top 20% users</p>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors"
                  onClick={() => onNavigate('cv-analyzer')}
                >
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="mb-2">Analyze Your CV</h3>
                  <p className="text-sm text-gray-600">Get AI-powered feedback and improve your resume score</p>
                </div>

                <div 
                  className="p-4 border border-gray-200 rounded-lg hover:border-purple-600 cursor-pointer transition-colors"
                  onClick={() => onNavigate('career-coach')}
                >
                  <MessageSquare className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="mb-2">Career Coaching</h3>
                  <p className="text-sm text-gray-600">Chat with AI coach for personalized career guidance</p>
                </div>

                <div 
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-600 cursor-pointer transition-colors"
                  onClick={() => onNavigate('jobs')}
                >
                  <Briefcase className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="mb-2">Browse Jobs</h3>
                  <p className="text-sm text-gray-600">Find jobs matching your skills and interests</p>
                </div>

                <div 
                  className="p-4 border border-gray-200 rounded-lg hover:border-orange-600 cursor-pointer transition-colors"
                  onClick={() => onNavigate('learning')}
                >
                  <BookOpen className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="mb-2">Learning Hub</h3>
                  <p className="text-sm text-gray-600">Explore courses and improve your skills</p>
                </div>
              </div>
            </Card>

            {/* Career Roadmap Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Your Career Roadmap</h2>
                <Badge>60% Complete</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Complete Profile Setup</h4>
                      <span className="text-sm text-gray-500">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Upload & Optimize CV</h4>
                      <span className="text-sm text-gray-500">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Complete React Course</h4>
                      <span className="text-sm text-gray-500">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Practice Mock Interviews</h4>
                      <span className="text-sm text-gray-500">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Apply to 20 Jobs</h4>
                      <span className="text-sm text-gray-500">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Jobs */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Recommended Jobs</h2>
                <Button variant="ghost" onClick={() => onNavigate('jobs')}>View All</Button>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Frontend Developer Intern', company: 'TechCorp', match: 92, location: 'Remote' },
                  { title: 'Junior React Developer', company: 'StartupX', match: 88, location: 'Hybrid' },
                  { title: 'UI/UX Developer', company: 'DesignCo', match: 85, location: 'On-site' },
                ].map((job, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company}</p>
                      </div>
                      <Badge variant="secondary">{job.match}% Match</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>Posted 2 days ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Activity & Achievements */}
          <div className="space-y-6">
            {/* Skill Gap Analysis */}
            <Card className="p-6">
              <h2 className="text-xl mb-4">Skill Gap Analysis</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">React.js</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">TypeScript</span>
                    <span className="text-sm text-gray-500">Intermediate</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Node.js</span>
                    <span className="text-sm text-gray-500">Beginner</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">System Design</span>
                    <span className="text-sm text-gray-500">Beginner</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => onNavigate('learning')}>
                Improve Skills
              </Button>
            </Card>

            {/* Recent Achievements */}
            <Card className="p-6">
              <h2 className="text-xl mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                {[
                  { icon: '🏆', title: 'CV Master', desc: 'Achieved 75+ CV score' },
                  { icon: '📚', title: 'Fast Learner', desc: 'Completed 3 courses' },
                  { icon: '🎯', title: 'Job Hunter', desc: 'Applied to 10 jobs' },
                  { icon: '💬', title: 'Interview Ready', desc: 'Practiced 5 mock interviews' },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activity Feed */}
            <Card className="p-6">
              <h2 className="text-xl mb-4">Recent Activity</h2>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <TrendingUp className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900">CV score improved by 12 points</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Applied to Frontend Developer at TechCorp</p>
                    <p className="text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Completed React Advanced Patterns course</p>
                    <p className="text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Earned "CV Master" badge</p>
                    <p className="text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
