// import React from "react";
// import { Carousel } from "antd";

// const images = [
//   { src: "/images/p1.jpg", width: 600, height: 600 },
//   { src: "/images/p2.jpg", width: 600, height: 600 },
//   { src: "/images/p3.jpg", width: 600, height: 600 },
//   { src: "/images/p4.jpg", width: 600, height: 600 },
//   { src: "/images/p5.jpg", width: 600, height: 600 },
//   { src: "/images/p6.jpg", width: 600, height: 600 },
//   { src: "/images/p7.jpg", width: 600, height: 600 },
//   { src: "/images/p8.jpg", width: 600, height: 600 },
//   { src: "/images/p9.jpg", width: 600, height: 600 },
//   { src: "/images/p10.jpg", width: 600, height: 600 },
//   { src: "/images/p11.jpg", width: 600, height: 600 },
//   { src: "/images/p12.jpg", width: 600, height: 600 },
//   { src: "/images/p13.jpg", width: 600, height: 600 },
//   { src: "/images/p14.jpg", width: 600, height: 600 },
//   { src: "/images/p15.jpg", width: 600, height: 600 },
// ];

// const CustomCarousel = () => {
//   return (
//     <Carousel dots={false} autoplay>
//       {images.map((image, index) => (
//         <div key={index} className="carousel-slide">
//           <img src={image.src} alt={`Slide ${index}`} />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default CustomCarousel;

import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const images = [
  { src: "/images/p1.jpg" },
  { src: "/images/p2.jpg" },
  { src: "/images/p3.jpg" },
  { src: "/images/p4.jpg" },
  { src: "/images/p5.jpg" },
  { src: "/images/p6.jpg" },
  { src: "/images/p7.jpg" },
  { src: "/images/p8.jpg" },
  { src: "/images/p9.jpg" },
  { src: "/images/p10.jpg" },
  { src: "/images/p11.jpg" },
  { src: "/images/p12.jpg" },
  { src: "/images/p13.jpg" },
  { src: "/images/p14.jpg" },
  { src: "/images/p15.jpg" },
];

const CustomCarousel: React.FC = () => {
  return (
    <div className="relative px-14">
      <Carousel dots={false} autoplay slidesToShow={4} arrows={true}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              className="w-full h-auto object-cover"
              src={image.src}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-black p-2 rounded-full shadow-md text-black text-4xl">
        <LeftOutlined />
      </button>
      
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-black p-2 rounded-full shadow-md text-black text-4xl">
        <RightOutlined />
      </button>
    </div>
  );
};

export default CustomCarousel;
