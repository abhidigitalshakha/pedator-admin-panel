import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/protectedPage/DashboardPage";
import LearnersPage from "./pages/protectedPage/LearnersPage";
import MentorsPage from "./pages/protectedPage/MentorsPage";
import CoursesPage from "./pages/protectedPage/CoursesPage";
import TransactionsPage from "./pages/protectedPage/TransitionPage";
import TransactionDetailsPage from "./pages/protectedPage/TransitionDetailsPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/learners" element={<LearnersPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/transitions" element={<TransactionsPage />} />
          <Route path="/transitions/id" element={<TransactionDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
