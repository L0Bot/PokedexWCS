/* eslint-disable react/prop-types */
function InputMessage({ handleTextChange }) {
  return <input type="text" name="message" onChange={handleTextChange} />;
}

export default InputMessage;
