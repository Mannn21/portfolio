import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 2px;
`

export const Header = styled.h3`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
`

export const ServiceListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const Card = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

export const Icon = styled.span<{ color: string }>`
    color: ${({ theme, color }) => theme[color]};
`;

export const DescWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
`

export const Desc = styled.p`
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1.2;
    color: ${({theme}) => theme.text2};
`