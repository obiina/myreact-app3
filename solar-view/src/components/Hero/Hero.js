import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles'
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyle'

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src = "./assets/hero.jpg"></HeroVideo>
      <Container>
        <MainHeading>Save Up to 80% on Electricity</MainHeading>
        <HeroText>
            We provide the best solar panel installations at your convenience
        </HeroText>
        <ButtonWrapper>
            <Link to= 'signup'>
            <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  )
}

export default Hero
