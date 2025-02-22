import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/protectedPage/DashboardPage";
import LearnersPage from "./pages/protectedPage/LearnersPage";
import MentorsPage from "./pages/protectedPage/MentorsPage";
import CoursesPage from "./pages/protectedPage/CoursesPage";
import TransactionsPage from "./pages/protectedPage/TransitionPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/learners" element={<LearnersPage />} />
          <Route path="/mentors" element={<MentorsPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/transitions" element={<TransactionsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;