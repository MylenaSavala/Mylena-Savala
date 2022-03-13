import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const MainContainer = styled.div `
background:url(img/Illustration.svg);
background-position:right top;
background-repeat: no-repeat;
text-align:center;
height:115vh;
margin: ${px2vw(0)};
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
background-size:120vw 100vw;
background-position:left top;
height:68vh;
}
`
export const Container = styled.div`
display:flex;
flex-direction:column;
height:auto;
width:auto;
`
export const TopContainer = styled.div`
display:flex;
justify-content:space-around;
color:#bcda5b;
width: ${px2vw(320, 320)};
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  color:#006400	;
}
`
export const HeaderMenu = styled.div` 
display:flex;
justify-content:space-between;
color:snow;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
flex-direction:column;
justify-content:center;
margin: 0px 0px 0px 0px;
}
` 
export const Title =styled.a`
margin: 2em 1em 2em;
text-decoration:none;
color:white;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
margin: 0px 0px 0px 0px;
opacity : 0.9; 
font-size: 12px;
}
`
export const ButtonRegister = styled.button` 
background-color:snow;
border:none;
border-radius:5px;
margin-top: 2.5vh;
width:18vh;
height:6vh;
color:#bcda5b;
font-size:16px;
font-weight: bold;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  margin-top: 0px;
  width:10vh;
  height:2vh;
  font-size: 10px;
}
` 
export const Search = styled.div` 
display:flex;
flex-direction:column;
max-width:50vh;
font-size:2vw;
margin-left:15vh;
margin-top:16vh;
width: ${px2vw(320, 320)};
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
margin-left:0;
align-items:center;
background-color:white;
margin-top:40vh;
}
` 
export const CampoInput=styled.input`
  width: 28em;
  height: 3em;
  margin-right:1em;
  border-radius: 5px;
  color:grey;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  width: 18em;
  height: 3em;
}
`
export const ButtonSearch = styled.input` 
max-width:4vh;
background-color: #bcda5b;
border-radius:2px;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  margin-top:5px;
  max-width:6vh;
  max-height:4vh;
}
` 
export const Busca = styled.div`
display:flex;
`
export const Footer = styled.div` 
color:#2f3651;
display:grid;
height:12vh;
grid-template-columns: 10fr 3fr;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  grid-template-columns:1fr;
  height:50vh;
}
` 
export const Links =styled.div`
justify-self:right;
margin-left:25px;
display:flex;
color:#c1c6d3;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  height:50vh;
  margin-left:0px;
}
` 
export const Copyrights = styled.div` 
justify-self:center;
`
export const LinksFooter = styled.div` 
margin-right:15px;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  margin-right:0px;
}
`

