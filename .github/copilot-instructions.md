# E-Learning Platform - Project Setup Instructions

## Project Overview

This is a modern React-based e-learning platform MVP with the following core features:
- Course catalog with search and filtering
- User authentication (signup/login)
- Course enrollment system
- Video lesson playback
- Responsive design for all devices

## Project Structure

```
src/
├── components/      - Reusable React components
├── pages/          - Page components (Courses, Login, etc.)
├── context/        - Authentication context provider
├── utils/          - Auth and utility functions
├── data/           - Sample course data
├── styles/         - Component-specific CSS files
├── App.jsx         - Main app component
└── main.jsx        - Entry point
```

## Technology Stack

- **Frontend**: React 19.2 + Vite
- **Styling**: CSS (no frameworks)
- **State Management**: React Context API
- **Authentication**: localStorage-based (client-side)
- **Data**: In-memory sample data

## Running the Project

### Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## Demo Credentials

- Email: demo@example.com
- Password: demo123

Or create an account with the Sign Up page.

## Key Features

1. **Course Browsing**
   - View all courses with filtering by difficulty level
   - Search courses by title or description
   - See course ratings and enrollment statistics

2. **Authentication**
   - User signup with email/password validation
   - User login with demo account option
   - Session persistence using localStorage

3. **Course Details**
   - View course overview and instructor information
   - Browse course lessons
   - Watch embedded YouTube videos
   - Enroll in courses

4. **My Learning**
   - View all enrolled courses
   - Continue learning from where you left off

5. **Responsive Design**
   - Mobile-first responsive layout
   - Smooth animations and transitions
   - Modern gradient color scheme

## File Organization

### Components
- `Header.jsx` - Navigation and user menu
- `CourseCard.jsx` - Course listing card
- `VideoPlayer.jsx` - Video player wrapper

### Pages
- `CoursesPage.jsx` - Course catalog and browsing
- `CourseDetailPage.jsx` - Course details and lessons
- `LoginPage.jsx` - User login form
- `SignupPage.jsx` - User registration form
- `MyCoursesPage.jsx` - Enrolled courses view

### Context & Utils
- `AuthContext.jsx` - Authentication state management
- `authUtils.js` - Auth functions (login, signup, enrollment)

### Data
- `coursesData.js` - 6 sample courses with lessons

## Customization

### Adding New Courses
Edit `src/data/coursesData.js` and add course objects with:
- id, title, description
- instructor, duration, level
- learners, rating, image
- videoUrl, lessons array

### Changing Colors
The color scheme uses:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (darker purple)

Update CSS variables in component CSS files to change the theme.

### Modifying Authentication

Edit `src/utils/authUtils.js` to:
- Change localStorage keys
- Modify validation rules
- Add new auth functions

## Notes for Developers

1. **localStorage Usage**: All user data is stored in localStorage. This is suitable for MVP but should be replaced with a backend API for production.

2. **Sample Data**: Course data is static. In production, this should come from an API.

3. **Video URLs**: Currently uses YouTube embed URLs. Can be replaced with any video platform.

4. **No TypeScript**: Built with JavaScript for simplicity. Can be converted to TypeScript if needed.

## Testing the Platform

1. **Test Signup**
   - Navigate to Sign Up
   - Create account with valid email/password
   - Check localStorage in browser DevTools

2. **Test Login**
   - Click Login button
   - Use demo credentials or your created account
   - Verify session persists on page refresh

3. **Test Course Enrollment**
   - Browse courses
   - Click "Enroll Now" (must be logged in)
   - Navigate to "My Learning" to see enrolled courses

4. **Test Search & Filter**
   - Use search box to find courses
   - Use level filter to narrow results
   - Verify course grid updates

5. **Test Video Player**
   - Enroll in a course
   - Click "View Course"
   - Select lessons to watch videos

## Troubleshooting

- **Port in use**: Vite will use next available port
- **Styles not loading**: Check browser cache and do hard refresh
- **localStorage errors**: Check DevTools console for errors
- **Hot reload issues**: Restart `npm run dev`

## Next Steps for Enhancement

1. Integrate backend API
2. Add database for persistence
3. Implement real user authentication
4. Add admin course management
5. Create quiz/assessment system
6. Add progress tracking
7. Implement discussion forums
8. Add email notifications

---

Developed for educational purposes as a modern e-learning platform MVP.
