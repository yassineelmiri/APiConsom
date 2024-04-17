import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData
      );
      console.log("Registration successful:", response.data);
      setFormData({ name: "", email: "", password: "" });
      window.location.href = "/";
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="flex justify-center items-center text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[250px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-white">
          Create your account
        </h4>
      </div>
      <div className="mx-4 mb-4 -mt-16">
        <form
          className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
            <div>
              <img src="../img/voyage.jpg" alt="" />
            </div>
            <div>
              <div>
                <label className="text-sm mb-2 block"> Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500 mb-2"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 w-full text-sm px-4 py-3 mb-2 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">Password</label>
                <input
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <div className="!mt-10">
                <button
                  type="submit"
                  className=" mb-4 min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                >
                  Register
                </button>
              </div>
              <span>
                Already have an account{" "}
                <a href="/" className="underline text-blue-700">
                  Login here
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
