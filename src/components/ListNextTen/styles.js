import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  justify-content: space-around;
  overflow: none;
  width: 100%;
  list-style: none;
`

export const Item = styled.li`
  padding: 0 8px;
`
export const Title = styled.h1`
 color: hsla(150, 14%, 97%, 1);
 text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
 font-size: 40px;
 padding: 10px 10px;
 margin-bottom: 60px;
`
