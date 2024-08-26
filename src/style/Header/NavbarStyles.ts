import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 3px;
    background-color: ${({ theme }) => theme.background};
    box-sizing: border-box;
`

export const Wrapper = styled.nav`
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
`

export const LogoWrapper = styled.div`
    width: 50%;
    height: auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Logo = styled.h1`
    display: inline;
    font-size: 3.3vw;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    @media (max-width: 768px) {
        font-size: 5vw;
    }

    @media (max-width: 480px) {
        font-size: 6vw;
    }

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const ActionWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`

export const Toggle = styled.button`
    width: auto;
    height: auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`