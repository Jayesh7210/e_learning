import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { coursesData } from '../data/coursesData';
import { isEnrolled, enrollCourse, isAuthenticated } from '../utils/authUtils';
import '../styles/CourseDetailPage.css';

const CourseDetailPage = ({ courseId, onGoBack, onNavigate }) => {
  const course = coursesData.find(c => c.id === courseId);
  const [selectedLesson, setSelectedLesson] = useState(course?.lessons[0] || null);
  const enrolled = isEnrolled(courseId);

  if (!course) {
    return (
      <div className="error-page">
        <h2>Course not found</h2>
        <button onClick={onGoBack}>← Back to Courses</button>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!isAuthenticated()) {
      alert('Please login to enroll in this course');
      onNavigate('login');
      return;
    }

    const result = enrollCourse(courseId);
    if (result.success) {
      alert('Successfully enrolled in the course!');
      window.location.reload();
    }
  };

  return (
    <div className="course-detail-page">
      <button className="back-button" onClick={onGoBack}>
        ← Back to Courses
      </button>

      <div className="course-header">
        <div className="course-header-content">
          <h1>{course.title}</h1>
          <p className="course-meta-info">
            <span>Instructor: {course.instructor}</span>
            <span>Duration: {course.duration}</span>
            <span>Level: {course.level}</span>
          </p>
          <p className="course-description">{course.description}</p>

          {!enrolled && (
            <button className="enroll-button" onClick={handleEnroll}>
              Enroll Now - Start Learning
            </button>
          )}
          {enrolled && (
            <div className="enrolled-status">✓ You are enrolled in this course</div>
          )}
        </div>
        <div className="course-header-image">
          <img src={course.image} alt={course.title} />
          <div className="course-stats">
            <div className="stat">
              <strong>{course.learners}</strong>
              <p>Learners</p>
            </div>
            <div className="stat">
              <strong>{course.rating}</strong>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>

      {enrolled && (
        <div className="course-content">
          <div className="lessons-sidebar">
            <h3>Lessons</h3>
            <div className="lessons-list">
              {course.lessons.map(lesson => (
                <button
                  key={lesson.id}
                  className={`lesson-item ${selectedLesson?.id === lesson.id ? 'active' : ''}`}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  <div className="lesson-number">Lesson {lesson.id}</div>
                  <div className="lesson-info">
                    <div className="lesson-title">{lesson.title}</div>
                    <div className="lesson-duration">{lesson.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="video-content">
            {selectedLesson && (
              <VideoPlayer
                videoUrl={course.videoUrl}
                title={selectedLesson.title}
              />
            )}
          </div>
        </div>
      )}

      {!enrolled && (
        <div className="enrollment-prompt">
          <div className="prompt-content">
            <h2>Unlock All Lessons</h2>
            <p>Enroll in this course to access all {course.lessons.length} lessons and start learning</p>
            <button className="prompt-enroll-btn" onClick={handleEnroll}>
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
