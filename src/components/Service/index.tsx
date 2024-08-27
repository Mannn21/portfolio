import React from "react";
import { serviceLists } from "../../datas/serviceLists";
import { Card, Container, HeaderWrapper, Header, Info, Icon, ServiceListWrapper, Wrapper, DescWrapper, Title, Desc } from "../../style/Service/ServiceStyles.ts"

const Service:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderWrapper >
                    <Header>My Services</Header>
                    <Info>I possess a diverse skill set that allows me to handle a wide range of tasks, from design to backend development. Below are some of the key abilities and expertise I bring to the lists.</Info>
                </HeaderWrapper>
                <ServiceListWrapper>
                    {
                        serviceLists?.map((serviceList, index) => {
                            const IconComponent = serviceList.icon

                            return (
                                <Card key={index}>
                                    <Icon color={serviceList.color}>
                                        <IconComponent size={38} />
                                    </Icon>
                                    <DescWrapper>
                                        <Title>{serviceList.title}</Title>
                                        <Desc>{serviceList.desc}</Desc>
                                    </DescWrapper>
                                </Card>
                            )
                        })
                    }
                </ServiceListWrapper>
            </Wrapper>
        </Container>
    )
}

export default Service;