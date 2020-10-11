import React from 'react'
import { Background, NotFoundText } from './styles/styles'

export const NotFound = () => {
  return (
    <Background>
      <div>
        <div>
          <NotFoundText>
            <h1>404</h1>
            <h1>Page not found</h1>
            <h1>This may not mean anything.</h1>
          </NotFoundText>
        </div>
      </div>
    </Background>
  )
}
