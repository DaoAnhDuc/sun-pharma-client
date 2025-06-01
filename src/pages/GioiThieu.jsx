import React from "react";
import data from "../data/gioi-thieu.json";
import { Button } from "antd";
const GioiThieu = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-2">
        <div className="text-justify">
          <div className="font-bold text-2xl mb-4">{data.title}</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          <button className="mt-4 rounded-none border border-gray-700 px-4 py-1 cursor-pointer">Xem thêm</button>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((i, index) => (
              <div className="w-full h-52 overflow-hidden">
                <img
                  key={index}
                  src={i}
                  alt={`Image ${index + 1}`}
                  className="w-full h-52 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
