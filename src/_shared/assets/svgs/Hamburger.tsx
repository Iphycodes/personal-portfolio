

interface HamburgerProps {
    color: string;
    className: string
}


const Hamburger = ({color, className}: HamburgerProps) => {

    return (
        <svg className={className} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 1.5H1" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 7.5H1" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 13.5H1" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Hamburger