import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Image/logo.png";
type BusinessInfor = {
  id: number;
  title: string;
  text: string;
};
type BusinessLink = {
  id: number;
  linkName: string;
  link: string;
};
const businessInfor: BusinessInfor[] = [
  { id: 1, title: "대표자", text: "김하비" },
  { id: 2, title: "개업일자", text: "2023년 7월 19일" },
  { id: 3, title: "사업장 번호", text: "123456789" },
  { id: 4, title: "통신판매 번호", text: "123456789" },
];

const businessLink: BusinessLink[] = [
  { id: 1, linkName: "회사소개", link: "" },
  { id: 2, linkName: "개인정보처리방침", link: "" },
  { id: 3, linkName: "서비스 이용약관", link: "" },
];
export default function Footer() {
  return (
    <footer className="bg-neutral-600 md:pt-[64px] md:pb-[70px] py-[72px]">
      <div className="m-full md:max-w-[527px] mx-auto max-w-[335px]">
        <h1 className="text-base text-neutral-10 font-bold ">사업자 정보</h1>
        <ul className="text-xs text-neutral-10 md:pt-[15px] pb-[24px] flex w-[317px] gap-[15px] flex-wrap">
          {businessInfor?.map(({ id, title, text }) => (
            <li key={id} className="flex gap-[6px] li">
              <h4 className="font-bold text-neutral-10">{title}</h4>
              <span className="text-neutral-90">{text}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-[20px]">
          {businessLink?.map(({ id, linkName, link }) => (
            <div key={id}>
              <Link href={link} className="font-bold text-xs text-neutral-10">
                {linkName}
              </Link>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="text-neutral-90 text-xs my-[32px] gap-[17px] flex flex-col">
          <p>
            판매되는 이용권의 경우 (주) 하비루프는 통신판매의 당사자가 아닌 통신
            판매중개자로서, 상품, 상품정보,거래에 대한 책임이 제한될 수
            있으므로, 각 이용권 페이지에서 구체적인 내용은 확인하시기 바랍니다.
          </p>
          <p>
            본 사이트 및 앱내의 상품/판매자/센터/이용권/강사 정보, 콘텐츠, UI
            등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
            콘텐츠사업 진흥법 등에 의하여 엄격히 금지됩니다.
          </p>
        </div>
        {/*  */}
        <div>
          <Image src={logo} alt="로고" width={30} height={20} />
          <h4 className="text-neutral-90 text-xs">
            Hobbyloop Inc. Ⓒ 2023 All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
}
