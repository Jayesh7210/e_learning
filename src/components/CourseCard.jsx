import React from 'react';
import { isEnrolled } from '../utils/authUtils';
import '../styles/CourseCard.css';

const CourseCard = ({ course, onSelectCourse, onEnroll }) => {
  const enrolled = isEnrolled(course.id);

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-level">{course.level}</div>
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">by {course.instructor}</p>
        <p className="course-description">{course.description}</p>
        
        <div className="course-meta">
          <span className="course-duration">⏱️ {course.duration}</span>
          <span className="course-learners">👥 {course.learners} learners</span>
        </div>

        <div className="course-rating">
          <span className="stars">
            {'⭐'.repeat(Math.floor(course.rating))} {course.rating}
          </span>
        </div>

        <div className="course-actions">
          <button
            className="view-btn"
            onClick={() => onSelectCourse(course.id)}
          >
            View Course
          </button>
          {!enrolled && (
            <button
              className="enroll-btn"
              onClick={() => onEnroll(course.id)}
            >
              Enroll Now
            </button>
          )}
          {enrolled && (
            <span className="enrolled-badge">✓ Enrolled</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
