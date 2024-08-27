import React from "react";
import { Container, Wrapper, LogoWrapper, Logo, Info, SocialWrapper, Social, MiddleWrapper, MiddleBox, MiddleTitle, MiddleListWrapper, MiddleListItem, ContactWrapper, ContactListWrapper, ContactItemWrapper, ContactItem } from "../../style/Footer/FooterStyles.ts";
import { socialLists } from "../../datas/socilaLists";
import { resourceLists } from "../../datas/resourceLists";
import { contactLists } from "../../datas/contactLists";
import { navbarLists } from "../../datas/navbarLists.ts";

const Footer:React.FC = () => {
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
                                        <MiddleListItem href={resource.target} key={index} >{resource.title}</MiddleListItem>
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
                                        <MiddleListItem key={index} href={navbarList.target}>{navbarList.title}</MiddleListItem>
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