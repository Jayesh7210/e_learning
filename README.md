# E-Learning Platform

A modern, responsive e-learning platform built with React and Vite. This MVP includes course listings, user authentication, video lessons, and enrollment functionality.

## 🎯 Features

- **Course Catalog**: Browse and search available courses by title and level
- **User Authentication**: Sign up, login, and logout with localStorage-based session persistence
- **Course Enrollment**: Enroll in courses and track your learning progress
- **Video Lessons**: Watch embedded video lessons organized by course modules
- **My Learning Page**: View all enrolled courses in one place
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Filter & Search**: Filter courses by difficulty level (Beginner, Intermediate, Advanced)

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CourseCard.jsx  # Individual course card component
│   ├── Header.jsx      # Navigation header with user menu
│   └── VideoPlayer.jsx # Embedded video player component
│
├── pages/              # Page components
│   ├── CoursesPage.jsx        # Course catalog with search/filters
│   ├── CourseDetailPage.jsx   # Course details and lesson viewer
│   ├── LoginPage.jsx          # User login page
│   ├── SignupPage.jsx         # User registration page
│   └── MyCoursesPage.jsx      # User's enrolled courses
│
├── context/            # React Context for state management
│   └── AuthContext.jsx # Authentication context provider
│
├── utils/              # Utility functions
│   └── authUtils.js    # Authentication & enrollment functions
│
├── data/               # Sample data
│   └── coursesData.js  # 6 sample courses with lessons
│
├── styles/             # CSS modules and stylesheets
│   ├── Header.css
│   ├── CourseCard.css
│   ├── VideoPlayer.css
│   ├── CoursesPage.css
│   ├── CourseDetailPage.css
│   ├── MyCoursesPage.css
│   └── AuthPages.css
│
├── App.jsx             # Main application component with routing
├── App.css             # Global app styles
├── main.jsx            # Application entry point
└── index.css           # Global styles

public/                # Static assets
package.json           # Project dependencies and scripts
vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "e:\react\New folder"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Sample Credentials

Use these demo credentials to test the platform:

- **Email**: demo@example.com
- **Password**: demo123

Or create your own account with the Sign Up page.

## 🛠 Available Scripts

### Development
```bash
npm run dev      # Start development server with hot reload
```

### Production Build
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

### Linting
```bash
npm run lint     # Run ESLint to check code quality
```

## 🎓 Sample Courses

The platform comes with 6 pre-loaded sample courses:

1. **Introduction to Web Development** - Learn HTML, CSS, JavaScript
2. **React Complete Guide** - Master React and SPAs
3. **JavaScript Advanced Concepts** - Deep dive into advanced JS topics
4. **UI/UX Design Fundamentals** - Design principles and tools
5. **Node.js & Express Backend** - Build scalable backend applications
6. **Data Science with Python** - Data analysis and ML fundamentals

Each course includes:
- Course description and metadata
- Instructor information
- Duration and difficulty level
- Student ratings and learner count
- Multiple video lessons (currently using YouTube embeds)

## 🔐 Authentication System

The authentication uses localStorage for session persistence:

- **Sign Up**: Create a new account with email, password, and name
- **Login**: Authenticate with registered credentials
- **Session Persistence**: User stays logged in across page refreshes
- **Logout**: Clear session and return to public course catalog

All passwords and user data are stored in localStorage for this MVP. In a production application, implement proper backend authentication with secure password hashing.

## 🎨 UI/UX Features

- **Gradient Theme**: Purple/Blue modern gradient color scheme
- **Smooth Animations**: Hover effects and page transitions
- **Mobile Responsive**: Optimized layouts for all screen sizes
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **Loading States**: Visual feedback during form submissions

## 🔧 Technology Stack

- **React 19.2** - UI framework
- **Vite 7.3** - Fast build tool
- **JavaScript & CSS** - Styling and interactivity
- **localStorage** - Client-side data persistence

## 📈 Future Enhancements

- [ ] Backend API integration (Node.js/Express)
- [ ] Database integration (MongoDB)
- [ ] Quiz and assessment system
- [ ] Progress tracking and certificates
- [ ] Discussion forums and chat
- [ ] Payment integration for paid courses
- [ ] Admin dashboard for course management
- [ ] Email notifications
- [ ] Instructor dashboard
- [ ] Course recommendations based on interests

## 🤝 Contributing

This is an MVP educational project. Feel free to fork and extend with additional features.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer Notes

### Adding New Courses

Edit `src/data/coursesData.js` and add course objects to the `coursesData` array:

```javascript
{
  id: 7,
  title: "Course Title",
  description: "Course description",
  instructor: "Instructor Name",
  duration: "X weeks",
  level: "Beginner|Intermediate|Advanced",
  learners: 0,
  rating: 4.5,
  image: "image-url",
  videoUrl: "youtube-embed-url",
  lessons: [...]
}
```

### Modifying Authentication

Update `src/utils/authUtils.js` to change authentication logic or add new user-related functions.

### Styling

CSS files are organized by component in `src/styles/`. Each component has its corresponding CSS file.

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Hot Reload Not Working
Ensure `npm run dev` is running and your file changes are saved.

### Styles Not Updating
Clear browser cache or do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R).

---

Built with ❤️ for learning and education

