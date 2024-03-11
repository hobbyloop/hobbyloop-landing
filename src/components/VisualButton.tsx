"use client";

import useSelectedTabStore from "@/store/useStore";
import Button from "./commons/Button";
import Link from "next/link";

export default function VisualButton() {
  const { selectedTab } = useSelectedTabStore();

  return (
    <>
      {selectedTab.id === 1 ? (
        <div className="flex gap-5 justify-end">
          <Button className="text-neutral-80 bg-neutral-500 w-full md:w-[147px] h-[44px] order-3 md:order-2 col-start-1 justify-self-end lg:mt-[-54px] ">
            <Link href="#">Google Play</Link>
          </Button>
          <Button className="text-neutral-80 bg-neutral-500 w-full md:w-[147px] h-[44px] order-3 md:order-2 col-start-1 justify-self-end lg:mt-[-54px] ">
            <Link href="#">App Store</Link>
          </Button>
        </div>
      ) : (
        <Button className="text-neutral-80 bg-neutral-500 w-full md:w-[147px] h-[44px] order-3 md:order-2 col-start-1 justify-self-end lg:mt-[-54px] ">
          <Link href="#">로그인</Link>
        </Button>
      )}
    </>
  );
}
