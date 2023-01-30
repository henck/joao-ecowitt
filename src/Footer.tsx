import * as React from 'react';
import styled from '@independent-software/typeui/styles/Theme';

interface IProps {
  className?: string;
}

const FooterBase = (props: IProps) => 
  <div className={props.className}>
    Data from João's rooftop
  </div>

const Footer = styled(FooterBase)`
  height: 50px;
  display: flex;
  box-sizing: border-box;
  background: #333;
  color: #fff;
  padding: 14px 16px 0 16px;
`

export { Footer } 