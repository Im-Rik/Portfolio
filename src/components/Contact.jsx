import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Player } from '@lottiefiles/react-lottie-player';

// Email validation for temporary domains
const temporaryEmailDomains = [
  "10minutemail.com", "guerrillamail.com", "mailinator.com", 
  "maildrop.cc", "temp-mail.org", "tempmail.com", "yopmail.com", "maxturns.com",
];

const isTemporaryEmail = (email) => {
  const domain = email.split("@")[1].toLowerCase();
  return temporaryEmailDomains.some((tempDomain) => domain.includes(tempDomain));
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert('Please fill out all fields.');
      return;
    }

    if (isTemporaryEmail(form.email)) {
      setLoading(false);
      alert('Please provide a legitimate email address.');
      return;
    }

    emailjs
      .send(
        "service_ztyppth",
        "template_1tquwkq",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "ITaKtWYEf6-rHf02v"
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for contacting me! I will get back to you soon.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section className="relative w-full min-h-screen h-auto bg-gradient-to-b from-gray-950 via-gray-900 to-slate-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <div className="space-y-4">
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-mono">
            GET IN TOUCH
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 max-w-7xl mx-auto ">
          {/* Contact Form */}
          <div className="bg-black rounded-xl py-8 px-12 border-2 border-gray-800">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What is your name?"
                  className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What is your email?"
                  className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-gray-800 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 py-3 px-8 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Lottie Animation - Only visible on large screens */}
          <div className="hidden lg:flex items-center justify-center">
            <Player
              autoplay
              loop
              src="https://lottie.host/6bd905e2-3b09-42f1-9d45-00ebd7df8659/Q8MH2r5h2z.json"
              className="w-full max-w-[500px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
