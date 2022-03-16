import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const MainContainer = styled.div `
background:url(img/Illustration.svg);
background-position:right top;
background-repeat: no-repeat;
background-size:contain;
text-align:center;
height:100%;
margin: ${px2vw(0)};
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
background-size:100vw 85vw;
background-position:left top;
margin:0px 0px 0px 0px;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
background-size:100vw 79vw;
margin:0px 0px 0px 0px;
}
`
export const Container = styled.div`

`
export const TopContainer = styled.div`
display:flex;
justify-content:space-around;
color:#bcda5b;
width: ${px2vw(320, 320)};
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  color:#006400	;
  font-size:12px;
  justify-content:space-evenly;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
  width: ${px2vw(10, 8)};
}
`
export const HeaderMenu = styled.div` 
display:flex;
justify-content:space-between;
margin-left:12vw;
color:snow;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
flex-direction:column;
justify-content:center;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
margin:0px 0px 0px 0px;
justify-content:center;
}
` 
export const Title =styled.a`
margin: 2em 1em 2em;
text-decoration:none;
color:white;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
margin: 0px 0px 0px 0px;
font-size: 12px;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
  margin: 2px 4px 0px 0px;
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
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  margin-top: 0px;
  width:13vh;
  height:3vh;
  font-size: 10px;
  align-items:center;
}
` 
export const Search = styled.div` 
display:flex;
flex-direction:column;
max-width:50vh;
font-size:2vw;
margin-left:25vh;
background-size:contain;
margin-top:7vh;
width: ${px2vw(320, 320)};
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
margin-left:45px;
align-items:center;
background-size:contain;
margin-top:42vh;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
width:10vh;
background-color:green;
}
` 
export const CampoInput=styled.input`
  width: 28em;
  height: 3em;
  margin-right:1em;
  border-radius: 5px;
  color:grey;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  width: 15em;
  height: 2em;
}
`
export const ButtonSearch = styled.input` 
max-width:4vh;
background-color: #bcda5b;
border-radius:2px;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  margin-top:5px;
  max-width:8vh;
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
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  grid-template-columns:1fr;
  height:50vh;
}
` 
export const Links =styled.div`
justify-self:right;
margin-left:25px;
display:flex;
color:#c1c6d3;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height:50vh;
  margin-left:0px;
}
` 
export const Copyrights = styled.div` 
justify-self:center;
`
export const LinksFooter = styled.div` 
margin-right:15px;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  margin-right:0px;
}
`

