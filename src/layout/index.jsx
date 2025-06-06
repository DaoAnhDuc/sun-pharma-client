import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet } from "react-router";

const LayoutSunPharma = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-[var(--primary-color)]">
      <div className="bg-[#fff] sticky top-0 left-0 w-full z-40">
        <div className="container mx-auto h-20 flex justify-between items-center">
          <Link to={"/"}>
            <img src="/images/logo.jpg" className="h-20" alt="" />
          </Link>
          <div className="">
            <ul className="lg:flex hidden gap-10 font-bold uppercase">
              <Link to={"/"} className="hover:text-blue-500">
                Trang chủ
              </Link>
              <Link to={"/"} className="hover:text-blue-500">
                Giới thiệu <FontAwesomeIcon icon={faSortDown} className="mb-1" />
              </Link>
              <Link to={"/field"} className="hover:text-blue-500">
                Lĩnh vực <FontAwesomeIcon icon={faSortDown} className="mb-1" />
              </Link>
              <Link to={"/recruitment-information"} className="hover:text-blue-500">
                Thông tin tuyển dụng
              </Link>
              <Link to={"/contact"} className="hover:text-blue-500">
                Liên hệ
              </Link>
            </ul>
          </div>
          <div className="lg:hidden block">
            <button className="cursor-pointer px-2 py-2" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={faBars} className="text-[#BA0000] text-2xl" />
            </button>
          </div>
          {open && (
            <div
              className="absolute top-20 left-0 z-20 w-full h-fit bg-white text-black flex flex-col px-2"
              style={{ borderTop: "1px solid #dfdfdf" }}
              onClick={() => setOpen(false)}
            >
              <Link to={"/"}>
                <div className="py-2 px-4" style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Trang chủ
                </div>
              </Link>
              <Link to={"/introduce"}>
                <div className="py-2 px-4" style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Giới thiệu
                </div>
              </Link>
              <Link to={"/field"}>
                <div className="py-2 px-4" style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Lĩnh vực
                </div>
              </Link>
              <Link to={"/recruitment-information"}>
                <div className="py-2 px-4" style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Thông tin tuyển dụng
                </div>
              </Link>
              <Link to={"/contact"}>
                <div className="py-2 px-4" style={{ borderBottom: "1px solid #dfdfdf" }}>
                  Liên hệ
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutSunPharma;
