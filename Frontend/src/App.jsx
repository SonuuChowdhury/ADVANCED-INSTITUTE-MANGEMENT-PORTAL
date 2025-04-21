/* eslint-disable no-unused-vars */
// Modules
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import './styles/App.css';

// importing loaders 
import Loader from './components/loader/loader';

// React Router hooks
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// MobileRedirect component
const MobileRedirect = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768;

    // Redirect only from root and only on mobile
    if (isMobile && location.pathname === "/") {
      navigate("/mobile-home");
    }
  }, [location.pathname, navigate]);

  return children;
};

// Lazy load the HomePage component
const HomePage = lazy(() => import('./pages/Home Page/homePage'));
import Login from './pages/LoginAndSignUP/Login.jsx';
import SignUp from './pages/LoginAndSignUP/SignUp.jsx';
import StudentDashboardPage from './pages/StudentPages/Dashboard/dashboard.jsx';

import StudentChangePassword from './pages/StudentPages/Password Change/ChangePassword.jsx';
import StudentForgetPassword from './components/loginComponents/StudentLoginComponent/ForgetPassword/StudentForgetPasword.jsx';

// Super admin pages 
import SuperAdminDashboard from './pages/AdminPages/SuperAdmin/Dashboard/Dashboard.jsx';
import MasterSectionEditor from './pages/AdminPages/SuperAdmin/Home Editor/Master Section/MasterSectionEditor.jsx';

// Student Control 
import StudentViewOrEditEditor from './pages/AdminPages/SuperAdmin/Student Control/View or Edit Student/ViewOrEditStudent.jsx';
import AdminAddStudent from './pages/AdminPages/SuperAdmin/Student Control/Add Student/AdminAddStudent.jsx';
import AdminStudentAttendanceAnalytics from './pages/AdminPages/SuperAdmin/Student Control/Student Attendance Analytics/StudentAttendanceAnalytics.jsx';

// Not Found Page 
import NotFound from './pages/404 Not Found/NotFound.jsx';

// Testing or playground page 
import TestPage from './pages/Test Page/TestPage.jsx';

import MobileHomePage from './pages/Mobile Home/MobileHomePage.jsx';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <MobileRedirect>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Login and sign-Up routes  */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login/student/forget-password" element={<StudentForgetPassword />} />

            <Route path="/mobile-home" element={<MobileHomePage />} />

            {/* Student dashboard routes  */}
            <Route path="/student-dashboard" element={<StudentDashboardPage />} />
            <Route path="/student-dashboard/change-password" element={<StudentChangePassword />} />

            {/* Super admin dashboard routes  */}
            <Route path="/super-admin/admin-dashboard" element={<SuperAdminDashboard />} />
            <Route path="/super-admin/admin-dashboard/mastersection" element={<MasterSectionEditor />} />
            <Route path="/super-admin/admin-dashboard/view-or-edit-student" element={<StudentViewOrEditEditor />} />
            <Route path="/super-admin/admin-dashboard/add-student" element={<AdminAddStudent />} />
            <Route path="/super-admin/admin-dashboard/student-attendance" element={<AdminStudentAttendanceAnalytics />} />

            {/* Testing or playground page  */}
            <Route path="/testing" element={<TestPage />} />

            {/* All routes will be redirected to this if the route is not handled specifically above */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MobileRedirect>
      </Suspense>
    </Router>
  );
}

export default App;
