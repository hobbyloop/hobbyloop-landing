export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`rounded-[13px] md:rounded-[5px] ${className}`}>
      {children}
    </button>
  );
}
