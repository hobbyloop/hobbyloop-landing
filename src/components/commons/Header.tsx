import Link from "next/link";
import logo from "/public/Image/logo.png";
import Image from "next/image";

type NavMenu = {
  id: number;
  navName: string;
  href: string;
};

const nav_menu: NavMenu[] = [
  { id: 1, navName: "플랫폼소개", href: "" },
  { id: 2, navName: "서비스소개", href: "" },
  { id: 3, navName: "가격도입문의", href: "" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between py-[18px] px-[20px] md:px-0 mx-auto lg:max-w-[1200px] md:max-w-[1000px] md:pt-[19px] md:pb-[17px]">
      <Link href="#" className="flex gap-[10px] items-center">
        <Image src={logo} alt="로고" width={34} height={24} />
        <h1 className="md:block hidden font-extrabold text-2xl">하비루프</h1>
      </Link>
      <nav>
        <ul className="flex md:gap-[46px] gap-[20px]">
          {nav_menu.map(({ id, navName, href }) => (
            <li className="hover:text-neutral-500 font-bold" key={id}>
              <Link href={href} className="text-sm md:text-xl">
                {navName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
