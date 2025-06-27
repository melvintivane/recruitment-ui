import React from "react";
import Select from "react-select";

const JobType = ({ options, value, onChange }) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
       border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 35px",
      margin: "-16px 0 0 -45px",
      borderRadius: "0",
      outline: "none",
    }),
  };

  return (
    <React.Fragment>
      <Select
        options={options}
        className="choices selectForm__inner "
        defaultValue={{ label: "Afeganistão", value: 0 }}
        styles={colourStyles}
      />
    </React.Fragment>
  );
};

export default JobType;
