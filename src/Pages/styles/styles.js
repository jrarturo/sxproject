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
  font-size: 5rem;
`
export const Cardsp = styled.p`
  padding: 10px;
  font-size: 2rem;
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

export const Background = styled.div`
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/257418/andy-holmes-698828-unsplash.jpg');
    opacity: 0.5;
    border-radius: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    color: rgba(255,255,255,.87);
`
export const NotFoundText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const Section = styled.section`
 height: 10vh;
 display: flex;
 justify-content: center;
 
 
 font-size: 5rem;

 @media screen and (max-width: 45em) {
  font-size: 3rem;
 }
`
export const Title = styled.h1`
 color: hsla(150, 14%, 97%, 1);
 text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
 font-size: 40px;
`

export const Container = styled.div`
 display: flex;
 justify-content: initial;
 align-items: center;
 position: absolute;
 min-height: 10rem;

 @media screen and (max-width: 45em) {
  flex-direction: column;
 }
`

export const Btn = styled.button`
 background-color: ${({ buynow }) =>
  buynow ? 'hsla(40, 72%, 50%, 1)' : 'hsla(347, 49%, 46%, 1)'};
 border: 1px solid
  ${({ buynow }) => (buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(0, 0%, 0%, 0.4)')};
 white-space: nowrap;
 color: hsla(150, 14%, 97%, 1);
 cursor: pointer;
 outline: none;
 font-size: 3rem;
 text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
 letter-spacing: 0.1rem;
 border-radius: 0.5rem;
 user-select: none;
 padding: 1.5rem 2rem;
 margin: 1rem;
 transition: all 0.1s ease-in;

 ::-moz-focus-inner {
  border: 0;
 }

 &:hover {
  background-color: ${({ buynow }) =>
   buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(347, 49%, 51%, 1)'};
  ${({ buynow }) => buynow && `transform: translateY(-3px)`}
 }

 &:active {
  background-color: ${({ buynow }) =>
   buynow ? 'hsla(40, 72%, 35%, 1)' : 'hsla(347, 49%, 26%, 1)'};
 }
`

export const SignInBtn = styled(Btn)`
 text-decoration: none;
 background-color: hsla(189, 85%, 28%, 1);
 box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
  0 1px 1px rgba(0, 0, 0, 0.05);
 border-bottom-width: 0.5rem;

 &:hover {
  background-color: hsla(189, 85%, 32%, 1);
 }

 &:active {
  border-bottom-width: 0.1rem;
  border-top-width: 0.5rem;
 }
`
