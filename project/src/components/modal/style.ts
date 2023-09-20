import styled from 'styled-components';

export const Modal = styled.div`
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0; 
  top: 0; 
  right: 0; 
  bottom: 0;
  overflow: auto;
  z-index: 99;
  `

export const Wrapper = styled.div`
  z-index: 100;
  display: block;
  min-width: 250px;
  min-height: 250px;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #ddd;
  transform: translate(-50%, -50%);
  font-family: ${props => props.theme.fonts.title};
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: ${props => props.theme.colors.blackText};
  overflow: auto;
  border-radius: 20px;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .7;
  z-index: 99;
 `
export const Close = styled.button`
  position: absolute;
  top: 4px;
  right: 6px;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Helvetica Neue', 'Helvetica' ,' Arial', sans-serif;
  font-style: normal;
  font-weight: 300;
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.greyDark};
  }
`
