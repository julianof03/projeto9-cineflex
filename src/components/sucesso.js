import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
export default function Sucesso(){

    const {state} = useLocation();
    const {nome, dia, hora, assentos, titulo, cpf} = state;
    console.log(assentos);
    return(       
        <Container>
           <div className="title">
            <p>Pedido feito com sucesso!</p>
           </div>
           <div>
                <div className="info">
                    <h1>Filme e sessão</h1>
                    <p>{titulo}</p>
                    <p>{dia} {hora}</p>
                </div> 
                <div className="info">
                    <h1>Ingressos</h1>
                    {assentos.map(assentos => <p>Assento {assentos}</p>)} 
                </div> 
                <div className="info">
                    <h1>Comprador</h1>
                    <p>{nome}</p>
                    <p>{cpf}</p>
                </div> 
            </div>
            <Link to={`/`} style={{textDecoration: "none"}}>
            <div className="Botaofinal">
            Voltar pra Home
            </div>
            </Link>
        </Container>
    );
    
}
const Container = styled.div`
    width:375px;
    margin-top:90px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

.title{
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction:column;
    align-items:center;
    color: #247a6b;
    font-size: 24px;
    font-weight: 700;
    justify-content:center;
    width: 374px;
    height: 110px; 
}
.info{
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    color: #293845;
    font-size: 24px;
    font-weight: 700;
    justify-content:center;
    margin-left: 20px;
    width: 374px;
    height: 110px; 
}
.info p{
    font-size: 22px;
    font-weight: 400;
}
.Botaofinal{
    margin-top:100px;
    width: 225px;
    height:42px;
    background-color: #e8833a; 
    display:flex;
    align-items: center;
    justify-content:center;
    color: #ffffff;
    border-radius: 2px;
    font-size:18px;
    font-family: 'Roboto', sans-serif;
}
`;