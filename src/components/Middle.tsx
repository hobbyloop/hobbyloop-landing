"use client";
import { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import "../app/globals.css";
import { TABS, useSelectedTabStore } from "@/store/useStore";
import MemberSec from "./MemberSec";
import CompanySec from "./CompanySec";

export interface ITabs {
  id: number;
  name: string;
  icon: string;
}

export default function Middle() {
  // const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const { selectedTab } = useSelectedTabStore();
  const selectedUpdate = useSelectedTabStore((state) => state.selectedUpdate);

  return (
    <Container>
      <SelectSection>
        {TABS.map((tab) => {
          return (
            <Tab
              key={tab.id}
              onClick={() => {
                selectedUpdate(tab);
              }}
              // selected={selectedTab.id === tab.id}
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

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 45px;
  width: 265px;
  height: 130px;
  border-bottom: 2px solid #ebebeb;
  cursor: pointer;
`;

// ${(props) =>
//   props.selected &&
//   css`
//     border-color: #ff5f05;
//   `}
