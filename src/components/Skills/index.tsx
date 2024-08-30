import React from "react";
import { skills } from "../../datas/skillsLists";
import { Container, Wrapper, HeaderWrapper, Header, Info, ListWrapper, Card, CardHeaderWrapper, Icon, Title, PointWrapper, Point } from "../../style/Skills/SkillsStyles";

const Skills: React.FC = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <HeaderWrapper>
                    <Header>Skills</Header>
                    <Info>Here are some of the skills and tools I have mastered, which will help you trust the services I provide. From building interfaces to creating APIs, I am proficient with the tools I use.</Info>
                </HeaderWrapper>
                <ListWrapper>
                    {
                        skills?.map((skill, index) => {
                            const SkillIcon = skill.icon
                            return (
                                <Card key={index}>
                                    <CardHeaderWrapper>
                                        <Icon color={skill.color}>
                                            <SkillIcon size={60} />
                                        </Icon>
                                        <Title>
                                            {skill.title}
                                        </Title>
                                    </CardHeaderWrapper>
                                    <PointWrapper>
                                        {
                                            skill.points?.map((point, index) => {
                                                return (
                                                    <Point key={index}>
                                                        {point}
                                                    </Point>
                                                )
                                            })
                                        }
                                    </PointWrapper>
                                </Card>
                            )
                        })
                    }
                </ListWrapper>
            </Wrapper>
        </Container>
    )
}

export default Skills;