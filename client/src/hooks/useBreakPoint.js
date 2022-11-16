import useMediaQuery from '@mui/material/useMediaQuery';

export const useBreakPoint = () => {
    const isDesktop = useMediaQuery('(min-width:768px)');

    return { isMobile: !isDesktop, isDesktop};
};
