"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const initialState = {
  semail: "",
  spassword: "",
  remember: false,
};

const SignInComponent = () => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({
    semail: "",
    spassword: "",
    remember: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
      remember: e.target.checked,
    }));

    setFormErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your form validation logic here
    const errors = {};

    if (!formData.semail.trim()) {
      errors.semail = "Please enter your email address";
      setFormErrors(errors);
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.semail)) {
      errors.semail = "Please enter a valid email address";
      setFormErrors(errors);
      return;
    }

    if (!formData.spassword.trim()) {
      errors.spassword = "Please enter your password";
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const res = await signIn("sanity-login", {
        redirect: false,
        email: formData.semail,
        password: formData.spassword,
      });
      if (res?.ok) {
        toast.success("Login Successfull!");
        setFormData(initialState);
        router.push("/");
      } else {
        toast.error(res?.error || "Error Logging In");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Error Registering");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <form action="#">
          <div className="form-group">
            <label htmlFor="singin-email-2">Email Address *</label>
            <input
              type="text"
              className="form-control"
              id="singin-email-2"
              value={formData.semail}
              onChange={handleChange}
              name="semail"
            />
            {formErrors?.semail && (
              <span className="text-red-600">*{formErrors.semail}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="singin-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="singin-password-2"
              value={formData.spassword}
              onChange={handleChange}
              name="spassword"
            />
            {formErrors?.spassword && (
              <span className="text-red-600">*{formErrors.spassword}</span>
            )}
          </div>

          <div className="form-footer flex justify-between">
            <div className="custom-control custom-checkbox">
              {/* <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember-2"
                name="remember"
                checked={formData.remember}
                onChange={handleCheckboxChange}
              />
              <label
                className="custom-control-label"
                htmlFor="signin-remember-2"
              >
                Remember Me
              </label> */}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-outline-primary-2"
              disabled={loading}
            >
              <span>{loading ? "Loading" : "LOG IN"}</span>
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
      </div>
    </>
  );
};

export default SignInComponent;
