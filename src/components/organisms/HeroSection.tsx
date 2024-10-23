import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      <Image
        src="/assets/heroBackground.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      <div className="absolute right-8 bottom-8 md:top-56 md:right-16 z-10">
        <a
          href="#"
          className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full shadow-lg"
        >
          <span className="text-sm md:text-base">제작</span>
          <span className="text-sm md:text-base">문의하기</span>
          <span className="mt-1">
            <svg
              width="15"
              height="14"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <g clipPath="url(#clip0_1_1309)">
                  <path
                    d="M14.3801 20.561V17.8504H5.45003L21.1543 2.14608L19.2441 0.23584L3.53978 15.9413V7.01132H0.829102V20.5623H14.3801V20.561Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_1309">
                  <rect
                    width="20.3252"
                    height="20.3252"
                    fill="white"
                    transform="translate(0.829102 0.23584)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>
      </div>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </section>
  );
};

export default HeroSection;
