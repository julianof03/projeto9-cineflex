import React from 'react';
import styled from 'styled-components';
export default function Topbar(){
    return(
        <Container>
            <p> CINEFLIX</p>
        </Container>
    );
}
const Container =  styled.div`
width: 360px;
height: 75px;
background-color: #c3cfd9;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #e8833a;
}
`;