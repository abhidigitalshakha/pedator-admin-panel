import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/protectedPage/DashboardPage";
import LearnersPage from "./pages/protectedPage/LearnersPage";
import MentorsPage from "./pages/protectedPage/MentorsPage";
import CoursesPage from "./pages/protectedPage/CoursesPage";
import TransactionsPage from "./pages/protectedPage/TransitionPage";
import TransactionDetailsPage from "./pages/protectedPage/TransitionDetailsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import QueryClientWrapper from "./context/QueryClientProvider";
import LearnersDetailPage from "./pages/protectedPage/LearnersDetailPage";
import MentorDetailPage from "./pages/protectedPage/MentorDetailPage";
import CourseDetailPage from "./pages/protectedPage/CourseDetailPage";
import PageNotFound from "./pages/publicInfoPage/PageNotFound";
import IsProtectedRoute from "./components/protected/IsProtectedRoute";

function App() {
  return (
    <QueryClientWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<IsProtectedRoute/>}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/learners" element={<LearnersPage />} />
              <Route path="/learners/id" element={<LearnersDetailPage />} />
              <Route path="/mentors" element={<MentorsPage />} />
              <Route path="/mentors/id" element={<MentorDetailPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/id" element={<CourseDetailPage />} />
              <Route path="/transitions" element={<TransactionsPage />} />
              <Route
                path="/transitions/id"
                element={<TransactionDetailsPage />}
              />
              <Route path="/*" element={<PageNotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientWrapper>
  );
}

export default App;
