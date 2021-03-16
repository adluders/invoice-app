const InvoiceFormInput = () => {
  const updateInput = () => {};
  return (
    <label htmlFor={inputName}>
      <input
        type={inputType}
        name={inputName}
        value={`${formResponse.inputName}`}
        onChange={updateInput}
      />
    </label>
  );
};

export default InvoiceFormInput;
