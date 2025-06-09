import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/gioi-thieu.json";
import { faPhoneAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const GioiThieu = () => {
  return (
    <div className="lg:py-30 py-10">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
        <div className="relative">
          <div className="absolute lg:scale-100 md:scale-[0.8] scale-[0.6] top-10 bg-[var(--primary-color)] text-white w-48 h-48 flex justify-center items-center flex-col rounded-2xl gap-2">
            <div className="text-5xl font-bold">25+</div>
            <div>Year of experience</div>
          </div>
          <div className="pl-16 pr-16">
            <img src="https://html.themewant.com/invena/assets/images/about/04.webp" className="" alt="" />
          </div>
          <div className="absolute bottom-10 right-0 lg:scale-100 md:scale-[0.8] scale-[0.6]">
            <img src="https://html.themewant.com/invena/assets/images/about/05.webp" className="w-40" alt="" />
          </div>
        </div>
        <div className="text-justify">
          <div className="font-bold tracking-widest mb-4 uppercase">{data.title}</div>
          <div className="font-bold mb-4 uppercase lg:text-4xl text-2xl text-left lg:leading-12 leading-8 text-[var(--primary-color)]">{data.name}</div>
          <div className="flex gap-6  items-center">
            <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          </div>
          <div className="text-nowrap flex flex-col gap-3 mt-6">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="" />
              <span>24/7 Call Services Avilable</span>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="" />
              <span>Great Skilled Consultant</span>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="" />
              <span>Expert Team Members</span>
            </div>
          </div>
          <div className="flex items-center  mt-6 gap-10 text-nowrap flex-wrap">
            <div className="flex gap-4">
              <button className="bg-[var(--primary-color)] w-14 h-14 rounded-xl flex justify-center items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-2xl" />
              </button>
              <div>
                <div>Call us anytime</div>
                <div className="font-bold text-lg">+256 56778.5678</div>
              </div>
            </div>
            <div style={{ borderLeft: "1px solid #dfdfdf", height: 56 }}></div>
            <div className="text-3xl " style={{ fontFamily: "'Great Vibes'" }}>
              Nguyen Van A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
