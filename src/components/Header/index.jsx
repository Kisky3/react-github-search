import { useEffect, useState, useCallback } from 'react';
import './index.css'


const Header = () => {
    const [isHeaderShown, setIsHeaderShown] = useState(true);
    const [lastPosition, setLastPosition] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const headerHeight = 40;

    const scrollEvent = useCallback(() => {
        setCurrentPosition(window.pageYOffset);

        if (currentPosition > headerHeight) {
            setIsHeaderShown(false);
        } else {
            setIsHeaderShown(true);
        }

        if (currentPosition < lastPosition) {
            setIsHeaderShown(true);
        }

        setLastPosition(currentPosition);
    }, [currentPosition, lastPosition]);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);

        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, [scrollEvent]);

    return (
        <header style={{ display: isHeaderShown ? 'block' : 'none' }}>
            Search Github Users {isHeaderShown}
        </header>
    )
};
export default Header;
