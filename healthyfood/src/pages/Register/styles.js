import styled from "styled-components"

export const ButtonEstilizacao = styled.button`
margin-left: 10px;
color:snow;
background-color:#bcda5b;
border-radius: 8px;
border: none;
width:18vh;
height:6vh;
transition: all 0.3s ease;
overflow: hidden;
:hover {
-webkit-transform: scale(1.1);
-ms-transform: scale(1.1);
 transform: scale(1.1);
}
`
export const ContainerForm = styled.div`
background:url('https://media.istockphoto.com/photos/cooking-nd-seasoning-spices-border-on-black-slate-background-picture-id953140058?k=20&m=953140058&s=612x612&w=0&h=kxrRutXgHrwhs8KCtG2aFr5vZSM-Fb9NGYUGinntsdQ=');
background-size:100% 100%;
background-repeat: no-repeat;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
@media screen and (min-device-width: 390px) and (max-device-width: 844px) {
background:none;
}
`
export const DivInputForm = styled.form`
background-color:white;
height:72vh;
width:75vh;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
border-radius: 10px;
box-shadow: 4px 4px 4px #bcda5b;
@media screen and (min-device-width: 390px) and (max-device-width: 844px) {
height:52vh;
width:45vh;
}
`
export const ContainerBotoes = styled.div`
display:flex;
margin-top:18px;
justify-content:center;
`
export const ContainerLabel = styled.div`
display:grid;
width:48vh;
`
export const InputData = styled.input`
width:22vw;
margin: 7px;
text-align:center;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid black;
background-color: #eae7e7;
@media screen and (min-device-width: 390px) and (max-device-width: 844px) {
width:65vw;
margin: 5px;
}
`;

