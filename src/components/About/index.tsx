import React from "react";
import MobileImage from "../../assets/mobile.webp";
import { useTheme } from "../../utils/themeChanger";
import { Container, Wrapper, ImageWrapper, ImageMask, Image,InfoWrapper, Header, Info, Download } from "../../style/About/AboutStyles";

const About:React.FC = () => {
    const { theme } = useTheme()
    
    return (
        <Container id="about">
            <Wrapper>
                <ImageWrapper>
                    <ImageMask>
                        <Image src={MobileImage} alt="me" />
                    </ImageMask>
                </ImageWrapper>
                <InfoWrapper>
                        <Header>About Me</Header>
                        <Info>Hi, I'm Aimanurrofi. I'm passionate about technology, especially web development and databases. I've been self-learning web development and I'm eager to keep improving my skills. I'm also excited to contribute to meaningful projects and be part of their growth.</Info>
                        <Download whileTap={{ scale: .9 }} whileHover={{ scale: 1.05, backgroundColor: theme.hover }} href="/public/MannPortofolio.pdf" download>Download My CV</Download>
                </InfoWrapper>
            </Wrapper>
        </Container>
    )
}

export default About;