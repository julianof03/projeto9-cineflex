import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import styled from "styled-components";
import Renderbutton from "./seatbutton";

export default function Session(){
    const [items, setItems] = useState([]);
    const { idSessao } = useParams();

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
			setItems(resposta.data.seats);
		});
	}, []);

    const [selecionados, SetSelecionados] = useState([]);
    const newarr = [];

    return(
        <Container>
            <div className="seatBox">
            {items.map(item => 
                <Renderbutton 

                selecionados = {selecionados}
                SetSelecionados = {SetSelecionados}
                item = {item}/>)} 
            </div>
        </Container>
    );
}

const Container = styled.div`
    width:360px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;


.seatBox{
    width:300px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
}
`;

