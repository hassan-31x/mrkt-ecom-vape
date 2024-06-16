

import Link from "next/link";
import RegisterForm from "./_components/register-form";

export const metadata = {
  title: "Register",
}

function RegisterPageComponent() {
  return (
    <div className="main">
      <nav className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Register</li>
          </ol>
        </div>
      </nav>

      <div
        className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{ backgroundImage: `url(/images/backgrounds/login-bg.jpg)` }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPageComponent;
