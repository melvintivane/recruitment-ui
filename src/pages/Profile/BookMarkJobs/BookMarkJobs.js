import React from "react";
import { Container } from "reactstrap";
import Selected from "../myapplications/Selected";
import BookmarkJobListing from "./BookmarkJobListing";
import Section from "./Section";

const BookMarkJobs = () => {
  document.title =
    "Bookmarks Jobs | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <BookmarkJobListing />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BookMarkJobs;
