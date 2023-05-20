import { useState } from "react"
import React from "react";
import styled from "styled-components"

export default function FlashCards({el,id,responder}){
    const {answer, question} = el;
    const [estado, setEstado] = React.useState(0);
    const [estadoTexto, setEstadoTexto] = React.useState({cor:'black',estilo:'none'});

    function MudarEstado(){
        if(estado <2){
        const novoestado = Number(estado) +1;
        setEstado(novoestado);
        //alert('novo estado é ' + novoestado)
        } else{
            responder();
            setEstado(0);
        }
    }
    function MudarTexto(cor){
        let novoEstado = {...estadoTexto}
        novoEstado.cor = cor;
        novoEstado.estilo = 'line-through';
        setEstadoTexto(novoEstado);
        MudarEstado();
    }
    return (
        <>
            {estado === 0 &&
                <Estado1>
                    <Texto color={estadoTexto.cor} estilo = {estadoTexto.estilo}>Pergunta {id +1} </Texto>
                    {estadoTexto.cor === 'black' &&
                        <img src="/assets/seta_play.png" alt="play" onClick={()=> MudarEstado()} />
                    }
                                    
                    {estadoTexto.cor === '#FF3030' &&
                        <img src="/assets/icone_erro.png" alt="play" />
                    }

                    {estadoTexto.cor === '#FF922E' &&
                        <img src="/assets/icone_quase.png" alt="play" />
                    }

                    {estadoTexto.cor === '#2FBE34' &&
                        <img src="/assets/icone_certo.png" alt="play" />
                    }
                
                
                
                </Estado1>
            }

            {estado === 1 &&
                <Estado2>
                    <p>{question}</p>
                    <img src="/assets/seta_virar.png" alt="play" onClick={()=> MudarEstado()} />
                </Estado2>
            }

            {estado === 2 &&
                <Estado3>
                <p>{answer}</p>
                <Botoes>
                    <BtnRegistro color={'#FF3030'} onClick={()=> MudarTexto('#FF3030')}>Não lembrei</BtnRegistro>
                    <BtnRegistro color={'#FF922E'} onClick={()=> MudarTexto('#FF922E')}>Quase não lembrei</BtnRegistro>
                    <BtnRegistro color={'#2FBE34'} onClick={()=> MudarTexto('#2FBE34')}>Zap!</BtnRegistro>
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
        text-decoration: ${(props) => props.estilo};
`