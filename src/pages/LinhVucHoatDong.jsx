import React from "react";
import data from '../data/linh-vuc-hoat-dong.json'
const LinhVucHoatDong = () => {
  return (
    <div className="py-20 pb-10">
      <div className="container mx-auto">
        <div className="font-bold text-2xl mb-4 uppercase tracking-widest">Lĩnh vực hoạt động</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {
            data.data.map(i => (
              <div className="relative">
                <img src={i.img} alt="" className="w-full  h-96 rounded-xl object-cover" />
                <div className="absolute bottom-3 left-3 w-1/2 bg-white py-4 px-6 rounded-xl">
                  <div className="font-bold text-xl">{i.title}</div>
                  <div className="mt-1 text-gray-500">{i.description}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LinhVucHoatDong;
