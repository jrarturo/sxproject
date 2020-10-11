import React from 'react'
import { Title, Anchor, Image, Cardsli, Cardsh2, Cardsp, FlexDiv, Ulist } from './styles/styles'
import Moment from 'react-moment'

export const Latest = ({ links, name, path, date_utc, details }) => (
  <>
    <Title>Latest Launch</Title>
    <FlexDiv>
      <Anchor href={path}>
        <Image src={links} />
        <Ulist>
          <Cardsli><Cardsh2>{name}</Cardsh2>
            <Cardsp>
              <Moment format='LLLL' date={date_utc} />
            </Cardsp>
            <Cardsp>
              <Moment fromNow date={date_utc} />
            </Cardsp>
            <Cardsp> {details} </Cardsp>
          </Cardsli>
        </Ulist>
      </Anchor>
    </FlexDiv>
  </>
)
