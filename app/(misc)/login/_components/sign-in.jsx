"use client";

import { signIn } from "next-auth/react";

const SignInComponent = () => {
  return (
    <>
      <div>
        <form action="#">
          <div className="form-group">
            <label htmlFor="singin-email-2">Username or email address *</label>
            <input
              type="text"
              className="form-control"
              id="singin-email-2"
              name="singin-email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="singin-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="singin-password-2"
              name="singin-password"
              required
            />
          </div>

          <div className="form-footer flex justify-between">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember-2"
              />
              <label
                className="custom-control-label"
                htmlFor="signin-remember-2"
              >
                Remember Me
              </label>
            </div>

            <button type="submit" className="btn btn-outline-primary-2">
              <span>LOG IN</span>
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
