import React from "react";
import { Container, Wrapper, LogoWrapper, Logo, Info, SocialWrapper, Social, MiddleWrapper, MiddleBox, MiddleTitle, MiddleListWrapper, PageListItem, ResourceListItem, ContactWrapper, ContactListWrapper, ContactItemWrapper, ContactItem } from "../../style/Footer/FooterStyles.ts";
import { socialLists } from "../../datas/socilaLists";
import { resourceLists } from "../../datas/resourceLists";
import { contactLists } from "../../datas/contactLists";
import { navbarLists } from "../../datas/navbarLists.ts";
import { scrollDesktop, scrollMobile } from "../../utils/scroll.ts";

const Footer:React.FC = () => {

    const handleScroll = (id: string) => {
        if (window.innerWidth >= 768) {
            scrollDesktop(id);
        } else {
            scrollMobile(id);
        }
    }
    
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <Logo>MANNN</Logo>
                    <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur autem soluta hic illum facilis!</Info>
                    <SocialWrapper>
                        {
                            socialLists?.map((socialList, index: number) => {
                                const SocialIcon = socialList.icon
                                return (
                                    <Social key={index} href={socialList.target} title={socialList.title}>
                                        <SocialIcon size={26} />
                                    </Social>
                                )
                            })
                        }
                    </SocialWrapper>
                </LogoWrapper>
                <MiddleWrapper>
                    <MiddleBox>
                        <MiddleTitle>Resource</MiddleTitle>
                        <MiddleListWrapper>
                            {
                                resourceLists?.map((resource, index: number) => {
                                    return (
                                        <ResourceListItem href={resource.target} key={index} >{resource.title}</ResourceListItem>
                                    )
                                })
                            }
                        </MiddleListWrapper>
                    </MiddleBox>
                    <MiddleBox>
                        <MiddleTitle>Pages</MiddleTitle>
                        <MiddleListWrapper>
                            {
                                navbarLists?.map((navbarList, index: number) => {
                                    return (
                                        <PageListItem key={index} onClick={() => handleScroll(navbarList.target)}>{navbarList.title}</PageListItem>
                                    )
                                })
                            }
                        </MiddleListWrapper>
                    </MiddleBox>
                </MiddleWrapper>
                <ContactWrapper>
                    <MiddleTitle>Contact Me</MiddleTitle>
                    <ContactListWrapper>
                        {
                            contactLists?.map((contact, index) => {
                                const ContactIcon = contact.icon;
                                return (
                                    <ContactItemWrapper key={index}>
                                        <ContactIcon size={24} />
                                        <ContactItem href={contact.target}>{contact.title}</ContactItem>
                                    </ContactItemWrapper>
                                )
                            })
                        }
                    </ContactListWrapper>
                </ContactWrapper>
            </Wrapper>
        </Container>
    )
}

export default Footer;