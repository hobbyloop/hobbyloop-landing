import Visual from "@/components/Visual";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">
      <Visual />
      {/* <section className="flex gap-4 bg-orange-300 justify-center h-[50px] items-center">
        <div>
          <Link href="/company">업체용tab 버튼</Link>
        </div>
        <div>
          <Link href="/member">회원용tab 버튼</Link>
        </div>
      </section> */}
    </div>
  );
}
