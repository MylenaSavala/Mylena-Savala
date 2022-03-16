import styled from "styled-components";

export const Container = styled.div`
background-color:#fafafc;
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
width:42vh;
margin:10px;
}
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
width:45vh;
margin:5px;
}
`
export const ContainerCardFood = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
justify-items:center;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
grid-template-columns:1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
}
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
grid-template-columns:1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
margin-left:2px;
}
`
export const Paragraph =styled.p`
margin:0 0 0 0;
color: #c1c6d3;
font-size:3vh;
text-align:center;
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
   font-size:2vh; 
}
@media screen and (min-device-width:320px) and (max-device-width: 481px) {
   font-size:2vh; 
}
`
export  const CardFood = styled.div`
  background-color:white;
  max-height:28vh;
  width: 30vw;
  border-radius: 15px;
  display:flex;
  align-items: center;
  transition: all 0.6s ease;
  overflow: hidden;
  margin:15px 1px 9px 1px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 44vh;
    height:26vh;
    margin:9px 0px 5px 0px;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
    width: 40vh;
    height:20vh;
    margin:9px 0px 0px 0px;
}
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`
export const VerticalText = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;    
`
export const Title=styled.h1`
text-align:center;
@media screen and (min-device-width: 481px) and (max-device-width: 768px) {
font-size:2px;
}
`
export const Img = styled.img`
height:157px;
flex-grow: 2;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  max-height:15vh;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
    max-height:14vh;
  }
`
export const Button = styled.button`
flex-grow:1;
width:14vh;
height:5vh;
margin-left:2vw;
background-color:#bcda5b;
color:white;
border:none;
border-radius:4px;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height:3.5vh;
  width:18vh;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
  height:3.5vh;
  width:12vh;
  }
`
export const H2 = styled.h2`
flex-grow:1;
margin-left:2vw;
align-self: center;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
font-size:4vh;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {

  }
`





