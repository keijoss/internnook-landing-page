import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // Track selected role

  const handleRegister = () => {
    console.log("Register button clicked!");
    alert("Register na ngani");

    if (role === "intern") {
      navigate("/student-information"); // Navigate to student form if "Intern" is selected
    } else {
      navigate("/dashboard"); // Navigate to a different page for other roles
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src="/images/signupimg.png" 
          alt="Interns at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-600">Internnook</h2>
          <p className="text-center text-gray-600 mb-5">
            Welcome! Please provide the following details to complete your account
          </p>

          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />

            <div className="relative">
              <input type="password" placeholder="Set password" className="w-full p-3 border rounded-md pr-10" />
              <span className="absolute right-3 top-3 cursor-pointer">👁️</span>
            </div>

            {/* 🔹 Invite Code Input */}
            <input type="text" placeholder="Invite Code" className="w-full p-3 border rounded-md" />

            {/* 🔹 Role Selection Dropdown */}
            <select 
              className="w-full p-3 border rounded-md"
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update role on change
            >
              <option value="">Select Role</option>
              <option value="intern">Intern</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>

            <button type="button" className="w-full bg-blue-600 text-white p-3 rounded-md" onClick={handleRegister}>
              Create Account
            </button>
          </form>

          <div className="text-center my-4">Or sign up with</div>

          <button className="w-full flex items-center justify-center border p-3 rounded-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account? <Link to="/auth/login" className="text-blue-500">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
