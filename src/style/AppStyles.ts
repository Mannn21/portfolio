import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`