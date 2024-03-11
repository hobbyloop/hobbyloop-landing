import InquiryForm from "@/components/InquiryForm";
import Middle from "@/components/Middle";
import Visual from "@/components/Visual";
import Form from "@/components/commons/Form";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full">
      <Visual />
      <Middle />
      <InquiryForm />
    </div>
  );
}
