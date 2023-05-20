import styled from "styled-components"

export default function Footer(){
    return(
        <Container>
            0/8 CONCLUÍDOS
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
    display: flex;
    position: fixed;
    bottom:0px;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`