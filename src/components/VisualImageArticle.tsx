import Image from "next/image";
import visual_notebook from "../../public/Image/visual_notebook.png";
import visual_phone from "../../public/Image/visual_phone.png";

export default function VisualImageArticle() {
  return (
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
  );
}
