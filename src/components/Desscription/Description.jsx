import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

function DescriptionSection() {
  // Danh sách các hình ảnh cho carousel
  const images = [
    {
      src: "image-description1.png",
      alt: "Dạy lái xe ô tô tại TP.HCM - Hình ảnh minh họa về khóa học lái xe",
    },
    {
      src: "image-description2.jpg",
      alt: "Lớp học lái xe ô tô tại TP.HCM với giảng viên giàu kinh nghiệm",
    },
    {
      src: "image-description3.jpg",
      alt: "Xe tập lái ô tô đời mới tại Trung tâm Tiến Thành, TP.HCM",
    },
    {
      src: "image-description4.jpg",
      alt: "Xe tập lái ô tô tại TP.HCM, chuẩn bị cho kỳ thi bằng lái",
    },
    {
      src: "image-description5.jpg",
      alt: "Xe tập lái hiện đại, chất lượng tại Trung tâm đào tạo lái xe",
    },
    {
      src: "image-description6.jpg",
      alt: "Trung tâm dạy lái xe với xe tập lái đời mới, an toàn tại TP.HCM",
    },
    {
      src: "image-description7.jpg",
      alt: "Lớp học lái xe ô tô tại TP.HCM với giảng viên chuyên nghiệp, tại Trung tâm Đào tạo lái xe",
    },
    {
      src: "image-description8.jpg",
      alt: "Khóa học lái xe ô tô tại TP.HCM, chuẩn bị cho kỳ thi sát hạch bằng lái xe",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Tự động chuyển hình ảnh sau mỗi 3 giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000); // Chuyển hình sau mỗi 3 giây

    return () => clearInterval(intervalId); // Dọn dẹp interval khi component bị hủy
  }, []);

  return (
    <section
      id="description"
      className="section bg-gradient-to-r from-blue-50 to-blue-100 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Custom Tailwind Carousel */}
            <div className="relative">
              <div className="carousel-item overflow-hidden">
                {/* Thêm hiệu ứng fade */}
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="d-block w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: 1,
                    transition: "opacity 3s ease-in-out",
                  }}
                  loading="lazy" // Lazy loading for better performance
                />
              </div>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-5 p-2 rounded-full"
                onClick={goToPrev}
              >
                &#8592;
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-5 p-2 rounded-full"
                onClick={goToNext}
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Nội dung giới thiệu */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Học Lái Xe Uy Tín Tại TP.HCM Cùng Chung
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Chào bạn! Tôi là Trịnh Thành Chung, một thầy giáo dạy lái xe với
              hơn 15 năm kinh nghiệm, hiện đang giảng dạy tại Trung tâm đào tạo
              lái xe Tiến Thành tại TP.HCM. Chúng tôi cam kết mang đến cho bạn
              những khóa học lái xe ô tô và xe máy chất lượng, với đội ngũ giảng
              viên tận tâm và giàu kinh nghiệm.
            </p>

            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <span className="ml-3">
                  Hướng dẫn tận tình, phù hợp với mọi trình độ học viên.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="ml-3">
                  Xe tập lái đời mới, an toàn và đầy đủ tiện nghi.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="ml-3">
                  Lịch học linh hoạt, sắp xếp theo nhu cầu của học viên, đặc
                  biệt là cho học viên bận rộn tại TP.HCM.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="ml-3">
                  Hỗ trợ thi bằng lái với tỷ lệ đậu cao tại TP.HCM, giúp bạn đạt
                  kết quả thi tốt nhất.
                </span>
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Liên hệ tư vấn dạy lái xe tại TP.HCM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
