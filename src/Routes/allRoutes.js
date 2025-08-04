import React from "react";

//Company Section
import AboutUs from "../pages/Company/AboutUs/AboutUs";
import Faqs from "../pages/Company/Faqs/Faqs";
import PrivacyAndPolicy from "../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";

//Jobs Section
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import JobList from "../pages/Jobs/JobList/JobList";
import JobsCategories from "../pages/Jobs/JobsCategories/JobsCategories";

//Candidate and Company Section
import CandidateDetails from "../pages/CandidateAndCompany/CandidateDetails/CandidateDetails";
import CandidateGrid from "../pages/CandidateAndCompany/CandidateGrid/CandidateGrid";
// import CandidateList from "../pages/CandidateAndCompany/CandidateList/CandidateList";
import CompanyDetails from "../pages/CandidateAndCompany/CompanyDetails/CompanyDetails";
import CompanyList from "../pages/CandidateAndCompany/CompanyList/CompanyList";

//Blog Section
import Blog from "../pages/Blog/Blog/Blog";
import BlogAuther from "../pages/Blog/BlogAuther/BlogAuther";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";

//Contacts
import Contact from "../pages/Contact/Contact";

//AuthPages
import ComingSoon from "../pages/ExtraPages/ComingSoon";
import Components from "../pages/ExtraPages/Components/Components";
import Error404 from "../pages/ExtraPages/Error404";
import ResetPassword from "../pages/ExtraPages/ResetPassword";
import SignIn from "../pages/ExtraPages/SignIn";
import SignOut from "../pages/ExtraPages/SignOut";
import SignUp from "../pages/ExtraPages/SignUp";

//profile section(User Profile)
// import BookMarkJobPost from "../pages/Profile/BookMarkJobPost/BookMarkJobPost";
// import BookMarkJobs from "../pages/Profile/BookMarkJobs/BookMarkJobs";
import MyApplications from "../pages/Profile/ManageJobs/MyApplications";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";

//Home Section
const Layout1 = React.lazy(() => import("../pages/Home/Layout1/Layout1"));

const userRoutes = [
  //profile Section(User Profile)
  // { path: "/bookmarkjobpost", component: <BookMarkJobPost /> },
  // { path: "/bookmarkjobs", component: <BookMarkJobs /> },
  { path: "/myprofile", component: <MyProfile /> },
  { path: "/myapplications", component: <MyApplications /> },

  //Components Section(Extra Pages)
  { path: "/components", component: <Components /> },

  //Contact
  { path: "/contact", component: <Contact /> },

  // Blog Section
  { path: "/blogauther", component: <BlogAuther /> },
  { path: "/blogdetails/:id", component: <BlogDetails /> },
  { path: "/blog", component: <Blog /> },

  //Candidate and Company Section
  { path: "/companydetails/:id", component: <CompanyDetails /> },
  { path: "/companylist", component: <CompanyList /> },
  { path: "/candidatedetails/:id", component: <CandidateDetails /> },
  { path: "/candidategrid", component: <CandidateGrid /> },
  // { path: "/candidatelist", component: <CandidateList /> },

  //Jobs Section
  { path: "/jobscategories", component: <JobsCategories /> },
  { path: "/jobdetails/:id", component: <JobDetails /> },
  { path: "/joblist", component: <JobList /> },

  //Company Section
  { path: "/faqs", component: <Faqs /> },
  { path: "/privacyandpolicy", component: <PrivacyAndPolicy /> },
  { path: "/aboutus", component: <AboutUs /> },

  //Home Section
  { path: "/", component: <Layout1 /> },
];

const authRoutes = [
  { path: "/comingsoon", component: <ComingSoon /> },
  { path: "/resetpassword", component: <ResetPassword /> },
  { path: "/signout", component: <SignOut /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/signin", component: <SignIn /> },
  { path: "*", component: <Error404 /> },
];
export { authRoutes, userRoutes };

