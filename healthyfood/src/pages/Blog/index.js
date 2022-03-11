import React from 'react';
import { Container,
    CardBlog,
    Img,
    Paragraph,
    ContainerCardBlog,
    Photo,
    Profile
 } from './styles';

export function Blog() {

    
    return (
    <Container>
        <h1>Read Our Blog</h1>
        <Paragraph>Far far away, behind the word mountains, far from the countries
        </Paragraph>
        <Paragraph>
        Vokalia and Consonantia, there live the blind texts.
        </Paragraph>

        <ContainerCardBlog>
        <CardBlog>
        <Img src='/img/blog_image_1.svg' alt ="Comida 01" />      
           <h2>Quick-start guide to nuts and seed</h2>
           <Profile>
            <Photo></Photo>
            <h6>Kevin Ibrahim</h6>   
            </Profile>       
        </CardBlog>   
        <CardBlog>
        <Img src='/img/bloco_image_2.svg' alt ="Comida 02" />      
           <h2>Nutrition: Tips for
            Improving Your Health
            </h2>
            <Profile>
            <Photo></Photo>
            <h6>Mike Jackson</h6> 
            </Profile>          
        </CardBlog>   
        <CardBlog>
        <Img src='/img/bloco_image_3.svg' alt ="Comida 03" />      
           <h2>The top 10 benefits
            of eating healthy
            </h2>
            <Profile>
            <Photo></Photo>
            <h6>Bryan McGregor</h6>
            </Profile>           
        </CardBlog>
        <CardBlog>
        <Img src='/img/bloco_image_4.svg' alt ="Comida 04" />
        <h2>Quick-start guide to nuts and seed</h2>
        <Profile>
            <Photo></Photo>      
            <h6>Mylena Savala</h6>     
            </Profile>      
        </CardBlog>    
     </ContainerCardBlog>
    </Container>

    );
  }
  
  export default Blog;