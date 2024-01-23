"use client";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = () => {};

  return (
    <form
      className="w-[340px] h-[33rem] rounded-lg shadow-2xl mx-auto py-[20px] px-[30px] box-border max-w-80 my-8"
      onSubmit={handleSubmit}
    >
      <h1 className="flex justify-center font-semibold my-4 border-[#bebed2] border-b-2 pb-2">
        We&apos;d love to hear{" "}
        <span className="text-rose-500">&nbsp;from you</span>
      </h1>
      <div className="my-3">
        <label htmlFor="name" className="text-[#5a5a5a] mb-1">
          Name
        </label>
        <input
          className="bg-transparent border-0 border-b-2 border-[#bebed2] box-border p-2 w-full focus:outline-none focus:border-0 focus:border-[#78788c] focus:border-b-2 "
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={handleChange}
          autoComplete="off"
          required
        ></input>
      </div>
      <div className="my-3">
        <label className="text-[#5a5a5a] mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="bg-transparent border-0 border-b-2 border-[#bebed2] box-border p-2 w-full focus:outline-none focus:border-0 focus:border-[#78788c] focus:border-b-2 "
          id="email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
          required
        ></input>
      </div>
      <div className="my-3">
        <label className="text-[#5a5a5a] mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="bg-transparent border-0 border-b-2 border-[#bebed2] box-border p-2 w-full focus:outline-none focus:border-0 focus:border-[#78788c] focus:border-b-2 "
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter Your Phone"
          value={user.phone}
          onChange={handleChange}
          autoComplete="off"
          required
        ></input>
      </div>
      <div className="my-3">
        <label className="text-[#5a5a5a] mb-2" htmlFor="name">
          Message
        </label>
        <textarea
          className="bg-transparent border-0 border-b-2 border-[#bebed2] box-border p-2 w-full focus:outline-none focus:border-0 focus:border-[#78788c] focus:border-b-2 "
          id="message"
          name="message"
          rows={4}
          placeholder="Enter Your Message"
          value={user.message}
          onChange={handleChange}
          autoComplete="off"
          required
        ></textarea>
      </div>
      <div className="my-3 flex justify-center">
        <button
          className="p-2 bg-slate-950 text-slate-50 hover:bg-slate-100 hover:text-slate-950 hover:border-2 hover:border-slate-950 rounded-[1.5rem]"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
