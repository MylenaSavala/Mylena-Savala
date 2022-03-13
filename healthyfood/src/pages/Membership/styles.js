import styled from "styled-components";

export const Container = styled.div`
background:url(img/bloco_final_image.svg);
background-repeat: no-repeat;
background-position:right top;
height:100vh;
display:grid;
grid-template-columns: 1fr 2fr 3fr;
grid-template-rows:repeat(6,1fr);
@media screen and (min-device-width: 320px) and (max-device-width: 844px) {
grid-template-columns:1fr;
margin-top:40vh;
height:80vh;
width:55h;
text-align:center;
  }
`
export const Title =styled.h1`
grid-column:2;
color:#2f3651;
`
export const MainContainer =styled.div`
grid-column:2;
grid-row:2/6;
margin-left:2vh;
background-color:white;
opacity : 0.9; 
height:38vh;
margin-top:5em;
@media screen and (min-device-width: 320px) and (max-device-width: 844px) {
margin-left:0px;
  }

`
export const Button = styled.button`
grid-column:2;
grid-row:4/6;
margin-left:10px;
width: 9.2vh;
height:5.5vh;
box-shadow: 1px 2px 2px  #888888;
background-color:#bcda5b;
color:white;
border:none;
justify-self:center;
border-radius:4px;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
    grid-column:1;
    grid-row:5/6;
    margin-left:5px;
  }
`
export const InputEmail = styled.input`
grid-column:2;
grid-row:4/6;
width: 40vh;
height:5vh;
color:#c1c6d3;
`





