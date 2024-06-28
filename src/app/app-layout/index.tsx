import { ReactElement, useContext, useEffect } from 'react';
import Header from '../lib/header';
import { AppLayoutContainer, AppLayoutContent, LeftSider } from './index.styled';
import { Desktop, Mobile, mediaSize, useMediaQuery } from '@/_shared/responsiveness';
import MobileHeader from '../lib/mobile-header';
import MobileSideBar from '../lib/mobile-sidebar';
import { AppContext } from '@/app-context';
import AppFooter from '../lib/footer';
import ThemeToggle from '../lib/theme-toggle';

export interface AppLayoutProps {
  children?: ReactElement | ReactElement[];
}

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  const isDesktop = useMediaQuery(mediaSize.desktop);

  useEffect(() => {
    setToggleSidebar(false);
  }, []);

  return (
    <AppLayoutContainer>
      <Desktop>
        <Header />
      </Desktop>
      <Mobile>
        <MobileHeader setToggleSidebar={setToggleSidebar} />
        <MobileSideBar toggleSidebar={toggleSidebar} setToogleSidebar={setToggleSidebar} />
      </Mobile>
      <Desktop>
        <LeftSider>
          <ThemeToggle />
        </LeftSider>
      </Desktop>
      <AppLayoutContent isDesktop={isDesktop} onClick={() => setToggleSidebar(false)}>
        {children}
      </AppLayoutContent>
      <AppFooter />
    </AppLayoutContainer>
  );
};

export default AppLayout;
