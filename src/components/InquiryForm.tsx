"use client";

import styled from "styled-components";
import Form from "./commons/Form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
  min-width: 375px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

const Wrapper = styled.div`
  @media (max-width: 800px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const H1 = styled.h1`
  color: #333;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 45px;
`;

const P = styled.p`
  color: #929292;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
  margin-bottom: 34px;
  max-width: 337px;

  @media (max-width: 800px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const Button = styled.button<{ $backgroundColor: string }>`
  width: 216px;
  height: 50px;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 13px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 70px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

function InquiryForm() {
  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <H1>도입 문의</H1>
          <P>
            관리자/강사 어플리케이션과 웹페이지를 각각 따로 지원함으로써 더욱
            세분화된 이용권, 예약, 스케줄 관리가 가능합니다
          </P>
          <ButtonWrapper>
            <Button $backgroundColor="#fddc3f">카카오톡 상담 바로가기</Button>
            <Button $backgroundColor="#FF5F05">업체 입점 신청 바로가기</Button>
          </ButtonWrapper>
        </Wrapper>
        <Form />
      </InnerContainer>
    </Container>
  );
}

export default InquiryForm;
