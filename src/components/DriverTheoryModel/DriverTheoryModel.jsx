import React, { useEffect, useState } from "react";
import { Modal, Tabs, Collapse, Button, Table } from "antd";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const DrivingTheoryModal = ({ showModal, setIsOpenTips }) => {
  const [isModalVisible, setIsModalVisible] = useState(showModal);

  useEffect(() => {
    setIsModalVisible(showModal);
  }, [showModal]);

  const handleOk = () => {
    setIsModalVisible(false);
    if (setIsOpenTips) {
      setIsOpenTips(false); // Optionally close the modal from parent
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (setIsOpenTips) {
      setIsOpenTips(false); // Optionally close the modal from parent
    }
  };

  const speedLimitColumns = [
    {
      title: "Loại xe cơ giới đường bộ",
      dataIndex: "vehicleType",
      key: "vehicleType",
    },
    {
      title: "Đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên",
      dataIndex: "multiLane",
      key: "multiLane",
    },
    {
      title: "Đường hai chiều; đường một chiều có một làn xe cơ giới",
      dataIndex: "singleLane",
      key: "singleLane",
    },
  ];

  const speedLimitData = [
    {
      key: "1",
      vehicleType:
        "Các phương tiện xe cơ giới, trừ xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự",
      multiLane: "60",
      singleLane: "50",
    },
  ];

  return (
    <Modal
      title="Mẹo Lý Thuyết Học Lái Xe"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      footer={null}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Khái Niệm Cơ Bản" key="1">
          <Collapse accordion>
            <Panel header="Phần đường xe chạy" key="1">
              <p>
                Là phần của đường bộ được sử dụng cho các phương tiện giao thông
                qua lại.
              </p>
            </Panel>
            <Panel header="Làn đường" key="2">
              <p>Chia theo chiều dọc, có bề rộng đủ cho xe chạy an toàn.</p>
            </Panel>
            <Panel header="Khổ giới hạn đường bộ" key="3">
              <p>Chiều cao, chiều rộng, hàng hóa xếp trên xe.</p>
            </Panel>
            <Panel header="Dải phân cách" key="4">
              <p>
                Phân chia phần đường xe cơ giới, xe thô sơ. Gồm hai loại: cố
                định và di động.
              </p>
            </Panel>
            <Panel header="Người lái xe" key="5">
              <p>Là người điều khiển xe cơ giới.</p>
            </Panel>
            <Panel header="Đường ưu tiên" key="6">
              <p>Được các phương tiện nhường đường.</p>
            </Panel>
            <Panel header="Phương tiện giao thông cơ giới đường bộ" key="7">
              <p>Kể cả xe máy điện, các loại xe tương tự.</p>
            </Panel>
            <Panel header="Phương tiện giao thông thô sơ đường bộ" key="8">
              <p>Kể cả xe đạp máy, các loại xe tương tự.</p>
            </Panel>
            <Panel header="Phương tiện tham gia giao thông đường bộ" key="9">
              <p>Cơ giới, thô sơ, xe máy chuyên dùng.</p>
            </Panel>
            <Panel
              header="Người điều khiển phương tiện tham gia giao thông"
              key="10"
            >
              <p>Người điều khiển xe cơ giới, xe thô sơ, xe máy chuyên dùng.</p>
            </Panel>
            <Panel header="Người tham gia giao thông" key="11">
              <ul>
                <li>Người sử dụng phương tiện.</li>
                <li>Dẫn dắt súc vật, người đi bộ.</li>
              </ul>
            </Panel>
            <Panel header="Người điều khiển giao thông" key="12">
              <ul>
                <li>Cảnh sát giao thông.</li>
                <li>Người được giao nhiệm vụ hướng dẫn giao thông.</li>
              </ul>
            </Panel>
            <Panel header="Dừng xe" key="13">
              <p>Đứng yên tạm thời.</p>
            </Panel>
            <Panel header="Đổ xe" key="14">
              <p>Đứng yên không giới hạn thời gian.</p>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Quy Tắc Giao Thông" key="2">
          <Collapse accordion>
            <Panel header="Hiệu lệnh của người điều khiển giao thông" key="1">
              <ul>
                <li>Tay giơ thẳng đứng: tất cả dừng lại.</li>
                <li>
                  Hai tay hoặc một tay giơ ngang: trước sau dừng lại, trái phải
                  được đi.
                </li>
              </ul>
            </Panel>
            <Panel header="Sử dụng GPLX đã khai báo mất" key="2">
              <p>Bị tước GPLX 5 năm.</p>
            </Panel>
            <Panel header="Quy định trong đô thị và khu đông dân cư" key="3">
              <ul>
                <li>Không được bấm còi từ 22 giờ tối đến 5 giờ sáng.</li>
                <li>Không được sử dụng đèn chiếu xa.</li>
                <li>
                  Chỉ được báo hiệu xin vượt bằng đèn từ 22 giờ đến 5 giờ sáng.
                </li>
                <li>
                  Chỉ được quay đầu xe nơi đường giao nhau, nơi có biển báo quay
                  đầu xe.
                </li>
              </ul>
            </Panel>
            <Panel header="Nhường đường tại nơi giao nhau" key="4">
              <ul>
                <li>
                  Không có biển báo hiệu đi theo vòng xuyến nhường đường bên
                  phải.
                </li>
                <li>
                  Có biển báo hiệu đi theo vòng xuyến nhường đường bên trái.
                </li>
              </ul>
            </Panel>
            <Panel
              header="Xe quá tải trọng, quá khổ khi lưu thông trên đường"
              key="5"
            >
              <p>Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép.</p>
            </Panel>
            <Panel
              header="Đỗ xe ô tô sát lề đường hè phố phái bên phải"
              key="6"
            >
              <ul>
                <li>Cách lề, hè phố không quá 0.25 m.</li>
                <li>Cách xe ô tô đang đỗ phía bên kia đường tối thiểu 20m.</li>
              </ul>
            </Panel>
            <Panel header="Quy định về vạch kẻ đường" key="7">
              <ul>
                <li>
                  Vạch nét liền không được đè vạch, vạch nét đứt được đè vạch.
                </li>
                <li>
                  Vạch màu vàng phân chia các làn xe ngược chiều; vạch màu trắng
                  phân chia các làn xe chạy cùng chiều.
                </li>
              </ul>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Tốc Độ và Khoảng Cách" key="3">
          <h3>
            Tốc độ tối đa cho phép trong khu vực đông dân cư (trừ đường cao
            tốc):
          </h3>
          <Table
            columns={speedLimitColumns}
            dataSource={speedLimitData}
            pagination={false}
          />
          <h3>
            Tốc độ tối đa cho phép ngoài khu vực đông dân cư (trừ đường cao
            tốc):
          </h3>
          <p>Xem bảng chi tiết trong tài liệu gốc.</p>
          <h3>Khoảng cách an toàn:</h3>
          <p>Xem bảng chi tiết trong tài liệu gốc.</p>
        </TabPane>
        <TabPane tab="Hoạt Động Vận Tải Đường Bộ" key="4">
          <Collapse accordion>
            <Panel header="Thời gian làm việc của người lái xe ô tô" key="1">
              <p>Không quá 10h trên ngày, không lái liên tục quá 4h.</p>
            </Panel>
            <Panel header="Quyền và nghĩa vụ của hành khách" key="2">
              <p>Được miễn phí cước hành lý ≤ 20 kg.</p>
            </Panel>
            <Panel header="Hàng siêu trường, siêu trọng" key="3">
              <p>
                Kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng
                không thể tháo rời được.
              </p>
            </Panel>
            <Panel header="Giấy phép lái xe" key="4">
              <p>Chi tiết về các hạng giấy phép lái xe từ A1 đến FE.</p>
            </Panel>
            <Panel header="Tuổi sức khỏe của người lái xe" key="5">
              <p>
                Chi tiết về độ tuổi tối thiểu và tối đa cho các loại xe khác
                nhau.
              </p>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Cấu Tạo và Công Dụng của Động Cơ Ô Tô" key="5">
          <Collapse accordion>
            <Panel header="Yêu cầu kính chắn gió ô tô" key="1">
              <p>Loại kính an toàn.</p>
            </Panel>
            <Panel header="Âm lượng còi điện lắp trên ô tô" key="2">
              <p>Từ 90-115 dB.</p>
            </Panel>
            <Panel header="Nguyên nhân làm động cơ diezen không nổ" key="3">
              <p>
                Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên
                liệu lẫn không khí và tạp chất.
              </p>
            </Panel>
            <Panel
              header="Yêu cầu về an toàn kỹ thuật đối với dây đai an toàn lắp trên ô tô"
              key="4"
            >
              <p>Cơ cấu hãm giữ chặt dây khi giật đột ngột.</p>
            </Panel>
            <Panel header="Động cơ 4 kỳ và 2 kỳ" key="5">
              <p>4 kỳ: 4 hành trình. 2 kỳ: 2 hành trình.</p>
            </Panel>
            <Panel header="Công dụng của các bộ phận ô tô" key="6">
              <ul>
                <li>Dầu bôi trơn: bôi trơn cho các chi tiết của động cơ.</li>
                <li>Động cơ ô tô: nhiệt năng biến thành cơ năng.</li>
                <li>Hệ thống truyền lực: truyền mô men quay.</li>
                <li>Ly hợp: truyền hoặc ngắt truyền động.</li>
                <li>Hộp số: đảm bảo cho ô tô chuyển động lùi.</li>
                <li>Hệ thống lái: thay đổi hướng.</li>
                <li>Hệ thống phanh: giảm tốc độ.</li>
                <li>Ắc quy: tích trữ điện năng.</li>
                <li>Máy phát điện: phát điện năng.</li>
              </ul>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Kỹ Thuật Lái Xe Ô Tô" key="6">
          <Collapse accordion>
            <Panel header="Khởi hành ô tô trên đường bằng" key="1">
              <p>Đạp ly hợp hết hành trình, vào số 1.</p>
            </Panel>
            <Panel header="Khởi hành ô tô có số tự động" key="2">
              <p>Đạp phanh chân hết hành trình.</p>
            </Panel>
            <Panel
              header="Sử dụng chân khi điều khiển xe ô tô số tự động"
              key="3"
            >
              <p>Không sử dụng chân trái.</p>
            </Panel>
            <Panel header="Nhả phanh tay" key="4">
              <p>Tay phải bóp khóa hãm.</p>
            </Panel>
            <Panel header="Điều khiển xe trên đường vòng" key="5">
              <p>Giảm tốc độ, về số thấp.</p>
            </Panel>
            <Panel header="Điều khiển xe ô tô trên đường trơn" key="6">
              <p>Không đánh lái ngoặt và phanh gấp.</p>
            </Panel>
            <Panel header="Điều khiển ô tô gặp mưa to hoặc sương mù" key="7">
              <p>Bật đèn chiếu gần và đèn vàng, đi chậm.</p>
            </Panel>
            <Panel header="Điều khiển ô tô trong trời mưa" key="8">
              <p>Giảm tốc độ, quan sát, không phanh gấp, bật đèn chiếu gần.</p>
            </Panel>
            <Panel header="Điều khiển ô tô qua đoạn đường ngập nước" key="9">
              <p>Ước lượng độ ngập nước, về số thấp.</p>
            </Panel>
            <Panel header="Xuống dốc, muốn dừng xe" key="10">
              <p>Về số 1, đạp nửa ly hợp cho xe đến chỗ dừng.</p>
            </Panel>
            <Panel
              header="Điều khiển ô tô xuống đường dốc dài, độ dốc cao"
              key="11"
            >
              <p>Về số thấp.</p>
            </Panel>
            <Panel header="Điều khiển ô tô lên dốc cao" key="12">
              <p>Về số thấp, đến gần đỉnh dốc đi chậm.</p>
            </Panel>
            <Panel
              header="Điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau"
              key="13"
            >
              <p>
                Có tín hiệu rẽ trái, cho xe chạy chậm tới phía trong của tâm
                đường giao nhau.
              </p>
            </Panel>
            <Panel
              header="Điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau"
              key="14"
            >
              <p>Điều khiển xe bám sát phía phải, giảm tốc độ.</p>
            </Panel>
            <Panel header="Quay đầu xe ở nơi nguy hiểm" key="15">
              <p>Đưa đầu xe về phía nguy hiểm, đuôi xe về phía an toàn.</p>
            </Panel>
            <Panel
              header="Điều khiển ô tô tới gần xe chạy ngược chiều vào ban đêm"
              key="16"
            >
              <p>Đèn chiếu xa sang đèn chiếu gần, nhìn chếch sang phía phải.</p>
            </Panel>
            <Panel header="Điều khiển xe qua đường sắt" key="17">
              <p>Dừng xe tạm thời, quan sát.</p>
            </Panel>
            <Panel header="Điều khiển xe ô tô tự đổ" key="18">
              <ul>
                <li>Không lấy lái gấp và không phanh gấp.</li>
                <li>
                  Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng.
                </li>
              </ul>
            </Panel>
            <Panel header="Điều khiển tăng số và giảm số" key="19">
              <p>Không được nhìn xuống buồng lái.</p>
            </Panel>
            <Panel
              header="Đỗ xe ô tô sát lề đường bên phải, khi mở cửa xe"
              key="20"
            >
              <p>
                Quan sát tình hình giao thông phía trước, sau, mở hé cánh cửa.
              </p>
            </Panel>
            <Panel
              header="Kỹ thuật giữ thăng bằng khi điều khiển xe mô tô trên đường gồ ghề"
              key="21"
            >
              <p>
                Đứng thẳng trên giá gác chân, hơi gập đầu gối và khủy tay, đi
                chậm.
              </p>
            </Panel>
            <Panel
              header="Để đạt hiệu quả phanh cao nhất đối với xe mô tô"
              key="22"
            >
              <p>Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước.</p>
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane tab="Biển Báo và Sa Hình" key="7">
          <h3>Thứ tự các xe từ nhỏ đến lớn:</h3>
          <p>
            Ô tô con =&gt; khách =&gt; tải =&gt; máy kéo =&gt; ô tô kéo móc
            =&gt; máy kéo kéo móc.
          </p>
          <ul>
            <li>Cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ.</li>
            <li>
              Cấm 2 bánh không cấm 4 bánh, cấm 4 bánh cũng không cấm 2 bánh.
            </li>
          </ul>
          <h3>Nguyên tắc xử lý sa hình:</h3>
          <p>Theo thứ tự ưu tiên giảm dần</p>
          <ol>
            <li>Xe đã vô ngã tư.</li>
            <li>Xe ưu tiên (hỏa, sự - công, thương).</li>
            <li>Theo tín hiệu đèn giao thông.</li>
            <li>Theo đường ưu tiên.</li>
            <li>
              Tại ngã tư các tuyến đường cùng cấp : xe bên phải trống =&gt; xe
              rẽ phải =&gt; xe đi thẳng =&gt; xe rẽ trái.
            </li>
          </ol>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default DrivingTheoryModal;
