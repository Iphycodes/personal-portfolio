import React from 'react';
import { StyledSocialProfileContainer } from './index.styled';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';

const SocialProfile = () => {
  const socialProfileData = [
    {
      media: 'twitter',
      url: 'www.google.com',
      icon: <FaTwitter size={15} />,
    },
    {
      media: 'instagram',
      url: 'www.google.com',
      icon: <AiFillInstagram size={15} />,
    },
    {
      media: 'facebook',
      url: 'www.google.com',
      icon: <FaFacebookF size={15} />,
    },
    {
      media: 'whatsapp',
      url: 'www.google.com',
      icon: <RiWhatsappFill size={15} />,
    },
  ];
  return (
    <StyledSocialProfileContainer>
      {socialProfileData.map(({ media, url, icon }) => {
        return (
          <Link className="social-icon" key={media} href={url}>
            <hr className="line"/>
            {icon}
          </Link>
        );
      })}
    </StyledSocialProfileContainer>
  );
};

export default SocialProfile;
