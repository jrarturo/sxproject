import React from 'react'
import { FlexDiv, Title, Background, NotFoundText } from './styles/stylesCards'

export const NotFound = () => {
  return (
    <Background>
      <div>
        <NotFoundText>
          <Title> 404 </Title>
          <h1>Page not found</h1>
          <h1>This may not mean anything.</h1>
        </NotFoundText>
      </div>
    </Background>
  )
}
