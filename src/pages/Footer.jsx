import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faLink, faLocationDot, faMobileScreen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { SERVER } from "../util";
import { toast } from "react-toastify";
const Footer = () => {
  const [data, setData] = useState(null);
  const [footer, setFooter] = useState(null)
  useEffect(() => {
    fetchData("lien-he", setData);
    fetchData("footer", setFooter);
    return () => {};
  }, []);

  const fetchData = async (value, setDataState) => {
    try {
      const url = "/get-data?name=" + value;
      const res = await SERVER.API?.post(url, { name: value });
      if (res.status === 200) {
        setDataState(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className=" text-white relative lg:mt-40 mt-20">
        <div className="container  p-4 rounded-2xl mx-auto flex bg-white text-[var(--primary-color)] flex-wrap" style={{ boxShadow: "30px 0px 60px rgba(128, 128, 128, 0.1)" }}>
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
        <div className="lg:mt-40 mt-0" style={{ backgroundImage: 'url("/images/footer.webp")', paddingTop: 80 }}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 p-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faBuilding} /> {footer?.cty}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLocationDot} /> {footer?.address}
                </div>
                <div>
                  <FontAwesomeIcon icon={faMobileScreen} /> {footer?.phone}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faPhone} /> {footer?.call}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} /> {footer?.email}
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLink} /> {footer?.web}
                </div>
              </div>
              <div className="col-span-2">
                <div className="mt-10 mb-6" style={{ borderBottom: "1px solid #333" }}></div>
                <div className="text-2xl font-bold">{footer?.title}</div>
                <div className="flex gap-4 mt-2">
                  <Link to={footer?.facebook} target="_blank" className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to={footer?.youtube} target="_blank" className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-800 transition">
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
            <div className="container mx-auto py-3 px-2 text-center">{footer?.copyright}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
