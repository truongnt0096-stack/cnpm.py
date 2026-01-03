import { useState } from 'react';
import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  MapPin, 
  Briefcase,
  DollarSign,
  Clock,
  Building2,
  Heart,
  ExternalLink,
  Filter,
  TrendingUp,
  Star,
  Bookmark
} from 'lucide-react';
import type { Page } from '../App';

interface JobMarketplaceProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  match: number;
  description: string;
  requirements: string[];
  isSaved: boolean;
}

export function JobMarketplace({ onNavigate, onLogout }: JobMarketplaceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Internship',
      salary: '$2,000 - $3,000/month',
      posted: '2 days ago',
      match: 92,
      description: 'We are looking for a talented Frontend Developer Intern to join our growing team. You will work on building modern web applications using React and TypeScript.',
      requirements: ['React.js', 'JavaScript', 'CSS', 'Git', 'Communication skills'],
      isSaved: false
    },
    {
      id: 2,
      title: 'Junior React Developer',
      company: 'StartupX',
      location: 'Hybrid - San Francisco',
      type: 'Full-time',
      salary: '$60,000 - $80,000/year',
      posted: '3 days ago',
      match: 88,
      description: 'Join our innovative startup as a Junior React Developer. You\'ll collaborate with senior developers to build cutting-edge web applications.',
      requirements: ['React.js', 'TypeScript', 'REST APIs', 'Agile', 'Problem-solving'],
      isSaved: true
    },
    {
      id: 3,
      title: 'UI/UX Developer',
      company: 'DesignCo',
      location: 'On-site - New York',
      type: 'Full-time',
      salary: '$55,000 - $75,000/year',
      posted: '5 days ago',
      match: 85,
      description: 'We\'re seeking a UI/UX Developer who can bridge the gap between design and development. Experience with React and design tools required.',
      requirements: ['React.js', 'CSS/SCSS', 'Figma', 'Responsive Design', 'User Testing'],
      isSaved: false
    },
    {
      id: 4,
      title: 'Frontend Engineer - Entry Level',
      company: 'WebSolutions Inc',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50,000 - $70,000/year',
      posted: '1 week ago',
      match: 82,
      description: 'Entry-level position for passionate developers. We provide mentorship and growth opportunities in a supportive environment.',
      requirements: ['JavaScript', 'HTML/CSS', 'React or Vue', 'Git', 'Teamwork'],
      isSaved: false
    },
    {
      id: 5,
      title: 'Graduate Software Developer',
      company: 'Enterprise Systems',
      location: 'On-site - Chicago',
      type: 'Graduate Program',
      salary: '$65,000 - $75,000/year',
      posted: '1 week ago',
      match: 79,
      description: 'Our graduate program offers rotations across different teams, comprehensive training, and career development support.',
      requirements: ['Bachelor\'s Degree', 'JavaScript', 'Any Framework', 'SQL', 'Learning Mindset'],
      isSaved: true
    },
    {
      id: 6,
      title: 'Web Developer Trainee',
      company: 'Digital Agency',
      location: 'Hybrid - Boston',
      type: 'Contract',
      salary: '$40,000 - $50,000/year',
      posted: '2 weeks ago',
      match: 75,
      description: 'Join our agency as a trainee and gain hands-on experience building websites for various clients. Training provided.',
      requirements: ['HTML/CSS', 'JavaScript Basics', 'Responsive Design', 'Communication', 'Creativity'],
      isSaved: false
    }
  ];

  const topCompanies = [
    { name: 'Google', openings: 45, rating: 4.8 },
    { name: 'Microsoft', openings: 38, rating: 4.7 },
    { name: 'Meta', openings: 32, rating: 4.6 },
    { name: 'Amazon', openings: 56, rating: 4.5 },
    { name: 'Apple', openings: 28, rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="jobs" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl mb-2 text-gray-900">Job Marketplace</h1>
          <p className="text-gray-600">Find your perfect job match with AI recommendations</p>
        </div>

        {/* Search Bar */}
        <Card className="p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Location" className="pl-10 w-48" />
              </div>
            </div>
            <Button>Search</Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Jobs List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl">Recommended for You</h2>
                <p className="text-sm text-gray-600">{jobs.length} jobs match your profile</p>
              </div>
              <Tabs defaultValue="best-match">
                <TabsList>
                  <TabsTrigger value="best-match">Best Match</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {jobs.map((job) => (
              <Card 
                key={job.id} 
                className={`p-6 cursor-pointer transition-all ${
                  selectedJob?.id === job.id ? 'border-blue-600 shadow-lg' : 'hover:border-gray-300'
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl">{job.title}</h3>
                      <Badge variant="secondary">{job.match}% Match</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {job.isSaved ? (
                      <Bookmark className="w-5 h-5 fill-blue-600 text-blue-600" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.posted}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {job.requirements.slice(0, 4).map((req, index) => (
                    <Badge key={index} variant="outline">{req}</Badge>
                  ))}
                  {job.requirements.length > 4 && (
                    <Badge variant="outline">+{job.requirements.length - 4} more</Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm">Apply Now</Button>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Job Details */}
            {selectedJob && (
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl">Job Details</h3>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedJob(null)}>
                    ×
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1">{selectedJob.title}</h4>
                    <p className="text-sm text-gray-600">{selectedJob.company}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{selectedJob.match}% Match</Badge>
                    <Badge>{selectedJob.type}</Badge>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Description</h4>
                    <p className="text-sm text-gray-600">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Requirements</h4>
                    <div className="space-y-1">
                      {selectedJob.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <Button className="w-full">Apply Now</Button>
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View on Company Site
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Application Stats */}
            <Card className="p-6">
              <h3 className="mb-4">Your Application Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">Applied</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm">In Review</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Interviews</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">Saved Jobs</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </Card>

            {/* Top Companies */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3>Top Companies Hiring</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="space-y-3">
                {topCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors">
                    <div>
                      <div className="font-medium mb-1">{company.name}</div>
                      <div className="text-sm text-gray-600">{company.openings} openings</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{company.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Career Tips */}
            <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5" />
                <h3>Application Tip</h3>
              </div>
              <p className="text-sm opacity-90">
                Tailor your CV for each application by matching keywords from the job description. 
                This increases your chances by up to 60%!
              </p>
              <Button variant="secondary" size="sm" className="mt-4" onClick={() => onNavigate('cv-analyzer')}>
                Optimize CV
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
