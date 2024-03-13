import Form from "@/components/commons/Form";
import styled, { css } from "styled-components";
import Section1_1 from "../../public/Image/member_section1_1.png";
import Section1_2 from "../../public/Image/member_section1_2.png";
import Section2 from "../../public/Image/member_section2.png";
import Section3 from "../../public/Image/member_section3.png";
import Section4 from "../../public/Image/member_section4.png";
import Image from "next/image";

export default function MemberSec() {
  const SERVICE_LIST = [
    {
      id: 1,
      title: "수업",
      subTitle: "언제 어디서든\n간편한 예약&결제",
      description:
        "앱을 통해 시간과 장소에 구애받지\n않고 간편한 예약 결제가 가능합니다.",
      image: [Section1_1, Section1_2],
    },
    {
      id: 2,
      title: "혜택",
      subTitle: "다양한 혜택 제공",
      description: "챌린지 및 할인 쿠폰 제공 등\n다양한 프로포션을 제공합니다.",
      image: [Section2],
    },
    {
      id: 3,
      title: "시스템",
      subTitle: "소비자 보장\n시스템 구축",
      description:
        "가맹점의 악의적 행동 방지를 위해\n중도환불 서비스 및 루프패스를 제공하며, 가맹점 후불정산을\n기본으로 지정하여 온전한 서비스를 보장 받을 수 있습니다.",
      image: [Section3],
    },
    {
      id: 4,
      title: "편리성",
      subTitle: "구독 서비스를 통한\n할인혜택과 편리성 증대",
      description:
        "다양한 업체들의 수업을 듣고 본인이 원하는 업체를\n선택하거나 하나의 이용권으로 다양한 수업 진행이 가능합니다.",
      image: [Section4],
    },
  ];

  return (
    <>
      {SERVICE_LIST.map((list, index) => {
        return (
          <ServiceContainer key={index}>
            {/* <InnerContainer isOdd={index % 2 === 1} isFirst={index === 0}> */}
            <InnerContainer index={index}>
              <TextWrapper index={index}>
                <Title>{list.title}</Title>
                <SubTitle>{list.subTitle}</SubTitle>
                <Description>{list.description}</Description>
              </TextWrapper>

              <ImageWrapper index={index}>
                <div className="flex">
                  {list.image.map((img, i) => {
                    return (
                      <ImageStyle key={i}>
                        <Image src={img} alt="앱 이미지" />
                      </ImageStyle>
                    );
                  })}
                </div>
              </ImageWrapper>
            </InnerContainer>
            <div></div>
          </ServiceContainer>
        );
      })}
    </>
  );
}

const BREAK_POINT = "800px";

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  min-width: 360px;
  height: 810px;

  @media (max-width: ${BREAK_POINT}) {
    height: 812px;
    margin-top: 90px;
  }
`;

const InnerContainer = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  gap: 64px;
  white-space: pre-line;

  ${(props) =>
    props.index % 2 === 1 &&
    css`
      flex-direction: row-reverse;
    `}

  ${(props) =>
    props.index === 0 &&
    css`
      gap: 32px;
    `}

    @media (max-width: ${BREAK_POINT}) {
    display: block;
    flex-direction: column;
    overflow-y: hidden;
  }
`;

const TextWrapper = styled.div<{ index: number }>`
  min-width: 280px;
  @media (max-width: ${BREAK_POINT}) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 32px;

    ${(props) =>
      props.index % 2 === 1 &&
      css`
        text-align: left;
        align-items: flex-start;
      `}
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

  @media (max-width: ${BREAK_POINT}) {
    margin-bottom: 32px;
  }
`;
const ImageWrapper = styled.div<{ index: number }>`
  @media (max-width: ${BREAK_POINT}) {
    min-width: 360px;
    width: 100vw;
    overflow-x: auto;

    ${(props) =>
      props.index !== 0 &&
      css`
        .flex {
          justify-content: center;
        }
      `}
  }
`;

const ImageStyle = styled.div`
  position: relative;
  width: 300px;
  height: 600px;

  @media (max-width: ${BREAK_POINT}) {
    min-width: 300px;
    min-height: 580px;
    display: inline-block;
  }
`;
