import { BuildOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faLocationDot, faMobileScreen, faPhone, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 p-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faBuilding} /> Công Ty Cổ Phần Xuất Nhập Khẩu Dược Mặt Trời
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} /> Số 31, Biệt Thự 4, Bán Đảo Linh Đàm, Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội.
              </div>
              <div>
                <FontAwesomeIcon icon={faMobileScreen} /> 0975 611 156
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faPhone} /> (+84) 2436417714
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} /> info@sunjsc.vn
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLink} /> https://www.sunjsc.vn
              </div>
            </div>
            <div className="col-span-2">
              <div className="mt-10 mb-6" style={{ borderBottom: "1px solid #333" }}></div>
              <div className="text-2xl font-bold">Kết nối</div>
              <div className="flex gap-4 mt-2">
                <Link
                  to={"https://www.facebook.com/sunpharmaceuticalvn"}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link
                  to={"/"}
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-800 transition"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
              <div className="mt-6">
                <img src="https://sunjsc.vn/templates/frontend/resources/img/upload/pay.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white" style={{ borderTop: "1px solid #333" }}>
        <div className="container mx-auto py-3 px-2">© Bản quyền thuộc về Công ty Cổ phần Xuất nhập khẩu Dược Mặt trời. Mọi quyền được bảo lưu.</div>
      </div>
    </>
  );
};

export default Footer;
