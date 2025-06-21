import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLinkImage, SERVER } from "../../util";
import { Button } from "antd";
import GioiThieuModal from "./GioiThieuModal";
import { EditOutlined } from "@ant-design/icons";

const GioiThieu = ({ isLogin }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData("ve-chung-toi");
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
    <div className="lg:py-30 py-10">
      {isLogin && (
        <div className="container mx-auto text-center">
          <Button danger block size="large" onClick={() => setShowModal(true)}>
            <EditOutlined /> Chỉnh sửa Về chúng tôi
          </Button>
          {showModal && (
            <GioiThieuModal
              isOpen={true}
              onClose={() => setShowModal(false)}
              data={data}
              fetchData={() => fetchData("ve-chung-toi")}
            />
          )}
        </div>
      )}
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
        <div className="relative">
          <div className="absolute lg:scale-100 md:scale-[0.8] scale-[0.6] top-10 bg-[var(--primary-color)] text-white w-48 h-48 flex justify-center items-center flex-col rounded-2xl gap-2">
            <div className="text-5xl font-bold">{data?.year}</div>
            <div>{data?.yearSub}</div>
          </div>
          <div className="pl-16 pr-16">
            <img src={getLinkImage(data?.background)} className="" alt="" />
          </div>
          <div className="absolute bottom-10 right-0 lg:scale-100 md:scale-[0.8] scale-[0.6]">
            <img src={getLinkImage(data?.backgroundSub)} className="w-40" alt="" />
          </div>
        </div>
        <div className="text-justify">
          <div className="font-bold tracking-widest mb-4 uppercase">{data?.title}</div>
          <div className="font-bold mb-4 uppercase lg:text-4xl text-2xl text-left lg:leading-12 leading-8 text-[var(--primary-color)]">
            {data?.name}
          </div>
          <div className="flex gap-6  items-center">
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </div>
          <div className="text-nowrap flex flex-col gap-3 mt-6">
            {data?.checkList.map((i) => (
              <div className="flex gap-2 items-center" key={i}>
                <FontAwesomeIcon icon={faCheckCircle} className="" />
                <span>{i}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center  mt-6 gap-10 text-nowrap flex-wrap">
            <div className="flex gap-4">
              <button className="bg-[var(--primary-color)] w-14 h-14 rounded-xl flex justify-center items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-2xl" />
              </button>
              <div>
                <div>{data?.phoneText}</div>
                <div className="font-bold text-lg">{data?.phoneNumber}</div>
              </div>
            </div>
            <div style={{ borderLeft: "1px solid #dfdfdf", height: 56 }}></div>
            <div className="text-3xl " style={{ fontFamily: "'Great Vibes'" }}>
              {data?.ceo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
