import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import AuthPage from './components/AuthPage'; // Đã thêm import này
import { Dashboard } from './components/Dashboard';
import { CVAnalyzer } from './components/CVAnalyzer';
import { CareerCoach } from './components/CareerCoach';
import { JobMarketplace } from './components/JobMarketplace';
import { Profile } from './components/Profile';
import { LearningHub } from './components/LearningHub';


export type Page = 'landing' | 'auth' | 'dashboard' | 'cv-analyzer' | 'career-coach' | 'jobs' | 'profile' | 'learning';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Được gọi khi nhấn nút "Bắt đầu" hoặc "Login" ở Landing Page
  const handleStartLogin = () => {
    setCurrentPage('auth');
  };

  // Được gọi khi AuthPage xác thực thành công (Login/Signup xong)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  // Điều hướng nội bộ trong Dashboard
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  // --- LOGIC HIỂN THỊ ---

  // 1. Nếu chưa đăng nhập
  if (!isLoggedIn) {
    // Nếu đang ở trang Auth -> hiển thị AuthPage
    if (currentPage === 'auth') {
      return (
        <AuthPage 
          onLoginSuccess={handleLoginSuccess}
          onBack={() => setCurrentPage('landing')}
        />
      );
    }
    
    // Mặc định hiển thị Landing Page
    // Lưu ý: prop `onLogin` của LandingPage giờ sẽ dẫn tới trang Auth
    return <LandingPage onLogin={handleStartLogin} />;
  }

  // 2. Nếu đã đăng nhập (Hiển thị các trang chức năng)
  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={navigateTo} onLogout={handleLogout} />
      )}
      {currentPage === 'cv-analyzer' && (
        <CVAnalyzer onNavigate={navigateTo} onLogout={handleLogout} />
      )}
      {currentPage === 'career-coach' && (
        <CareerCoach onNavigate={navigateTo} onLogout={handleLogout} />
      )}
      {currentPage === 'jobs' && (
        <JobMarketplace onNavigate={navigateTo} onLogout={handleLogout} />
      )}
      {currentPage === 'profile' && (
        <Profile onNavigate={navigateTo} onLogout={handleLogout} />
      )}
      {currentPage === 'learning' && (
        <LearningHub onNavigate={navigateTo} onLogout={handleLogout} />
      )}
    </div>
  );
}
