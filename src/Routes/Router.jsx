import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/HomePage"
import AboutPage from "../Pages/AboutPage/AboutPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import SelectSidePage from "../Pages/SelectSidePage/SelectSidePage"
import StudentSignUp from "../Pages/Student/StudentSignUpPage/StudentSignUp"
import TeacherSignUp from "../Pages/Teachers/TeacherSignUpPage/TeacherSignUp"
import ResetPasswordPage from "../Pages/ResetPasswordPage/ResetPasswordPage"
import ContactPage from "../Pages/ContactPage/ContactPage"
import TermsAndCondition from "../Pages/Terms & Condition/TermsAndCondition"
import PrivacyPolicy from "../Pages/PrivacyPolicyPage/PrivacyPolicy"



const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/selectSide" element={<SelectSidePage/>}/>
        <Route path="/studentSignUp" element={<StudentSignUp/>} />
        <Route path="/teacherSignUp" element={<TeacherSignUp/>} />
        <Route path="/resetPassword" element={<ResetPasswordPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/terms/conditions" element={<TermsAndCondition/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
    </Routes>
  )
}

export default Router