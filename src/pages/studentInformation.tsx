import { useState } from "react";

export default function StudentInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolName: "",
    department: "",
    inviteCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Student information submitted!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src="/images/signupimg.png" // Change this to the correct image path
          alt="Students collaborating"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-50 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Student Account Set Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">School Name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="Enter your school name"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Department</label>
              <input
                type="text"
                name="department"
                placeholder="Enter your department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Invite Code</label>
              <input
                type="text"
                name="inviteCode"
                placeholder="Enter your Invite code"
                value={formData.inviteCode}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white p-3 rounded-md hover:bg-blue-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
