import React from 'react'
import { Anchor, Image, Cardsli, Cardsh2, Cardsp, FlexDiv, Ulist } from '../LastTen/styles'

export const NextTen = ({ patch = DEFAULT_IMAGE, path, name, date_utc, details }) => (
  <>
    <FlexDiv>
      <Anchor href={path}>
        <Image src={patch} />
        <Ulist>
          <Cardsli><Cardsh2>Name: {name}</Cardsh2>
            <Cardsp> Date: {date_utc} </Cardsp>
            <Cardsp> Details: {details} </Cardsp>
          </Cardsli>
        </Ulist>
      </Anchor>
    </FlexDiv>
  </>
)
