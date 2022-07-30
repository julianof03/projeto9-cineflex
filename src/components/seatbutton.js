import { useState} from "react";
import styled from "styled-components";
export default function Renderbutton({item}){
    const[clicked , SetClicked ] = useState(false);
    console.log(clicked);
    return(<Wrapper onClick={() => SetClicked(!clicked) } className="disponivel">{item.name}</Wrapper>);
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
    border-width: 2px;
    border-style: solid;
    color:#000000;
    background-color: ${(clicked) => (clicked ? 'c3cfd9':'fbe192') };
    border-color:#808f9d;
`;