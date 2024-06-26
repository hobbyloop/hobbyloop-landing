"use client";

import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

export type FormProps = {
  representative: string;
  companyName: string;
  buisnessman: string;
  phone: string;
  email: string;
  message: string;
};
const DEFAULT_DATA = {
  representative: "",
  companyName: "",
  buisnessman: "",
  phone: "",
  email: "",
  message: "",
};
function Form() {
  const [form, setForm] = useState<FormProps>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((forms) => ({ ...forms, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        console.log("success");
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Wrapper>
        <label>
          대표자명<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input
          required
          name="representative"
          id="representative"
          value={form.representative}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <label>
          업체명<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input
          required
          name="companyName"
          id="companyName"
          value={form.companyName}
          onChange={onChange}
        />
      </Wrapper>
      <Wrapper>
        <label>
          사업자 등록번호<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input
          required
          name="buisnessman"
          id="buisnessman"
          onChange={onChange}
          type="number"
          value={form.buisnessman}
        />
      </Wrapper>
      <Wrapper>
        <label>
          전화번호<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input
          required
          name="phone"
          id="phone"
          onChange={onChange}
          value={form.phone}
        />
      </Wrapper>
      <Wrapper>
        <label>
          이메일<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input
          required
          name="email"
          type="text"
          onChange={onChange}
          id="email"
          value={form.email}
        />
      </Wrapper>
      <Wrapper>
        <label>
          문의내용<RequiredIndicator>*</RequiredIndicator>
        </label>
        <TextArea
          required
          name="message"
          onChange={onChange}
          id="message"
          value={form.message}
        />
        <InquiryButtonWrapper>
          <InquiryButton type="submit">문의하기</InquiryButton>
        </InquiryButtonWrapper>
      </Wrapper>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

const Input = styled.input`
  border: 1px solid;
  width: 75%;
  height: 60px;
  border-radius: 12px;
  border: 1px solid var(--gray-2, #d7d7d7);
  padding: 1rem;

  @media (max-width: 800px) {
    width: 335px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 307px;
  border-radius: 12px;
  border: 1px solid var(--gray-2, #d7d7d7);
  resize: none;
  padding: 1rem;
  margin-bottom: 63px;

  @media (max-width: 800px) {
    width: 335px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const RequiredIndicator = styled.span`
  color: #eb2323;
  font-size: 16px;
  margin-left: 4px;
`;

const InquiryButton = styled.button`
  background-color: #ff5f05;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  color: white; /* 버튼 텍스트 색상을 설정 */
  /* 다른 스타일 속성들... */
`;

const InquiryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 160px;
`;

export default Form;
