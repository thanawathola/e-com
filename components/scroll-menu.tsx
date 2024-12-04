import React from "react";
import ChevronRight from "./r-chevron";

const ScrollableMenu: React.FC = () => {
  return (
    <div className="col-span-2 overflow-y-scroll border border-gray-300 p-4 bg-gray-900 text-white h-[450px]">
      <div className="py-2 px-3 m-2 border-b border-gray-600 flex items-center gap-2">
        <div className="border rounded-full bg-white">
          <ChevronRight />
        </div>
        <div>Gaming Gear</div>
      </div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Playstation</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Xbox</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Joy Stick</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Speaker </div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Keyboard</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Mouse</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Mouse Pad</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Headphone</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">In-ear</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Microphone</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Gaming Chair</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">Glasses</div>
      <div className="py-2 px-3 m-2 border-b border-gray-600">PC Desk</div>
    </div>
  );
};

export default ScrollableMenu;
