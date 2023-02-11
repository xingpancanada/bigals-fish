import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* input before label: make sure shrink when click input place, if input after label, only shrink after input something */}
      <input className="form-input" {...otherProps} />
      {label && ( // this line means if label exist, then show label
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
