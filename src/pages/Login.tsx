import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // 5 seconds to be visible then go back to being hidden
    const handlePasswordVisibility = () => {
        setIsPasswordVisible(true);
        setTimeout(() => {
            setIsPasswordVisible(false);
        }, 3000);
    };

    const handleLogin = async () => {

        try {

        // const response = await axios.post("http://localhost:3001/login", 
        //     {email, password},
        //     { headers: {
        //         "Content-Type": "application/json",
        //         }
        //     }
        // );

        console.log("Login button clicked!");
        alert("Login na ngani");
        } catch (error) {
            console.error("Error logging in: ", error);
        }

    };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src="/images/Intern1.png" 
          alt="Interns at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full h-full lg:w-1/2 flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-600">Internnook</h2>
          <p className="text-center text-gray-600 mb-5">
            Welcome! Please provide your credentials to <span className="font-bold text-black">log in</span> to your account.
          </p>

          <form className="space-y-4">
            <input type="email" placeholder="Enter Email" className="w-full p-3 border rounded-md" />

            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-3 border rounded-md pr-10"
              />
              <span className="absolute right-3 top-3 cursor-pointer" onClick={handlePasswordVisibility}>👁️</span>
            </div>

            {/* 🔹 Invite Code Input */}
            {/* <input type="text" placeholder="Invite Code" className="w-full p-3 border rounded-md" /> */}

            

            <button type="button" className="w-full bg-blue-600 text-white p-3 rounded-md" onClick={handleLogin}>
              Log In
            </button>
          </form>

          <div className="text-center my-4">Or sign up with</div>

          <button className="w-full flex items-center justify-center border p-3 rounded-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account yet?  <Link to="/auth/register" className="text-blue-500">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
