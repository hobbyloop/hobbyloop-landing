"use client";
import { useState } from "react";
import styled, { css } from "styled-components";
import CompanyIcon from "../../public/Image/company.icon.svg";
import MemberIcon from "../../public/Image/member.icon.svg";
import Image from "next/image";
import MemberSec from "./MemberSec";
import CompanySec from "./CompanySec";
import "../app/globals.css";

export default function Middle() {
  interface ITabs {
    id: number;
    name: string;
    icon: string;
  }

  const TABS: ITabs[] = [
    { id: 1, name: "회원용", icon: MemberIcon },
    { id: 2, name: "업체용", icon: CompanyIcon },
  ];

  const [selectedTab, setSelectedTab] = useState(TABS[0]);
  return (
    <Container>
      <SelectSection>
        {TABS.map((tab) => {
          return (
            <Tab
              key={tab.id}
              selected={selectedTab.id === tab.id}
              onClick={() => setSelectedTab(tab)}
            >
              <div className="flex flex-col content-center gap-4">
                <Image src={tab.icon} alt="아이콘 이미지" />
                <p>{tab.name}</p>
              </div>
            </Tab>
          );
        })}
      </SelectSection>
      <>{selectedTab.id === 1 ? <MemberSec /> : <CompanySec />}</>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 250px;
`;

const Tab = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 45px;
  width: 265px;
  height: 130px;
  border-bottom: 2px solid #ebebeb;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      border-color: #ff5f05;
    `}
`;
