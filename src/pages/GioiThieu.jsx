import data from "../data/gioi-thieu.json";
const GioiThieu = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 p-2">
        <div>
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((i, index) => (
              <div className="w-full h-52 overflow-hidden">
                <img key={index} src={i} alt={`Image ${index + 1}`} className="w-full h-52 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-justify">
          <div className="font-bold tracking-widest mb-4 uppercase text-lg">{data.title}</div>
          <div className="font-bold mb-4 uppercase text-3xl text-left leading-12">{data.name}</div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
          
          <button className="mt-4 rounded border border-gray-700 px-4 py-1 cursor-pointer hover:text-white hover:bg-[var(--primary-color)]">Xem thêm</button>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
