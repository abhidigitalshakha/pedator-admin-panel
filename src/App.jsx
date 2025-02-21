import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/protectedPage/DashboardPage";
import LearnersPage from "./pages/protectedPage/LearnersPage";
import MentorsPage from "./pages/protectedPage/MentorsPage";
import CoursesPage from "./pages/protectedPage/CoursesPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/learners" element={<LearnersPage />} />
          <Route path="/mentors" element={<MentorsPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;