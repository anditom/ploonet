"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a
          className="flex title-font font-medium text-white mb-4 md:mb-0"
          href="/"
        >
          <Image
            src="/PlooNetLogo.svg"
            alt="PlooNet Logo"
            width={124}
            height={20}
          />
        </a>

        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div
          className={
            "md:flex flex-grow items-center justify-between" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="navbar"
        >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <a className="mr-6 hover:text-gray-400" href="/">
              스튜디오
            </a>
            <a className="mr-6 hover:text-gray-400" href="/contact">
              워크센터
            </a>
            <a className="mr-6 hover:text-gray-400" href="/404">
              손비서
            </a>
            <a className="mr-6 hover:text-gray-400" href="/404">
              메타휴먼
            </a>
            <a className="mr-6 hover:text-gray-400" href="/404">
              영상제작소
            </a>
            <a className="mr-6 hover:text-gray-400" href="/404">
              공지사항
            </a>
            <a className="mr-6 hover:text-gray-400" href="/404">
              제휴문의
            </a>
          </nav>

          <div
            className="flex items-center space-x-4"
            style={{ paddingLeft: "200px" }}
          >
            <a className="hover:text-gray-400" href="/login">
              로그인
            </a>

            <div className="relative" style={{ paddingTop: "6px" }}>
              <button className="text-white hover:text-gray-400">
                <Image
                  src="/LanguageSelector.svg"
                  alt="PlooNet Logo"
                  width={34}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
