"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  agreementChecked: false,
};

const SignUpComponent = ({ type }) => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    agreementChecked: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setFormErrors({});
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      agreementChecked: e.target.checked,
    }));

    setFormErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your form validation logic here
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name";
      setFormErrors(errors);
      return;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address";
      setFormErrors(errors);
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      setFormErrors(errors);
      return;
    }

    if (!formData.password.trim()) {
      errors.password = "Please enter your password";
      setFormErrors(errors);
      return;
    }

    if (!formData.agreementChecked) {
      errors.agreementChecked = "Please agree to the privacy policy";
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const res1 = await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      const code = searchParams.get("code");
      if (code) {
        const res2 = await fetch("/api/addDiscount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            code,
          }),
        });
      }
      toast.success("Registered! Login to continue.");
      setFormData(initialState);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Error Registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form action="#">
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="register-name-2">Full Name *</label>
            <input
              type="text"
              className="form-control"
              id="register-name-2"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            {formErrors?.name && (
              <span className="text-red-600">*{formErrors.name}</span>
            )}
          </div>

          <label htmlFor="register-email-2">Your email address *</label>
          <input
            type="email"
            className="form-control"
            id="register-email-2"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {formErrors?.email && (
            <span className="text-red-600">*{formErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="register-password-2">Password *</label>
          <input
            type="password"
            className="form-control"
            id="register-password-2"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          {formErrors?.password && (
            <span className="text-red-600">*{formErrors.password}</span>
          )}
        </div>

        <div className="form-footer flex justify-between">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy-2"
              name="agreementChecked"
              checked={formData.agreementChecked}
              onChange={handleCheckboxChange}
            />
            <label
              className={`custom-control-label ${
                formErrors?.agreementChecked ? "text-red-600" : "text-black"
              }`}
              htmlFor="register-policy-2"
            >
              I agree to the privacy policy*
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="btn btn-outline-primary-2"
          >
            <span>{loading ? "Loading" : "Register"}</span>
            <i className="icon-long-arrow-right"></i>
          </button>
        </div>
      </form>
      <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <button
              className="btn btn-login btn-g w-full"
              onClick={() => signIn("google")}
            >
              <i className="icon-google"></i>
              Login With Google
            </button>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-login btn-f w-full"
              onClick={() => signIn("facebook")}
            >
              <i className="icon-facebook-f"></i>
              Login With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
