import styled from "styled-components";
import {motion} from "framer-motion";

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

export const Info = styled.p`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1.3;
    text-align: center;
    color: ${({theme}) => theme.text2};
    margin-top: -8px;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`

export const Form = styled.form`
    width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 3px solid ${({theme}) => theme.border};
    border-radius: 18px;
    gap: 5px;

    @media (min-width: 768px) {
        width: 60%;
        padding: 20px;
    }
`

export const InputListWrapper = styled.div`
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

export const InputCard = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`

export const Title = styled.label`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
    cursor: pointer;
`

export const InputWrapper = styled.div`
    width: 100%;
    padding: 6px;
    border: 2px solid ${({theme}) => theme.border};
    border-radius: 5px;
    transition: all .2s ease-in-out;

    &:hover {
        border: 2px solid ${({theme}) => theme.hover};
    }
    
    &:focus-within {
        border: 2px solid ${({theme}) => theme.hover};
    }
`

export const Input = styled.input`
    width: 100%;
    height: auto;
    padding: 2px;
    font-size: 16px;
    letter-spacing: 1.2;
    outline: none;
    border: none;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text2};

    &:focus {
        outline: none;
        border: transparent;
    }
`

export const TextAreaWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 10px;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: auto;
    resize: none;
    padding: 2px;
    font-size: 16px;
    letter-spacing: 1.1;
    outline: none;
    border: none;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text2};

    &:focus {
        outline: none;
        border: transparent;
    }
`

export const Submit = styled(motion.input)`
    padding: 15px 20px;
    margin: 10px 0px 20px 10px;
    font-size: 18px;
    font-weight: 500;
    color: ${({theme}) => theme.background };
    background-color: ${({theme}) => theme.primary};
    border: none;
    outline: none;
    border-radius: 20px;
    letter-spacing: 1.3;
    cursor: pointer;
`