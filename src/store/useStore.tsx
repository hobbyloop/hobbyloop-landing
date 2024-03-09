import { create } from "zustand";
import CompanyIcon from "../../public/Image/company.icon.svg";
import MemberIcon from "../../public/Image/member.icon.svg";
import { ITabs } from "@/components/Middle";

type SelectedTabAction = {
  selectedTab: ITabs;
  selectedUpdate: (selectedTab: ITabs) => void;
};

export const TABS: ITabs[] = [
  { id: 1, name: "회원용", icon: MemberIcon },
  { id: 2, name: "업체용", icon: CompanyIcon },
];

export const useSelectedTabStore = create<SelectedTabAction>((set) => ({
  selectedTab: TABS[0],
  selectedUpdate: (newSelec) => set({ selectedTab: newSelec }),
}));

export default useSelectedTabStore;
