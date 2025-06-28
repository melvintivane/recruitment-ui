import Select from "react-select";

const JobType = ({ loading, options, value, onChange }) => {
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

  // Find the currently selected option
  const selectedOption = options?.find((option) => option.value === value);

  const handleChange = (selectedOption) => {
    // Passa apenas o valor (ID) para o onChange
    onChange(selectedOption ? selectedOption.value : 0);
  };

  return (
    <Select
      placeholder="Selecione a categoria..."
      options={options}
      className="choices selectForm__inner"
      value={selectedOption}
      onChange={handleChange}
      isLoading={loading}
      styles={colourStyles}
      isSearchable
      isClearable
    />
  );
};

export default JobType;
