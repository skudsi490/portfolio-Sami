import Circles from "/components/Circles";
import { useState } from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants

import { fadeIn } from "../../variants";

import Head from "next/head";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInput),
      });

      if (res.status === 200) {
        setFormInput({ name: "", email: "", subject: "", message: "" });
        setSuccessMessage(
          "Your message has been sent successfully. Thank you for reaching out!"
        );
        setErrorMessage(""); 
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
        setSuccessMessage(""); 
      }
    } catch (error) {
      console.error("Failed to submit form", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>Contact - Sami Kudsi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text form*/}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Lets <span className="text-accent">connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* inputs group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="name"
                  name="name" // Add the name attribute
                  className="input"
                  value={formInput.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="email"
                  name="email" // Add the name attribute
                  className="input"
                  value={formInput.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="subject"
                name="subject"
                className="input"
                value={formInput.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="message"
                name="message" // Add the name attribute
                className="textarea"
                value={formInput.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                {" "}
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  lets talk
                </span>
                <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              {/* Success message */}
              {successMessage && (
                <div className="bg-green-500 text-white p-4 rounded-md shadow my-4">
                  {successMessage}
                </div>
              )}

              {/* Error message */}
              {errorMessage && (
                <div className="bg-red-500 text-white p-4 rounded-md shadow my-4">
                  {errorMessage}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
