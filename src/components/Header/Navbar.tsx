import React from "react";
import { MdMenu } from "react-icons/md";
import { useTheme } from "../../utils/themeChanger";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Container, Wrapper, LogoWrapper, Logo, ActionWrapper, Toggle } from "../../style/Header/NavbarStyles.ts";
import { lightTheme } from "../../theme.ts";

const Navbar:React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo>MANNN</Logo>
                </LogoWrapper>
                <ActionWrapper>
                    <Toggle onClick={toggleTheme}>
                        {
                            theme === lightTheme ? <IoMoonOutline size={24} /> : <IoSunnyOutline size={24} />
                        }
                    </Toggle>
                    <button>
                        <MdMenu size={30} />
                    </button>
                </ActionWrapper>
            </Wrapper>
        </Container>
    )
}

export default Navbar;