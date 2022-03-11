import styled from "styled-components";

export const Container = styled.div`
background-color:#fafafc;
text-align:center;
height:100%;
`
export const ContainerCardBlog = styled.div`
display:flex;
margin-left:4vw;
height:31vw;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  flex-direction:column;
  height:100%;
}
`
export const Paragraph =styled.p`
color: #c1c6d3;
font-size:3vh;
margin:0 0 0 0;
`
export  const CardBlog = styled.div`
text-align:center;
margin: 25px 25px 5px 5px;
background-color:white;
height:27vw;
width: 21vw;
border-radius: 15px;
align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 884px) {
    width: 85vw;
    height:60vw;
  }
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`
export const Img = styled.img`
  width: 21vw;
  @media screen and (min-device-width: 320px) and (max-device-width: 884px) {
    max-height:50vh;
  }
`
export const Profile =styled.div`
display:flex;
align-items:center;
margin-left:1.2em;
color:#c1c6d3;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
    max-height:20vh;
    max-width: 53vw;
  }
`

export const Photo =styled.img`
background:url('https://art.ngfiles.com/images/484000/484070_thejklay_batman-icon.png?f1485794674');
height:6vh;
width:5vh;
border:none;
background-size:2.2vw 2.5vw;
background-repeat: no-repeat;
padding-right:8px;
@media screen and (min-device-width: 320px) and (max-device-width: 884px) {
  background-size:10vw 8vw;
  }
`
export const H2 = styled.h2`
flex-grow:1;
align-self: center;


`







