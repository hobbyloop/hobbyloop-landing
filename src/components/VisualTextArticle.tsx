"use client";

import Link from "next/link";
import Button from "./commons/Button";
import useSelectedTabStore from "@/store/useStore";

export default function VisualTextArticle() {
  const { selectedTab } = useSelectedTabStore();
  return (
    <>
      <div className="md:row-[1/2] flex md:gap-[40px] md:justify-normal justify-center w-full">
        <div className="flex flex-col w-full md:gap-[54px] gap-[32px] items-end text-right ">
          <p className="text-neutral-10 md:text-5xl text-3xl font-bold md:leading-[1.5] tracking-wide">
            언제 어디서든 <br />
            <span className="text-neutral-500">결제</span>와
            <span className="text-neutral-500">수업 예약</span>을 한 번에
          </p>
          <p className="whitespace-pre-wrap	text-neutral-80 text-base md:text-[19px] md:leading-[1.5]">
            {`간편한 결제와 체계적인 예약관리\n시설 브랜딩화를 위한 첫걸음\n대표님들을 위한 관리 자동화 시스템`}
          </p>
        </div>
      </div>
      {selectedTab.id === 1 ? (
        <div>회원용 버튼 추가해야함</div>
      ) : (
        <Button className="text-neutral-80 bg-neutral-500 w-full md:w-[147px] h-[44px] order-3 md:order-2 col-start-1	justify-self-end lg:mt-[-54px] ">
          <Link href="#">로그인</Link>
        </Button>
      )}
    </>
  );
}
