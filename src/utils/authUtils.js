// Simple localStorage-based authentication
const STORAGE_KEY = 'elearning_user';
const USERS_KEY = 'elearning_users';

// Initialize with a sample user
const initializeUsers = () => {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const defaultUsers = [
      {
        id: 1,
        email: 'demo@example.com',
        password: 'demo123',
        name: 'Demo User',
        enrolledCourses: [1, 3]
      },
      {
        id: 2,
        email: 'test@example.com',
        password: 'test123',
        name: 'Test User',
        enrolledCourses: [2]
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const login = (email, password) => {
  initializeUsers();
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword));
    return { success: true, user: userWithoutPassword };
  }
  
  return { success: false, error: 'Invalid email or password' };
};

export const signup = (email, password, name) => {
  initializeUsers();
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  
  if (users.find(u => u.email === email)) {
    return { success: false, error: 'Email already registered' };
  }
  
  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    enrolledCourses: []
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  const { password: _, ...userWithoutPassword } = newUser;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword));
  
  return { success: true, user: userWithoutPassword };
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEY);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return getCurrentUser() !== null;
};

export const enrollCourse = (courseId) => {
  const user = getCurrentUser();
  if (user) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex !== -1) {
      if (!users[userIndex].enrolledCourses.includes(courseId)) {
        users[userIndex].enrolledCourses.push(courseId);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        
        user.enrolledCourses = users[userIndex].enrolledCourses;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      }
      return { success: true };
    }
  }
  return { success: false };
};

export const isEnrolled = (courseId) => {
  const user = getCurrentUser();
  return user && user.enrolledCourses.includes(courseId);
};
