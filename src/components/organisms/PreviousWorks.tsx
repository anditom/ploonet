import React from "react";
import Image from "next/image";

const PreviousWorks: React.FC = () => {
  const images = [
    "/assets/PreviousWorks/pw1.png",
    "/assets/PreviousWorks/pw2.png",
    "/assets/PreviousWorks/pw3.png",
    "/assets/PreviousWorks/pw4.png",
    "/assets/PreviousWorks/pw5.png",
    "/assets/PreviousWorks/pw6.png",
    "/assets/PreviousWorks/pw7.png",
    "/assets/PreviousWorks/pw8.png",
    "/assets/PreviousWorks/pw9.png",
    "/assets/PreviousWorks/pw10.png",
    "/assets/PreviousWorks/pw11.png",
    "/assets/PreviousWorks/pw12.png",
  ];

  return (
    <section className="bg-black text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">PREVIOUS WORKS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Previous work ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousWorks;
