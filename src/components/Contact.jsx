import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      e.target.submit();
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-[#173039c9] to-teal-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/adrrnwra"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.name ? "border-red-500" : "border-white"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.email ? "border-red-500" : "border-white"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.message ? "border-red-500" : "border-white"
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
