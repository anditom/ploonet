"use client";
import React, { useState } from "react";

const VideoInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    videoType: "",
    contactName: "",
    email: "",
    phone: "",
    inquiryDetails: "",
    referenceVideo: "",
    agreement: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("개인정보 처리방침에 동의하셔야 합니다.");
      return;
    }
    console.log("Form submitted: ", formData);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-10">영상 제작 문의</h2>
      <p className="text-center mb-8">
        여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
        연락 드리겠습니다.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">영상 유형 선택</label>
          <select
            name="videoType"
            value={formData.videoType}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
          >
            <option value="">선택하세요</option>
            <option value="business">비즈니스 영상</option>
            <option value="personal">개인 영상</option>
            <option value="advertisement">광고 영상</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">
            연락 받으실 담당자 성함
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
            placeholder="담당자 성함을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">휴대폰 번호</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
            placeholder="휴대폰 번호를 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">의뢰하실 영상 내용</label>
          <textarea
            name="inquiryDetails"
            value={formData.inquiryDetails}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
            placeholder="의뢰하실 영상의 내용을 간단히 기재해주세요."
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">참고 영상</label>
          <input
            type="text"
            name="referenceVideo"
            value={formData.referenceVideo}
            onChange={handleChange}
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded"
            placeholder="참고할 영상의 링크를 입력하세요"
          />
        </div>

        <p className="text-red-500 text-sm mb-6">
          * 참고영상은 영상이 유사한 영상을 찾으시려면 링크를 남겨주세요.
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="h-5 w-5 rounded-full bg-gray-900 border-2 border-gray-400 appearance-none checked:bg-gray-500 checked:border-gray-500 focus:outline-none relative"
            />
            <label className="ml-2 text-gray-400">
              개인정보처리방침에 동의합니다.
            </label>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-6 rounded disabled:bg-red-300"
            disabled={!formData.agreement}
          >
            문의 보내기
          </button>
        </div>
      </form>
    </section>
  );
};

export default VideoInquiryForm;
