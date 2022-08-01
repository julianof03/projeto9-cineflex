import styled from "styled-components";
export default function FooterP2({ 
    Poster,
    Title,
    Weekday,
    Name,}){
    return(
        <Span>
            <div className="Footer">
            <div className="Posterbox">
                <img src={Poster} alt="poster"></img>
            </div>
            <p>{Title}<br/>{Weekday} - {Name}</p>
            </div>
        </Span>
    );
    
}
const Span = styled.div`
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