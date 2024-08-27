import React from "react";
import { experienceLists } from "../../datas/experienceLists.ts";
import { Card, Container, HeaderWrapper, Header, Icon, ExperienceListWrapper, Wrapper, DescWrapper, TitleWrapper, Duration, Title, Desc } from "../../style/Experience/ExperienceStyles.ts"

const Experience:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderWrapper >
                    <Header>Take a look at my experience</Header>
                </HeaderWrapper>
                <ExperienceListWrapper>
                    {
                        experienceLists?.map((experienceList, index) => {
                            const IconComponent = experienceList.icon

                            return (
                                <Card key={index}>
                                    <Icon color={experienceList.color}>
                                        <IconComponent size={38} />
                                    </Icon>
                                    <DescWrapper>
                                        <TitleWrapper>
                                            <Title>{experienceList.title}</Title>
                                            <Duration>{experienceList.duration}</Duration>
                                        </TitleWrapper>
                                        <Desc>{experienceList.desc}</Desc>
                                    </DescWrapper>
                                </Card>
                            )
                        })
                    }
                </ExperienceListWrapper>
            </Wrapper>
        </Container>
    )
}

export default Experience;