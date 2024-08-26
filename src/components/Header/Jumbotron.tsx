import React from "react";
import Me from "../../assets/me.png";
import { Container, Description, Greetings, Image, ImageMask, ImageWrapper, InfoWrapper, Wrapper } from "../../style/Header/JumbotronStyles.ts";

const Jumbotron:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <InfoWrapper>
                    <Greetings>Hello, I'm Aimanurrofi</Greetings>
                    <Description>I love design and product website</Description>
                </InfoWrapper>
                <ImageWrapper>
                    <ImageMask>
                        <Image src={Me} alt="me" />
                    </ImageMask>
                </ImageWrapper>
            </Wrapper>
        </Container>
    )
}

export default Jumbotron;