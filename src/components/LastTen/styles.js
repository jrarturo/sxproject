import styled from 'styled-components'

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  list-style: none;

`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 100px;
  width: 100px;
`
export const Cardsli = styled.li`
  border: 2px solid #757575;
  border-radius:5px;
  background-color: #757575;
  color: #FCFCFC;
  flex: 1 1 200px;
  list-style: none;
`
export const Cardsh2 = styled.h2`
  background-color: #26547C;
  margin: 0;
  padding: 10px;
`
export const Cardsp = styled.p`
  padding: 10px;
`

export const FlexLI = styled.li`
  flex: 1 1 200px;
  margin: 10px;
`
export const Ulist = styled.ul`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
`
export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  list-style: none;
  margin: 0;
  padding: 0;
`
