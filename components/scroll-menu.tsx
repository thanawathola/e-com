import React from 'react';

const ScrollableMenu: React.FC = () => {
  return (
    <div className="w-72 h-48 overflow-y-auto border border-gray-300 p-4 bg-gray-100">
      <div className='text-black p-2'>Gaming Gear</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 1</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 2</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 3</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 4</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 5</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 6</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 7</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 8</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 9</div>
      <div className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer text-black">Item 10</div>
    </div>
  );
};

export default ScrollableMenu;