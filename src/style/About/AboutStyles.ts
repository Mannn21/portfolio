import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 800px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    
    @media (min-width: 768px) {
        height: 80vh;
        margin-top: 40px;
        padding: 10px 30px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
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
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-position: bottom;
    object-fit: cover;
    border-radius: 30px;
    overflow: hidden;

    @media (min-width: 768px) {
        width: 60%;
        height: 100%;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const InfoWrapper = styled.div`
    width: 85%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;

    @media (min-width: 768px) {
        width: 45%;
        justify-content: center;
        align-items: flex-start;
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

export const Info = styled.p`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1.3;
    text-align: left;
    color: ${({theme}) => theme.text2};
    margin-top: -8px;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`