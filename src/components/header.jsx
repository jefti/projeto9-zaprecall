import styled from "styled-components"
export default function Header(){
    return (
    <Topo>
        <img src="/assets/logo2.png" alt="Logo" />
        <p>ZapRecall</p>
    </Topo>
    )
}

const Topo = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    background-color: #FB6B6B;
    align-items: center;
    justify-content: center;
    //position: fixed;
    //top: 0px;
    img{
        width: 52px;
        height: 60px;
    }
    p{
        font-family: 'Righteous', cursive;
        font-weight: 400;
        color: white;
        font-size: 36px;
        line-height: 45px;
        margin: 0px 20px;
    }
`