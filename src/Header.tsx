import * as React from 'react';
import styled from '@independent-software/typeui/styles/Theme';

interface IProps {
  className?: string;
}

const HeaderBase = (props: IProps) => 
  <div className={props.className}>
    Ecowitt
  </div>

const Header = styled(HeaderBase)`
  z-index: 1;
  height: 60px;
  padding-top: 15px;
  padding-left: 16px;
  box-sizing: border-box;
  background: skyblue;
  border-bottom: solid 1px #333;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 1px 2px rgb(0,0,0,0.5);
`

export { Header } 
