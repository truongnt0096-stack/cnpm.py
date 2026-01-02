import { useState } from 'react';
import { Navigation } from './Navigation';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { 
  Send, 
  Sparkles, 
  Lightbulb,
  Target,
  MessageSquare,
  Mic
} from 'lucide-react';
import type { Page } from '../App';

interface CareerCoachProps {
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function CareerCoach({ onNavigate, onLogout }: CareerCoachProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi Alex! 👋 I'm your AI Career Coach. I'm here to help you with career guidance, skill recommendations, mock interviews, and creating your personalized career roadmap. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "Help me prepare for a frontend developer interview",
    "What skills should I learn for my dream job?",
    "Create a career roadmap for me",
    "How can I improve my CV?",
    "Practice mock interview questions"
  ];

  const handleSendMessage = (content?: string) => {
    const messageContent = content || inputMessage.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: messageContent,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(messageContent);
      const aiMessage: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('interview')) {
      return "Great! Let's prepare you for that frontend developer interview. Here are some key areas to focus on:\n\n1. **Technical Skills**\n   - React.js fundamentals and hooks\n   - JavaScript ES6+ features\n   - CSS and responsive design\n   - State management (Redux/Context API)\n\n2. **Common Interview Questions**\n   - What's the virtual DOM and how does it work?\n   - Explain React component lifecycle\n   - Difference between controlled and uncontrolled components\n\n3. **Coding Challenges**\n   - Practice building small components\n   - Solve algorithm problems on LeetCode\n\nWould you like me to conduct a mock interview with you?";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
      return "Based on your profile and current market trends, here are the skills I recommend:\n\n**High Priority:**\n1. TypeScript - Increasingly required for frontend roles\n2. Next.js - Popular React framework\n3. Testing (Jest, React Testing Library)\n\n**Medium Priority:**\n4. Node.js basics for full-stack capabilities\n5. GraphQL for modern APIs\n6. Docker for containerization\n\n**Soft Skills:**\n7. Agile/Scrum methodologies\n8. Communication and teamwork\n\nI can create a detailed learning roadmap for any of these. Which would you like to focus on first?";
    }
    
    if (lowerMessage.includes('roadmap') || lowerMessage.includes('career')) {
      return "I'll create a personalized 6-month career roadmap for you:\n\n**Month 1-2: Foundation Strengthening**\n- Complete Advanced React course\n- Build 2 portfolio projects\n- Contribute to open-source\n\n**Month 3-4: Skill Expansion**\n- Learn TypeScript\n- Master testing frameworks\n- Complete system design basics\n\n**Month 5-6: Job Search & Interview**\n- Polish CV and portfolio\n- Apply to 20+ companies\n- Practice mock interviews weekly\n- Network on LinkedIn\n\n**Goal:** Land a Frontend Developer role at a tech company\n\nWould you like me to break down any of these phases in more detail?";
    }
    
    if (lowerMessage.includes('cv') || lowerMessage.includes('resume')) {
      return "I can help improve your CV! Here are my top recommendations:\n\n1. **Add Quantifiable Achievements**\n   - Instead of: 'Worked on React projects'\n   - Try: 'Built 3 React applications serving 10K+ users'\n\n2. **Optimize Keywords**\n   - Include: React, TypeScript, JavaScript, CSS, Git\n   - Match job description keywords\n\n3. **Structure Improvements**\n   - Professional summary at the top\n   - Projects section with live links\n   - Clear skills categorization\n\nWould you like me to review your current CV and provide specific feedback?";
    }
    
    if (lowerMessage.includes('mock')) {
      return "Let's start a mock interview! I'll ask you some common frontend developer questions:\n\n**Question 1:** Can you explain what React Hooks are and why they were introduced?\n\nTake your time to answer, and I'll provide feedback on your response. You can also say 'skip' to move to the next question or 'end' to finish the interview.";
    }
    
    return "That's a great question! Based on your career goals and current skill level, I recommend focusing on:\n\n1. **Immediate Actions**\n   - Update your CV with recent projects\n   - Complete the React advanced course you started\n   - Build a portfolio website\n\n2. **This Week**\n   - Apply to 5 suitable job openings\n   - Practice coding challenges daily\n   - Connect with 10 people on LinkedIn\n\n3. **This Month**\n   - Attend tech meetups or webinars\n   - Contribute to open-source projects\n   - Prepare for technical interviews\n\nIs there anything specific you'd like to discuss in more detail?";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="career-coach" onNavigate={onNavigate} onLogout={onLogout} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl mb-2 text-gray-900">Career Coach AI</h1>
          <p className="text-gray-600">Get personalized career guidance powered by AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-250px)] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">AI Career Coach</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Online
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.type === 'ai' && (
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600">AI Coach</span>
                          </div>
                        )}
                        <div className="whitespace-pre-line">{message.content}</div>
                        <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                          <span className="text-sm text-gray-600">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Quick Prompts */}
              {messages.length <= 1 && (
                <div className="p-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Quick prompts:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button onClick={() => handleSendMessage()} disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Conversation Topics */}
            <Card className="p-4">
              <h3 className="mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Topics I Can Help With
              </h3>
              <div className="space-y-2">
                {[
                  { icon: Target, label: 'Career Planning', color: 'text-blue-600' },
                  { icon: Lightbulb, label: 'Skill Recommendations', color: 'text-purple-600' },
                  { icon: MessageSquare, label: 'Mock Interviews', color: 'text-green-600' },
                  { icon: Sparkles, label: 'CV Feedback', color: 'text-orange-600' }
                ].map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Icon className={`w-4 h-4 ${topic.color}`} />
                      <span>{topic.label}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Your Goals */}
            <Card className="p-4">
              <h3 className="mb-4">Your Career Goals</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium mb-1">Target Role</div>
                  <div className="text-sm text-gray-600">Frontend Developer</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-medium mb-1">Timeline</div>
                  <div className="text-sm text-gray-600">3-6 months</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium mb-1">Focus Area</div>
                  <div className="text-sm text-gray-600">React & TypeScript</div>
                </div>
              </div>
            </Card>

            {/* Recommended Actions */}
            <Card className="p-4">
              <h3 className="mb-4">Recommended Actions</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate('cv-analyzer')}
                >
                  <Target className="w-4 h-4" />
                  Analyze CV
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate('jobs')}
                >
                  <Sparkles className="w-4 h-4" />
                  Find Jobs
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate('learning')}
                >
                  <Lightbulb className="w-4 h-4" />
                  Learn Skills
                </Button>
              </div>
            </Card>

            {/* AI Stats */}
            <Card className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="mb-2">AI Insights</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Sessions This Month</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Questions Asked</span>
                  <Badge variant="secondary">45</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Career Score</span>
                  <Badge variant="secondary">78/100</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
