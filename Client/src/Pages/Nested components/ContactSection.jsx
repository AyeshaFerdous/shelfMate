import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n2jsky2", 
        "template_au6su7w", 
        formRef.current,
        "696y_P1JCqbyXfCHA" 
      )
      .then(
        (result) => {
          toast("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="bg-gradient-to-br from-[#b6dbf0] to-[#5bb4e6] text-white py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg">
            We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Section */}
          <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-8">
            <FaPhoneAlt className="text-3xl text-[#5bb4e6] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-gray-700 mb-4">Available 9 AM - 6 PM</p>
            <p className="text-lg font-bold">+123 456 7890</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-8">
            <FaEnvelope className="text-3xl text-[#5bb4e6] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-700 mb-4">We usually respond within 24 hours</p>
            <p className="text-lg font-bold">shelfmatesupport@example.com</p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-8">
            <FaMapMarkerAlt className="text-3xl text-[#5bb4e6] mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-gray-700 mb-4">Come meet us at our office</p>
            <p className="text-lg font-bold">12/D Banasree, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white text-black rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bb4e6]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bb4e6]"
              />
            </div>
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5bb4e6] mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#5bb4e6] text-white py-3 rounded font-bold text-lg hover:bg-[#5bb4e6] transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;