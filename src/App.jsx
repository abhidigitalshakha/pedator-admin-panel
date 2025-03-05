import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/protectedPage/DashboardPage";
import LearnersPage from "./pages/protectedPage/learner/LearnersPage";
import MentorsPage from "./pages/protectedPage/mentor/MentorsPage";
import CoursesPage from "./pages/protectedPage/course/CoursesPage";
import TransactionsPage from "./pages/protectedPage/transition/TransitionPage";
import TransactionDetailsPage from "./pages/protectedPage/transition/TransitionDetailsPage";
import LoginPage from "./pages/loginPage/LoginPage";
import QueryClientWrapper from "./context/QueryClientProvider";
import LearnersDetailPage from "./pages/protectedPage/learner/LearnersDetailPage";
import MentorDetailPage from "./pages/protectedPage/mentor/MentorDetailPage";
import CourseDetailPage from "./pages/protectedPage/course/CourseDetailPage";
import PageNotFound from "./pages/publicInfoPage/PageNotFound";
import IsProtectedRoute from "./components/protected/IsProtectedRoute";
import CourseCategory from "./pages/protectedPage/course/CourseCategoryListPage";
import CourseSubCategory from "./pages/protectedPage/course/CourseSubCategoryListPage";
import CountryListPage from "./pages/protectedPage/location/CountryListPage";
import StateListPage from "./pages/protectedPage/location/StateListPage";
import CityListPage from "./pages/protectedPage/location/CityListPage";
import CountryDetailPage from "./pages/protectedPage/location/CountryDeatilPage";
import CityDetailPage from "./pages/protectedPage/location/CityDetailPage";
import StateDetailPage from "./pages/protectedPage/location/StateDetailPage";

function App() {
  return (
    <QueryClientWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<IsProtectedRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/learners" element={<LearnersPage />} />
              <Route path="/learners/id" element={<LearnersDetailPage />} />
              <Route path="/mentors" element={<MentorsPage />} />
              <Route path="/mentors/id" element={<MentorDetailPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/id" element={<CourseDetailPage />} />
              <Route path="/course-category" element={<CourseCategory />} />
              <Route
                path="/course-sub-category"
                element={<CourseSubCategory />}
              />
              <Route path="/country" element={<CountryListPage />} />
              <Route path="/state" element={<StateListPage />} />
              <Route path="/city" element={<CityListPage />} />
              <Route path="/country/:id" element={<CountryDetailPage />} />
              <Route path="/state/:id" element={<StateDetailPage />} />
              <Route path="/city/:id" element={<CityDetailPage />} />
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
