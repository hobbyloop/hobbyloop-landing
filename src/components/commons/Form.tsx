"use client";

import styled from "styled-components";

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
  background-color: rgba(255, 95, 5, 0.5);
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

function Form() {
  return (
    <FormContainer>
      <Wrapper>
        <label>
          대표자명<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input required />
      </Wrapper>
      <Wrapper>
        <label>
          업체명<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input required />
      </Wrapper>
      <Wrapper>
        <label>
          사업자 등록번호<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input required />
      </Wrapper>
      <Wrapper>
        <label>
          전화번호<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input required />
      </Wrapper>
      <Wrapper>
        <label>
          이메일<RequiredIndicator>*</RequiredIndicator>
        </label>
        <Input required />
      </Wrapper>
      <Wrapper>
        <label>
          문의내용<RequiredIndicator>*</RequiredIndicator>
        </label>
        <TextArea required />
        <InquiryButtonWrapper>
          <InquiryButton>문의하기</InquiryButton>
        </InquiryButtonWrapper>
      </Wrapper>
    </FormContainer>
  );
}

export default Form;
