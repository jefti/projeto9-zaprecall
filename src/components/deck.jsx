import styled from "styled-components";
import FlashCards from "./flashcards";

export default function Deck({cards, responder}){
const elementos = cards.map((el,i)=> <FlashCards key = {"pergunta " + i} el={el} id = {i} responder = {responder} />)

    return (
        <Container>
            {elementos}
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