import React from "react";
import MobileImage from "../../assets/mobile.webp";
import { Container, Wrapper, ImageWrapper, ImageMask, Image,InfoWrapper, Header, Info } from "../../style/About/AboutStyles";

const About:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <ImageMask>
                        <Image src={MobileImage} alt="me" />
                    </ImageMask>
                </ImageWrapper>
                <InfoWrapper>
                        <Header>About Me</Header>
                        <Info>Hi, I'm Aimanurrofi. I'm passionate about technology, especially web development and databases. I've been self-learning web development and I'm eager to keep improving my skills. I'm also excited to contribute to meaningful projects and be part of their growth.</Info>
                </InfoWrapper>
            </Wrapper>
        </Container>
    )
}

export default About;