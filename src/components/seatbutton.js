import { useState} from "react";
import styled from "styled-components";

export default function Renderbutton({item, selecionados, SetSelecionados, newarr}){

    const disponivel = item.isAvailable;
    const[clicked , SetClicked ] = useState(false);
    if(disponivel){
        return(
        <Wrapper onClick={() => {
            if(!clicked){
                newarr = [...selecionados, item.id];
                SetSelecionados(newarr);
                SetClicked(!clicked);  
            }     }} 
            clicked = {clicked} 
            disponivel = {disponivel}>{item.name}
        </Wrapper>);  
    }else{
        return(<Wrapper 
            onClick={() => {
                alert("Assento não Disponivel");     }} 
            clicked = {clicked} 
            disponivel = {disponivel}>{item.name}</Wrapper>); 
    }
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:13px;
    margin-left:3px;
    margin-right:3px;
    margin-bottom:6px;
    border-radius:13px;
    width: 26px;
    height: 26px;
    border-width: 1px;
    border-style: solid;
    color:#000000;
    background-color: ${(props) => {
        if(props.disponivel)
        {
            if(props.clicked){
                return('#8dd7cf');
            }else{
                return('#c3cfd9');
            }
           
        }else{
            return('#fbe192');
        }
        } };
    border-color:${(props) => {
        if(props.disponivel)
        {
            if(props.clicked){
                return('#1aae9e');
            }else{
                return('#7b8b99');
            }
           
        }else{
            return('#f7c52b');
        }
        } };

`;