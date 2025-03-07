import { useState } from "react";

export default function CoordinatorInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolName: "Naga College Foundation", // Default selection
    department: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Coordinator Data:", formData);
    alert("Coordinator account setup completed!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2">
        <img
          src="/images/signupimg.png"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-50 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl font-bold text-blue-700 text-center">
            Coordinator Account Set Up
          </h2>

          <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
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
              />
            </div>

            <div>
              <label className="block text-gray-700">School Name</label>
              <select
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select School</option>
                <option value="Naga College Foundation">Naga College Foundation</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Department</option>
                <option value="CCS">College of Computer Studies</option>
                <option value="CCJE">CCJE</option>
              </select>
            </div>

            {/* <div>
              <label className="block text-gray-700">Bio</label>
              <textarea
                name="bio"
                placeholder="Enter your bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              />
            </div> */}

            <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
