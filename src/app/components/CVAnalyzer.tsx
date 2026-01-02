import { useState } from 'react';
import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  Download,
  Sparkles,
  Target,
  AlertTriangle
} from 'lucide-react';
import type { Page } from '../App';

interface CVAnalyzerProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function CVAnalyzer({ onNavigate, onLogout }: CVAnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalysis, setHasAnalysis] = useState(false);

  const handleFileUpload = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalysis(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="cv-analyzer" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-gray-900">AI CV Analyzer</h1>
          <p className="text-gray-600">Upload your CV and get instant AI-powered feedback</p>
        </div>

        {!hasAnalysis ? (
          <div className="max-w-2xl mx-auto">
            <Card className="p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl mb-4">Upload Your CV</h2>
                <p className="text-gray-600 mb-8">
                  Support for PDF, DOCX formats. Maximum file size: 5MB
                </p>
                
                {isAnalyzing ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                      <span>Analyzing your CV with AI...</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button size="lg" className="gap-2" onClick={handleFileUpload}>
                      <Upload className="w-5 h-5" />
                      Choose File to Upload
                    </Button>
                    <p className="text-sm text-gray-500">or drag and drop your file here</p>
                  </div>
                )}
              </div>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="mb-1">Instant Analysis</h3>
                <p className="text-sm text-gray-600">Get results in under 5 seconds</p>
              </Card>
              <Card className="p-4">
                <Sparkles className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="mb-1">AI-Powered</h3>
                <p className="text-sm text-gray-600">Advanced ML algorithms</p>
              </Card>
              <Card className="p-4">
                <Target className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="mb-1">Actionable Tips</h3>
                <p className="text-sm text-gray-600">Personalized improvements</p>
              </Card>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl mb-2">Overall CV Score</h2>
                  <p className="opacity-90">Your CV is performing well with room for improvement</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">78</div>
                  <div className="text-lg opacity-90">out of 100</div>
                </div>
              </div>
            </Card>

            {/* Detailed Analysis Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="strengths">Strengths</TabsTrigger>
                <TabsTrigger value="improvements">Improvements</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl mb-4">Score Breakdown</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span>Content Quality</span>
                          <span className="text-green-600">85/100</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span>Formatting & Structure</span>
                          <span className="text-blue-600">90/100</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span>Keywords & ATS Optimization</span>
                          <span className="text-yellow-600">65/100</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span>Experience & Achievements</span>
                          <span className="text-green-600">80/100</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span>Skills Relevance</span>
                          <span className="text-orange-600">70/100</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Total Words</span>
                        <span className="font-medium">450</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Action Verbs Used</span>
                        <span className="font-medium">18</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Technical Skills Listed</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Years of Experience</span>
                        <span className="font-medium">1.5</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Education Level</span>
                        <span className="font-medium">Bachelor's</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">ATS Compatibility</span>
                        <Badge variant="secondary">Good</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="strengths" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl mb-4">What You're Doing Well</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Clear Professional Summary',
                        description: 'Your professional summary is concise and effectively highlights your key strengths and career objectives.'
                      },
                      {
                        title: 'Quantified Achievements',
                        description: 'You\'ve included measurable results in your experience section, which demonstrates impact.'
                      },
                      {
                        title: 'Clean Formatting',
                        description: 'Your CV has excellent formatting with consistent fonts, spacing, and section organization.'
                      },
                      {
                        title: 'Relevant Skills Section',
                        description: 'Your skills section includes industry-relevant technical skills that match job requirements.'
                      },
                      {
                        title: 'Recent Projects',
                        description: 'Including recent projects demonstrates practical application of your skills.'
                      }
                    ].map((strength, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="mb-1 text-green-900">{strength.title}</h4>
                          <p className="text-sm text-green-700">{strength.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="improvements" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-xl mb-4">Areas for Improvement</h3>
                  <div className="space-y-4">
                    {[
                      {
                        priority: 'High',
                        title: 'Add More Keywords',
                        description: 'Include more industry-specific keywords to improve ATS compatibility. Keywords like "React", "TypeScript", "Agile" are missing.',
                        impact: '+8 points'
                      },
                      {
                        priority: 'High',
                        title: 'Expand Technical Skills',
                        description: 'Add specific tools and technologies you\'ve used (e.g., Git, Docker, CI/CD) to match job descriptions.',
                        impact: '+6 points'
                      },
                      {
                        priority: 'Medium',
                        title: 'Add Certifications',
                        description: 'Include any relevant certifications or online courses you\'ve completed to strengthen your profile.',
                        impact: '+4 points'
                      },
                      {
                        priority: 'Medium',
                        title: 'Improve Action Verbs',
                        description: 'Use stronger action verbs like "architected", "spearheaded", "optimized" instead of basic verbs.',
                        impact: '+3 points'
                      },
                      {
                        priority: 'Low',
                        title: 'Add LinkedIn Profile',
                        description: 'Include a link to your LinkedIn profile to provide recruiters with more information.',
                        impact: '+2 points'
                      }
                    ].map((improvement, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-orange-900">{improvement.title}</h4>
                            <Badge variant={improvement.priority === 'High' ? 'destructive' : 'secondary'}>
                              {improvement.priority} Priority
                            </Badge>
                            <Badge variant="outline">{improvement.impact}</Badge>
                          </div>
                          <p className="text-sm text-orange-700">{improvement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-xl mb-4">AI Recommendations</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: 'Optimize for Frontend Developer Roles',
                          description: 'Based on your experience, focus on highlighting React, JavaScript, and UI/UX skills.',
                          action: 'View Optimized CV'
                        },
                        {
                          title: 'Add Portfolio Link',
                          description: 'Include a link to your portfolio or GitHub to showcase your projects.',
                          action: 'Update CV'
                        },
                        {
                          title: 'Tailor for Each Application',
                          description: 'Customize your CV for each job by matching keywords from the job description.',
                          action: 'Learn How'
                        }
                      ].map((rec, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-start gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-blue-600 mt-0.5" />
                            <h4>{rec.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                          <Button variant="outline" size="sm">{rec.action}</Button>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl mb-4">Suggested Actions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <h4 className="text-sm">Download Improved CV</h4>
                          <p className="text-xs text-gray-500">Get AI-optimized version</p>
                        </div>
                        <Download className="w-4 h-4 text-gray-400" />
                      </div>
                      
                      <div 
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors"
                        onClick={() => onNavigate('career-coach')}
                      >
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <div className="flex-1">
                          <h4 className="text-sm">Get Career Coaching</h4>
                          <p className="text-xs text-gray-500">Discuss with AI coach</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                      </div>
                      
                      <div 
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors"
                        onClick={() => onNavigate('jobs')}
                      >
                        <Target className="w-5 h-5 text-green-600" />
                        <div className="flex-1">
                          <h4 className="text-sm">Find Matching Jobs</h4>
                          <p className="text-xs text-gray-500">Based on your profile</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-gray-400" />
                      </div>
                      
                      <div 
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-600 cursor-pointer transition-colors"
                        onClick={() => onNavigate('learning')}
                      >
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        <div className="flex-1">
                          <h4 className="text-sm">Learn Missing Skills</h4>
                          <p className="text-xs text-gray-500">Close skill gaps</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="mb-2 text-blue-900">💡 Pro Tip</h4>
                      <p className="text-sm text-blue-700">
                        Update your CV every month to reflect new skills and projects. 
                        This keeps it fresh and relevant for recruiters.
                      </p>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => setHasAnalysis(false)}>
                Analyze Another CV
              </Button>
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
