import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;

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

export const ListWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;

    @media (min-width: 768px) {
        flex-direction: row;
        margin-top: 0px;
    }
`

export const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 50px 0px;

  @media (max-width: 767px) {
    &:nth-child(2) {
      border-top: 1px solid ${({ theme }) => theme.border};
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
    &:nth-child(3) {
        padding: 50px 0px 0px 0px;
    }
  }

  @media (min-width: 768px) {
    width: calc(100% / 3);
    padding: 0px;
    &:nth-child(2) {
      border-left: 1px solid ${({ theme }) => theme.border};
      border-right: 1px solid ${({ theme }) => theme.border};
    }
  }
`;

export const CardHeaderWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-bottom: -20px;
`

export const Icon = styled.span<{ color: string }>`
    color: ${({ theme, color }) => theme[color]};
`

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.3;
    color: ${({theme}) => theme.text};
    margin-top: 4px;
    
    @media (min-width: 768px) {
        font-size: 24px;
    }
`

export const PointWrapper = styled.div`
    width: 100%;
    height: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const Point = styled.span`
    font-size: 17px;
    letter-spacing: 1.3;
    text-align: center;
    color: ${({theme}) => theme.text2};
`