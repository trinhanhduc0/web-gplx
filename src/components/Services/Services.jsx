import React, { useState } from "react";

const courses = [
  {
    title: "Thi Bằng Lái Xe A1, A2",
    description: "Đăng ký dễ dàng, thi ngay trong tuần.",
    details:
      "Khóa học cấp bằng lái xe máy A1, A2 được tổ chức với lịch thi linh động, phù hợp cho mọi đối tượng. Học viên được cung cấp tài liệu ôn tập chi tiết, hỗ trợ thực hành để đảm bảo tỷ lệ đậu cao nhất. Đội ngũ hướng dẫn viên giàu kinh nghiệm sẽ giúp bạn vượt qua kỳ thi một cách tự tin. Đăng ký ngay tại Trung tâm dạy lái xe uy tín để trải nghiệm dịch vụ học lái xe nhanh chóng và hiệu quả.",
  },
  {
    title: "Khóa Học Lái Xe Ô Tô B1, B2",
    description: "Dành cho người mới bắt đầu, đảm bảo thành thạo.",
    details:
      "Khóa học lái xe ô tô số sàn và số tự động B1, B2 phù hợp cho cả người mới bắt đầu hoặc muốn nâng cao kỹ năng lái xe. Chương trình bao gồm lý thuyết và thực hành với giáo viên tận tâm, xe tập đời mới. Học viên được hỗ trợ đưa đón miễn phí, sắp xếp lịch học linh động để đảm bảo tiến độ học tập. Học lái xe ô tô tại TP.HCM, uy tín, chất lượng, cam kết đậu kỳ thi với tỷ lệ cao.",
  },
  {
    title: "Khóa Lái Xe Hạng C",
    description: "Hướng tới nghề tài xế chuyên nghiệp.",
    details:
      "Khóa học hạng C dành cho học viên muốn điều khiển xe tải và xe chuyên dụng. Với đội ngũ giáo viên là các tài xế chuyên nghiệp, học viên sẽ được đào tạo toàn diện từ lý thuyết đến thực hành, đảm bảo đủ kỹ năng và tự tin tham gia vào ngành vận tải. Đào tạo lái xe chất lượng, giúp bạn trở thành tài xế chuyên nghiệp.",
  },
  {
    title: "Dịch Vụ Đổi Bằng Lái Quốc Tế",
    description: "Thủ tục nhanh gọn, hỗ trợ toàn diện.",
    details:
      "Dịch vụ đổi bằng lái quốc tế dành cho những ai có nhu cầu lái xe tại nước ngoài. Chúng tôi hỗ trợ quy trình từ A-Z, giúp bạn chuyển đổi bằng lái trong thời gian ngắn nhất với chi phí hợp lý. Đội ngũ chuyên viên tận tâm đảm bảo mọi thủ tục được hoàn thiện đúng quy định. Liên hệ ngay với chúng tôi để được tư vấn về dịch vụ đổi bằng lái xe quốc tế.",
  },
  {
    title: "Bổ Túc Tay Lái Số Sàn, Số Tự Động",
    description: "Nâng cao kỹ năng, tự tin điều khiển mọi loại xe.",
    details:
      "Dịch vụ bổ túc tay lái dành cho học viên cần nâng cao kỹ năng lái xe thực tế trên các dòng xe số sàn hoặc số tự động. Học viên được hướng dẫn trực tiếp bởi giáo viên giàu kinh nghiệm trong các tình huống giao thông thực tế, đảm bảo sự an toàn và tự tin khi điều khiển xe. Khóa học lái xe bổ túc giúp bạn nâng cao kỹ năng lái xe nhanh chóng và hiệu quả.",
  },
  {
    title: "Cho Thuê Xe 4-7 Chỗ và Xe Tải 3,5 Tấn",
    description: "Xe đời mới, phục vụ linh hoạt mọi nhu cầu.",
    details:
      "Chúng tôi cung cấp dịch vụ cho thuê xe 4-7 chỗ và xe tải 3,5 tấn với mức giá hợp lý, xe đời mới, đảm bảo an toàn và tiện nghi. Dịch vụ phù hợp cho nhu cầu cá nhân, doanh nghiệp hoặc vận chuyển hàng hóa. Đội ngũ hỗ trợ luôn sẵn sàng để tư vấn và đáp ứng mọi yêu cầu. Hãy liên hệ để đặt xe ngay hôm nay với dịch vụ cho thuê xe uy tín, chất lượng.",
  },
];

const ServicesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section id="services" className="section bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-950">
          Dịch Vụ Dạy Lái Xe Chất Lượng Tại TP.HCM
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Trung tâm dạy lái xe Tiến Thành cung cấp các khóa học lái xe ô tô và
          xe máy với giáo viên chuyên nghiệp, xe tập đời mới, đảm bảo tỷ lệ đậu
          cao. Đăng ký ngay để học lái xe hiệu quả.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-950">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
                onClick={() => handleViewDetails(course)}
              >
                Xem thêm
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-slate-50 text-gray-500 hover:text-gray-800 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-blue-950">
              {selectedCourse.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedCourse.details}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300"
              onClick={closeModal}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
