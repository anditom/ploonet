import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8 text-center">
      <h2 className="text-lg text-red-400 font-bold mb-4">영상 제작소</h2>
      <h3 className="text-3xl font-semibold mb-8">
        당장 내일
        <span className="text-white font-bold">
          &apos;고품질 맞춤 영상&apos;
        </span>
        을 받아보세요.
      </h3>

      <div className="flex justify-center gap-8 mb-12">
        <div className="flex flex-col items-center border-2 border-red-400 rounded-full w-36 h-36 justify-center">
          <h4 className="text-red-400 text-xl font-semibold">FAST</h4>
          <p className="text-white">x2</p>
        </div>

        <div className="flex flex-col items-center border-2 border-red-400 rounded-full w-36 h-36 justify-center">
          <h4 className="text-red-400 text-xl font-semibold">QUALITY</h4>
          <p className="text-white">A++</p>
        </div>

        <div className="flex flex-col items-center border-2 border-red-400 rounded-full w-36 h-36 justify-center">
          <h4 className="text-red-400 text-xl font-semibold">LOW PRICE</h4>
          <p className="text-white">1/2</p>
        </div>

        <div className="flex flex-col items-center border-2 border-red-400 rounded-full w-36 h-36 justify-center">
          <h4 className="text-red-400 text-xl font-semibold">HIGH TECH</h4>
          <p className="text-white">Gen AI</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">AI VIDEO ON YOUR DEMAND</h3>
      <p className="text-gray-400 max-w-3xl mx-auto mb-8">
        가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
        영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을
        만듭니다.
      </p>

      <p className="text-gray-400 max-w-3xl mx-auto">
        가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품 소개, 교육
        및 행사, 정보 및 안내 영상 등 당신이 필요한 &quot;그 영상&quot;을
        플루투스 영상제작소에 맡겨주세요.
      </p>
    </section>
  );
};

export default FeatureSection;
