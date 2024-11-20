// src/components/HomePage.jsx
import React, { useState } from "react";
import ServicesSection from "~/components/Services/Services";
import DescriptionSection from "../../components/Desscription/Description";
import DocumentSection from "../../components/Document/Document";
import "./HomePage.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
const HomePage = () => {
  return (
    <div className="home-page mt-24">
      {/* Giới Thiệu */}
      <DescriptionSection />
      {/* Các Khóa Học */}
      <ServicesSection />
      {/* Tài Liệu */}
      <DocumentSection />

      {/* Liên Hệ */}
      <section id="contact" className="section min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Liên Hệ</h2>
          <p className="text-lg text-gray-700 text-center">
            Hotlin/Zalo:{" "}
            <span className="font-semibold">0901 985 978 (Mr. Chung)</span>
          </p>
          <p className="text-lg text-gray-700 text-center">
            Địa chỉ: Trung tâm đào tạo lái xe tư thục Tiến Thành
          </p>

          {/* Phần form để lại thông tin */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center mb-4 text-blue-950">
              Để lại thông tin để được tư vấn
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
