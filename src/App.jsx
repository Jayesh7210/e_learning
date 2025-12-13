import { useState, useEffect } from 'react'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyCoursesPage from './pages/MyCoursesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('courses')
  const [selectedCourseId, setSelectedCourseId] = useState(null)

  const handleNavigate = (page, courseId = null) => {
    setCurrentPage(page)
    if (courseId) {
      setSelectedCourseId(courseId)
    }
    window.scrollTo(0, 0)
  }

  const handleSelectCourse = (courseId) => {
    setSelectedCourseId(courseId)
    setCurrentPage('course-detail')
  }

  const handleGoBack = () => {
    setCurrentPage('courses')
    setSelectedCourseId(null)
  }

  return (
    <AuthProvider>
      <div className="app">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="main-content">
          {currentPage === 'courses' && (
            <CoursesPage 
              onSelectCourse={handleSelectCourse}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'course-detail' && selectedCourseId && (
            <CourseDetailPage 
              courseId={selectedCourseId}
              onGoBack={handleGoBack}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'login' && (
            <LoginPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'signup' && (
            <SignupPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'my-courses' && (
            <MyCoursesPage 
              onSelectCourse={handleSelectCourse}
              onGoBack={handleGoBack}
            />
          )}
        </main>

        <footer className="app-footer">
          <p>&copy; 2026 E-Learning Platform. All rights reserved.</p>
        </footer>
      </div>
    </AuthProvider>
  )
}

export default App
