import Image from "next/image";
import visual_notebook from "../../public/Image/visual_notebook.png";
import visual_phone from "../../public/Image/visual_phone.png";
import Button from "@/components/commons/Button";
import Link from "next/link";

export default function Visual() {
  return (
    <div className="bg-neutral-890 h-[752px] md:h-[810px] md:flex-row px-[20px] md:px-0 grid content-center gap-[53px] md:gap-0">
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
      <Button className="text-neutral-80 bg-neutral-500 w-full md:w-[147px] h-[44px] order-3 md:order-2 col-start-1	justify-self-end lg:mt-[-54px] ">
        <Link href="#">로그인</Link>
      </Button>
      {/*  */}
      <div className="relative w-full md:order-3 md:row-[1/2]">
        <Image
          className="absolute md:left-0 left-[-16px] top-[-28px] md:w-[253px] md:h-[463px]"
          src={visual_phone}
          alt="핸드폰이미지"
          width={168}
          height={325}
        />
        <Image
          className="md:ml-[121px] ml-[77px]"
          src={visual_notebook}
          priority
          alt="노트북이미지"
          width={558}
          height={418}
        />
      </div>
    </div>
  );
}
