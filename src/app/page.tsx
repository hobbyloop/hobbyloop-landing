type Props = {
  params: {
    slug: string;
  };
};
export default function HomePage({ params: { slug } }: Props) {
  return <div>메인 페이지</div>;
}
