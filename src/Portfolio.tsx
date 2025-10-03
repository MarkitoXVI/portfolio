import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Portfolio() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  // EmailJS form submission
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17nu3ow",   // 🔹 Replace  with your EmailJS Service ID
        "template_eoox0fh",  // 🔹 Replace with your EmailJS Template ID
        e.currentTarget,
        "idB80JnV91pFWhIFJ"    // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
        }
      );

    e.currentTarget.reset(); // clear form after submit
  };

  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-50">
        <motion.h1 {...fadeUp} className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Hi, I’m <span className="text-blue-600">Markuss Raivo Tauriņš</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          I’m an 18-year-old <span className="font-medium text-gray-900">Full-Stack Developer</span> 
          in my final year at VTDT. Over the past four years, I’ve not only grown my technical skills in coding, 
          but also learned how much I enjoy solving problems and building real-world applications.  

          I’m curious, driven, and passionate about learning new technologies. 
          Outside of coding, I’m active and love both basketball and football — sports inspire the same discipline, 
          teamwork, and resilience that I bring into my work as a developer.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Contact
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <img
            src="https://via.placeholder.com/500"
            alt="Profile"
            className="rounded-2xl shadow-md"
          />
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I’m Markuss, a motivated student currently finishing my coding studies at VTDT. 
            Over the years, I’ve built school-related projects, experimented with personal apps, 
            and discovered how much I love turning ideas into working applications.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My main focus is full-stack development, giving me the ability to work across front-end interfaces, 
            back-end logic, and databases. I enjoy creating clean and user-friendly designs, 
            while also making sure everything runs fast and efficiently.  

            My dream is to join a professional team where I can learn from experienced developers, 
            contribute to meaningful projects, and continue growing every day.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-12 text-center text-gray-900">
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sportify",
                desc: "A sports training platform where athletes can track workouts, set challenges, and monitor progress. Inspired by my passion for sports, this project combines coding with fitness.",
                img: "https://via.placeholder.com/400x250",
              },
              {
                title: "GradeViewer",
                desc: "A local E-klase alternative designed to help students track their grades and academic progress more easily. Built with usability and clarity in mind.",
                img: "https://via.placeholder.com/400x250",
              },
              {
                title: "Footsy",
                desc: "A football fantasy game currently in development. Footsy mixes real stats with fun strategy play, giving football fans a chance to test their knowledge and compete with friends.",
                img: "https://via.placeholder.com/400x250",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden border border-gray-200 transition"
              >
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10 text-gray-900">
          Skills
        </motion.h2>
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "React",
            "JavaScript",
            "PHP / Laravel",
            "MySQL",
            "Tailwind CSS",
            "HTML / CSS",
            "Git & GitHub",
          ].map((s) => (
            <span
              key={s}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-12 text-center text-gray-900">
            Experience
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-blue-700">Store Worker</h3>
              <p className="text-gray-500 text-sm">August 2025</p>
              <ul className="list-disc ml-5 text-gray-600 mt-2 text-sm space-y-1">
                <li>Assisted customers with purchases and inquiries</li>
                <li>Handled sales and daily store operations</li>
                <li>Built teamwork and problem-solving skills in a fast-paced environment</li>
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-blue-700">Aspiring Web Developer</h3>
              <p className="text-gray-500 text-sm">Looking for first opportunity</p>
              <ul className="list-disc ml-5 text-gray-600 mt-2 text-sm space-y-1">
                <li>Strong foundation in React, Laravel, and databases</li>
                <li>Experience building apps from scratch, including design and backend</li>
                <li>Passionate, hardworking, and ready to grow in a professional environment</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-6 text-gray-900">
          Get In Touch
        </motion.h2>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-gray-600 mb-8">
          I’d love to hear about your project or ideas! You can reach me directly through WhatsApp, 
          email, or by filling out the form below. I’ll try my best to respond quickly.  
        </motion.p>

        {/* WhatsApp Button */}
        <motion.a
          {...fadeUp}
          href="https://wa.me/37125704644" // 🔹 Your WhatsApp link
          target="_blank"
          className="inline-block mb-6 px-8 py-3 bg-green-500 text-white rounded-lg font-medium shadow hover:bg-green-600 transition"
        >
          Message me on WhatsApp
        </motion.a>

        {/* EmailJS Contact Form */}
        <motion.form
          {...fadeUp}
          transition={{ delay: 0.4 }}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200 text-left"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="user_name" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="user_email" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows={4} className="w-full mt-1 p-2 border border-gray-300 rounded-lg" required></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Markuss Raivo Tauriņš — All rights reserved.
      </footer>
    </div>
  );
}
