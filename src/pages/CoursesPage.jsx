import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/coursesData';
import { enrollCourse, isAuthenticated } from '../utils/authUtils';
import { useAuth } from '../context/AuthContext';
import '../styles/CoursesPage.css';

const CoursesPage = ({ onSelectCourse, onNavigate }) => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('All');

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'All' || course.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const handleEnroll = (courseId) => {
    if (!isAuthenticated()) {
      alert('Please login to enroll in a course');
      onNavigate('login');
      return;
    }

    const result = enrollCourse(courseId);
    if (result.success) {
      alert('Successfully enrolled in the course!');
    }
  };

  return (
    <div className="courses-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to E-Learning Platform</h1>
          <p>Start learning new skills today with our expert-led courses</p>
          {!user && (
            <button className="cta-button" onClick={() => onNavigate('signup')}>
              Get Started Free
            </button>
          )}
        </div>
      </section>

      <section className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-box">
          <label>Filter by Level:</label>
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="filter-select"
          >
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </section>

      <section className="courses-section">
        <h2>Available Courses ({filteredCourses.length})</h2>
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={onSelectCourse}
              onEnroll={handleEnroll}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-courses">
            <p>No courses found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CoursesPage;
