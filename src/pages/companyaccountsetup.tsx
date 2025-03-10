import { useState } from "react";

export default function CompanyAccountSetup() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    mobileNumber: "",
    contactPerson: "",
    businessType: "",
    companyLogo: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, companyLogo: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Company information submitted!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src="/images/signupimg.png" // Update with correct path
          alt="Business collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-50 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Company Account Set Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Company Address</label>
              <input
                type="text"
                name="companyAddress"
                placeholder="Enter Company Address"
                value={formData.companyAddress}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Company Mobile / Telephone Number</label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter Company Mobile / Telephone Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Contact Person Name</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Enter Contact Person Name"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Type Of Business</label>
              <input
                type="text"
                name="businessType"
                placeholder="Enter Type of Business"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Company Logo</label>
              <input
                type="file"
                name="companyLogo"
                accept="image/*"
                onChange={handleFileChange}
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
