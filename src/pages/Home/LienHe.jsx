import {
  faEnvelope,
  faLocationDot,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SERVER } from '../../util';
import LienHeModal from "./LienHeModal";
const LienHe = ({ isLogin }) => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchData("lien-he");
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
    <div>
      {isLogin && showModal && (
        <LienHeModal
          isOpen={true}
          onClose={() => setShowModal(false)}
          data={data}
          fetchData={() => fetchData("lien-he")}
        />

      )}
      {
        isLogin && <div className="mx-auto container mt-10">
          <Button block type="primary" onClick={() => {
            setShowModal(true)
          }}>Chỉnh sửa</Button>
        </div>
      }
      <div
        className="container  p-4 rounded-2xl mx-auto flex bg-white text-[var(--primary-color)] flex-wrap"
        style={{ boxShadow: "30px 0px 60px rgba(128, 128, 128, 0.1)" }}
      >
        <div className="flex-1 min-w-100">
          <iframe
            src={data?.googleMap}
            width="100%"
            height="100%"
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
              <div className="text-[#5d666f]">{data?.phoneTitle}</div>
              <div className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: data?.phone }}></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="flex-1">
              <div className="text-[#5d666f]">{data?.emailTitle}</div>
              <div className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: data?.email }}></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="flex-1">
              <div className="text-[#5d666f]">{data?.addressTitle}</div>
              <div className="font-bold text-xl" dangerouslySetInnerHTML={{ __html: data?.address }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LienHe