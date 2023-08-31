import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
    z-index: 1000;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 200px;
  height: 200px;
  background: #ddd;
  transform: translate(-50%, -50%);
`

export const Close = styled.button`
`
