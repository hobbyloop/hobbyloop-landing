import VisualImageArticle from "./VisualImageArticle";
import VisualTextArticle from "./VisualTextArticle";

export default function Visual() {
  return (
    <div className="bg-neutral-890 h-[752px] md:h-[810px] md:flex-row px-[20px] md:px-0 grid content-center gap-[53px] md:gap-0">
      <VisualTextArticle />
      <VisualImageArticle />
    </div>
  );
}
