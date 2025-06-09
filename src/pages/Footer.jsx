import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faLink, faLocationDot, faMobileScreen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <div className=" text-white relative lg:mt-40 mt-20">
        <div className="container  p-4 rounded-2xl mx-auto flex bg-white text-[var(--primary-color)] flex-wrap" style={{boxShadow: "30px 0px 60px rgba(128, 128, 128, 0.1)" }}>
          <div className="flex-1 min-w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.713402963729!2d105.8303396111245!3d20.964021480588478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac54c262ce25%3A0x21e8589878d2c4fa!2zQsOhbiDEkOG6o28gTGluaCDEkMOgbSwgS2h1IMSRw7QgdGjhu4sgTGluaCDEkMOgbSwgSG_DoG5nIExp4buHdCwgSG_DoG5nIE1haSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1749220296900!5m2!1svi!2s"
              width="100%"
              height='100%'
              allowfullscreen=""
              loading="lazy"
              className=" rounded-2xl min-h-100"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-100 w-full p-12 flex flex-col gap-4">
            <div className="font-bold text-3xl uppercase tracking-widest">Liên hệ</div>
            <div> - - - - - - - - </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-3xl flex justify-center items-center">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="flex-1">
                <div className="text-[#5d666f]">Điện thoại</div>
                <div className="font-bold text-xl">(+84) 2436417714 | 0975 611 156</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-3xl flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="flex-1">
                <div className="text-[#5d666f]">Email</div>
                <div className="font-bold text-xl">info@invena.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-3xl flex justify-center items-center">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="flex-1">
                <div className="text-[#5d666f]">Địa chỉ</div>
                <div className="font-bold text-xl">Số 31, Biệt Thự 4, Bán Đảo Linh Đàm, Phường Hoàng Liệt, Quận Hoàng Mai, Hà Nội.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-40 mt-0" style={{ backgroundImage: 'url("https://html.themewant.com/invena/assets/images/footer/01.webp")', paddingTop: 80 }}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 p-2">
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
                  <Link to={"https://www.facebook.com/sunpharmaceuticalvn"} target="_blank" className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to={"/"} target="_blank" className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-800 transition">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
                <div className="mt-6">
                  <img src="https://sunjsc.vn/templates/frontend/resources/img/upload/pay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #333" }}>
            <div className="container mx-auto py-3 px-2 text-center">© Bản quyền thuộc về Công ty Cổ phần Xuất nhập khẩu Dược Mặt trời. Mọi quyền được bảo lưu.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
