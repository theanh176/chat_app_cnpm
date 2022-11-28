import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const useBreakPoint = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery('(min-width:768px)');
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const xl = useMediaQuery(theme.breakpoints.up('xl'));
    const xxl = useMediaQuery(theme.breakpoints.up('xxl'));

    return { isMobile: !isDesktop, isDesktop, sm, md, lg, xl, xxl };
};
