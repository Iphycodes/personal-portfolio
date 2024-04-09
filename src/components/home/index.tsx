import TimeExperienceContainer from '@/containers/home/libs/time-experience';
import FrontAdvert from './libs/front-advert';
import AboutSection from './libs/about-section';
import { useContext } from 'react';
import { AppContext } from '@/app-context';
import ServicesSection from './libs/services-section';
import SkillSection from './libs/skill-section';
import ExperienceSection from './libs/experience';
import MyWorks from './libs/my-works';

const HomePage = () => {
  const { slideCurrent } = useContext(AppContext);

  return (
    <>
      <FrontAdvert />
      <TimeExperienceContainer />
      <AboutSection toShow={slideCurrent} />
      <ServicesSection />
      <SkillSection />
      <ExperienceSection />
      <MyWorks />
    </>
  );
};

export default HomePage;
