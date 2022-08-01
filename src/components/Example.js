import styled from "styled-components";
export default function Example(){
    return(
        <Container>
            <div className="caixaExample">
                <div className="example case01"></div>
                <p>Selecionado</p>
            </div>
            <div className="caixaExample">
                <div className="example case02"></div>
                <p>Disponível</p>
            </div>
            <div className="caixaExample">
                <div className="example case03"></div>
                <p>Indisponível</p>
            </div>
        </Container>);
    
}
const Container = styled.div`
    margin-top: 20px;
    margin-bottom:150px;
    height: 40px;
    width: 375px;
    border-width: 1px;
    display:flex;
    justify-content: space-evenly;

.caixaExample{
    height:80px;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-right: 20px;
}
p{
    margin-top: 10px;
}
.example{
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius:13px;
    width: 26px;
    height: 26px;
    border-width: 2px;
    border-style: solid;
    margin-top: 10px;
    border-width: 1px;
    height:26px;
    width:26px;
}
.case01{
    border-color: #1aae9e;
    background-color: #8dd7cf;
}
.case02{
    border-color: #7b8b99;
    background-color: #c3cfd9;
}
.case03{
    border-color: #f7c52b;
    background-color: #fbe192;
}
`;