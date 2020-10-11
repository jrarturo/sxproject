import React from 'react'
import { Anchor, Image, Cardsli, Cardsh2, Cardsp, FlexDiv, Ulist } from './styles/styles'

export const LastTen = ({ links, path, name, date_utc }) => (
  <>
    <FlexDiv>
      <Anchor href={path}>
        <Image src={links.patch.small} />
        <Ulist>
          <Cardsli><Cardsh2>{name}</Cardsh2>
            <Cardsp> Date: {date_utc}
            </Cardsp>
          </Cardsli>
        </Ulist>
      </Anchor>
    </FlexDiv>
  </>
)
