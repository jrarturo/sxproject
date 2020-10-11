import React from 'react'
import { Section, Container, Btn, SignInBtn } from '../../Pages/styles/styles'

export const Navbar = () => {
  return (
    <Section>
      <Container>
        <Btn type='button'>Past Launches</Btn>
        <Btn type='button' buynow>
          Next Launches
        </Btn>
        <SignInBtn as='a' href='#0'>
          Search by Date
        </SignInBtn>
      </Container>
    </Section>
  )
}
