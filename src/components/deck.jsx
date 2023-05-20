import styled from "styled-components";
import FlashCards from "./flashcards";

export default function Deck(){
    return (
        <Container>
            <FlashCards/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //margin-top: 150px;
    margin-bottom: 70px;
`