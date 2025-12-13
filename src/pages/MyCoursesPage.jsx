import React from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import '../styles/MyCoursesPage.css';

const MyCoursesPage = ({ onSelectCourse, onGoBack }) => {
  const { user } = useAuth();

  const enrolledCourses = coursesData.filter(course =>
    user?.enrolledCourses?.includes(course.id)
  );

  return (
    <div className="my-courses-page">
      <button className="back-button" onClick={onGoBack}>
        ← Back to All Courses
      </button>

      <h1>My Learning Journey</h1>
      <p className="subtitle">Continue where you left off</p>

      {enrolledCourses.length > 0 ? (
        <div className="courses-grid">
          {enrolledCourses.map(course => (
            <div key={course.id} className="enrolled-course-card">
              <CourseCard
                course={course}
                onSelectCourse={onSelectCourse}
                onEnroll={() => {}}
              />
              <div className="progress-info">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '0%'}}></div>
                </div>
                <p className="progress-text">Start watching lessons to track your progress</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-courses-section">
          <h2>No courses yet</h2>
          <p>You haven't enrolled in any courses yet. Explore our course catalog and start learning!</p>
          <button className="explore-btn" onClick={onGoBack}>
            Explore Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;
