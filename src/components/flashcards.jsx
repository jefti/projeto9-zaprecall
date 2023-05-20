import { useState } from "react"
import React from "react";
import styled from "styled-components"

export default function FlashCards(){
    const [estado, setEstado] = React.useState(0);
    const [estadoTexto, setEstadoTexto] = React.useState('black');
    console.log(estadoTexto);
    function MudarEstado(){
        if(estado <2){
        const novoestado = Number(estado) +1;
        setEstado(novoestado);
        //alert('novo estado é ' + novoestado)
        } else{
            setEstado(0);
        }
    }
    function MudarTexto(cor){
        setEstadoTexto(cor);
        MudarEstado();
    }
    return (
        <>
            {estado === 0 &&
                <Estado1>
                    <Texto color={estadoTexto}>flashcards {estado} </Texto>
                    <img src="/assets/seta_play.png" alt="play" onClick={()=> MudarEstado()} />
                </Estado1>
            }

            {estado === 1 &&
                <Estado2>
                    <p>Pergunta</p>
                    <img src="/assets/seta_virar.png" alt="play" onClick={()=> MudarEstado()} />
                </Estado2>
            }

            {estado === 2 &&
                <Estado3>
                <p>Resposta</p>
                <Botoes>
                    <BtnRegistro color={'#FF3030'} onClick={()=> MudarTexto('red')}>Não lembrei</BtnRegistro>
                    <BtnRegistro color={'#FF922E'} onClick={()=> MudarTexto('#FF3030')}>Quase não lembrei</BtnRegistro>
                    <BtnRegistro color={'#2FBE34'} onClick={()=> MudarTexto('#FF3030')}>Zap!</BtnRegistro>
                </Botoes>
                
                </Estado3>
            }
        </>
    )
}

const Estado1 = styled.div`
    height: 65px;
    width: 80%;
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-between;

    img{
        width: 20px;
    }
`

const Estado2 = styled.div`
    height: 130px;
    width: 80%;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    padding: 15px;
    align-items: space-between;
    justify-content: space-between;
    position: relative;

    img{
        width: 20px;
        height: 30px;
        position: absolute;
        right: 15px;
        bottom: 6px;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        color: #333;
    }
`

const Estado3 = styled.div`
    height: 130px;
    width: 80%;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        color: #333;
    }
`
const Botoes = styled.div`
    display: flex;
`
const BtnRegistro = styled.button`
    width: 85px;
    height: 37px;
    background: ${(props) => props.color};
    border: none;
    border-radius: 5px;
    margin: 3px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`

const Texto = styled.p`
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.color};
        text-decoration: ${estadoTexto=='black'?'none':'line-through'}
`