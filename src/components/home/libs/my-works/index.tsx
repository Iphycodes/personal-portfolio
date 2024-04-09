import React from 'react';
import { StyledMyWorksContainer } from './index.styled';
import Image from 'next/image';

const MyWorks = () => {
  return (
    <StyledMyWorksContainer>
      <div className="main-title">My Works</div>
      <div className="main-content">
        <div className="my-works-content">
          <div className="title">
            Simple Business Landing Page <br />
            <span className="tag">Collaboration</span>
          </div>
          <div className="body">
            Collaborated with a team of software developer to come with a simple animated landing
            page that is also responsive with html, css to showcase my ability in sass.
          </div>
        </div>
        <div className="my-works-image">
          <Image
            // src={'/assets/imgs/myworks_landing_page_pic.png'}
            className='img'
            src={'/assets/imgs/landing.png'}
            alt="my-work"
            width={800}
            height={500}
          />
        </div>
      </div>
    </StyledMyWorksContainer>
  );
};

export default MyWorks;
