import * as React from 'react';
import styled from '@independent-software/typeui/styles/Theme';
import { Header } from './Header';
import { Chart } from './Chart';
import { Footer } from './Footer';

interface IProps {
  className?: string;
}

const ScreenBase = (props: IProps) => 
  <div className={props.className}>
    <Header/>
    <Chart/>
    <Footer/>
  </div>

const Screen = styled(ScreenBase)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  
`

export { Screen } 
