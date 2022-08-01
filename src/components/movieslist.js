import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Movieslist(){
    const [items, setItems] = useState([]);
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);
    return(
        <Span>
            <div className="title"><p>Selecione o filme</p></div>
            
        <Container>
        
           {items.map(item => <div><Link to={`/filme/${item.id}`}><img src={item.posterURL} alt="poster"/></Link></div>)} 
        </Container>
        </Span>
    );
}
const Span = styled.div`

.title{
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction:column;
align-items:center;
color: #293845;
font-size: 24px;
justify-content:center;
width: 374px;
height: 110px; 
}
`;
const Container = styled.div`
padding-top: 20px;
width: 360px;
height: 860px;
background-color: #ffffff;
display: flex;
justify-content: space-around;
align-content: flex-start;
flex-wrap: wrap;

div{  
    margin-bottom: 11px;
    padding: 10px;
    height: 193px;
    width: 129px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
}
img{
    position: absolute;
    height: 193px;
    width: 129px;
}
`;