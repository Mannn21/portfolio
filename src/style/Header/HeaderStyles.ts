import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: auto;
    border: 1px solid green;
    padding: 4px 8px;

    @media (max-width: 768px) {
        padding: 4px 6px;
    }

    @media (max-width: 480px) {
        padding: 4px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: red;

    /* @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        padding: 8px 12px;
    } */
`