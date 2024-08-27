import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;

    @media (min-width: 768px) {
        margin-top: 0px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;

    @media (min-width: 768px) {
        padding: 5px 10px;
        gap: 10px;
    }
`

export const HeaderWrapper = styled.div`
    width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (min-width: 768px) {
        width: 60%;
        padding: 10px;
    }
`

export const Header = styled.h3`
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
    
    @media (min-width: 768px) {
        font-size: 40px;
    }
`

export const ExperienceListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`

export const Card = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`

export const Icon = styled.span<{ color: string }>`
    color: ${({ theme, color }) => theme[color]};
    margin-top: 40px;
`;

export const DescWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    @media (min-width: 768px) {
        width: 50%;
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h4`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
    
    @media (min-width: 768px) {
        font-size: 24px;
    }
    `

export const Duration = styled.span`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.2;
    color: ${({theme}) => theme.text2};

    @media (min-width: 768px) {
        font-size: 15px;
    }
`

export const Desc = styled.p`
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 1.4;
    color: ${({theme}) => theme.text2};
    margin-top: -20px;
`