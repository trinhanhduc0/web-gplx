import React, { useState } from "react";
import DrivingTheoryModal from "../DriverTheoryModel/DriverTheoryModel";

// Card Component
const InfoCard = ({ title, description, link, buttonLabel, onClick }) => (
  <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
    <p className="text-gray-700 mb-6">{description}</p>
    {link ? (
      <a
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {buttonLabel}
      </a>
    ) : (
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    )}
  </div>
);

function DocumentSection() {
  const [isOpenTips, setIsOpenTips] = useState(false);

  return (
    <>
      <section
        id="document"
        className="section bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 py-16"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-blue-950">
          {/* Title and Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 animate-fadeInUp">
              Tài Liệu Lái Xe Hữu Ích
            </h2>
            <p className="text-lg text-gray-600">
              Tìm hiểu các tài liệu ôn thi lý thuyết và hướng dẫn sát hạch lái
              xe để chuẩn bị tốt nhất cho kỳ thi của bạn.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <InfoCard
              title="Hướng Dẫn Thi Sát Hạch Lái Xe"
              description="Xem chi tiết các bước chuẩn bị cho kỳ thi sát hạch lái xe, đảm bảo thành công trong kỳ thi."
              link="https://xaydungchinhsach.chinhphu.vn/quy-trinh-sat-hach-lai-xe-cac-hang-b1-b2-c-d-va-e-tu-1-6-119240407080914643.htm"
              buttonLabel="Xem Ngay"
            />

            {/* Card 2 */}
            <InfoCard
              title="Lý Thuyết Lái Xe Cơ Bản"
              description="Nắm vững lý thuyết lái xe cơ bản và luật giao thông để tự tin hơn khi tham gia kỳ thi sát hạch."
              buttonLabel="Tìm Hiểu Thêm"
              onClick={() => setIsOpenTips(true)}
            />
          </div>

          {/* Ôn tập thi lý thuyết */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Ôn Tập Thi Thử Lý Thuyết Lái Xe
            </h3>
            <a
              target="_blank"
              href="https://gplx-web-mvc-production.up.railway.app/"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition inline-block animate-bounce"
            >
              Ôn Tập Tại Đây
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DrivingTheoryModal
        showModal={isOpenTips}
        setIsOpenTips={setIsOpenTips}
      />
    </>
  );
}

export default DocumentSection;
