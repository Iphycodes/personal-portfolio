import { AboutIcon, ContactIcon, HomeIcon, PortfolioIcon } from "@/_shared/assets/svgs";

export const navLinks = [
    {
        label: 'Home',
        to: '',
        href: '#',
        icon: <HomeIcon/>
    },
    {
        label: 'About',
        to: 'about',
        href: '#about-me',
        icon: <AboutIcon/>
    },
    {
        label: 'Portfolio',
        to: 'portfolio',
        href: '#myworks-section',
        icon: <PortfolioIcon/>
    },
    {
        label: 'Contact',
        to: 'contact',
        href: '#contact-me-section',
        icon: <ContactIcon/>
    },
]