import React from 'react';
import { Container,
    CardFood,
    Img,
    Paragraph,
    H2,
    Button,
    VerticalText,
    ContainerCardFood,
    Title,
 } from './styles';

export function Recipes() {

    return (
    <Container>
        <Title>Our Best Recipes</Title>
        <Paragraph>Far far away, behind the word mountains, far from the countries
        <Paragraph>
       Vokalia and Consonantia, there live the blind texts.
       </Paragraph>
        </Paragraph>
        <ContainerCardFood>
        <CardFood>
        <Img src='/img/comida_1.svg' alt ="Prato Broccoli Salad with Bacon" />      
            <VerticalText>
           <H2>Broccoli Salad with Bacon</H2>
            <Button>See Recipe</Button>
            </VerticalText>
        </CardFood>   
        <CardFood>
        <Img src='/img/comida_2.svg' alt ="Prato Classic Beef Burges" />      
            <VerticalText>
           <H2>Classic Beef Burges</H2>
            <Button>See Recipe</Button>
            </VerticalText>
        </CardFood> 
         <CardFood>
        <Img src='/img/comida_3.svg' alt ="Prato Classic Potato Salad" />      
            <VerticalText>
           <H2>Classic Potato Salad</H2>
            <Button>See Recipe</Button>
            </VerticalText>
        </CardFood> 
     <CardFood>
     <Img src='/img/comida_4.svg' alt ="Prato Cherry Cobbler on the Grill" />      
         <VerticalText>
        <H2>Cherry Cobbler on the Grill</H2>
         <Button>See Recipe</Button>
         </VerticalText>
     </CardFood> 
     </ContainerCardFood>
    </Container>

    );
  }
  
  export default Recipes;