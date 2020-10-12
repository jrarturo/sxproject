import React from 'react'
import Moment from 'react-moment'
import { Anchor, Image, Cardsli, Cardsh2, Cardsp, FlexDiv, Ulist } from './styles/stylesCards'

export const LastTen = ({ links, path, name, date_utc }) => (
  <>
    <FlexDiv href={path}>
      <Anchor>
        <Image src={links.patch.small} />
        <Ulist>
          <Cardsli><Cardsh2>{name}</Cardsh2>
            <Cardsp>
              <Moment format='LLLL' date={date_utc} />
            </Cardsp>
          </Cardsli>
        </Ulist>
      </Anchor>
    </FlexDiv>
  </>
)
