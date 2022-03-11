import React from 'react';
import Recipes from '../pages/Recipes'
import Services from '../pages/Services'
import Membership from '../pages/Membership'
import Blog from '../pages/Blog'
import Lupa from '../imagens/lupa.png';
import { useHistory } from 'react-router-dom';

import {
    MainContainer,
    Footer,
    TopContainer,
    HeaderMenu,
    Search,  
    ButtonSearch,
    Busca,
    CampoInput,
    ButtonRegister,
    Title,
    Links,
    Copyrights,
    LinksFooter,
    Container
 } from '../styles';


function Home() {
    const history = useHistory();

    const onClickRegister =()=>{
        history.push("/Register");
    }
    return (
        <Container>
    <MainContainer >
        <TopContainer>
            <h1>Healthy Food </h1>
        <HeaderMenu>
            <Title >HEALTHY RECIPES</Title> 
            <Title>BLOG</Title> 
            <Title>JOIN</Title> 
         <ButtonRegister onClick={onClickRegister}>REGISTER</ButtonRegister>
        </HeaderMenu>
     </TopContainer>
        <Search>
          <h1>Ready for Trying a new recipe?</h1>
          <Busca>
          <CampoInput
          placeholder="Search healthy recipes"/>
          <ButtonSearch type='image' src={Lupa} alt ="Lupa" /> 
          </Busca>
          </Search>
        </MainContainer>
        <Recipes />
        <Services />
        <Blog/>
        <Membership/>
        <Footer>
            <Copyrights> Copyrights 2021 Stack. All Rights Reserved</Copyrights>
            <Links>
            <LinksFooter>Privacy Policy</LinksFooter>
            <LinksFooter>Terms and Conditions</LinksFooter>
            </Links>
        </Footer>
        </Container>
    );
  }
  
  export default Home;