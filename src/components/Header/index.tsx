import React from "react";
import Navbar from "./Navbar";
// import Jumbotron from "./Jumbotron";
import { Container, Wrapper } from "../../style/Header/HeaderStyles.ts"

const Header:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Navbar />
                {/* <Jumbotron /> */}
            </Wrapper>
        </Container>
    )
}

export default Header;