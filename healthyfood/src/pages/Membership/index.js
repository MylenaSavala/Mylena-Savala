import React from 'react';
import { Container,
    InputEmail,
    Button,
    Title,
    MainContainer
 } from './styles';


export function Membership() {

    return (
        <Container>
            <MainContainer>
        <Title>Join our membership to get special offer</Title>
            <InputEmail
            placeholder="Enter you email adress"/>
        <Button>Join</Button>
        </MainContainer>
    </Container>

    );
  }
  
  export default Membership;