import TimeExperienceContainer from '@/containers/home/libs/time-experience';
import FrontAdvert from './libs/front-advert';
import AboutSection from './libs/about-section';
import {useContext} from 'react'
import { AppContext } from '@/app-context';

const HomePage = () => {

  const {slideCurrent} = useContext(AppContext)

  return (
    <>
      <FrontAdvert />
      <TimeExperienceContainer />
      <AboutSection toShow={slideCurrent}/>
    </>
  );
};

export default HomePage;
