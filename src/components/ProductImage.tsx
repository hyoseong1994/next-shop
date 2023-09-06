import React, { useState } from "react";
import Image from "next/image";

const ProductImage = ({ images, name }: { images: string[]; name: string }) => {
  const imageLength = images?.length || 0;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageLength - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageLength - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full h-40 md:h-48">
        <div
          className="flex transition-transform duration-300 ease-in-out transform"
          style={{
            width: `${imageLength * 100}%`,
            transform: `translateX(-${(100 / imageLength) * currentSlide}%)`,
          }}
        >
          {images?.map((image: string, index) => (
            <div key={`${name}_${index}`} className="w-full h-40 md:h-48">
              <Image
                src={image}
                alt={`${name}_${index}`}
                width={320}
                height={209}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductImage;
