import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: auto;
    background-color: ${({theme}) => theme.background};
    padding: 10px 20px;
    margin-top: 50px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-bottom: 0px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    border-top: 1px solid ${({theme}) => theme.text2};

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const LogoWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;

    @media (min-width: 768px) {
        width: calc(100vw / 3);
    }
`

export const Logo = styled.h2`
    display: inline;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1.4;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const Info = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.3;
    text-align: left;
    margin-top: -10px;
    color: ${({theme}) => theme.text2};

    @media (min-width: 768px) {
        font-size: 16px;
    }
`

export const SocialWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const Social = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

export const MiddleWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;

    @media (min-width: 768px) {
        width: calc(100vw / 3);
    }
`

export const MiddleBox = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;

    @media (min-width: 768px) {
        align-items: center;
    }
`

export const MiddleTitle = styled.h4`
    display: inline;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.4;
    color: ${({ theme }) => theme.text};
`

export const MiddleListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    @media (min-width: 768px) {
        align-items: center;
    }
`

export const ResourceListItem = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.text2};
    font-size: 18px;
    letter-spacing: 1.2;
    text-align: left;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

export const PageListItem = styled.button`
    text-decoration: none;
    color: ${({theme}) => theme.text2};
    font-size: 18px;
    letter-spacing: 1.2;
    text-align: left;
    background-color: ${({theme}) => theme.background};
    border: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

export const ContactWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;

    @media (min-width: 768px) {
        width: calc(100vw / 3);
    }
`

export const ContactListWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
`

export const ContactItemWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
`

export const ContactItem = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.text2};
    font-size: 17px;
    letter-spacing: 1.3;
    text-align: left;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`