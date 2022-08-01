import React from 'react';
import styled from 'styled-components';
export default function Topbar(){
    return(
        <Container>
            <p> CINEFLEX</p>
        </Container>
    );
}
const Container =  styled.div`
width: 375px;
height: 75px;
background-color: #c3cfd9;
display: flex;
align-items: center;
justify-content: center;
position:fixed;
top: 0px;
z-index:1;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #e8833a;
}
`;