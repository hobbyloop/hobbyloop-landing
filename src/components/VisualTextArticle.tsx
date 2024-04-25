import VisualButton from './VisualButton';

export default function VisualTextArticle() {
  return (
    <>
      <div className="md:row-[1/2] flex md:gap-[40px] md:justify-normal justify-center w-full md:mt-0 mt-[60px]">
        <div className="flex flex-col w-full md:gap-[54px] gap-[32px] items-end text-right ">
          <p className="text-neutral-10 md:text-5xl text-3xl font-bold md:leading-[1.5] tracking-wide">
            언제 어디서든 <br />
            <span className="text-neutral-500">결제</span>와&nbsp;
            <span className="text-neutral-500">수업 예약</span>을 한 번에
          </p>
          <p className="whitespace-pre-wrap	text-neutral-80 text-base md:text-[19px] md:leading-[1.5]">
            {`간편한 결제와 체계적인 예약관리\n시설 브랜딩화를 위한 첫걸음\n대표님들을 위한 관리 자동화 시스템`}
          </p>
        </div>
      </div>
      <VisualButton />
    </>
  );
}
