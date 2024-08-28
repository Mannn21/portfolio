import React, {useState} from "react";
import { MdMenu } from "react-icons/md";
import { useTheme } from "../../utils/themeChanger";
import { IoSunnyOutline, IoMoonOutline, IoCloseOutline } from "react-icons/io5";
import { Container, Wrapper, LogoWrapper, Logo, ActionWrapper, Toggle, DropdownButton, NavbarListContainer, NavbarList } from "../../style/Header/NavbarStyles.ts";
import { lightTheme } from "../../theme.ts";
import { navbarLists } from "../../datas/navbarLists.ts";
import { scrollDesktop, scrollMobile } from "../../utils/scroll.ts";

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const { theme, toggleTheme } = useTheme();

    const handleDropdown:React.MouseEventHandler = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (id: string) => {
        if (window.innerWidth >= 768) {
            scrollDesktop(id);
        } else {
            scrollMobile(id);
            setIsOpen(!isOpen)
        }
    }
    
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo>MANNN</Logo>
                </LogoWrapper>
                <NavbarListContainer isOpen={isOpen}>
                    {navbarLists.map((navbarList, index: number) => {
                        return (
                            <NavbarList key={index} onClick={() => handleScroll(navbarList.target)}>
                                {navbarList.title}
                            </NavbarList>
                        );
                    })}
                </NavbarListContainer>
                <ActionWrapper>
                    <Toggle onClick={toggleTheme}>
                        {
                            theme === lightTheme ? <IoMoonOutline size={24} /> : <IoSunnyOutline size={24} />
                        }
                    </Toggle>
                    <DropdownButton onClick={handleDropdown}>
                        {
                            isOpen ? <IoCloseOutline size={24} /> : <MdMenu size={24} />
                        }
                    </DropdownButton>
                </ActionWrapper>
            </Wrapper>
        </Container>
    )
}

export default Navbar;