import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import styled from "styled-components";
import FooterP1 from "./footerp1";

export default function Movie(){
    const [items, setItems] = useState([]);
    const { movieId } = useParams();
    const [footerM, setFooterM] = useState([]);
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);

		requisicao.then(resposta => {
			setItems(resposta.data.days);
            setFooterM(resposta.data);
		});
	}, []);
    return(
        <Span>
        <div className="title"><p>Selecione o horário</p></div>
        <Container>
        
           {items.map(item => 
            <div className="days">
                <p>{item.weekday} - {item.date}</p>
                <div>{item.showtimes.map(days => 
                    <Link to={`/assentos/${days.id}`} style={{textDecoration: "none"}}>
                        <div className="button" style={{textDecoration: "none"}} >{days.name}</div>
                    </Link>)}
                </div>
            </div>)} 
        </Container>
        <FooterP1 
        Poster = {footerM.posterURL}
        Title = {footerM.title}/>
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
width: 360px;
height: 860px;
color: #293b45;
font-family: 'Roboto', sans-serif;

display: flex;

flex-direction: column;
justify-content: space-between;
align-items: flex-start;
align-content: center;
div{
    height: 83px;
    width: 140px;
    bottom:0px;
    left: 0px;
    display: flex;
}
.days{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    height: 140px;
    margin-left: 40px;
    margin-bottom: 20px;
    width: 220px;
}
.button{
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-left: 8px;
    margin-top: 26px;
    width: 100px;
    height: 43px;
    color: #ffffff;
    background-color: #E8833A;
    border-radius: 2px;
}

`;