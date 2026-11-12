
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import LandingPage from "./pages/LandingPage";
import EditorPage from "./pages/EditorPage";
import AuthPage from "./pages/AuthPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StudyPrepPage from "./pages/study-prep/StudyPrepPage";
import ResourcePage from "./pages/study-prep/ResourcePage";
import ResourceDetailPage from "./pages/study-prep/ResourceDetailPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Authentication Pages */}
          <Route
            path="/login"
            element={<AuthPage key="login" initialMode="login" />}
          />

          <Route
            path="/signup"
            element={<AuthPage key="signup" initialMode="signup" />}
          />

          {/* Student Dashboard */}
          <Route
            path="/dashboard"
            element={<StudentDashboard />}
          />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          {/* Study Prep */}
          <Route
            path="/study-prep"
            element={<StudyPrepPage />}
          />

          <Route
            path="/study-prep/resource/:course/:type"
            element={<ResourcePage />}
         />

        <Route
         path="/study-prep/resource/:course/:type/:resourceId"
         element={<ResourceDetailPage />}
     />

          {/* Collaborative Editor */}
          <Route
            path="/editor"
            element={<EditorPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
