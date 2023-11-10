import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SelectSidePage from "../Pages/SelectSidePage/SelectSidePage";
import StudentSignUp from "../Pages/Student/StudentSignUpPage/StudentSignUp";
import TeacherSignUp from "../Pages/Teachers/TeacherSignUpPage/TeacherSignUp";
import ResetPasswordPage from "../Pages/ResetPasswordPage/ResetPasswordPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import TermsAndCondition from "../Pages/Terms & Condition/TermsAndCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicyPage/PrivacyPolicy";
import Layout from "../components/Layout/Layout";

import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import EachBlogPage from "../Pages/EachBlogPage/EachBlogPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-in" element={<SelectSidePage />} />
      <Route path="/studentSignUp" element={<StudentSignUp />} />
      <Route path="/teacherSignUp" element={<TeacherSignUp />} />
      <Route path="/resetPassword" element={<ResetPasswordPage />} />
      <Route path="/blog/:id" element={<EachBlogPage />} />
      <Route
        path="/contact"
        element={
          <Layout>
            {" "}
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <Layout>
            {" "}
            <PaymentPage />
          </Layout>
        }
      />
      =======
      <Route
        path="/blog"
        element={
          <Layout>
            {" "}
            <BlogPage />
          </Layout>
        }
      />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Router;
