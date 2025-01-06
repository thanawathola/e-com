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

import { Carousel } from "antd";
import React from "react";

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
    <div className="auto-slide  full-picture2">
      <Carousel autoplay slidesToShow={4}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out `}
          >
            <div className="">
              <img src={image.src} alt={`Slide ${index}`} />
            </div>
            {/* <h1>Hello</h1> */}
            {/* <Image
                // fill
                src={image.src}
                alt={`Slide ${index}`}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
              /> */}
          </div>
        ))}
      </Carousel>
    </div>
    // <div className="auto-slide">
    //   <Carousel autoplay slidesToShow={4} >
    //     {images.map((image, index) => (
    //       <div key={index} className="">
    //         <img

    //           src={image.src}
    //           alt={`Slide ${index}`}
    //         />
    //       </div>
    //     ))}
    //   </Carousel>

    // </div>
  );
};

export default CustomCarousel;
