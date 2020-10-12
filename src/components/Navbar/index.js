import React from 'react'
import { Section, Container, Btn, SignInBtn } from '../../Pages/styles/styles'

export const Navbar = () => {
  return (
    <Section>
      <Container>
        <Btn to='/lasten' type='button'>Past Launches</Btn>
        <Btn to='/nexten' type='button' buynow='true'>
          Next Launches
        </Btn>
        <SignInBtn to='/date'>
          Search by Date
        </SignInBtn>
      </Container>
    </Section>
  )
}
