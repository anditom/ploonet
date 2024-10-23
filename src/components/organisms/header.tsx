"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium text-white mb-4 md:mb-0"
        >
          <Image
            src="/PlooNetLogo.svg"
            alt="PlooNet Logo"
            width={124}
            height={20}
          />
        </Link>

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
          className={`${
            navbarOpen ? "flex" : "hidden"
          } md:flex flex-grow items-center justify-between`}
          id="navbar"
        >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <Link href="/" className="mr-6 hover:text-gray-400">
              스튜디오
            </Link>
            <Link href="/contact" className="mr-6 hover:text-gray-400">
              워크센터
            </Link>
            <Link href="/404" className="mr-6 hover:text-gray-400">
              손비서
            </Link>
            <Link href="/404" className="mr-6 hover:text-gray-400">
              메타휴먼
            </Link>
            <Link href="/404" className="mr-6 hover:text-gray-400">
              영상제작소
            </Link>
            <Link href="/404" className="mr-6 hover:text-gray-400">
              공지사항
            </Link>
            <Link href="/404" className="mr-6 hover:text-gray-400">
              제휴문의
            </Link>
          </nav>

          <div className="flex items-center space-x-4 pl-0 md:pl-5">
            <Link href="/login" className="hover:text-gray-400">
              로그인
            </Link>

            <div className="relative pt-1">
              <button className="text-white hover:text-gray-400">
                <Image
                  src="/LanguageSelector.svg"
                  alt="Language Selector"
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
