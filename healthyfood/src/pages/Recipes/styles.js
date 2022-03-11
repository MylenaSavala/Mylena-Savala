import styled from "styled-components";

export const Container = styled.div`
background-color:#fafafc;
`
export const ContainerCardFood = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
justify-items:center;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
grid-template-columns:1fr;
}
`
export const Paragraph =styled.p`
margin:0 0 0 0;
color: #c1c6d3;
font-size:3vh;
text-align:center;
`
export  const CardFood = styled.div`
  background-color:white;
  height: 28vh;
  width: 30vw;
  border-radius: 15px;
  display:flex;
  align-items: center;
  transition: all 0.6s ease;
  overflow: hidden;
  margin:15px 1px 9px 1px;
  @media screen and (min-device-width: 320px) and (max-device-width: 884px) {
    width: 85vw;
    height:43vw;
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
`
export const Img = styled.img`
height:27vh;
flex-grow: 2;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  height:20vh;
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
  width:10vh;
  }
`
export const H2 = styled.h2`
flex-grow:1;
margin-left:2vw;
align-self: center;
`





