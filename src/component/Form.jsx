import React, { useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    dob: "",
    password: "",
    cPassword: "",
  };

  const [strength, setStrength] = useState("");

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    setStrength(checkPasswordStrength(values.password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.password === values.cPassword &&
      strength === "Strong" &&
      values.password.slice("").length === 8
    ) {
      setValues(initialState);
      alert("ok");
    } else {
      alert(strength + " password");
    }
  };

  const checkPasswordStrength = (password) => {
    // Define your password strength criteria and corresponding messages here
    const criteria = [
      {
        regex: /(?=.*[a-z])/,
        message: "At least one lowercase letter",
      },
      {
        regex: /(?=.*[A-Z])/,
        message: "At least one uppercase letter",
      },
      {
        regex: /(?=.*[0-9])/,
        message: "At least one digit",
      },
      {
        regex: /(?=.*[!@#$%^&*])/,
        message: "At least one special character",
      },
      {
        regex: /^.{8,}$/,
        message: "At least 8 characters long",
      },
    ];

    let strengthCount = 0;

    criteria.forEach((criterion) => {
      if (criterion.regex.test(password)) {
        strengthCount++;
      }
    });

    return strengthCount === criteria.length ? "Strong" : "Weak";
  };

  return (
    <form
      className="flex w-[30vw] flex-col items-center   bg-white/20  px-8 py-5 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="text-lg font-medium text-white">Please fill all fields</p>
      <div className="flex flex-col items-center space-y-6 py-3  px-10 w-full">
        <input
          type="text"
          name="name"
          className="px-3 py-2 w-full bg-white/60 rounded-lg border-none outline-none"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          className="px-3 py-2 w-full bg-white/60 rounded-lg border-none outline-none"
          value={values.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          className="px-3 py-2 w-full  bg-white/60 rounded-lg cursor-pointer border-none outline-none"
          placeholder="Enter your DoB"
          value={values.dob}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="px-3 py-2 w-full bg-white/60 rounded-lg border-none outline-none"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="cPassword"
          className="px-3 py-2 w-full bg-white/60 rounded-lg border-none outline-none"
          placeholder="Confirm your password"
          value={values.cPassword}
          onChange={handleChange}
        />
      </div>

      <button className="text-lg font-medium bg-black/10 px-5 py-3 rounded-xl text-white hover:bg-white/40 transition-colors">
        Submit
      </button>
    </form>
  );
};

export default Form;
