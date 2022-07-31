import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import styled from "styled-components";
import Renderbutton from "./seatbutton";


function Formulario({selecionados}){
    const [name, Setname] = useState("");
    const [cpf, SetCpf] = useState("");
    const ids = selecionados;
    function handleForm(event){
        event.preventDefault();
        const requisição = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",{
            name,
            cpf,
            ids
        });
    }
    

    return(
    <form onSubmit={handleForm}>
        <input type="text"
        onChange={(e) => Setname(e.target.value)}
        value = {name}
        required
        ></input>
        <input type="number"
        onChange={(e) => SetCpf(e.target.value)}
        cpf = {cpf}
        required></input>
        <button type="submit">enviar</button>
    </form>);
}

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
            <Formulario 
            selecionados = {selecionados}
            SetSelecionados = {SetSelecionados}/>
        </Container>
    );
}

const Container = styled.div`
    width:360px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;

form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
}
.seatBox{
    margin-top:10px;
    width:300px;
    height: 280px;
    padding-top:40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
}
`;

