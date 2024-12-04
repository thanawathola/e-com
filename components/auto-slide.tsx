import { Carousel } from "antd";
import Image from "next/image";

const images = [
  { src: "/images/repair1.jpg", width: 800, height: 600 },
  { src: "/images/speaker.jpg", width: 800, height: 600 },
  { src: "/images/repair3.jpg", width: 800, height: 600 },
];

const AutoSlideshow: React.FC = () => {
  return (
    <div className="col-span-8 auto-slide">
      <Carousel autoplay className="">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out `}
          >
            <div className="bg-black full-picture">
            <img src={image.src} alt={`Slide ${index}`}/>

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
  );
};

export default AutoSlideshow;
