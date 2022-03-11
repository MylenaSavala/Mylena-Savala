import React from 'react';
import { Container,
    Paragraph,
    H1,
    Button,
    ContainerServices
 } from './styles';


export function Services() {

    return (
        <Container>
        <ContainerServices>
        <H1>The best services ready </H1>
        <H1>To serve you</H1>
        <Paragraph>
            <p>Far far away, behind the word mountains, far from
            the countries Vokalia and Consonantia, there live the
            blind texts.
            </p>
            <p>
            Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean.
            </p>
            <p>
            A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
            </p>
            </Paragraph>
        <Button>Know More</Button>
        </ContainerServices>
    </Container>

    );
  }
  
  export default Services;