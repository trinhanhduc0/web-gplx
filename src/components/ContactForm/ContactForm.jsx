import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"; // Thay đổi cách import

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Lấy token từ reCAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha(); // Sử dụng hook để lấy recaptcha

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setStatus("Lỗi khi xác minh reCAPTCHA: reCAPTCHA không được tải.");
      return;
    }

    try {
      const token = await executeRecaptcha("submit");
      console.log("reCAPTCHA Token:", token); // Kiểm tra giá trị của token
      if (!token) {
        setStatus("Lỗi khi xác minh reCAPTCHA: không nhận được token.");
        return;
      }

      // Gửi email với token reCAPTCHA
      const response = await emailjs.send(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_MAIL_USER_ID
      );

      console.log("Email sent successfully:", response);
      setStatus("Thông tin đã được gửi thành công!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus(`Lỗi khi xác minh reCAPTCHA: ${error.message}`);
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg form-info"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-800 font-semibold mb-2"
        >
          Họ và tên
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập họ và tên"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-800 font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập email của bạn"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-800 font-semibold mb-2"
        >
          Số điện thoại
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\d{10,11}$"
          title="Số điện thoại phải gồm 10 hoặc 11 chữ số"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập số điện thoại của bạn"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-800 font-semibold mb-2"
        >
          Yêu cầu tư vấn
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập yêu cầu tư vấn"
        ></textarea>
      </div>

      {/* Không cần reCAPTCHA component nữa, chỉ cần sử dụng hook useGoogleReCaptcha */}

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Gửi thông tin
        </button>
      </div>
      {status && <p className="mt-4 text-center text-green-500">{status}</p>}
    </form>
  );
}

export default ContactForm;
