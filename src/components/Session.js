import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";
import styled from "styled-components";

import Renderbutton from "./seatbutton";
import Example from "./Example";
import Formulario from "./formulario";
import FooterP2 from "./footerp2";

export default function Session(){
    const [items, setItems] = useState([]);
    const [footerM, setFooterM] = useState([]);
    const [footerD, setFooterD] = useState([]);
    const [footerN, setFooterN] = useState([]);

    const { idSessao } = useParams();

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
			setItems(resposta.data.seats);
            setFooterM(resposta.data.movie);
            setFooterD(resposta.data.day);
            setFooterN(resposta.data.name);

		});
	}, []);
    
    const [selecionados, SetSelecionados] = useState([]);
    const newarr = [];
    return(
        <Span>
             <div className="title"><p>Selecione o(s) assento(s)</p></div>
        <Container>
            <div className="seatBox">
            {items.map(item => 
                <Renderbutton 

                selecionados = {selecionados}
                SetSelecionados = {SetSelecionados}
                item = {item}/>)} 
            </div>

            <Example />
                    
            <Formulario 
            selecionados = {selecionados}
            SetSelecionados = {SetSelecionados}
            Title = {footerM.title}
            Weekday = {footerD.date}
            Name = {footerN}/>
        </Container>
        <FooterP2 
        Poster = {footerM.posterURL}
        Title = {footerM.title}
        Weekday = {footerD.weekday}
        Name = {footerN}
        />
        <div className="Footer">
            <div className="Posterbox">
                <img src={footerM.posterURL} alt="poster"></img>
            </div>
            <p>{footerM.title}<br/>{footerD.weekday} - {footerN}</p>
            </div>
        </Span>
    );
}

const Span = styled.div`
margin-top:90px;
.title{
font-family: 'Roboto', sans-serif;
display: flex;
flex-direction:column;
align-items:center;
color: #293845;
font-size: 24px;
justify-content:center;
width: 374px;
height: 100px; 

}
.Footer{
    display:flex;
    align-items: center;
    justify-content:flex-start;
    position:fixed;
    bottom:0px;
    width:100%;
    height:117px;
    background-color:#dfe6ed;
}
.Footer div{
    margin-left:10px;
}
.Footer p{
    font-size: 26px;
    color:#293845;
    font-family: 'Roboto', sans-serif;
    margin-left:14px; 
}
.Posterbox{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 2px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:64px;
    height:89px;
    background-color:#ffffff;
}
.Footer div img{
    height:72px;
    width:48px;
}
`;

const Container = styled.div`
    width:375px;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;

.seatBox{
    margin-top:120px;
    width:360px;
    height: 280px;
    padding-top:40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-around;
}

`;


