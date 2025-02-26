
import { useState } from "react";
import Button from "../UI/Button";

const Form = ({ btnContent }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    const emailValue = email.trim();

    if (!emailValue) {
      setError("Please enter your work email!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setError("Invalid email format");
    } else {
      setError("");
      console.log("Submitted successfully");
    }

    setTimeout(() => setError(""), 5000);
  };

  return (
    <>
      <form className="grid grid-cols-3 gap-3 max-md:grid-cols-2 md:gap-2 pr-5  mx-auto max-md:w-full" role="form" aria-labelledby="form-title">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="bg-white col-span-2  max-md:col-span-2 rounded-field px-[10px] h-[53px] focus:outline-none focus:ring-0 placeholder:text-input-gray text-[17px] leading-[21px] w-full"
          placeholder="Your Work Email"
          aria-label="Your Work Email"
        />
        <Button
          type="submit"
          onClick={submitForm}
          className="action-btn col-span-1 max-md:col-span-2  text-[16px] leading-[20px] font-normal w-full h-[53px] min-w-[200px]"
          aria-label={btnContent}
        >
          {btnContent}
        </Button>
      </form>
      <div className="w-full h-5">
        <p
          aria-live="polite"
          aria-hidden={!error}
          className={`text-sm text-white font-extralight text-center pt-2.5 transition-all duration-300 ${error ? "opacity-100" : "opacity-0"}`}
        >
          {error}
        </p>
      </div>
    </>
  );
};

export default Form;

