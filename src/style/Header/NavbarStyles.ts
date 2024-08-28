import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: 768px) {
        padding: 10px 30px;
    }
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
    z-index: 99;
`

export const Logo = styled.h1`
    display: inline;
    font-size: 5vw;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    @media (min-width: 480px) and (max-width: 768px) {
        font-size: 4vw;
    }

    @media (min-width: 768px) {
        font-size: 3.2vw;
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
    z-index: 99;
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

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        transition: all .2s ease-in-out;
        color: ${({ theme }) => theme.background};
    }

    @media (min-width: 768px) {
        padding: 10px;
    }
`

export const DropdownButton = styled.button`
    width: auto;
    height: auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.2px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    cursor: pointer;
    border-radius: 2px;

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        transition: all .2s ease-in-out;
        color: ${({ theme }) => theme.background};
    }

    @media (min-width: 480px) and (max-width: 768px) {

    }

    @media (min-width: 768px) {
        display: none;
    }
`

export const NavbarListContainer = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    z-index: 1;

    @media (max-width: 768px) {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.background};
        padding: 20px 0;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-200%)')};
        transition: transform 0.3s ease-in-out;
        z-index: 10;

        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 25px;
    }
`;

export const NavbarList = styled.button`
    font-size: 3.8vw;
    text-decoration: none;
    color: ${({theme}) => theme.text};
    letter-spacing: 1.2;
    transition: all .2s ease-in-out;
    background-color: ${({theme}) => theme.background};
    border: none;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.primary};
    }

    @media (min-width: 768px) {
        font-size: 1.5vw;
    }
`