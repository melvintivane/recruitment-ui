import React from "react";
import { Input } from "reactstrap";

const JobSearch = () => {
  return (
    <React.Fragment>
      <Input
        type="search"
        id="job-title"
        className="form-control filter-input-box"
        placeholder="Emprego, nome da empresa..."
      />
    </React.Fragment>
  );
};

export default JobSearch;
