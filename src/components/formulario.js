import axios from "axios";
import { useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Formulario({
    selecionados,
    Title,
    Weekday,
    Name,})
{
    const [name, Setname] = useState("");
    const [cpf, SetCpf] = useState("");
    const ids = selecionados;
    const  navigate = useNavigate();
    function HandleForm(event){
        event.preventDefault();
        const requisição = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",{
           name,
            cpf,
           ids
        });
        Navegar();
        function Navegar(){
            navigate('/sucesso', {state: { 
                nome: name,
                dia: Weekday,
                hora: Name,
                assentos: selecionados,
                titulo: Title,
                cpf: cpf
    
            } } );    
        } 
        console.log(name, cpf, ids);
    }
    

    return(
        <Span>
            <form onSubmit={HandleForm}>
                <div>
                    <p>Nome do comprador:</p>
                    <input type="text"
                        onChange={(e) => Setname(e.target.value)}
                        value = {name}
                        required
                        placeholder="Digite seu nome..."
                    ></input>
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input 
                        type="number"
                        onChange={(e) => SetCpf(e.target.value)}
                        cpf = {cpf}
                        required
                        placeholder="Digite seu CPF..."
                    ></input>
                </div>
                <div className="caixabotao">
                <button type="submit" >Reservar assento(s)</button>
                </div>
            </form>
        </Span>);
}
const Span = styled.div`
font-family: 'Roboto', sans-serif;
form{
    border-color:red;
    font-size: 20px;
    height:190px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    color:#293845;
    align-items: flex-start; 
}
input{
    border-color:red;
    border-width:1px;
    border-color:#D4D4D4;
    border-style:solid;
    border-radius:5px;
    font-size:18px;
    width:327px;
    height:51px; 
}
.caixabotao{
    display:flex;
    justify-content: space-around;
    align-items: center; 
    width:100%;
}
button{
    border-width:0px;
    border-radius:3px;
    color:#ffffff;
    background-color:#E8833A;
    margin-top:57px;
    width:225px;
    height:42px;
}
div{
    margin-top:20px;
}
`;
 