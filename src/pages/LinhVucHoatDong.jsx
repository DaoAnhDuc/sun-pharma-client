import React from "react";
import data from "../data/linh-vuc-hoat-dong.json";
const LinhVucHoatDong = () => {
  return (
    <div className="py-30">
      <div className="container mx-auto p-4">
        <div className="font-bold text-4xl uppercase tracking-widest text-center ">Lĩnh vực hoạt động</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
          {data.data.map((i) => (
            <div className="relative rounded-xl" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}>
              <img src={i.img} alt="" className="w-full  h-96 rounded-xl object-cover" />
              <div className="absolute bottom-8 left-6 w-1/2 bg-white py-4 px-6 rounded-xl" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.16)" }}>
                <div className="font-semibold text-xl">{i.title}</div>
                <div className="mt-1 text-gray-500">{i.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinhVucHoatDong;
