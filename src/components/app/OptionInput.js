const OptionInput = ({ options, change, className, name }) => {
  return (
    <select onChange={change} className={className} name={name}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default OptionInput;
