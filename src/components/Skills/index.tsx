import React from "react";
import { skills } from "../../datas/skillsLists";
import { Container, Wrapper, HeaderWrapper, Header, Info, ListWrapper, Card, CardHeaderWrapper, Icon, Title, PointWrapper, Point } from "../../style/Skills/SkillsStyles";

const Skills: React.FC = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <HeaderWrapper>
                    <Header>Skills</Header>
                    <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic blanditiis odio nostrum, culpa eius dolores esse excepturi, debitis dolorum, soluta quam amet tempore voluptatem.</Info>
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