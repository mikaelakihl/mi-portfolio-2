import { useMediaQuery } from "react-responsive";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export const Navigation = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        isMobile ? <HamburgerMenu/> : <DesktopMenu />
    )
}