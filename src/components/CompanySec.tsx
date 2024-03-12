import styled from "styled-components";
import Image from "next/image";
import Section1 from "../../public/Image/section_01@2x.png";
import Section2 from "../../public/Image/section_02@2x.png";
import Section4 from "../../public/Image/section_04@2x.png";
import Section5 from "../../public/Image/section_05@2x.png";
import KakaoIcon from "../../public/Image/kakao_logo.icon.svg";
import "../app/globals.css";

export default function CompanySec() {
  const SERVICE_LIST = [
    {
      id: 1,
      title: "시설관리",
      subTitle: "관리자용 / 강사용\n프로그램 지원 ",
      description:
        " 관리자/강사 어플리케이션과 웹페이지를 각각 따로 지원함으로써 더욱 세분화된\n 이용권, 예약, 스케줄 관리가 가능합니다.",
      image: Section1,
    },
    {
      id: 2,
      title: "매출관리",
      subTitle: "체계적인 \n 매출관리 시스템",
      description:
        " 매출/매입 기록 자동화를 통한 체계적인 매출 관리 시스템 그래프를 통한\n직관적인 매출 확인이 가능합니다.",
      image: Section2,
    },
    {
      id: 3,
      title: "마케팅",
      subTitle: "직관적이고 \n 세분화된 마케팅 설정",
      description:
        "광고 타겟팅, 노출 순위 설정, 입찰가 설정, 푸쉬알림 등 체계적인 광고 세팅을 통해\n효율적인 마케팅 비용 관리가 가능합니다.",
      image: Section4,
    },
    {
      id: 4,
      title: "시스템",
      subTitle: "블랙컨슈머 \n 대처 시스템 확립",
      description:
        "블랙 컨슈머로 인한 가맹점의 파해를 막기 위하여 리뷰 블라인드 및 중도환불 시스템을 운영합니다.",
      image: Section5,
    },
  ];

  const PRICE_LIST = [
    {
      title: "정액제",
      contents: [
        {
          title: "일반",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
        {
          title: "프리미엄",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
        {
          title: "예약",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
      ],
    },
    {
      title: "정률제",
      contents: [
        {
          title: "일반",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
        {
          title: "프리미엄",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
        {
          title: "원데이/ 소수클래스",
          description:
            "앱을 통해 시간과 장소에 구애받지 않고 간편한 예약 결제가 가능합니다.",
          price: "월 300,000원",
        },
      ],
    },
  ];

  return (
    <Container>
      {/* 서비스 소개 */}
      {SERVICE_LIST.map((section, index) => {
        return (
          <ServiceContainer key={section.id} isEven={index % 2 === 0}>
            <InnerContainer isEven={index % 2 === 0}>
              <TextWrapper>
                <Title>{section.title}</Title>
                <SubTitle>{section.subTitle}</SubTitle>
                <Description>{section.description}</Description>
              </TextWrapper>
              <ImageWrapper>
                <ImageStyle>
                  <Image src={section.image} alt="이미지" className="image" />
                </ImageStyle>
              </ImageWrapper>
            </InnerContainer>
          </ServiceContainer>
        );
      })}

      {/* 서비스 가격 */}
      <ServicePriceSection>
        <p className="mt-[139px] mb-[53px] text-[40px] leading-[52px] font-bold">
          서비스 가격
        </p>
        <ButtonWrapper>
          <ShortcutButton
            className="text-[#000] bg-[#FDDC3F] font-semibold"
            onClick={() => {}}
          >
            <Image src={KakaoIcon} alt="카카오 아이콘" />
            카카오톡 상담 바로가기
          </ShortcutButton>
          <ShortcutButton
            className="text-[#fff] bg-[#FF5F05] font-bold"
            onClick={() => {}}
          >
            업체 입점 신청 바로가기
          </ShortcutButton>
        </ButtonWrapper>
        {PRICE_LIST.map((list) => {
          return (
            <PriceWrapper key={list.title}>
              <PriceTitle>{list.title}</PriceTitle>
              <PriceBoxWrapper>
                {list.contents.map((priceList) => {
                  return (
                    <PriceBox key={priceList.title}>
                      <p className="mb-[26px] text-[16px] font-extrabold">
                        {priceList.title}
                      </p>
                      <p className="mb-[30px] text-[14px] text-[#6B6B6B] leading-[21px] font-medium">
                        {priceList.description}
                      </p>
                      <p className="text-[20px] text-[#FF5F05] leading-[30px] font-extrabold">
                        {priceList.price}
                      </p>
                    </PriceBox>
                  );
                })}
              </PriceBoxWrapper>
            </PriceWrapper>
          );
        })}
      </ServicePriceSection>
    </Container>
  );
}

const BREAK_POINT = "800px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 360px;
`;

const ServiceContainer = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 810px;
  background-color: ${(props) => !props.isEven && "#F5F5F7"};

  @media (max-width: ${BREAK_POINT}) {
    background-color: inherit;
    height: 812px;
  }
`;

const InnerContainer = styled.div<{ isEven: boolean }>`
  text-align: ${(props) => props.isEven && "center"};
  white-space: pre-line;

  @media (max-width: ${BREAK_POINT}) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: ${BREAK_POINT}) {
    padding: 0px 32px;
  }
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: #ff5f05;
  margin-bottom: 24px;
  word-break: break-all;
`;

const SubTitle = styled.div`
  font-size: 40px;
  line-height: 54px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: ${BREAK_POINT}) {
    font-size: 30px;
    line-height: 39px;
    margin-bottom: 32px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #858585;
  margin-bottom: 60px;
`;

const ImageWrapper = styled.div`
  @media (max-width: ${BREAK_POINT}) {
    width: 100%;
    justify-content: center;
    overflow-x: auto;
  }
`;

const ImageStyle = styled.div`
  position: relative;
  width: 740px;

  @media (max-width: ${BREAK_POINT}) {
    min-width: 777px;
  }
`;

const ServicePriceSection = styled.div`
  height: 1217px;

  @media (max-width: ${BREAK_POINT}) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 50px;

  @media (max-width: ${BREAK_POINT}) {
    flex-direction: column;
  }
`;

const ShortcutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 50px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 801px;
  height: 398px;
  border-radius: 32px;
  background-color: #f5f5f7;
  margin-bottom: 26px;

  @media (max-width: ${BREAK_POINT}) {
    width: 335px;
    height: 863px;
  }
`;

const PriceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 75px;
  border-radius: 20px;
  margin-top: 38px;
  margin-bottom: 35px;
  background-color: #3f3f3f;
  color: #fff;
  font-size: 26px;
  font-weight: 800;
`;

const PriceBoxWrapper = styled.div`
  display: flex;
  gap: 16.89px;

  @media (max-width: ${BREAK_POINT}) {
    flex-direction: column;
  }
`;

const PriceBox = styled.div`
  width: 196px;
  height: 217px;
  padding: 28px;
  background-color: #fff;
  border-radius: 18px;
`;
