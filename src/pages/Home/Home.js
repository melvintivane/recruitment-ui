// import Jobcatogaries from "../Home/jobCatogaries";
// import JobList from "./JobList/jobList";
// import Blog from "../Home/Blog";
import React from "react";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Testimonal from "./Testimonal";
import Client from "./Client";

const Home = () => {
  return (
    <React.Fragment>
      <HowItWorks />
      <Cta />
      <Testimonal />
      <Client />
    </React.Fragment>
  );
};

export default Home;
