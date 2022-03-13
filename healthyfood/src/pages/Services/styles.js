import styled from "styled-components";

export const Container = styled.div`
background:url(img/bloco_services.svg);
background-repeat: no-repeat;
height:100vh;
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:[row1-start] 25% [row1-end row2-start] 35% [row2-end];
@media screen and (min-device-width: 320px) and (max-device-width: 667px) {
grid-template-columns:1fr;
background-size:100vw 100vw;
height:55vh;
text-align:center;
}
`
export const Paragraph =styled.p`
color: #c1c6d3;
font-size:3vh;
margin-right:20vh;
grid-column:2/2;
text-align:left;
@media screen and (min-device-width: 390px) and (max-device-width: 884px) {
font-size:16px;
text-align:center;
margin-right:0vh;
}
 `
export const ContainerServices = styled.div`
grid-column:2/2;
grid-row:2/3;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
grid-column:1;
grid-row:1;
margin-left:2vh;
background-color:white;
opacity : 0.9; 
height:38vh;
margin-top:2em;
}
`
export const Button = styled.button`
grid-column:2/2;
width:20vh;
height:7vh;
background-color:#bcda5b;
color:white;
border:none;
border-radius:4px;
@media screen and (min-device-width: 320px) and (max-device-width: 667px) {
font-size:16px;
width:15vh;
height:4vh;
}
`
export const H1 = styled.h1`
grid-column:2/2;
margin: 0 0 0 0;
@media screen and (min-device-width: 320px) and (max-device-width: 667px) {
font-size:16px;
justify-self:center;
align-items:center;
}
`







