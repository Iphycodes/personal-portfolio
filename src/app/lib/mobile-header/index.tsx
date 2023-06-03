import {
  Hamburger,
  PortfolioLogoSmall,
  ThemeToggleIcon,
} from "@/_shared/assets/svgs";
import { StyledMobileHeaderContainer } from "./index.styled";
import { Dispatch, SetStateAction, useState } from "react";
import theme from "@/styles/theme";

interface MobileHeaderProps {
    setToggleSidebar: Dispatch<SetStateAction<boolean>>
}

const MobileHeader = (props: MobileHeaderProps) => {
    const {setToggleSidebar} = props
  const [hover, setHover] = useState<boolean>(false);

  return (
    <StyledMobileHeaderContainer>
      <div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setToggleSidebar(true)}
      >
        <Hamburger
          className={"pointer"}
          color={hover ? theme.accent : "#E9ECEF"}
        />
      </div>
      <PortfolioLogoSmall />
      <ThemeToggleIcon className={"pointer"} />
    </StyledMobileHeaderContainer>
  );
};

export default MobileHeader;
