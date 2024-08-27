import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 800px;
    margin-top: -40px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};

    @media (min-width: 768px) {
        height: calc(100vh - 70px);
        padding: 10px 30px;
        margin-top: 70px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
    }
`

export const InfoWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    margin-bottom: -90px;

    @media (min-width: 768px) {
        width: 45%;
        justify-content: center;
        align-items: flex-start;
    }
`

export const Greetings = styled.h2`
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text2};
    text-align: center;

    @media (min-width: 768px) {
        font-size: 2.2vw;
    } 
`

export const Description = styled.h2`
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
    margin-top: -10px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 4vw;
        text-align: left;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 55%;
        height: 100%;
    }
`

export const ImageMask = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-position: center;
    object-fit: cover;
    border-radius: 0% 0% 50% 50%;
    overflow: hidden;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`