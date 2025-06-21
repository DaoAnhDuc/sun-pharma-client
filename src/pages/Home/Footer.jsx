import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faEnvelope,
  faLink,
  faLocationDot,
  faMobileScreen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { SERVER } from "../../util";
import FooterModal from "./FooterModal";
const Footer = ({ isLogin }) => {

  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    fetchData("footer");
    return () => { };
  }, []);

  const fetchData = async (value) => {
    try {
      const url = "/api/get-data?name=" + value;
      const res = await SERVER.API?.get(url);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className=" text-white relative lg:mt-40 mt-20">
        {isLogin && showModal && (
          <FooterModal
            isOpen={true}
            onClose={() => setShowModal(false)}
            data={data}
            fetchData={() => fetchData("footer")}
          />

        )}
        <div className="lg:mt-40 mt-0" style={{ backgroundImage: 'url("/images/footer.webp")', paddingTop: 80 }}>
          <div className="container mx-auto">
            {
              isLogin && <div className="mx-auto container mt-10">
                <Button block type="primary" onClick={() => {
                  setShowModal(true)
                }}>Chỉnh sửa</Button>
              </div>
            }
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 p-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faBuilding} /> {data?.cty}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLocationDot} /> {data?.address}
                </div>
                <div>
                  <FontAwesomeIcon icon={faMobileScreen} /> {data?.phone}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPhone} /> {data?.call}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} /> {data?.email}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLink} /> {data?.web}
                </div>
              </div>
              <div className="col-span-2">
                <div className="mt-10 mb-6" style={{ borderBottom: "1px solid #333" }}></div>
                <div className="text-2xl font-bold">{data?.title}</div>
                <div className="flex gap-4 mt-2">
                  <Link
                    to={data?.facebook}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    to={data?.youtube}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-800 transition"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
                <div className="mt-6">
                  <img src="/images/pay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #333" }}>
            <div className="container mx-auto py-3 px-2 text-center">{data?.copyright}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
