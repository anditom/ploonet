"use client";

import React, { useState } from "react";

const stepsGeneral = [
  {
    title: "사전 논의",
    p1: " 영상 제작 문의를 통해 의뢰 확인 후",
    p2: "상담을 통해 방향 설정 및 내용 협의 ",
  },
  {
    title: "영상 기획",
    p1: "스토리보드 전달&수정을 통한 기획안 확정",
    p2: "가상인간 발화용 스크립트 작성과 프롬프팅",
  },
  {
    title: "영상 생성",
    p1: "작성한 스크립트로 가상인간 영상 생성",
    p2: "그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    title: "영상 편집",
    p1: "영상 전문가의 편집, 디자인, 후반 작업 단계",
    p2: "필요시 실사 촬영 병행하여 편집본 완성",
  },
  {
    title: "최종 납품",
    p1: "고객 피드백 반영하여 최종본 완성 및 납품",
    p2: "* 영상 수정 무료 1회 제공",
  },
];
const stepsQuickserve = [
  {
    title: "안내",
    svg: "/assets/step1.svg",
    iconsvg: "/assets/docIcon.svg",
    p1: "영상 제작 문의를 통해 의뢰 확인 후",
    p2: "견적 및 진행 순서 안내",
  },
  {
    title: "영상 생성",
    svg: "/assets/step2.svg",
    iconsvg: "/assets/vidioIcon.svg",
    p1: "스크립트 수신 즉시 가상인간 영상 생성",
    p2: "그외 이미지, 배경 음악 등 필요 요소 생성",
  },
  {
    title: "편집 및 납품",
    svg: "/assets/step3.svg",
    iconsvg: "/assets/step3.svg",
    p1: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
    p2: "",
  },
];

const MakingProcess: React.FC = () => {
  const [activeCard, setActiveCard] = useState<"general" | "quickserve" | null>(
    null
  );

  const handleCardClick = (card: "general" | "quickserve") => {
    setActiveCard(card);
  };

  return (
    <section className="text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">MAKING PROCESS</h2>
      <div className="flex justify-center space-x-30 w-300">
        {/* Crad 1 */}
        <div
          className={`text-left p-4 rounded-lg cursor-pointer ${
            activeCard === "general" ? "border border-pink-400" : ""
          }`}
          onClick={() => handleCardClick("general")}
          style={{ backgroundColor: "#141414", margin: 10, width: "650px" }}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <h3 className="text-xl font-bold mb-2">일반 제작</h3>
            <p className="mb-4">제작 시작 후 5영업일 이내</p>
            <ul className="space-y-4">
              {stepsGeneral.map((step, index) => (
                <li key={index} className="flex items-center space-x-1 p-1">
                  <div
                    className="flex"
                    style={{
                      height: "80px",
                      width: "600px",
                      backgroundColor: "#000000",
                      borderRadius: 52,
                      borderColor: "gray",
                      borderWidth: 0.5,
                    }}
                  >
                    <div className="flex-1 p-3 relative">
                      <span
                        className="absolute font-bold left-6"
                        style={{
                          background:
                            "linear-gradient(289.56deg, #FF7E7E 1.48%, #F05F82 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {`STEP ${index + 1}`}
                      </span>{" "}
                      <span className="absolute bottom-5 left-6 text-white font-bold text-sm">
                        {step.title}
                      </span>
                    </div>

                    <div className="flex-1 p-3">
                      <span>{step.p1}</span>
                      <br />
                      <span>{step.p2}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Crad 2 */}
        <div
          className={`text-left p-4 bg-gray-900 rounded-lg cursor-pointer ${
            activeCard === "quickserve" ? "border border-orange-400" : ""
          }`}
          onClick={() => handleCardClick("quickserve")}
          style={{ backgroundColor: "#141414", margin: 10, width: "650px" }}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <h3 className="text-xl font-bold mb-4">Ploonet Quickserve™</h3>
            <p className="mb-4">제작 시작 후 12~48시간 이내</p>
            <ul className="space-y-4">
              {stepsQuickserve.map((step, index) => (
                <li key={index} className="flex items-center space-x-4 p-4">
                  <div className="relative w-24 h-24">
                    <div
                      className="absolute inset-0 bg-cover bg-center "
                      style={{ backgroundImage: `url(${step.svg})` }}
                    />

                    <span className="absolute top-3 left-5 text-white font-bold text-sm">
                      {`STEP ${index + 1}`}
                      <img
                        src={`${step.iconsvg}`}
                        alt={`Step ${index + 1}`}
                        className="w-10 h-10"
                        style={{ padding: 4 }}
                      />
                    </span>
                  </div>
                  <div>
                    <p>{step.title}</p>
                    <span>{step.p1}</span>
                    <br />
                    <span>{step.p2}</span>
                    <hr
                      style={{
                        border: "none",
                        borderTop: "0.11px solid gray",
                        marginTop: 20,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며,  모션그래픽 등
        전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다. ** 영상의 길이,
        영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며,
        클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
      </p>
    </section>
  );
};

export default MakingProcess;
