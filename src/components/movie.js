import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import styled from "styled-components";

export default function Movie(){
    const [items, setItems] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);

		requisicao.then(resposta => {
			setItems(resposta.data.days);
		});
	}, []);
    const newarr = [];
    newarr.push(items);
    console.log(items)
    return(
        <Container>
           {items.map(item => 
            <div className="days">
                <p>{item.weekday} - {item.date}</p>
                <div>{item.showtimes.map(days => <div className="button">{days.name}</div>)}</div>
            </div>)} 
        </Container>
    );
}

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

overflow-y: scroll;
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