import { ReactElement, useContext, useEffect } from "react";
import Header from "../lib/header";
import { AppLayoutContainer, AppLayoutContent } from "./index.styled";
import { Desktop, Mobile } from "@/_shared/responsiveness";
import MobileHeader from "../lib/mobile-header";
import MobileSideBar from "../lib/mobile-sidebar";
import { AppContext } from "@/app-context";

export interface AppLayoutProps {
  children?: ReactElement | ReactElement[];
}

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  const {toggleSidebar, setToggleSidebar} = useContext(AppContext);

  useEffect(() => {
    setToggleSidebar(false)
  }, [])

  return (
    <AppLayoutContainer>
      <Desktop>
        <Header />
      </Desktop>
      <Mobile>
        <MobileHeader setToggleSidebar={setToggleSidebar}/>
        <MobileSideBar toggleSidebar={toggleSidebar} setToogleSidebar={setToggleSidebar}/>
      </Mobile>

      <AppLayoutContent onClick={() => setToggleSidebar(false)}>{children}</AppLayoutContent>
    </AppLayoutContainer>
  );
};

export default AppLayout;
