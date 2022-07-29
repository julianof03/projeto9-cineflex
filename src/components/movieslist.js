import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
export default function Movieslist(){
    const [items, setItems] = useState([]);
    const params = useParams();
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);
    return(
        <Container>
           {items.map(item => <div><img src={item.posterURL} alt="poster"/></div>)} 
        </Container>
    );
}

const Container = styled.div`
width: 360px;
height: 860px;
background-color: aliceblue;
display: flex;
justify-content: space-around;
align-content: flex-start;
flex-wrap: wrap;
overflow-y: scroll;

div{
    position: relative;
    margin-top: 25px;
    height: 193px;
    width: 129px;
    background-color: lightgreen;
}
img{
    position: absolute;
    height: 193px;
    width: 129px;
}
`;