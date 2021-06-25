import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogo from '../images/facebook.png'
import InstagramLogo from '../images/instagram.png'
import YoutubeLogo from '../images/youtube.png'
import TwitterLogo from '../images/twitter.png'
import LogoFooter from '../images/logo.jpeg';

const FooterContainer = styled.div` 
	background-color: #f6f2fc;
	display: grid;
	grid-template-columns: 100px 150px 1fr 1fr  100px;
	gap: 30px;
	padding: 25px;
`

const Titles = styled.h3` 
	color: #4f4f50;
`
const Paragraph = styled.p` 
	color: #4f4f50;

`

const LogoContainer = styled.div` 
	grid-column-start: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Logoimg = styled.img` 
	width: 133px;
`

const Socialogo = styled.div` 
	grid-column-start: 4;
	display: flex;
	flex-direction: column;
	justify-content: center;
` 

const SocialLogoContainer = styled.div`
	a{
		padding: 5px;
		
	}
`

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
		  <LogoContainer>
		  	<Logoimg src={LogoFooter} alt="" />
			<Paragraph>Copyright © 2021 Labeninjas. All rights reserved.</Paragraph>
		  </LogoContainer>
		  <div>
			  <Titles>Sobre</Titles>
			  <Paragraph>Quem somos</Paragraph>
			  <Paragraph>Projetos</Paragraph>
			  <Paragraph>Freelancers</Paragraph>
			  <Paragraph>Trabalhe conosco</Paragraph>
		  </div>
		  <Socialogo>
			  <Titles>Redes Sociais</Titles>
			  <SocialLogoContainer>
				<a target="blank" git href="https://pt-br.facebook.com/">
					<img src={FacebookLogo} alt="" />
				</a>
				<a target="blank" href="https://twitter.com/login?lang=pt">
					<img src={TwitterLogo} alt="" />
				</a>
				<a target="blank" href="https://www.youtube.com/">
					<img src={YoutubeLogo} alt="" />
				</a>
				<a target="blank" href="https://www.instagram.com/">
					<img src={InstagramLogo} alt="" />
				</a>
			  </SocialLogoContainer>
			
		  </Socialogo>
		  
      </FooterContainer>
    )
  }
}
