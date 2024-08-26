import React from "react";
import { serviceLists } from "../../datas/serviceLists";
import { Card, Container, Header, Icon, ServiceListWrapper, Wrapper, DescWrapper, Title, Desc } from "../../style/Service/ServiceStyles.ts"

const Service:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Header>Service Me Components</Header>
                <ServiceListWrapper>
                    {
                        serviceLists?.map((serviceList, index) => {
                            const IconComponent = serviceList.icon

                            return (
                                <Card key={index}>
                                    <Icon color={serviceList.color}>
                                        <IconComponent size={35} />
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